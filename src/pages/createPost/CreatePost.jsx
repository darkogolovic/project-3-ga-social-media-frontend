import React, { useState, useRef } from "react";
import { useCreatePost } from "../../hooks/usePosts.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const CreatePost = () => {
  const createPost = useCreatePost();
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    content: "",
    image: null,
    imagePreview: "",
  });

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

    if (!postData.content.trim() && !postData.image) {
      toast.error("Please add a caption or image");
      return;
    }

    const formData = new FormData();
    formData.append("content", postData.content);
    if (postData.image) formData.append("image", postData.image);

    createPost.mutate(formData, {
      onSuccess: () => {
        toast.success("Post created");
        navigate("/feed");
        setPostData({ content: "", image: null, imagePreview: "" });
        if (fileInputRef.current) fileInputRef.current.value = "";
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center justify-center px-4 py-6 ">
      <div
        className="w-full max-w-lg bg-slate-900/80 border border-slate-800 rounded-3xl shadow-2xl p-4 sm:p-6 space-y-4 mt-4 mb-20"
      >
        
        <div className="space-y-1 text-center">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-wide">
            CREATE  POST
          </h1>
          <p className="text-xs text-slate-400">
            Share your thoughts with the world
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
         
          <div className="space-y-3">
            <h2 className="text-sm font-semibold tracking-wide text-slate-200">
              UPLOAD IMAGE
            </h2>

            <div className="flex flex-col items-center gap-4">
              {postData.imagePreview ? (
                <div className="relative w-full rounded-xl overflow-hidden border border-sky-500/40 shadow-lg shadow-sky-500/20">
                  <img
                    src={postData.imagePreview}
                    className="w-full h-64 object-cover"
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
                  <span className="text-xs text-slate-500">
                    PNG, JPG, GIF up to 10MB
                  </span>
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
            <h2 className="text-sm font-semibold tracking-wide text-slate-200">
              CONTENT
            </h2>

            <div className="relative">
              <textarea
                value={postData.content}
                onChange={(e) =>
                  setPostData((prev) => ({ ...prev, content: e.target.value }))
                }
                placeholder="What's on your mind?"
                maxLength={500}
                className="w-full h-32 rounded-xl bg-slate-950/60 border border-slate-700 px-3 py-3 text-sm text-slate-100 placeholder:text-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70"
              />

              <div className="absolute bottom-2 right-3 text-xs text-slate-500">
                {postData.content.length}/500
              </div>
            </div>
          </div>

          
          <button
            type="submit"
            disabled={createPost.isPending}
            className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 mt-4 rounded-full text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/40 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {createPost.isPending ? (
              <>
                <span className="h-4 w-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></span>
                CREATING...
              </>
            ) : (
              <>
                <i className="fas fa-plus" />
                CREATE  POST
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
