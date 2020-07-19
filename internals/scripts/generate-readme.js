/* eslint-disable no-console */

import del from 'del'
import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'

const timeout = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const code = '```'
const warning = '<!-- ! This is a generated file. To make changes, edit <Component>.doc.js ! -->\n'

const replaceHoc = content => content.replace(/(With.*\()(.*)(\))/g, '$2')

const toMarkdown = theme => {
  const themeProps = Object.keys(theme).map(
    themeEntry => `
**${themeEntry}**

${theme[themeEntry].description} Expects \`${theme[themeEntry].type}\`.

Defaults to

${code}
${theme[themeEntry].defaultValue}
${code}
`,
  )
  return `## Theme
  ${themeProps.join('')}`
}

const components = folder =>
  fs
    .readdirSync(folder)
    .filter(
      file =>
        fs.statSync(path.join(folder, file)).isDirectory() &&
        fs.existsSync(path.join(folder, file, `${file}.doc.js`)),
    )

const FOLDER = path.resolve('app/components')

const generateDocs = async () => {
  components(FOLDER).forEach(component => {
    try {
      /* eslint-disable */
      const { doc, themeDoc } = require(path.join(FOLDER, component, `${component}.doc.js`))
      const componentModule = require(path.join(FOLDER, component, 'index.js'))
      /* eslint-enable */

      // we use the second array element since the first is '__esModule'.
      const Component =
        componentModule[Object.keys(componentModule).filter(k => k === component)[0]]

      const readmeDestination = path.join(FOLDER, component, 'README.md')

      const DocumentedComponent = doc(Component)

      const readmeContent = themeDoc
        ? `${warning}${replaceHoc(DocumentedComponent.toMarkdown())}\n${toMarkdown(themeDoc)}`
        : `${warning}${replaceHoc(DocumentedComponent.toMarkdown())}`
      del(readmeDestination).then(() => fs.writeFileSync(readmeDestination, readmeContent))
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`Could not generate README for ${component}: ${error}`)
      process.exit(1)
    }
  })

  /**
   * HACK - Give a little time for file writes to finish
   *
   * @todo Replace file writes with awaitables
   */
  await timeout(3000)

  exec('git ls-files --others --exclude-standard --modified | grep README.md', (error, stdout) => {
    if (stdout === '') {
      console.log('No README changes - proceed.')
    } else {
      console.log('README changes detected - please add them and try again.')
      console.log('Possible changes include:', stdout)
      console.log(
        "If you're certain that you don't want to commit these changes, use the --no-verify flag.\n\n",
      )
      process.exit(1)
    }
  })
}

generateDocs()
