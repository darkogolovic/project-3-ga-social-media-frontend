// // EditProfile.js
// import React, { useState, useRef } from 'react';
// import './EditProfile.css';

// const EditProfile = () => {
//   const [profileData, setProfileData] = useState({
//     username: 'johndoe',
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john@example.com',
//     bio: 'Software developer and tech enthusiast',
//     currentPassword: '',
//     newPassword: '',
//     confirmPassword: ''
//   });
//   const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');
//   const [isLoading, setIsLoading] = useState(false);
//   const fileInputRef = useRef(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProfileImage(imageUrl);
//     }
//   };

//   const handleRemoveImage = () => {
//     setProfileImage('https://via.placeholder.com/150');
//     fileInputRef.current.value = '';
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Password validation
//     if (profileData.newPassword && profileData.newPassword !== profileData.confirmPassword) {
//       alert('New passwords do not match!');
//       setIsLoading(false);
//       return;
//     }

//     if (profileData.newPassword && profileData.newPassword.length < 6) {
//       alert('Password must be at least 6 characters long!');
//       setIsLoading(false);
//       return;
//     }

//     // Simulate API call
//     setTimeout(() => {
//       console.log('Profile updated:', profileData);
//       alert('Profile updated successfully!');
//       setIsLoading(false);
//     }, 1500);
//   };

//   return (
//     <div className="edit-profile">
//       <div className="edit-profile-container">
        
//         {/* Header */}
//         <div className="profile-header">
//           <h1>EDIT PROFILE</h1>
//           <p>Update your personal information</p>
//         </div>

//         {/* Profile Picture Section */}
//         <div className="profile-picture-section">
//           <h2>PROFILE PICTURE</h2>
          
//           <div className="picture-upload">
//             <div className="current-picture">
//               <img src={profileImage} alt="Profile" />
//               <button 
//                 type="button" 
//                 className="change-picture-btn"
//                 onClick={() => fileInputRef.current?.click()}
//               >
//                 <i className="fas fa-camera"></i>
//                 CHANGE PICTURE
//               </button>
//             </div>
            
//             <input
//               type="file"
//               ref={fileInputRef}
//               onChange={handleImageUpload}
//               accept="image/*"
//               style={{ display: 'none' }}
//             />

//             {profileImage !== 'https://via.placeholder.com/150' && (
//               <button 
//                 type="button" 
//                 className="remove-picture-btn"
//                 onClick={handleRemoveImage}
//               >
//                 <i className="fas fa-trash"></i>
//                 REMOVE PICTURE
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Personal Information */}
        
//             {/* Password Section */}
//             <div className="password-section">
//               <h2>CHANGE PASSWORD</h2>
              
//               <div className="form-group">
//                 <label>Current Password</label>
//                 <input
//                   type="password"
//                   name="currentPassword"
//                   value={profileData.currentPassword}
//                   onChange={handleInputChange}
//                   placeholder="Enter current password"
//                 />
//               </div>

//               <div className="form-group">
//                 <label>New Password</label>
//                 <input
//                   type="password"
//                   name="newPassword"
//                   value={profileData.newPassword}
//                   onChange={handleInputChange}
//                   placeholder="Enter new password"
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Confirm New Password</label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   value={profileData.confirmPassword}
//                   onChange={handleInputChange}
//                   placeholder="Confirm new password"
//                 />
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="action-buttons">
//               <button 
//                 type="submit" 
//                 className="save-btn"
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <>
//                     <i className="fas fa-spinner fa-spin"></i>
//                     UPDATING...
//                   </>
//                 ) : (
//                   <>
//                     <i className="fas fa-save"></i>
//                     UPDATE PROFILE
//                   </>
//                 )}
//               </button>
              
//               <button 
//                 type="button" 
//                 className="cancel-btn"
//                 onClick={() => window.history.back()}
//               >
//                 <i className="fas fa-times"></i>
//                 CANCEL
//               </button>
//             </div>
          
//         </div>

//       </div>
    
//   );
// };

// export default EditProfile;


// EditProfile.js
import React, { useState, useRef } from 'react';
import './EditProfile.css';

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/150');
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage('https://via.placeholder.com/150');
    fileInputRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Password validation
    if (profileData.newPassword && profileData.newPassword !== profileData.confirmPassword) {
      alert('New passwords do not match!');
      setIsLoading(false);
      return;
    }

    if (profileData.newPassword && profileData.newPassword.length < 6) {
      alert('Password must be at least 6 characters long!');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      console.log('Profile updated:', profileData);
      alert('Profile updated successfully!');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className='sign'>
    <div className="edit-profile">
      <div className="edit-profile-container">
        
        {/* Header */}
        <div className="profile-header">
          <h1>EDIT PROFILE</h1>
          
        </div>

        {/* Profile Picture Section - Centrirano */}
        <div className="profile-picture-section">

          
          <div className="picture-upload-centered">
            <div className="current-picture-circle">
              <img src={profileImage} alt="Profile" />
            </div>
            
            <div className="picture-actions">
              <button 
                type="button" 
                className="change-picture-btn"
                onClick={() => fileInputRef.current?.click()}
              >
                <i className="fas fa-camera"></i>
                CHANGE PICTURE
              </button>
              
              {profileImage !== 'https://via.placeholder.com/150' && (
                <button 
                  type="button" 
                  className="remove-picture-btn"
                  onClick={handleRemoveImage}
                >
                  <i className="fas fa-trash"></i>
                  REMOVE PICTURE
                </button>
              )}
            </div>
            
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>
        </div>

        {/* Password Section */}
        <div className="password-section">
          <h2>CHANGE PASSWORD</h2>
          
          <div className="form-group">
            <label>Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={profileData.currentPassword}
              onChange={handleInputChange}
              placeholder="Enter current password"
            />
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              name="newPassword"
              value={profileData.newPassword}
              onChange={handleInputChange}
              placeholder="Enter new password"
            />
          </div>

          <div className="form-group">
            <label>Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={profileData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm new password"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button 
            type="submit" 
            className="save-btn"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <i className="fas fa-spinner fa-spin"></i>
                UPDATING...
              </>
            ) : (
              <>
                <i className="fas fa-save"></i>
                UPDATE PROFILE
              </>
            )}
          </button>
          
          <button 
            type="button" 
            className="cancel-btn"
            onClick={() => window.history.back()}
          >
            <i className="fas fa-times"></i>
            CANCEL
          </button>
        </div>

      </div>
    </div>
</div>
  );
};

export default EditProfile;