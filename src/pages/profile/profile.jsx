import "./profile.css";
import { useCurrentUser } from "../../hooks/useCurrentUser.js";
import { useMyPosts } from "../../hooks/useMyPosts.js";

const Profile = () => {
  const { data: user, isLoading } = useCurrentUser();
  const { data: posts, isLoading: postsLoading } = useMyPosts(user?._id);

  if (isLoading || postsLoading) return <p>Loading...</p>;

  return (
    <div className="prof">
      <div className="profile">
        
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-pic">
            <img src={user.avatar || "/default-avatar.png"} alt="Profile Pic" />
          </div>

          <div className="profile-info">
            <h2 className="username">@{user.username}</h2>

            <div className="stats">
              <div className="stat">
                <div className="number">{posts.length}</div>
                <div className="label">Posts</div>
              </div>
              <button className="button">Edit Profile</button>
            </div>

           
          </div>
        </div>

        
        <div className="posts-section">
          <h2>POSTS</h2>

          <div className="posts-grid">
            {posts.map((post) => (
              <div key={post._id} className="post">
                <img src={post.image} alt="Post" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
