import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { usePost, useUpdatePost, useDeletePost } from "../../hooks/usePosts.js";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const { data: post, isLoading } = usePost(id);
  const updatePost = useUpdatePost();
  const deletePost = useDeletePost();

  const [postData, setPostData] = useState({
    content: "",
    image: null,
    imagePreview: "",
  });

  useEffect(() => {
    if (post) {
      setPostData({
        content: post.content,
        image: null,
        imagePreview: post.image ? post.image : "",
      });
    }
  }, [post]);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
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
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("content", postData.content);
    if (postData.image) {
      formData.append("image", postData.image);
    }
    if (!postData.image && postData.imagePreview === "") {
      formData.append("removeImage", true);
    }

    updatePost.mutate(
      { id, data: formData },
      {
        onSuccess: () => {
          toast.success("Post updated");
          navigate("/feed");
        },
      }
    );
  };

  const handleDelete = () => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    deletePost.mutate(id, {
      onSuccess: () => {
        toast.success("Post deleted");
        navigate("/feed");
      },
    });
  };

  if (isLoading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-400 text-lg font-medium">
      Loading post...
    </div>
  );
}

  return (
    <div className="h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center justify-center px-4 py-6 ">
      <div className="w-full max-w-lg bg-slate-900/80 border border-slate-800 rounded-3xl shadow-2xl p-2 space-y-4 mt-4 mb-20 ">

        <div className="space-y-1 text-center">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-wide">
            EDIT POST
          </h1>
          <p className="text-xs text-slate-400">
            Update or delete your post
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

       
          <div className="space-y-3">
            <h2 className="text-sm font-semibold tracking-wide text-slate-200">IMAGE</h2>

            <div className="flex flex-col items-center gap-4">
              {postData.imagePreview ? (
                <div className="relative w-full rounded-xl overflow-hidden border border-sky-500/40 shadow-lg shadow-sky-500/20">
                  <img
                    src={postData.imagePreview}
                    className="w-full h-48 object-cover"
                    alt="Preview"
                  />

                  <button
                    type="button"
                    className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-2 text-xs hover:bg-black/80 transition"
                    onClick={handleRemoveImage}
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/60 h-44 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-sky-500/60 hover:bg-slate-900 transition shadow-md"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <i className="fas fa-cloud-upload-alt text-3xl text-sky-500"></i>
                  <p className="text-sm text-slate-300">
                    Click to upload image
                  </p>
                </div>
              )}

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </div>
          </div>

     
          <div className="space-y-3">
            <h2 className="text-sm font-semibold tracking-wide text-slate-200">CONTENT</h2>

            <div className="relative">
              <textarea
                value={postData.content}
                onChange={(e) =>
                  setPostData((prev) => ({ ...prev, content: e.target.value }))
                }
                placeholder="What's on your mind?"
                maxLength={500}
                className="w-full h-20 rounded-xl bg-slate-950/60 border border-slate-700 px-3 py-3 text-sm text-slate-100 placeholder:text-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70"
              />

              <div className="absolute bottom-2 right-3 text-xs text-slate-500">
                {postData.content.length}/500
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={updatePost.isPending}
            className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 mt-4 rounded-full text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/40 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {updatePost.isPending ? (
              <>
                <span className="h-4 w-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></span>
                UPDATING...
              </>
            ) : (
              <>
                <i className="fas fa-save" /> UPDATE POST
              </>
            )}
          </button>
        </form>

        
        <button
          onClick={handleDelete}
          className="w-full mt-3 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-500/40 transition"
        >
          <i className="fas fa-trash" /> DELETE POST
        </button>
      </div>
    </div>
  );
};

export default EditPost;
