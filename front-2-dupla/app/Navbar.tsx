"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">

          {/* Logo */}
          <li className="navbar-logo">
            <Image src="/logo.webp" alt="Logo" width={40} height={40} />
          </li>

          {/* Menu Desktop */}
          <div className="menu-desktop">
            <li>Home</li>
            <li>Especialidades</li>
            <li>Médicos</li>
            <li>Pacientes</li>
            <li>Consultas</li>
          </div>

          {/* Menu Mobile Button */}
          <div className="menu-icon" onClick={() => setOpen(true)}>
            <Image src="/menu-icon.webp" alt="Menu" width={32} height={32} />
          </div>
        </ul>
      </nav>

      {/* Drawer Mobile */}
      <div className={`drawer ${open ? "drawer-open" : ""}`}>
        <div className="drawer-header">
          <span className="drawer-close" onClick={() => setOpen(false)}>
            ×
          </span>
        </div>

        <ul className="drawer-list">
          <li>Home</li>
          <li>Especialidades</li>
          <li>Médicos</li>
          <li>Pacientes</li>
          <li>Consultas</li>
        </ul>
      </div>
    </>
  );
}
