"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  // estado para cada dropdown
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">

        {/* LOGO */}
        <li className="navbar-logo">
          <Link href="/">
            <Image src="/logo.webp" alt="Logo" width={40} height={40} />
          </Link>
        </li>

        {/* MENU DESKTOP */}
        <div className="menu-desktop">

          <Link href="/">Home</Link>

          {/* --- Especialidades --- */}
          <div className="dropdown"
               onMouseEnter={() => setActiveMenu("esp")}
               onMouseLeave={() => setActiveMenu(null)}>
            
            <button
              className="dropdown-btn"
              onClick={() => toggleMenu("esp")}
            >
              Especialidades
            </button>

            <div className={`dropdown-menu ${activeMenu === "esp" ? "show" : ""}`}>
              <Link href="/especialidades/listar">Listar</Link>
              <Link href="/especialidades/adicionar">Adicionar</Link>
              <Link href="/especialidades/editar">Editar</Link>
              <Link href="/especialidades/excluir">Excluir</Link>
            </div>
          </div>

          {/* --- Médicos --- */}
          <div className="dropdown"
               onMouseEnter={() => setActiveMenu("med")}
               onMouseLeave={() => setActiveMenu(null)}>

            <button
              className="dropdown-btn"
              onClick={() => toggleMenu("med")}
            >
              Médicos
            </button>

            <div className={`dropdown-menu ${activeMenu === "med" ? "show" : ""}`}>
              <Link href="/medicos/listar">Listar</Link>
              <Link href="/medicos/adicionar">Adicionar</Link>
              <Link href="/medicos/editar">Editar</Link>
              <Link href="/medicos/excluir">Excluir</Link>
            </div>
          </div>

          {/* --- Pacientes --- */}
          <div className="dropdown"
               onMouseEnter={() => setActiveMenu("pac")}
               onMouseLeave={() => setActiveMenu(null)}>
            
            <button
              className="dropdown-btn"
              onClick={() => toggleMenu("pac")}
            >
              Pacientes
            </button>

            <div className={`dropdown-menu ${activeMenu === "pac" ? "show" : ""}`}>
              <Link href="/pacientes/listar">Listar</Link>
              <Link href="/pacientes/adicionar">Adicionar</Link>
              <Link href="/pacientes/editar">Editar</Link>
              <Link href="/pacientes/excluir">Excluir</Link>
            </div>
          </div>

          {/* --- Consultas --- */}
          <div className="dropdown"
               onMouseEnter={() => setActiveMenu("con")}
               onMouseLeave={() => setActiveMenu(null)}>
            
            <button
              className="dropdown-btn"
              onClick={() => toggleMenu("con")}
            >
              Consultas
            </button>

            <div className={`dropdown-menu ${activeMenu === "con" ? "show" : ""}`}>
              <Link href="/consultas/listar">Listar</Link>
              <Link href="/consultas/adicionar">Adicionar</Link>
              <Link href="/consultas/editar">Editar</Link>
              <Link href="/consultas/excluir">Excluir</Link>
            </div>
          </div>

        </div>

        <div className="menu-icon" onClick={() => setOpen(true)}>
          <Image src="/menu-icon.webp" alt="Menu" width={32} height={32} />
        </div>
      </ul>

      <div className={`drawer ${open ? "drawer-open" : ""}`}>
        <div className="drawer-header">
          <span className="drawer-close" onClick={() => setOpen(false)}>×</span>
        </div>

        <ul className="drawer-list">
          <li><Link href="/">Home</Link></li>

          <li><strong>Especialidades</strong></li>
          <li><Link href="/especialidades/listar">Listar</Link></li>
          <li><Link href="/especialidades/adicionar">Adicionar</Link></li>
          <li><Link href="/especialidades/editar">Editar</Link></li>
          <li><Link href="/especialidades/excluir">Excluir</Link></li>

          <li><strong>Médicos</strong></li>
          <li><Link href="/medicos/listar">Listar</Link></li>
          <li><Link href="/medicos/adicionar">Adicionar</Link></li>
          <li><Link href="/medicos/editar">Editar</Link></li>
          <li><Link href="/medicos/excluir">Excluir</Link></li>

          <li><strong>Pacientes</strong></li>
          <li><Link href="/pacientes/listar">Listar</Link></li>
          <li><Link href="/pacientes/adicionar">Adicionar</Link></li>
          <li><Link href="/pacientes/editar">Editar</Link></li>
          <li><Link href="/pacientes/excluir">Excluir</Link></li>

          <li><strong>Consultas</strong></li>
          <li><Link href="/consultas/listar">Listar</Link></li>
          <li><Link href="/consultas/adicionar">Adicionar</Link></li>
          <li><Link href="/consultas/editar">Editar</Link></li>
          <li><Link href="/consultas/excluir">Excluir</Link></li>
        </ul>
      </div>
    </nav>
  );
}
