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
      text-2xl
    ">
    
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
          p-3 rounded-2xl 
          hover:bg-slate-800/60 
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
          p-2 text-slate-400 hover:text-sky-400 
          hover:bg-slate-800/50 rounded-xl 
          transition text-sm
        "
        title="Sign Out"
      >
        Sign out
      </button>
    </nav>
  );
};

export default Navbar;
