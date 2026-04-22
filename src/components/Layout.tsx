import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Layout() {
  return (
    <div className="site">
      <Nav />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
