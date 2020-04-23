import React, { useContext, useReducer, useRef, useState } from 'react'
import AvatarEditor from 'react-avatar-editor'
import DropzoneS3Uploader from 'react-dropzone-s3-uploader'
import PropTypes from 'prop-types'

// Components
import { Box } from 'components/Box'
import { Button } from 'components/Button'
import { Image } from 'components/Image'
import { Layer } from 'components/Layer'
import { RangeInput } from 'components/RangeInput'
import { Text } from 'components/Text'

// Store
import { UserStoreContext } from '../../stores/UserStore'

// Utils
import { updateState } from '../../utils/helpers'
import { updateUser } from '../../services/user.service'

const ImageEditor = ({ showError, setEditProfileImage, setLoading }) => {
  // Context
  const { accessToken, updateCurrentUser, user } = useContext(UserStoreContext)

  // Refs
  const editorRef = useRef(null)
  const uploaderRef = useRef(null)

  // State
  const [isOpen, setOpen] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [scale, setScale] = useState(1)
  const [currentImg, setCurrentImg] = useReducer(updateState, {})

  const UPLOAD_OPTIONS = {
    scrubFilename: filename => filename.replace(/[^\w\d_\-.]+/gi, ''),
    server: `${process.env.API_BASE_URL}`,
    signingUrl: '/s3/sign/',
    signingUrlHeaders: {
      Authorization: `Bearer ${accessToken}`,
    },
    uploadRequestHeaders: {},
  }

  /** Override the onDrop method to allow a user to crop their profile before uploading */
  /**
   * Set the current image as the first image in the `files` array. We will pass this
   * info to the AvatarEditor for editing.
   * @param {array} files
   */
  const onDrop = files => {
    if (!isUploading) {
      setOpen(true)

      const current = {
        name: files[0].name,
        preview: files[0].preview,
      }

      setCurrentImg(current)
    }
  }

  /**
   * Once the image has been uploaded, take the image `info` and grab
   * the `fileUrl` for S3.
   * @param {object} info
   */
  const setUploadedImageUrl = info => {
    // Parse out AWS S3 URL and file name to form the fileUrl.
    // We have to do this because somehow the url is coming back with `/undefined/` rather than the file name.
    user.avatar = `${process.env.AWS_S3_URL}${info.fileName}`
    updateUser(user, showError, setLoading, updateCurrentUser)
    setEditProfileImage(false)
  }

  /**
   * Save the cropped image to AWS S3 by grabbing the cropped canvas.
   */
  const saveCroppedImage = () => {
    setIsUploading(true)

    if (editorRef) {
      const canvas = editorRef.current.getImageScaledToCanvas()

      canvas.toBlob(blob => {
        // Trigger S3 upload manually using the new cropped image
        uploaderRef.current.handleDrop(
          [
            new File([blob], currentImg.name, {
              size: blob.size,
              type: blob.type,
              preview: URL.createObjectURL(blob),
            }),
          ],
          false,
        )

        // Set cropped image as `currentImg`
        setCurrentImg({
          preview: URL.createObjectURL(blob),
        })

        setOpen(false)
        setIsUploading(false)
      })
    }
  }

  return (
    <Box border align="center" pad={{ vertical: 'small' }}>
      <Text margin={{ bottom: 'small', horizontal: 'small' }}>Drag files/images here</Text>

      <DropzoneS3Uploader
        onDrop={onDrop}
        onFinish={setUploadedImageUrl}
        ref={uploaderRef}
        s3Url={process.env.AWS_S3_URL}
        upload={UPLOAD_OPTIONS}
      >
        <Image src={currentImg.preview} fit="contain" />
      </DropzoneS3Uploader>

      {isOpen && (
        <Layer onClickOutside={() => setOpen(false)}>
          <Box width="500px" align="center" pad="medium">
            <AvatarEditor.default
              border={50}
              borderRadius={150}
              color={[255, 255, 255, 0.6]} // RGBA
              height={250}
              image={currentImg.preview}
              ref={editorRef}
              scale={scale}
              width={250}
            />

            <RangeInput
              max={2}
              min={0.7}
              name="zoom"
              onChange={e => setScale(parseFloat(e.target.value))}
              step={0.1}
              style={{ padding: '20px' }}
              value={scale}
            />

            <Box direction="row" pad={{ vertical: '20px' }}>
              <Button onClick={saveCroppedImage}>Save</Button>
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  )
}

ImageEditor.propTypes = {
  showError: PropTypes.func.isRequired,
  setEditProfileImage: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
}

export default ImageEditor
