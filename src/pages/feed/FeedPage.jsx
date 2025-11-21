import React, { useRef, useEffect, useState } from "react";
import { useInfinitePosts, useLikePost, useGetComments, useAddComment } from "../../hooks/usePosts";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import "./feed.css";

const FALLBACK_IMG = "/mnt/data/61f28f3a-97a5-4733-b561-87747613dfd3.png";

const FeedPage = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfinitePosts();
  const likeMutation = useLikePost();
  const { data: user } = useCurrentUser();
  const containerRef = useRef(null);
  const userId = localStorage.getItem("userId");

  const posts = data?.pages?.flatMap(p => p.posts ?? []) ?? [];

  const [selectedPostId, setSelectedPostId] = useState(null);
  const [newComment, setNewComment] = useState("");

  
  const { data: comments = [], refetch: refetchComments, isLoading: commentsLoading } = useGetComments(selectedPostId);
  const addCommentMutation = useAddComment(selectedPostId);

  
  useEffect(() => {
    if (selectedPostId) refetchComments();
  }, [selectedPostId]);

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

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    addCommentMutation.mutate(
      { text: newComment },
      {
        onSuccess: () => {
          setNewComment("");
          refetchComments();
        },
      }
    );
    
  };
  console.log(comments)

  return (
    <div className="feed-page">
      <div className="feed-content">
        <div className="top-bar">
          <div className="app-name">CIRCLE</div>
          <button
            className="signout-btn"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >
            SIGN OUT
          </button>
        </div>

        <div className="profile-row">
          <h1>@{posts[0]?.author?.username || "Profile"}</h1>
          {posts[0]?.author?.username === user?.username && (
            <button className="edit-btn">EDIT / DELETE</button>
          )}
        </div>

        <div className="post-scroll-container" ref={containerRef}>
          {isLoading && <div className="post-card loading">Loading posts...</div>}

          {posts.map((post) => (
            <div className="post-card" key={post._id}>
              <div className="post-box">
                <img src={post.image || FALLBACK_IMG} alt={post.content?.slice(0, 50) || "Post"} />
              </div>
              <div className="caption">
                <strong>{post.author?.username || "Unknown"}</strong>
                <p>{post.content}</p>
              </div>
              <div className="actions">
                <button className="like-btn" onClick={() => likeMutation.mutate(post._id)}>
                  {post.likes?.includes(userId) ? "UNLIKE" : "LIKE"} ({post.likes?.length || 0})
                </button>
                <button className="comment-btn" onClick={() => setSelectedPostId(post._id)}>
                  COMMENT
                </button>
              </div>
            </div>
          ))}

          {isFetchingNextPage && <div className="post-card loading">Loading more...</div>}
          {!hasNextPage && posts.length > 0 && <div className="post-card end">No more posts</div>}
        </div>

        {/* Modal za komentare */}
        {selectedPostId && (
          <div className="modal-backdrop" onClick={() => setSelectedPostId(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h2>Comments</h2>
              <div className="comments-list">
  {commentsLoading && <p>Loading comments...</p>}
  {!commentsLoading && comments.length === 0 && <p>No comments yet.</p>}
  {!commentsLoading && comments.map(comment => (
    <div key={comment._id} className="comment-item">
      <strong>{comment.author?.username || "Unknown"}:</strong> {comment.text}
    </div>
  ))}
</div>
              <div className="add-comment">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                />
                <button onClick={handleAddComment} disabled={addCommentMutation.isLoading}>
                  {addCommentMutation.isLoading ? "Posting..." : "Post"}
                </button>
              </div>
              <button className="close-modal" onClick={() => setSelectedPostId(null)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedPage;
