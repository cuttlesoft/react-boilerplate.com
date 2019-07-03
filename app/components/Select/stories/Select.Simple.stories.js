/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { Box, Grommet, Select } from 'grommet'
import { grommet } from 'grommet/themes'

storiesOf('Select', module).add('Simple', () => <SimpleSelect />)

const SimpleSelect = ({ theme, ...rest }) => {
  const [value, setValue] = useState('')

  const options = ['one', 'two', 'three']
  return (
    <Grommet full theme={theme || grommet}>
      <Box fill align="center" justify="start" pad="large">
        <Select
          id="select"
          name="select"
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
          {...rest}
        />
      </Box>
    </Grommet>
  )
}
