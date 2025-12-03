"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (name: string) => {
    setOpenMenu((prev) => (prev === name ? "" : name));
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        
        {/* Logo */}
        <li className="navbar-logo">
          <Link href="/">
            <img src="/clinica.webp" alt="Logo" width={40} height={40} />
          </Link>
        </li>

        {/* Home */}
        <li>
          <Link href="/">Home</Link>
        </li>

        {/* Especialidades */}
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

        {/* Médicos */}
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

        {/* Pacientes */}
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

        {/* Consultas */}
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

      </ul>
    </nav>
  );
}
