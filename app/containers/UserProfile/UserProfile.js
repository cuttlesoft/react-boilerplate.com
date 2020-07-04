import React, { useContext, useEffect, useReducer, useState } from 'react'
import { MaskedInput } from 'grommet'
import { isEqual } from 'lodash'
import { isEmail } from 'validator'

// Components
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Form, FormField } from 'components/Form'
import { FormContainer } from 'components/FormContainer'
import { Heading } from 'components/Heading'
import { Image } from 'components/Image'
import { Message } from 'components/Message'
import { TextInput } from 'components/TextInput'

// Stores
import { UserStoreContext } from '../../stores/UserStore'

// Utils and Services
import useFlashMessage from '../../hooks/FlashMessage'
import { getUser, updateUser } from '../../services/user.service'
import { updateState } from '../../utils/helpers'
import ImageEditor from './UserProfile.imageEditor'

/**
 *
 * User Profile
 *
 * Displays a summary of the user and the form used to edit profile infomration
 *
 * Ensures that the any updated information persists to the UserStore
 *
 * - When the form loads, it should display the user's current information after
 * retrieving the most up-to-date info from the API. If live info is unavailable,
 * falls back to the user store data.
 * - When the form data matches the current stored information, the save button
 * should be disabled (this includes when the form loads intially and when the
 * user edits then resets the form data to the previous state)
 * - When the API call for saving a user is in progress, the form fields and
 * button should be disabled and the form fields should retain the new values
 * - When an error occurs while saving the form (4XX or 5XX), an error message
 * should be displayed
 * - When the user saves the form successfully, a success message should be
 * displayed, and the save button should disable
 *
 * Required fields: first name, last name
 * Validated fields: first name, last name
 * Disabled fields: email
 *
 */
const UserProfile = () => {
  const { message: error, showMessage: showError } = useFlashMessage(null)
  const { message: success, showMessage: showSuccess } = useFlashMessage(null)

  // Context
  const { setCurrentUser, user } = useContext(UserStoreContext)

  // State
  const [updatedUser, setUpdatedUser] = useReducer(updateState, {})
  const [editProfileImage, setEditProfileImage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Retrieve the most up-to-date user object and set as default form state
  useEffect(() => {
    async function fetchData() {
      try {
        const currentUser = await getUser(user, setCurrentUser)
        setUpdatedUser(currentUser)
      } catch {
        setUpdatedUser(user)
      }
    }
    fetchData()
  }, [])

  /**
   * Handles changes to all form fields.
   * @param {object} e
   */
  const handleChange = e => {
    const { target, option } = e

    setUpdatedUser({
      ...updatedUser,
      [target.name]: option || target.value,
    })
  }

  const _isSaveDisabled = () => isEqual(user, updatedUser) || isLoading

  return (
    <FormContainer>
      <Form>
        <Box align="center" margin={{ bottom: 'medium' }}>
          {user.avatar && !editProfileImage ? (
            <>
              <Box height="small" width="small" round="xlarge" overflow="hidden">
                <Image fit="contain" src={updatedUser.avatar} />
              </Box>
              <Button onClick={() => setEditProfileImage(true)}>Edit Profile Image</Button>
            </>
          ) : (
            <ImageEditor
              showError={showError}
              setIsLoading={setIsLoading}
              setEditProfileImage={setEditProfileImage}
            />
          )}
        </Box>

        {/* Basic Information */}
        <Heading level="4">Basic Information</Heading>

        <FormField
          disabled={isLoading}
          label="First Name"
          name="firstName"
          onChange={handleChange}
          value={updatedUser.firstName}
          validate={[
            name => {
              if (name && name.length === 1) return 'Please enter more than one character'
              return undefined
            },
          ]}
          required
        >
          <TextInput disabled={isLoading} name="firstName" />
        </FormField>

        <FormField
          disabled={isLoading}
          label="Last Name"
          name="lastName"
          onChange={handleChange}
          value={updatedUser.lastName}
          validate={[
            name => {
              if (name && name.length === 1) return 'Please enter more than one character'
              return undefined
            },
          ]}
          required
        >
          <TextInput disabled={isLoading} name="lastName" />
        </FormField>

        {/* We don't support the user changing their email address yet, so this is
      always disabled */}
        <FormField
          disabled
          label="Email"
          name="email"
          onChange={handleChange}
          value={updatedUser.email}
          validate={[
            () => {
              if (updatedUser.email && !isEmail(updatedUser.email))
                return 'Please enter a valid email address'
              return undefined
            },
          ]}
          required
        >
          <TextInput disabled name="email" />
        </FormField>

        <FormField
          disabled={isLoading}
          label="Phone"
          name="phone"
          onChange={handleChange}
          validate={[
            phone => {
              if (phone && phone.length < 14) return 'Number must be 10 digits'
              return undefined
            },
          ]}
          value={updatedUser.phone}
        >
          <MaskedInput
            disabled={isLoading}
            mask={[
              { fixed: '(' },
              {
                length: 3,
                regexp: /^[0-9]{1,3}$/,
                placeholder: 'xxx',
              },
              { fixed: ')' },
              { fixed: ' ' },
              {
                length: 3,
                regexp: /^[0-9]{1,3}$/,
                placeholder: 'xxx',
              },
              { fixed: '-' },
              {
                length: 4,
                regexp: /^[0-9]{1,4}$/,
                placeholder: 'xxxx',
              },
            ]}
            name="phone"
          />
        </FormField>

        <Button
          disabled={_isSaveDisabled()}
          label={isLoading ? 'Loading' : 'Save'}
          onClick={() =>
            updateUser(updatedUser, showError, setIsLoading, showSuccess, setCurrentUser)
          }
        />

        {/* Status Messages */}
        {(error || success) && (
          <Box
            background={{ color: error ? 'status-error' : 'status-ok', opacity: 'weak' }}
            margin={{ vertical: 'small' }}
            pad={{ horizontal: 'small' }}
          >
            <Message message={error || 'Profile updated!'} />
          </Box>
        )}
      </Form>
    </FormContainer>
  )
}

export default UserProfile
