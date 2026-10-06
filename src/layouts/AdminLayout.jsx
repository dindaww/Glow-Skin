import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/Sidebar";

export default function AdminLayout() {
  const [
    sidebarOpen,
    setSidebarOpen,
  ] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f4f1] text-gray-900">

      <div className="flex min-h-screen">

        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div className="flex-1 flex flex-col">

          {/* MOBILE HEADER */}

          <header className="md:hidden h-16 bg-white border-b border-gray-200 px-5 flex items-center justify-between">

            <h1 className="font-display text-2xl">
              Glowé
            </h1>

            <button
              onClick={() =>
                setSidebarOpen(
                  !sidebarOpen
                )
              }
              className="text-xl"
            >
              ☰
            </button>

          </header>


          {/* CONTENT */}

          <main className="flex-1 p-5 md:p-10 overflow-y-auto">

            <Outlet />

          </main>


          {/* FOOTER */}

          <footer className="bg-white border-t border-gray-200 px-6 py-5">

            <p className="text-xs text-gray-400 text-center uppercase tracking-widest">
              Glowé Skin — Admin Dashboard
            </p>

          </footer>

        </div>

      </div>

    </div>
  );
}