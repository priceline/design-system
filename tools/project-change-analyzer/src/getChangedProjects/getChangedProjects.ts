import { RushConfiguration, ProjectChangeAnalyzer, RushConfigurationProject } from '@microsoft/rush-lib'
import { Terminal, ConsoleTerminalProvider } from '@rushstack/node-core-library'
import yargs from 'yargs/yargs'

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

async function getChangedProjects(terminal, targetBranchName) {
  const projectChangeAnalyzer: ProjectChangeAnalyzer = new ProjectChangeAnalyzer(rushConfiguration)

  const changedProjects: Set<RushConfigurationProject> = await projectChangeAnalyzer.getChangedProjectsAsync({
    targetBranchName,
    terminal,

    includeExternalDependencies: true,
    enableFiltering: false,
  })

  return changedProjects
}

function getChanged(projects): { packageName: string }[] {
  const acc: { packageName: string }[] = []

  projects.forEach(({ packageName }: RushConfigurationProject) => {
    if (packageName.startsWith('pcln-')) {
      acc.push({ packageName })
    }
  })

  return acc
}

/** @public */
export async function runAsync(targetBranchName = 'refs/remotes/origin/main'): Promise<void> {
  const terminal: Terminal = new Terminal(new ConsoleTerminalProvider())

  const changedProjects = await getChangedProjects(terminal, targetBranchName)

  setActionOutput('changedPackages', { projects: getChanged(changedProjects)?.map((p) => p.packageName) })

  terminal.writeLine('Projects needing validation due to changes: ')
  const namesOfProjectsNeedingValidation: string[] = Array.from(
    changedProjects,
    (project) => project.packageName
  ).sort()
  for (const nameOfProjectsNeedingValidation of namesOfProjectsNeedingValidation) {
    terminal.writeLine(` - ${nameOfProjectsNeedingValidation}`)
  }
}

process.exitCode = 1
runAsync(argv.targetBranchName).then(() => {
  process.exitCode = 0
}, console.error)
