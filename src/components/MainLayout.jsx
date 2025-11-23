
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/navBar";

export default function MainLayout() {
  return (
    <>
      
      <Outlet />
      <NavBar />
    </>
  );
};