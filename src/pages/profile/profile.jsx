import "./profile.css";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const Profile = () => {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className='prof'>
    <div className="profile">
      {/* Header sa slikom i osnovnim podacima */}

<h2 className="username"    >
    @{user.username}
</h2>

          <div className="profile-info">
            <div className="stats">
              <div className="stat">
                <span className="number">24</span>
                <span className="label">POSTS</span>
              </div>
              <div className="stat">
                <span className="number">{user.followers}</span>
                <button className="button">Edit profile</button>
              </div>
            </div>
          </div>
        </div>

        {/*<div className="posts-section">
          <h2>POSTS</h2>
          <div className="posts-grid">
            {posts.map((post) => (
              <div key={post.id} className="post">
                <img src={post.image} alt="Post" />
              </div>
            ))}
          </div>
        </div>*/}
      </div>
    </div>
    </div>
  );
};

export default Profile;
