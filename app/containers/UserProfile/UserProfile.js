import React, { useContext, useState } from 'react'
import { isEmail } from 'validator'
import { MaskedInput } from 'grommet'
import { observer } from 'mobx-react'

// Components
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Form, FormField } from 'components/Form'
import { Image } from 'components/Image'
import { Message } from 'components/Message'
import { TextInput } from 'components/TextInput'
import { Text } from 'components/Text'

// Stores
import { UserStoreContext } from '../../stores/UserStore'

// Utils and Services
import { updateUser } from '../../services/user.service'
import useFlashMessage from '../../hooks/FlashMessage'
import ImageEditor from './UserProfile.imageEditor'

/**
 *
 * UserProfile
 *
 */
const UserProfile = observer(() => {
  const { message: error, showMessage: showError } = useFlashMessage(null)

  // Context
  const userStore = useContext(UserStoreContext)
  const { updateCurrentUser, user } = userStore

  // State
  const [updatedUser, setUpdatedUser] = useState(user)
  const [editProfileImage, setEditProfileImage] = useState(false)
  const [loading, setLoading] = useState(false)

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

  return (
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
            setLoading={setLoading}
            setEditProfileImage={setEditProfileImage}
          />
        )}
      </Box>

      {/* Basic Information */}
      <Text>Basic Information</Text>
      <FormField
        label="First Name"
        name="firstName"
        onChange={handleChange}
        value={updatedUser.firstName}
        required
      >
        <TextInput name="firstName" />
      </FormField>
      <FormField
        label="Last Name"
        name="lastName"
        onChange={handleChange}
        value={updatedUser.lastName}
        required
      >
        <TextInput name="lastName" />
      </FormField>
      <FormField
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
        <TextInput name="email" />
      </FormField>
      <FormField
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
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <Button onClick={() => updateUser(updatedUser, showError, setLoading, updateCurrentUser)}>
          Save
        </Button>
      )}

      {/* Status Messages */}
      <Box>{error && <Message message={error} isError />}</Box>
    </Form>
  )
})

export default UserProfile
