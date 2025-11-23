import { Link } from "react-router-dom";

const Navbar = () => {
  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="
  fixed bottom-4 left-1/2 -translate-x-1/2
  w-[90%] max-w-md 
  bg-slate-900/80 backdrop-blur-xl
  border border-slate-800
  rounded-3xl 
  shadow-2xl shadow-black/60
  flex items-center justify-between
  px-6 py-3
  text-xl sm:text-2xl
">

  <Link
    to="/feed"
    className="
      p-3 rounded-full
      bg-slate-800/80
      border border-slate-700
      hover:bg-slate-700/60 
      hover:shadow-lg hover:shadow-sky-500/20 
      transition
    "
  >
    🏠
  </Link>

  <Link
    to="/conversations"
    className="
      p-3 rounded-full
      bg-slate-800/80
      border border-slate-700
      hover:bg-slate-700/60 
      hover:shadow-lg hover:shadow-sky-500/20 
      transition
    "
  >
    💬
  </Link>

  <Link
    to="/createPost"
    className="
      p-3 rounded-full
      bg-slate-800/80
      border border-slate-700
      hover:bg-slate-700/60 
      hover:shadow-lg hover:shadow-sky-500/20 
      transition
    "
  >
    ➕
  </Link>

  <Link
    to="/profile"
    className="
      p-3 rounded-full
      bg-slate-800/80
      border border-slate-700
      hover:bg-slate-700/60 
      hover:shadow-lg hover:shadow-sky-500/20 
      transition
    "
  >
    👤
  </Link>

  <button
    onClick={handleSignOut}
    className="
      p-3 rounded-full
      bg-slate-800/80
      border border-slate-700
      hover:bg-slate-700/60 
      hover:shadow-lg hover:shadow-sky-500/20 
      transition text-sm text-slate-300
      md:hidden
    "
    title="Sign Out"
  >
    SIGN OUT
  </button>

</nav>

  );
};

export default Navbar;
