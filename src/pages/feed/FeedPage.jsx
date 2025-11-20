import React, { useRef, useEffect } from "react";
import { useInfinitePosts, useLikePost } from "../../hooks/usePosts";
import "./feed.css";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const FALLBACK_IMG = "/mnt/data/61f28f3a-97a5-4733-b561-87747613dfd3.png";

const FeedPage = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfinitePosts();
  const likeMutation = useLikePost();
  const containerRef = useRef(null);
  const {data:user}=useCurrentUser()
  console.log(user)

  const posts = data?.pages?.flatMap(p => p.posts ?? []) ?? [];
  const userId = localStorage.getItem("userId");
  

 
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 50) {
        if (hasNextPage && !isFetchingNextPage) fetchNextPage();
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div className="feed-page">
      <div className="feed-content">
        <div className="top-bar">
          <div className="app-name">CIRCLE</div>
          <button
            className="signout-btn"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
          >
            SIGN OUT
          </button>
        </div>

        <div className="profile-row">
          <h1>{user?.username || "Profile"}</h1>
          <button className="edit-btn">EDIT / DELETE</button>
        </div>

        <div className="post-scroll-container" ref={containerRef}>
          {isLoading && <div className="post-card loading">Loading posts...</div>}

          {posts.map(post => (
            <div className="post-card" key={post._id}>
              <div className="post-box">
                <img src={post.image || FALLBACK_IMG} alt={post.content?.slice(0,50) || "Post"} />
              </div>
              <div className="caption">
                <strong>{post.author?.username || "Unknown"}</strong>
                <p>{post.content}</p>
              </div>
              <div className="actions">
                <button
                  className="like-btn"
                  onClick={() => likeMutation.mutate(post._id)}
                >
                  {post.likes?.includes(userId) ? "UNLIKE" : "LIKE"} ({post.likes?.length || 0})
                </button>
                <button
                  className="comment-btn"
                  onClick={() => window.location.assign(`/profile/${post.author?._id}`)}
                >
                  COMMENT
                </button>
              </div>
            </div>
          ))}

          {isFetchingNextPage && <div className="post-card loading">Loading more...</div>}
          {!hasNextPage && posts.length > 0 && <div className="post-card end">No more posts</div>}
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
