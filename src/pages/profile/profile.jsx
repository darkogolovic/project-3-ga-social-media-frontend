

// Profile.js
import React, { useState } from 'react';
import './profile.css';

const Profile = () => {
  

  // Mock podaci
  const user = {
    username: "johndoe",
    fullName: "John Doe",
    profilePicture: "https://via.placeholder.com/120",
    postsCount: 47,
    
  };

  const posts = [
    { id: 1, image: "https://via.placeholder.com/300" },
    { id: 2, image: "https://via.placeholder.com/300" },
    { id: 3, image: "https://via.placeholder.com/300" },
    { id: 4, image: "https://via.placeholder.com/300" },
    { id: 5, image: "https://via.placeholder.com/300" },
    { id: 6, image: "https://via.placeholder.com/300" }
  ];

  
  

  return (
    <div className="profile">
      {/* Header sa slikom i osnovnim podacima */}

<h2 className="username"    >
    @{user.username}
</h2>

      <div className="profile-header">
        
        <div className="profile-pic">
            
            <img src={user.profilePicture} alt="" />
        </div>
        
        <div className="profile-info">
          
          
          <div className="stats">
            <div className="stat">
                
              <span className="number">{user.postsCount}</span>
              <span className="label">POSTS</span>
            </div>
            <div className="stat">
              <span className="number">{user.followers}</span>
              <button className="button">Edit profile</button>
            
            </div>

  
          </div>

              

        </div>

  
      </div>
      

       
      {/* Postovi */}
      <div className="posts-section">
        <h2>POSTS</h2>
        <div className="posts-grid">
          {posts.map(post => (
            <div key={post.id} className="post">
              <img src={post.image} alt="Post" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;



// SimpleProfile.js
// import React, { useState } from 'react';

// const SimpleProfile = () => {
//   const [isFollowing, setIsFollowing] = useState(false);

//   return (
//     <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      
//       {/* Header */}
//       <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '40px', padding: '20px', borderBottom: '2px solid #eee' }}>
//         <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: '3px solid #007bff' }}>
//           <img 
//             src="https://via.placeholder.com/120" 
//             alt="Profile" 
//             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           />
//         </div>
        
//         <div style={{ flex: 1 }}>
//           <h1 style={{ margin: '0 0 20px 0', fontSize: '24px', color: '#333' }}>
//             @johndoe
//           </h1>
          
//           <div style={{ display: 'flex', gap: '30px', marginBottom: '20px' }}>
//             <div style={{ textAlign: 'center' }}>
//               <span style={{ display: 'block', fontSize: '20px', fontWeight: 'bold' }}>47</span>
//               <span style={{ fontSize: '12px', color: '#666' }}>POSTS</span>
//             </div>
//             <div style={{ textAlign: 'center' }}>
//               <span style={{ display: 'block', fontSize: '20px', fontWeight: 'bold' }}>1250</span>
//               <span style={{ fontSize: '12px', color: '#666' }}>FOLLOWERS</span>
//             </div>
//             <div style={{ textAlign: 'center' }}>
//               <span style={{ display: 'block', fontSize: '20px', fontWeight: 'bold' }}>350</span>
//               <span style={{ fontSize: '12px', color: '#666' }}>FOLLOWING</span>
//             </div>
//           </div>

//           <button 
//             onClick={() => setIsFollowing(!isFollowing)}
//             style={{
//               padding: '10px 30px',
//               border: '2px solid #007bff',
//               background: isFollowing ? 'white' : '#007bff',
//               color: isFollowing ? '#007bff' : 'white',
//               borderRadius: '20px',
//               fontWeight: 'bold',
//               cursor: 'pointer'
//             }}
//           >
//             {isFollowing ? 'UNFOLLOW' : 'FOLLOW'}
//           </button>
//         </div>
//       </div>

//       {/* Postovi */}
//       <div>
//         <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>POSTS</h2>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
//           {[1, 2, 3, 4, 5, 6].map(post => (
//             <div key={post} style={{ aspectRatio: '1', overflow: 'hidden', borderRadius: '10px' }}>
//               <img 
//                 src="https://via.placeholder.com/300" 
//                 alt="Post" 
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SimpleProfile;