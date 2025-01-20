'use client'
import { useAuth } from "@/app/lib/AuthContext";
import Link from "next/link";

function SideBar({children}) {
  const {user} = useAuth();
    return (  
        <>
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
    {children}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      {!(user) && <li><Link href="/user/login">Login</Link></li>}
      {!(user) && <li><Link href="/user/register">Register</Link></li>}
      {user && <li><Link href="/user/logout">Logout</Link></li>}
      {user && <li><Link href="/user/profile">Profile</Link></li>}
      {user && <li><Link href="/user/cars">Cars</Link></li>}
    </ul>
  </div>
</div>
        </>
    );
}

export default SideBar;