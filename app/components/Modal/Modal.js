import React from 'react'
import { Header, Layer } from 'grommet'
import { FormClose } from 'grommet-icons'
import PropTypes from 'prop-types'

// Components
import { Box } from '../Box'
import { Button } from '../Button'
import { Text } from '../Text'

/**
 *  A higher order component to render content inside a modal.
 */
export const Modal = ({ children, showModal, setShowModal, title }) =>
  showModal ? (
    <Layer
      onEsc={() => setShowModal(false)}
      onClickOutside={() => setShowModal(false)}
      margin="small"
      modal
      style={{ width: '80vw' }}
    >
      <Header pad="small" background="light-2">
        <Text color="brand" size="large" weight="bold">
          {title}
        </Text>

        <Button onClick={() => setShowModal(false)}>
          <FormClose size="medium" />
        </Button>
      </Header>

      <Box overflow="scroll" pad="large">
        {children}
      </Box>
    </Layer>
  ) : null

export default Modal

Modal.propTypes = {
  children: PropTypes.any,
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  title: PropTypes.string,
}
