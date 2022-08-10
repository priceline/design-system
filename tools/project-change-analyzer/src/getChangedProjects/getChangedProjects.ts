import { RushConfiguration, ProjectChangeAnalyzer, RushConfigurationProject } from '@microsoft/rush-lib'
import { Terminal, ConsoleTerminalProvider } from '@rushstack/node-core-library'
import { getRepoChanges } from '@rushstack/package-deps-hash'
import yargs from 'yargs/yargs'
import { join } from 'path'

const argv = yargs(process.argv.slice(2))
  .options({
    targetBranchName: { type: 'string', default: 'refs/remotes/origin/main' },
    isDefaultBranch: { type: 'boolean', default: false },
  })
  .parseSync()

import { setActionOutput } from '../setActionOutput'

const rushConfiguration: RushConfiguration = RushConfiguration.loadFromDefaultLocation({
  startingFolder: process.cwd(),
})

function getPackagesWithDirectChanges(targetBranchName): string[] {
  // get files that have changed
  const changedApps = Array.from(getRepoChanges(__dirname, targetBranchName).keys())
    .filter((file) => file.startsWith('packages'))
    // parse project folders
    .reduce((acc, cur) => {
      acc.add(cur.match(/^([\w-]+\/[\w-]+)\//)[1])
      return acc
    }, new Set())

  const projects = Array.from(changedApps).map((name) =>
    rushConfiguration.tryGetProjectForPath(join(rushConfiguration.rushJsonFolder, name as string))
  )

  return Array.from(projects.map((project) => project.packageName))
}

/** @public */
export async function runAsync(targetBranchName = 'refs/remotes/origin/main'): Promise<void> {
  const terminal: Terminal = new Terminal(new ConsoleTerminalProvider())

  const changedProjects = getPackagesWithDirectChanges(targetBranchName)

  setActionOutput('changedPackages', { projects: changedProjects })

  terminal.writeLine('Projects needing validation due to changes: ')
  const namesOfProjectsNeedingValidation: string[] = Array.from(changedProjects, (project) => project).sort()
  for (const nameOfProjectsNeedingValidation of namesOfProjectsNeedingValidation) {
    terminal.writeLine(` - ${nameOfProjectsNeedingValidation}`)
  }
}

process.exitCode = 1
runAsync(argv.targetBranchName).then(() => {
  process.exitCode = 0
}, console.error)
