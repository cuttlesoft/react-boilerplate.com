import _ from 'lodash'
import { formatPhoneNumber } from '../../utils/formatters'

/**
 * Convert keys from lower_snake_case to camelCase
 *
 * @param {*} data Data to be transformed
 * @param {bool} formatData Whether to apply additional data formatting or not
 */
const convertIncomingData = (data, formatData = false) => {
  const formattedData = _.isArray(data) ? [] : {}

  _.forEach(data, (value, key) => {
    let formattedValue = value

    // If the value is also an object or array, recursively update keys
    if (_.isPlainObject(formattedValue) || _.isArray(formattedValue)) {
      formattedValue = convertIncomingData(formattedValue)
    }

    if (formatData && key === 'phone') {
      formattedData[_.camelCase(key)] = formatPhoneNumber(formattedValue)
    } else {
      formattedData[_.camelCase(key)] = formattedValue
    }
  })
  return formattedData
}

export default convertIncomingData
