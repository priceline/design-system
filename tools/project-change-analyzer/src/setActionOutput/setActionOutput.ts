import { setOutput, setFailed, info } from '@actions/core'

export const setActionOutput = (name: string, payload) => {
  try {
    setOutput(name, JSON.stringify(payload))

    info('Output set: ' + name + ' ' + JSON.stringify(payload))
  } catch (error) {
    setFailed(error.message)
  }
}
