// CreatePost.js
import React, { useState, useRef } from 'react';
import './CreatePost.css';

const CreatePost = () => {
  const [postData, setPostData] = useState({
    caption: '',
    image: null,
    imagePreview: ''
  });
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostData(prev => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file)
      }));
    }
  };

  const handleRemoveImage = () => {
    setPostData(prev => ({
      ...prev,
      image: null,
      imagePreview: ''
    }));
    fileInputRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!postData.caption.trim() && !postData.image) {
      alert('Please add a caption or image');
      return;
    }

    setIsUploading(true);
    
    // Simulacija uploada
    setTimeout(() => {
      console.log('Post data:', postData);
      alert('Post created successfully!');
      setPostData({ caption: '', image: null, imagePreview: '' });
      setIsUploading(false);
    }, 1500);
  };

  return (
    <div className="create-post">
      <div className="create-post-container">
        
        {/* Header */}
        <div className="post-header">
          <h1>CREATE/UPDATE POST</h1>
          <p>Share your thoughts with the world</p>
        </div>

        {/* Upload Picture Section */}
        <div className="upload-section">
          <h2>UPLOAD PICTURE</h2>
          
          <div className="upload-area">
            {postData.imagePreview ? (
              <div className="image-preview">
                <img src={postData.imagePreview} alt="Preview" />
                <button 
                  type="button" 
                  className="remove-image"
                  onClick={handleRemoveImage}
                >
                  ✕
                </button>
              </div>
            ) : (
              <div 
                className="upload-placeholder"
                onClick={() => fileInputRef.current?.click()}
              >
                <i className="fas fa-cloud-upload-alt"></i>
                <p>Click to upload image</p>
                <span>PNG, JPG, GIF up to 10MB</span>
              </div>
            )}
            
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>
        </div>

        {/* Caption Section */}
        <div className="caption-section">
          <h2>Content</h2>
          
          <div className="caption-input">
            <textarea
              value={postData.caption}
              onChange={(e) => setPostData(prev => ({ 
                ...prev, 
                caption: e.target.value 
              }))}
              placeholder="What's on your mind?"
              maxLength={500}
            />
            <div className="char-count">
              {postData.caption.length}/500
            </div>
          </div>
        </div>

        {/* Create/Update Button */}
        <div className="action-section">
          <button 
            className="create-btn"
            onClick={handleSubmit}
            disabled={isUploading || (!postData.caption.trim() && !postData.image)}
          >
            {isUploading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                CREATING...
              </>
            ) : (
              <>
                <i className="fas fa-plus"></i>
                CREATE/UPDATE POST
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default CreatePost;