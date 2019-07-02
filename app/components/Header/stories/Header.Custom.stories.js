import React from 'react'
import { storiesOf } from '@storybook/react'

import { Grommet } from 'grommet' /** @todo: replace with custom wrappers */
import { grommet } from 'grommet/themes'
import { deepMerge } from 'grommet/utils'
import Header from '../Header'

const customlevel = deepMerge(grommet, {
  heading: {
    level: {
      5: {
        small: {
          size: '12px',
          height: '16px',
        },
        medium: {
          size: '14px',
          height: '18px',
        },
        large: {
          size: '16px',
          height: '20px',
        },
      },
    },
    extend: props => `color: ${props.theme.global.colors.brand}`,
  },
})

storiesOf('Header', module).add('Custom', () => (
  <Grommet theme={customlevel}>
    <Header level={5}> Heading level 5 </Header>
  </Grommet>
))
