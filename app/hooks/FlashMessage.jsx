import React from 'react'

const useFlashMessage = initialState => {
  const [message, setMessage] = React.useState(initialState)

  const showMessage = newMessage => {
    setMessage(newMessage)

    window.setTimeout(() => {
      setMessage(null)
    }, 3000)
  }
  return { message, showMessage }
}
export default useFlashMessage
