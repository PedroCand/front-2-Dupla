"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  function toggleMenu(menu: string) {
    setOpenMenu(openMenu === menu ? null : menu);
  }

  return (
    <nav className="navbar">
      <ul className="navbar-list">

        {/* LOGO */}
        <li className="navbar-logo">
          <Link href="/">
            <Image src="/clinica.webp" alt="Logo" width={40} height={40} />
          </Link>
        </li>

        {/* MENU DESKTOP */}
        <div className="menu-desktop">

          <li>
            <Link href="/">Home</Link>
          </li>

          {/* ============================
                Especialidades
          ============================== */}
          <li className="dropdown">
            <button className="dropdown-btn" onClick={() => toggleMenu("esp")}>
              Especialidades
            </button>

            <div className={`dropdown-menu ${openMenu === "esp" ? "show" : ""}`}>
              <Link href="/especialidades/listar">Listar</Link>
              <Link href="/especialidades/adicionar">Adicionar</Link>
              <Link href="/especialidades/editar">Editar</Link>
              <Link href="/especialidades/excluir">Excluir</Link>
            </div>
          </li>

          {/* ============================
                Médicos
          ============================== */}
          <li className="dropdown">
            <button className="dropdown-btn" onClick={() => toggleMenu("med")}>
              Médicos
            </button>

            <div className={`dropdown-menu ${openMenu === "med" ? "show" : ""}`}>
              <Link href="/medicos/listar">Listar</Link>
              <Link href="/medicos/adicionar">Adicionar</Link>
              <Link href="/medicos/editar">Editar</Link>
              <Link href="/medicos/excluir">Excluir</Link>
            </div>
          </li>

          {/* ============================
                Pacientes
          ============================== */}
          <li className="dropdown">
            <button className="dropdown-btn" onClick={() => toggleMenu("pac")}>
              Pacientes
            </button>

            <div className={`dropdown-menu ${openMenu === "pac" ? "show" : ""}`}>
              <Link href="/pacientes/listar">Listar</Link>
              <Link href="/pacientes/adicionar">Adicionar</Link>
              <Link href="/pacientes/editar">Editar</Link>
              <Link href="/pacientes/excluir">Excluir</Link>
            </div>
          </li>

          {/* ============================
                Consultas
          ============================== */}
          <li className="dropdown">
            <button className="dropdown-btn" onClick={() => toggleMenu("con")}>
              Consultas
            </button>

            <div className={`dropdown-menu ${openMenu === "con" ? "show" : ""}`}>
              <Link href="/consultas/listar">Listar</Link>
              <Link href="/consultas/adicionar">Adicionar</Link>
              <Link href="/consultas/editar">Editar</Link>
              <Link href="/consultas/excluir">Excluir</Link>
            </div>
          </li>

        </div>

        {/* ÍCONE MOBILE */}
        <li className="menu-icon" onClick={() => setOpenDrawer(true)}>
          <Image src="/menu-icon.webp" alt="Menu" width={32} height={32} />
        </li>
      </ul>

      {/* DRAWER MOBILE */}
      <div className={`drawer ${openDrawer ? "drawer-open" : ""}`}>
        <div className="drawer-header">
          <span className="drawer-close" onClick={() => setOpenDrawer(false)}>×</span>
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
