/* eslint-disable react/prop-types */
import React from 'react'
import { Close } from 'grommet-icons'

import { Form } from 'components/Form'

import { Box, Button, Heading, Layer } from 'grommet'

/**
 * PopoutForm
 */
const PopoutForm = ({ form, showForm, setShowForm }) => {
  const onClose = () => setShowForm(false)

  return (
    <Box fill align="center" justify="center">
      {showForm && (
        <Layer position="right" full="vertical" modal onClickOutside={onClose} onEsc={onClose}>
          <Box
            as={Form}
            fill="vertical"
            onSubmit={({ value }) => {
              // eslint-disable-next-line no-console
              console.log('Submit', value)
            }}
            overflow="auto"
            pad="medium"
            validate="blur"
            width="large"
          >
            <Box flex={false} direction="row" justify="between">
              <Heading level={2} margin="none">
                Add
              </Heading>

              <Button icon={<Close />} onClick={onClose} />
            </Box>

            <Box flex="grow" overflow="auto" pad={{ vertical: 'medium' }}>
              {form}
            </Box>

            <Box flex={false} as="footer" align="start">
              <Button type="submit" label="Submit" onClick={onClose} primary />
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  )
}

PopoutForm.propTypes = {}

export default PopoutForm
