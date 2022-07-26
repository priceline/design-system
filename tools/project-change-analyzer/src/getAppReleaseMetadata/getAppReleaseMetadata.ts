import { RushConfiguration } from '@microsoft/rush-lib'
import { FileSystem } from '@rushstack/node-core-library'
import yargs from 'yargs/yargs'
import { join } from 'path'
import { setActionOutput } from '../setActionOutput'

const config = RushConfiguration.loadFromDefaultLocation()

const argv = yargs(process.argv.slice(2))
  .options({
    project: { type: 'string', required: true },
  })
  .parseSync()

export const getAppReleaseMetadata = (appName: string) => {
  const project = config.getProjectByName(appName)
  const metadataFilePath = join(project.projectFolder, 'config', 'app-artifact.json')

  if (FileSystem.exists(metadataFilePath)) {
    const artifactMetadata = FileSystem.readFile(metadataFilePath)
    console.log(artifactMetadata)
    setActionOutput('appArtifactMetadata', JSON.parse(artifactMetadata))
  }
}

getAppReleaseMetadata(argv.project)
