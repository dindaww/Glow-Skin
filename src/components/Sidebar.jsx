import { Link, useLocation } from "react-router-dom";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path;

  return (
    <aside
      className={`
        ${
          sidebarOpen
            ? "fixed inset-0 z-50"
            : "hidden"
        }
        md:relative md:block
        w-64
        bg-white
        border-r border-gray-200
        shrink-0
      `}
    >

      <div className="h-full flex flex-col">

        {/* BRAND */}

        <div className="px-7 py-8 border-b border-gray-200">

          <Link
            to="/admin/dashboard"
            className="font-display text-3xl"
          >
            Glowé
          </Link>

          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mt-1">
            Administration
          </p>

        </div>


        {/* MENU */}

        <nav className="flex-1 p-5 space-y-1">

          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 px-3 mb-3">
            Management
          </p>

          <Link
            to="/admin/dashboard"
            onClick={() =>
              setSidebarOpen(false)
            }
            className={`
              block px-3 py-3 text-sm transition
              ${
                isActive("/admin/dashboard")
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            Dashboard
          </Link>


          <Link
            to="/admin/about"
            onClick={() =>
              setSidebarOpen(false)
            }
            className={`
              block px-3 py-3 text-sm transition
              ${
                isActive("/admin/about")
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            About
          </Link>


          <div className="border-t border-gray-200 my-6" />


          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 px-3 mb-3">
            Website
          </p>

          <Link
            to="/"
            onClick={() =>
              setSidebarOpen(false)
            }
            className="block px-3 py-3 text-sm text-gray-600 hover:bg-gray-100 transition"
          >
            View Store
          </Link>

        </nav>


        {/* BOTTOM */}

        <div className="border-t border-gray-200 p-5">

          <p className="text-xs text-gray-400">
            Glowé Skin
          </p>

          <p className="text-[10px] text-gray-400 mt-1">
            Admin Panel · 2026
          </p>

        </div>

      </div>

    </aside>
  );
}