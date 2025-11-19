import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AppLayout";
import SignIn from "./pages/sign-in/Sign-in";
import SignUp from "./pages/sign-up/Sign-up";
import FeedPage from "./pages/feed/FeedPage";
import Profile from "./pages/profile/profile";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <SignIn /> },
      { path: "/register", element: <SignUp /> },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Profile/> },
      
    ],
  },
]);
export default router;