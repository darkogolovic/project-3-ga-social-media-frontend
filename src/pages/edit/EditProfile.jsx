// nema više: import "./EditProfile.css";
import React, { useState, useRef } from "react";

const DEFAULT_IMAGE = "https://via.placeholder.com/150";

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [profileImage, setProfileImage] = useState(DEFAULT_IMAGE);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(DEFAULT_IMAGE);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (
      profileData.newPassword &&
      profileData.newPassword !== profileData.confirmPassword
    ) {
      alert("New passwords do not match!");
      setIsLoading(false);
      return;
    }

    if (profileData.newPassword && profileData.newPassword.length < 6) {
      alert("Password must be at least 6 characters long!");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      console.log("Profile updated:", profileData);
      alert("Profile updated successfully!");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-xl bg-slate-900/80 border border-slate-800 rounded-3xl shadow-2xl shadow-black/70 p-6 sm:p-8 space-y-6">
        {/* Header u istom stilu */}
        <div className="space-y-1 text-center">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-wide">
            EDIT PROFILE
          </h1>
          <p className="text-xs text-slate-400">
            Update your profile picture and change your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Slika profila */}
          <div className="flex flex-col items-center gap-4">
            <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden border-2 border-sky-500/60 bg-slate-900 flex items-center justify-center shadow-lg shadow-sky-500/30">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                className="inline-flex justify-center items-center px-4 py-2 rounded-full text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/40 transition"
                onClick={() => fileInputRef.current?.click()}
              >
                Change picture
              </button>

              {profileImage !== DEFAULT_IMAGE && (
                <button
                  type="button"
                  className="inline-flex justify-center items-center px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 transition"
                  onClick={handleRemoveImage}
                >
                  Remove picture
                </button>
              )}
            </div>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
          </div>

          {/* Password sekcija */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold tracking-wide text-slate-200">
              CHANGE PASSWORD
            </h2>

            <div className="space-y-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs text-slate-300">
                  Current password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={profileData.currentPassword}
                  onChange={handleInputChange}
                  placeholder="Enter current password"
                  className="w-full rounded-xl bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-slate-300">New password</label>
                <input
                  type="password"
                  name="newPassword"
                  value={profileData.newPassword}
                  onChange={handleInputChange}
                  placeholder="Enter new password"
                  className="w-full rounded-xl bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs text-slate-300">
                  Confirm new password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={profileData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm new password"
                  className="w-full rounded-xl bg-slate-950/60 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500/70"
                />
              </div>
            </div>
          </div>

          {/* Dugmad */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-lg shadow-sky-500/40 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <span className="h-4 w-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                  <span>Updating...</span>
                </>
              ) : (
                <span>Update profile</span>
              )}
            </button>

            <button
              type="button"
              className="w-full inline-flex justify-center items-center px-4 py-2.5 rounded-full text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 transition"
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;