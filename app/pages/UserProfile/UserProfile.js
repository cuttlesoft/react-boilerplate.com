import React, { useContext, useEffect, useReducer, useState } from 'react'
import { MaskedInput } from 'grommet'
import { isEmail } from 'validator'

// Components
import { AutoSaveFormField } from 'components/AutoSaveFormField'
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Form } from 'components/Form'
import { FormContainer } from 'components/FormContainer'
import { GenericError } from 'components/GenericError'
import { GenericLoading } from 'components/GenericLoading'
import { Heading } from 'components/Heading'
import { Image } from 'components/Image'
import { TextInput } from 'components/TextInput'

// Stores
import { UserStoreContext } from '../../stores/UserStore'

// Utils and Services
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
  const [error, showError] = useState(null)

  // Context
  const { user } = useContext(UserStoreContext)

  // State
  const [updatedUser, setUpdatedUser] = useReducer(updateState, null)
  const [editProfileImage, setEditProfileImage] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Retrieve the most up-to-date user object and set as default form state
  useEffect(() => {
    async function fetchData() {
      try {
        const currentUser = await getUser(user, showError, setIsLoading)
        setUpdatedUser(currentUser)
      } catch {
        setUpdatedUser(user)
      }
    }
    fetchData()
  }, [])

  const onSave = (payload, setError, setLoading, setSuccess) => {
    updateUser({ id: user.id, ...payload }, setError, setLoading, setSuccess)
  }

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

  if (error) return <GenericError />
  if (isLoading || updatedUser === null) return <GenericLoading />

  return (
    <FormContainer>
      <Form validate="blur">
        <Box align="center" margin={{ bottom: 'medium' }}>
          {user.avatar && !editProfileImage ? (
            <>
              <Box height="small" width="small" round="xlarge" overflow="hidden">
                <Image fit="contain" src={updatedUser.avatar} />
              </Box>

              <Button onClick={() => setEditProfileImage(true)} label="Edit Profile Image" />
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

        <AutoSaveFormField
          label="First Name"
          name="firstName"
          onChange={handleChange}
          onSave={onSave}
          serverSideRequired
          value={updatedUser.firstName}
        >
          <TextInput name="firstName" value={updatedUser.firstName} />
        </AutoSaveFormField>

        <AutoSaveFormField
          label="Last Name"
          name="lastName"
          onChange={handleChange}
          onSave={onSave}
          serverSideRequired
          value={updatedUser.lastName}
        >
          <TextInput name="lastName" value={updatedUser.lastName} />
        </AutoSaveFormField>

        {/* We don't support the user changing their email address yet, so this is
      always disabled */}
        <AutoSaveFormField
          disabled
          label="Email"
          name="email"
          onChange={handleChange}
          onSave={onSave}
          serverSideRequired
          validate={[
            () => {
              if (updatedUser.email && !isEmail(updatedUser.email))
                return 'Please enter a valid email address'
              return undefined
            },
          ]}
          value={updatedUser.email}
        >
          <TextInput disabled name="email" value={updatedUser.email} />
        </AutoSaveFormField>

        <AutoSaveFormField
          label="Phone"
          onChange={handleChange}
          onSave={onSave}
          name="phone"
          value={updatedUser.phone || ''}
          validate={[
            phone => {
              if (phone && phone.length < 14) return 'Number must be 10 digits'
              return undefined
            },
          ]}
        >
          <MaskedInput
            disabled={isLoading}
            mask={[
              { fixed: '+1 (' },
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
            value={updatedUser.phone || ''}
            validate={[
              phone => {
                if (phone && phone.length < 14) return 'Number must be 10 digits'
                return undefined
              },
            ]}
          />
        </AutoSaveFormField>
      </Form>
    </FormContainer>
  )
}

export default UserProfile
