"use client";

import "./globals.css";
import Image from "next/image";
import { useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="pt-BR">
      <body>
        <nav className="navbar">
          <ul className="navbar-list">

            <li className="navbar-logo">
              <Image
                src="/logo (1).webp"
                alt="Logo"
                width={40}
                height={40}
              />
            </li>

            <div className="menu-desktop">
              <li>Home</li>
              <li>Especialidades</li>
              <li>Médicos</li>
              <li>Pacientes</li>
              <li>Consultas</li>
            </div>

            <div className="menu-icon" onClick={() => setOpen(true)}>
              <Image
                src="/images__4_-removebg-preview.png" 
                alt="Menu"
                width={32}
                height={32}
              />
            </div>
          </ul>
        </nav>

        {/* Drawer lateral */}
        <div className={`drawer ${open ? "drawer-open" : ""}`}>
          <div className="drawer-header">
            <span className="drawer-close" onClick={() => setOpen(false)}>×</span>
          </div>

          <ul className="drawer-list">
            <li>Home</li>
            <li>Especialidades</li>
            <li>Médicos</li>
            <li>Pacientes</li>
            <li>Consultas</li>
          </ul>
        </div>

        {children}
      </body>
    </html>
  );
}
