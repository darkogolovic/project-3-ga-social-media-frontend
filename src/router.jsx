import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AppLayout";
import SignIn from "./pages/sign-in/Sign-in";
import SignUp from "./pages/sign-up/Sign-up";
import FeedPage from "./pages/feed/FeedPage";
import Profile from "./pages/profile/profile";
import Verify from "./pages/verify/Verify";
import Conversations from "./pages/conversation/Conversations";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/", element: <SignIn /> },
      { path: "/register", element: <SignUp /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/profile", element: <Profile/> },
      { path: "/feed", element: <FeedPage/> },
      {path:'/verify', element:<Verify />},
      {path:'/conversations',element:<Conversations />}
      
    ],
  },
]);
export default router;