import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AppLayout";
import SignIn from "./pages/sign-in/Sign-in";
import SignUp from "./pages/sign-up/Sign-up";
import FeedPage from "./pages/feed/FeedPage";
import Verify from "./pages/verify/Verify";

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
      { path: "/", element: <FeedPage/> },
      {path:'/verify', element:<Verify />}
      
    ],
  },
]);
export default router;