import React from 'react'
import { storiesOf } from '@storybook/react'
import { grommet } from 'grommet' /** @todo: replace with custom wrappers */
import { deepMerge } from 'grommet/utils'

import { Box } from '../../Box'
import { Container } from '../../Container'
import { Button } from '..'
import README from '../README.md'

const customButtonColor = deepMerge(grommet, {
  button: {
    color: {
      light: 'white',
      dark: 'white',
    },
  },
})

const Colored = props => (
  <Container theme={customButtonColor}>
    <Box align="center" pad="large" gap="small">
      <Button primary title="Submit" onClick={() => {}} />
      <Button primary color="dark-1" title="custom theme text colored" onClick={() => {}} />
      <Button primary color="dark-1" title="dark-1" onClick={() => {}} {...props} />
      <Button primary color="#111111" title="#111111" onClick={() => {}} {...props} />
      <Button primary color="#777" title="#777" onClick={() => {}} {...props} />
      <Button plain color="red" title="plain red" onClick={() => {}} {...props} />
      <Button plain title="plain inherit" onClick={() => {}} {...props} />
    </Box>
  </Container>
)

storiesOf('Button', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Colored', () => <Colored />)
