import { addDecorator, addParameters, configure } from '@storybook/react'
import { addReadme } from 'storybook-readme'

addParameters({
  // `addDecorator(addReadme)` fails if options is not defined
  options: {},
  readme: {
    codeTheme: 'github',
  },
})

addDecorator(addReadme)

// Automatically import all files ending in *.stories.js
const req = require.context('../app/components', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
