// import "./profile.css"; // više ne treba
import { useCurrentUser } from "../../hooks/useCurrentUser.js";
import { useMyPosts } from "../../hooks/useMyPosts.js";

const FALLBACK_AVATAR =
  "https://ui-avatars.com/api/?name=C+User&background=0f172a&color=f9fafb";

const Profile = () => {
  const { data: user, isLoading } = useCurrentUser();
  const { data: posts = [], isLoading: postsLoading } = useMyPosts(user?._id);

  const loading = isLoading || postsLoading;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center justify-center">
        <p className="text-sm text-slate-300">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col items-center px-4 py-6">
      <div className="w-full max-w-4xl space-y-6">
        {/* Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-slate-900/70 border border-slate-800 rounded-3xl px-5 py-5 shadow-2xl shadow-black/60 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-2 border-slate-700 bg-slate-800 flex items-center justify-center">
              <img
                src={user.avatar || FALLBACK_AVATAR}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              <h1 className="text-xl sm:text-2xl font-semibold break-all">
                @{user.username}
              </h1>
              {user.email && (
                <p className="text-xs sm:text-sm text-slate-400 break-all">
                  {user.email}
                </p>
              )}
              <p className="text-xs text-slate-500">
                Member since{" "}
                {user.createdAt &&
                  !isNaN(new Date(user.createdAt)) &&
                  new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-3">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-lg font-semibold">{posts.length}</div>
                <div className="text-xs text-slate-400">Posts</div>
              </div>
              {/* Placeholder za followere ako bude trebalo kasnije */}
              {/* <div className="text-center">
                <div className="text-lg font-semibold">0</div>
                <div className="text-xs text-slate-400">Followers</div>
              </div> */}
            </div>

            <button className="w-full sm:w-auto inline-flex justify-center px-4 py-2 rounded-full text-xs font-semibold bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-100 transition">
              Edit Profile
            </button>
          </div>
        </header>

        {/* Posts section */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-5 shadow-2xl shadow-black/60">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold tracking-wide text-slate-200">
              POSTS
            </h2>
            <span className="text-xs text-slate-400">
              {posts.length > 0
                ? `${posts.length} post${posts.length !== 1 ? "s" : ""}`
                : "No posts yet"}
            </span>
          </div>

          {posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center text-slate-400 text-sm">
              <p>You haven&apos;t posted anything yet.</p>
              <p className="text-xs text-slate-500 mt-1">
                Start sharing moments with your circle.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-800 border border-slate-800 hover:border-sky-500/60 transition shadow-lg shadow-black/40"
                >
                  <img
                    src={post.image}
                    alt="Post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay info (ako dodaš likes/comments kasnije) */}
                  {/* <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-xs text-slate-50">
                    {post.likes?.length || 0} likes
                  </div> */}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Profile;