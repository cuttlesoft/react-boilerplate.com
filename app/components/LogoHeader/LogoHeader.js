import React from 'react'

// Components
import { Box } from '../Box'
import { Image } from '../Image'

// Images
import logo from '../../assets/images/logo-name.png'

/**
 * LogoHeader
 */
const LogoHeader = () => (
  <Box align="center" height="200px" fill="horizontal" background="brand">
    <Image style={{ width: 300 }} fit="contain" src={logo} />
  </Box>
)

LogoHeader.propTypes = {}

export default LogoHeader
