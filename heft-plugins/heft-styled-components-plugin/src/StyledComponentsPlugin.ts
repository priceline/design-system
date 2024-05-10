import type {
  HeftConfiguration,
  IHeftTaskPlugin,
  IHeftTaskRunHookOptions,
  IHeftTaskSession,
} from '@rushstack/heft'
import { exec } from 'node:child_process'
import path from 'node:path'
import process from 'node:process'
import { promisify } from 'node:util'

const execPromise: (
  command: string,
  options?: Record<string, string>
) => Promise<{ stdout: string; stderr: string }> = promisify(exec)

const PLUGIN_NAME: 'styled-components-plugin' = 'styled-components-plugin'
const ignoreGlobs: string = [`**/*.stories.*`].join(',')

export default class StyledComponentsPlugin implements IHeftTaskPlugin {
  public apply(taskSession: IHeftTaskSession, heftConfiguration: HeftConfiguration): void {
    taskSession.hooks.run.tapPromise(PLUGIN_NAME, async (runOptions: IHeftTaskRunHookOptions) => {
      const { logger } = taskSession

      const cwd: string = process.cwd()
      const PLUGIN_PACKAGE_FOLDER: string = path.resolve(__dirname, '..')
      const babel: string = path.resolve(PLUGIN_PACKAGE_FOLDER, 'node_modules', '.bin', 'babel')

      try {
        await Promise.all(
          [
            {
              name: 'esm',
              outDir: ['dist', 'esm'],
              srcDir: ['lib'],
              babelConfigFileName: 'babel.config.json',
            },
            {
              name: 'commonjs',
              outDir: ['dist', 'cjs'],
              srcDir: ['lib'],
              babelConfigFileName: 'babel.config.cjs.json',
            },
          ].map(async ({ name, outDir, srcDir, babelConfigFileName }) => {
            const inPath: string = path.resolve(cwd, ...srcDir)
            const outPath: string = path.resolve(cwd, ...outDir)

            const { stdout, stderr } = await execPromise(
              `${babel} --config-file ${path.resolve(
                PLUGIN_PACKAGE_FOLDER,
                'config',
                babelConfigFileName
              )} ${inPath} --out-dir ${outPath} --ignore ${ignoreGlobs}`
            )

            if (stderr.length) {
              logger.emitError(new Error(`Failed to transpile ${name}. Error: ${stderr}`))
            }

            logger.terminal.writeLine(`${name}:  ${stdout.replace('\n', '')}`)

            return stdout
          })
        )

        logger.terminal.writeLine(`Done.`)
      } catch (err) {
        logger.emitError(
          new Error(`Failed to transpile output with Babel + babel-plugin-styled-components. Error: ${err}`)
        )
      }
    })
  }
}
