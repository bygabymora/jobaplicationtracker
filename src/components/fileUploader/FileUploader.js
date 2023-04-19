import React, { useRef, useState } from 'react'
import './fileUploader.css'

const FileUploader = ({onFileSelect}) => {
    
    const fileInput = useRef(null)
    const [fileName, setFileName] = useState('')
  

    const handleFileInput = (e) => {
        const file = e.target.files[0]
        onFileSelect(file)
        setFileName(file.name)
      }
      return (
        <div className='file-uploader'>
          <div className="file-input-container">
            <input
              className='hidden-input'
              type='file'
              required
              onChange={handleFileInput}
              ref={fileInput}
            />
            <button onClick={e => fileInput.current && fileInput.current.click()} className=" choose__file__button">Choose File</button>
            <div className="file-name">{fileName}</div>
          </div>
        </div>
      )
    }
    
    export default FileUploader
 