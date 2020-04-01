import { Link } from 'react-router-dom'
import styled from 'styled-components'

import colors from '../../utils/colors'

/**
 * Link
 */
export const StyledLink = styled(Link).attrs(props => ({ ...props }))`
  color: ${colors.primary};

  &:focus,
  &:hover {
    font-weight: bold;
  }

  &:visited,
  &:link,
  &:active {
    color: ${colors.primary};
  }
`

export default StyledLink
