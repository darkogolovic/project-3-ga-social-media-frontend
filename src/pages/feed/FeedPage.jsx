import './feed.css'


const FeedPage = () => {

  return (
    <div className="feed-page">
  <div className="feed-content">

    <div className="top-bar">
      <div className="app-name">CIRCLE</div>
      <button className="signout-btn">SIGN OUT</button>
    </div>

    <div className="profile-row">
      <h1>Profile</h1>
      <button className="edit-btn">EDIT / DELETE</button>
    </div>

    <div className="post-box">
      <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" />
  </div>
      <div className="actions">
        <button className="like-btn">LIKE</button>
        <button className="comment-btn">COMMENT</button>
      
    </div>

  </div>
</div>
  );
}


export default FeedPage