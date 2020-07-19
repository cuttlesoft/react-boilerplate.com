import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { Box } from '../../Box'
import { Checkbox } from '..'
import { StoryContainer } from '../../StoryContainer'

// Misc
import README from '../README.md'

storiesOf('Checkbox', module)
  .addParameters({
    readme: {
      sidebar: README,
    },
  })
  .add('Multi', () => <MultipleCheckboxes />)

const MultipleCheckboxes = props => {
  const [checkedItems, setCheckedItems] = useState([])

  const handleChange = (event, item) =>
    event.target.checked
      ? setCheckedItems([...checkedItems, item])
      : setCheckedItems(checkedItems.filter(checkedItem => checkedItem.name !== item.name))

  const checked = item => !!checkedItems.find(checkedItem => checkedItem.name === item.name)

  const items = [
    {
      name: 'Apples',
      key: 'checkBox1',
      label: 'Apples',
    },
    {
      name: 'Bananas',
      key: 'checkBox2',
      label: 'Bananas',
    },
  ]

  return (
    <StoryContainer>
      <Box alignContent="center" pad="large">
        {items.map(item => (
          <Checkbox
            {...props}
            key={item.name}
            label={item.label}
            checked={checked(item)}
            onChange={e => handleChange(e, item)}
          />
        ))}
      </Box>
    </StoryContainer>
  )
}
