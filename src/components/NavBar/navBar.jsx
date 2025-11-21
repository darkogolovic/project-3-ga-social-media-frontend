import { Link } from "react-router-dom";

const Navbar = () => {
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
      text-2xl
    ">
      {/* HOME */}
      <Link
        to="/feed"
        className="
          p-3 rounded-2xl 
          hover:bg-slate-800/60 
          hover:shadow-lg hover:shadow-sky-500/20 
          transition
        "
      >
        🏠
      </Link>

      {/* CHATS */}
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

      {/* CREATE POST */}
      <Link
        to="/createPost"
        className="
          p-3 rounded-2xl 
          hover:bg-slate-800/60 
          hover:shadow-lg hover:shadow-sky-500/20 
          transition
        "
      >
        ➕
      </Link>

      {/* PROFILE */}
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
    </nav>
  );
};

export default Navbar;
