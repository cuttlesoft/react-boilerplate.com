import styled from 'styled-components'

export const AtPrefix = styled.span`
  color: black;
  margin-left: 0.4em;
`

export const Form = styled.form`
  margin-bottom: 1em;
`

export const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px dotted #999;
  background-color: transparent;
`

export const Section = styled.section`
  margin: 3em auto;

  &:first-child {
    margin-top: 0;
  }
`
export const CenteredSection = styled(Section)`
  text-align: center;
`
