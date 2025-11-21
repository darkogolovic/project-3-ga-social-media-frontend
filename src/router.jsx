import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AppLayout";
import SignIn from "./pages/sign-in/Sign-in";
import SignUp from "./pages/sign-up/sign-up";
import FeedPage from "./pages/feed/FeedPage";
import Profile from "./pages/profile/profile";
import Verify from "./pages/verify/Verify";
import Conversations from "./pages/conversation/Conversations";
import CreatePost from "./pages/createPost/CreatePost";
import Messages from "./pages/messages/messages";
import EditProfile from "./pages/edit/EditProfile";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/", element: <SignIn /> },
      { path: "/register", element: <SignUp /> },
      {path:'/verify', element:<Verify />},
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/profile", element: <Profile/> },
      { path: "/feed", element: <FeedPage/> },
      {path:'/conversations',element:<Conversations />},
      {path: '/createPost',element:<CreatePost />},
      {path: '/messages',element:<Messages />},
      {path: '/editProfile',element:<EditProfile/>}
      
    ],
  },
]);
export default router;