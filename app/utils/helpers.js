export const createWithDoc = ({ envName = '', docFunction = () => {}, component = '' }) => {
  let createComponentWithDoc
  if (envName !== 'production') {
    createComponentWithDoc = docFunction(component) // eslint-disable-line global-require
  }
  return createComponentWithDoc || component
}
