import { Outlet } from "react-router-dom";
import Navbar from "@src/components/Navbar";

export function PublicLayout() {
  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  );
}
