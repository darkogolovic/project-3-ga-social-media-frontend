import React, { useEffect, useRef, useState } from "react";
import {
  useInfinitePosts,
  useLikePost,
  useGetComments,
  useAddComment,
  useEditComment,
  useDeleteComment,
} from "../../hooks/usePosts";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { Link } from "react-router";
import toast from "react-hot-toast";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80";

const FeedPage = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfinitePosts();
  const likeMutation = useLikePost();
  const { data: user } = useCurrentUser();

  const userId = localStorage.getItem("userId");

  const posts = data?.pages?.flatMap((p) => p.posts ?? []) ?? [];

  const [selectedPostId, setSelectedPostId] = useState(null);
  const [newComment, setNewComment] = useState("");

  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editCommentText, setEditCommentText] = useState("");

  const {
    data: comments = [],
    refetch: refetchComments,
    isLoading: commentsLoading,
  } = useGetComments(selectedPostId);

  const addCommentMutation = useAddComment(selectedPostId);
  const editCommentMutation = useEditComment();
  const deleteCommentMutation = useDeleteComment();

  useEffect(() => {
    if (selectedPostId) refetchComments();
  }, [selectedPostId, refetchComments]);

  // ---------------------------
  // 📌 IntersectionObserver infinite scroll
  // ---------------------------
  const observerRef = useRef();

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  // ---------------------------
  // 📌 Comment actions
  // ---------------------------
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

  const startEditingComment = (comment) => {
    setEditingCommentId(comment._id);
    setEditCommentText(comment.text);
  };

  const cancelEditingComment = () => {
    setEditingCommentId(null);
    setEditCommentText("");
  };

  const handleSaveEditedComment = () => {
    if (!editCommentText.trim() || !editingCommentId || !selectedPostId) return;

    editCommentMutation.mutate(
      {
        postId: selectedPostId,
        commentId: editingCommentId,
        data: { text: editCommentText },
      },
      {
        onSuccess: () => {
          cancelEditingComment();
        },
      }
    );
  };

  const handleDeleteComment = (commentId) => {
    if (!selectedPostId) return;

    deleteCommentMutation.mutate(
      { postId: selectedPostId, commentId },
      {
        onSuccess: () => {
          toast.success("Comment deleted");
        },
      }
    );
  };

  const handleCloseCommentsModal = () => {
    setSelectedPostId(null);
    setEditingCommentId(null);
    setEditCommentText("");
    setNewComment("");
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col items-center px-4 py-6">
    <header className="w-full max-w-6xl mb-6 md:mb-8">
  <div className="flex items-center justify-between gap-3 flex-wrap">
  
    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
      <div className="h-9 w-9 rounded-2xl bg-sky-500 flex items-center justify-center font-black text-slate-950 shadow-lg shadow-sky-500/40">
        C
      </div>
      <div className="min-w-0">
        <div className="text-lg sm:text-xl font-semibold tracking-wide">
          CIRCLE
        </div>
       
        <p className="hidden xs:block text-[11px] sm:text-xs text-slate-400">
          Social feed for your close circle
        </p>
      </div>
    </div>

    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
      {user && (
        <Link to={"/editProfile"} className="min-w-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="flex flex-col items-end min-w-0">
             
              <span className="text-sm font-medium truncate max-w-[120px] sm:max-w-[180px] md:max-w-[220px]">
                @{user.username}
              </span>
             
              {user.email && (
                <span className="hidden md:inline text-[11px] text-slate-400 truncate max-w-[180px]">
                  {user.email}
                </span>
              )}
            </div>
            <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={user.profilePicture || FALLBACK_IMG}
                alt={user.username}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Link>
      )}

    
      <button
        className="hidden md:inline-flex items-center justify-center gap-2 bg-sky-500/90 hover:bg-sky-400 text-slate-950 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg shadow-sky-500/40 transition"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
      >
        <span>Sign out</span>
      </button>
    </div>
  </div>
</header>

      {posts.length > 0 && (
        <section className="w-full max-w-2xl mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-slate-900/60 border border-slate-800 rounded-2xl px-5 py-4 backdrop-blur-md shadow-xl shadow-black/40">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-9 w-9 rounded-full overflow-hidden">
              <img
                src={user.profilePicture || FALLBACK_IMG}
                alt={user.username}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold">
                @{user.username || "profile"}
              </h1>
              <p className="text-xs text-slate-400">
                {posts.length} post{posts.length !== 1 && "s"} in your circle
              </p>
            </div>
          </div>
        </section>
      )}

      <main className="w-full max-w-2xl space-y-4">
        {isLoading &&
          Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 shadow-2xl shadow-black/50 p-4 animate-pulse"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-full bg-slate-800" />
                <div className="space-y-1">
                  <div className="h-2.5 w-20 bg-slate-800 rounded" />
                  <div className="h-2 w-14 bg-slate-800 rounded" />
                </div>
              </div>
              <div className="w-full h-56 rounded-xl bg-slate-800 mb-3" />
              <div className="h-2.5 w-3/4 bg-slate-800 rounded mb-2" />
              <div className="h-2.5 w-1/2 bg-slate-800 rounded mb-3" />
              <div className="flex justify-between">
                <div className="h-8 w-20 bg-slate-800 rounded-full" />
                <div className="h-8 w-20 bg-slate-800 rounded-full" />
              </div>
            </div>
          ))}

        {posts.map((post) => {
          const isLiked = post.likes?.includes(userId);
          const createdAt =
            post.createdAt && !isNaN(new Date(post.createdAt))
              ? new Date(post.createdAt).toLocaleString()
              : null;

          return (
            <article
              key={post._id}
              className="relative bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/70"
            >
              <header className="flex items-center justify-between px-4 pt-3 pb-2">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-slate-800 flex items-center justify-center text-[11px] font-semibold uppercase border border-slate-700">
                    {post.author?.username?.[0] || "U"}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">
                      @{post.author?.username || "unknown"}
                    </div>
                    {createdAt && (
                      <div className="text-[11px] text-slate-400">
                        {createdAt}
                      </div>
                    )}
                  </div>
                </div>
                {post.author?.username === user?.username && (
                  <Link
                    to={`/editPost/${post._id}`}
                    className="text-xs px-3 py-1 bg-sky-600 rounded-full hover:bg-sky-500"
                  >
                    Edit
                  </Link>
                )}
              </header>

              <div className="relative h-70 md:h-72 overflow-hidden">
                <img
                  src={post.image || FALLBACK_IMG}
                  alt={post.content?.slice(0, 50) || "Post"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/80 via-slate-950/0 pointer-events-none" />
              </div>

              <div className="px-4 pb-3 pt-2 flex flex-col gap-2">
                {post.content && (
                  <p className="text-sm text-slate-100 leading-relaxed line-clamp-3">
                    {post.content}
                  </p>
                )}

                <div className="flex items-center justify-between mt-1">
                  <button
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition border ${
                      isLiked
                        ? "bg-rose-600/90 hover:bg-rose-500 border-rose-500 text-slate-50 shadow-lg shadow-rose-600/40"
                        : "bg-slate-900/80 hover:bg-slate-800 border-slate-700 text-slate-100"
                    }`}
                    onClick={() => likeMutation.mutate(post._id)}
                  >
                    <span>{isLiked ? "♥ Unlike" : "♡ Like"}</span>
                    <span className="text-[11px] text-slate-300">
                      {post.likes?.length || 0}
                    </span>
                  </button>

                  <button
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-100 transition"
                    onClick={() => setSelectedPostId(post._id)}
                  >
                    <span>💬 Comments</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}

        {isFetchingNextPage && (
          <div className="rounded-2xl bg-slate-900/70 border border-slate-800 shadow-2xl shadow-black/50 p-4 flex items-center justify-center text-sm text-slate-300">
            Loading more posts...
          </div>
        )}

        {!hasNextPage && posts.length > 0 && (
          <div className="rounded-2xl bg-slate-900/70 border border-slate-800 shadow-2xl shadow-black/50 p-4 flex flex-col items-center justify-center text-sm text-slate-300 gap-1 mb-4">
            <span>No more posts in your feed</span>
            <span className="text-xs text-slate-500">
              You&apos;re all caught up 🎉
            </span>
          </div>
        )}
      </main>

      {selectedPostId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-lg bg-slate-950/95 border border-slate-800 rounded-3xl p-6 shadow-2xl shadow-black/70">
            <button
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-100 text-lg font-bold"
              onClick={handleCloseCommentsModal}
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold mb-1">Comments</h2>
            <p className="text-xs text-slate-400 mb-4">
              Join the conversation with your circle.
            </p>

            <div className="max-h-72 overflow-y-auto pr-1 mb-4 space-y-3">
              {commentsLoading && (
                <p className="text-sm">Loading comments...</p>
              )}
              {!commentsLoading && comments.length === 0 && (
                <p className="text-sm text-slate-400">No comments yet.</p>
              )}
              {!commentsLoading &&
                comments.map((comment) => {
                  const isOwnComment =
                    comment.author?._id === userId ||
                    comment.author?._id === user?._id;

                  const isEditing = editingCommentId === comment._id;

                  return (
                    <div
                      key={comment._id}
                      className="flex items-start gap-3 bg-slate-900/80 border border-slate-800 rounded-2xl px-3 py-2"
                    >
                      <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-semibold uppercase border border-slate-700">
                        {comment.author?.username?.[0] || "U"}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <div className="text-xs font-semibold">
                            @{comment.author?.username || "unknown"}
                          </div>

                          {isOwnComment && !isEditing && (
                            <div className="flex items-center gap-2">
                              <button
                                className="text-[11px] text-sky-400 hover:text-sky-300"
                                onClick={() => startEditingComment(comment)}
                              >
                                Edit
                              </button>
                              <button
                                className="text-[11px] text-rose-400 hover:text-rose-300"
                                onClick={() =>
                                  handleDeleteComment(comment._id)
                                }
                                disabled={deleteCommentMutation.isLoading}
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>

                        {!isEditing && (
                          <div className="text-xs text-slate-200 mt-0.5">
                            {comment.text}
                          </div>
                        )}

                        {isEditing && (
                          <div className="mt-1 space-y-1">
                            <textarea
                              value={editCommentText}
                              onChange={(e) =>
                                setEditCommentText(e.target.value)
                              }
                              rows={2}
                              className="w-full text-xs p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 resize-none focus:outline-none focus:ring-1 focus:ring-sky-500/70 focus:border-sky-500/70"
                            />
                            <div className="flex justify-end gap-2">
                              <button
                                className="px-2 py-1 rounded-xl text-[11px] bg-slate-800 text-slate-200 hover:bg-slate-700"
                                onClick={cancelEditingComment}
                              >
                                Cancel
                              </button>
                              <button
                                className="px-3 py-1 rounded-xl text-[11px] bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed"
                                onClick={handleSaveEditedComment}
                                disabled={editCommentMutation.isLoading}
                              >
                                {editCommentMutation.isLoading
                                  ? "Saving..."
                                  : "Save"}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="flex gap-2">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="flex-1 text-sm p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-100 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70"
                rows={2}
              />
              <button
                onClick={handleAddComment}
                disabled={addCommentMutation.isLoading}
                className="self-end px-4 py-2 rounded-2xl bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold shadow-lg shadow-sky-500/40 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {addCommentMutation.isLoading ? "Posting..." : "Post"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedPage;