import React from 'react'
import { storiesOf } from '@storybook/react'
import README from '../README.md'

import PasswordInput from '../PasswordInput'

storiesOf('PasswordInput', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Default', () => <PasswordInput />)
