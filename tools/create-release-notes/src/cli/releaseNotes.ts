import { argv } from 'yargs'
import {
  createReleaseNotes,
  formatNotesMarkdown,
  formatNotesJira,
} from '../actions/createReleaseNotes'

const { packageName } = argv

if (packageName) {
  const notes = createReleaseNotes(packageName)
  console.log(formatNotesMarkdown(notes))
  console.log(formatNotesJira(notes))
}
