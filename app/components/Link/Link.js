import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../../utils/colors'

/**
 * Link
 */
export const StyledLink = styled(Link).attrs(props => ({ ...props }))`
  color: ${colors.brand};
  font-weight: bold;
  text-decoration: none;

  &:focus,
  &:hover {
    text-decoration: underline;
  }

  &:visited,
  &:link,
  &:active {
    color: ${colors.brand};
  }
`

export default StyledLink
