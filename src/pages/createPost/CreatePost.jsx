import React, { useState, useRef } from "react";
import { useCreatePost } from "../../hooks/usePosts.js";
import "./CreatePost.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const CreatePost = () => {
  const createPost = useCreatePost();
  const fileInputRef = useRef(null);
  const navigate = useNavigate()

  const [postData, setPostData] = useState({
    content: "",
    image: null,
    imagePreview: ""
    
  });

  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostData((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };

  const handleRemoveImage = () => {
    setPostData((prev) => ({
      ...prev,
      image: null,
      imagePreview: "",
    }));
    fileInputRef.current.value = "";
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!postData.content.trim() && !postData.image) {
      alert("Please add a caption or image");
      return;
    }

    const formData = new FormData();
    formData.append("content", postData.content);
    if (postData.image) formData.append("image", postData.image);

    createPost.mutate(formData, {
      onSuccess: () => {
        setPostData({
          content: "",
          image: null,
          imagePreview: "",
        });
        toast.success('Post created');
        navigate('/feed')
        

        fileInputRef.current.value = "";
      },
    });
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
                style={{ display: "none" }}
              />
            </div>
          </div>

          {/* Caption */}
          <div className="caption-section">
            <h2>Content</h2>

            <div className="caption-input">
              <textarea
                value={postData.content}
                onChange={(e) =>
                  setPostData((prev) => ({
                    ...prev,
                    content: e.target.value,
                  }))
                }
                name="content"
                placeholder="What's on your mind?"
                maxLength={500}
              />
              <div className="char-count">{postData.content.length}/500</div>
            </div>
          </div>

          {/* Button */}
          <div className="action-section">
            <button
              className="create-btn"
              onClick={handleSubmit}
              disabled={
                createPost.isPending ||
                (!postData.content.trim() && !postData.image)
              }
            >
              {createPost.isPending ? (
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
