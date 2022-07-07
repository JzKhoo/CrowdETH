import React, { useState } from 'react'
import { 
    Layout,
    Container, 
    BoxUpLoad,
    ImagePreview
} from './UploadImg.styles'
import FolderIcon from '../../images/FolderIcon.png'
import CloseIcon from '../../images/CloseIcon.svg'

const UploadImg = () => {

    const [image, setImage] = useState('')
    const [isUploaded, setIsUploaded] = useState('')

    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader()

            reader.onload = function(e) {
                setImage(e.target.result)
                setIsUploaded(true)
            }

            reader.readAsDataURL(e.target.files[0])
        }
    }

  return (
    <Layout>
        <Container>
            <p>Upload with preview</p>

            <BoxUpLoad>
                <div className='image-upload'>
                    {
                        !isUploaded ? (
                            <>
                                <label htmlFor='upload-input'>
                                    <img src={FolderIcon} alt='placeholder' style={{width: 100, height: 100}} draggable='false' />
                                    <p>
                                        Click to upload image
                                    </p>
                                </label>
                                <input 
                                    id='upload-input' 
                                    type='file' 
                                    accept='.jpg, .jpeg, .gif, .png, .mov, .mp4' 
                                    onChange={handleImageChange}
                                />
                            </>
                        ) : (
                            <ImagePreview>
                                <img 
                                    className='close-icon' 
                                    src={CloseIcon} 
                                    alt='CloseIcon' 
                                    onClick={() => {
                                        setIsUploaded(false)
                                        setImage(null)
                                    }}
                                />
                                <img 
                                id='uploaded-image' 
                                src={image} 
                                alt='uploaded-img' 
                                draggable={false}
                                />
                            </ImagePreview>  
                        )
                    }
                </div>
            </BoxUpLoad>
        </Container>
    </Layout>
  )
}

export default UploadImg