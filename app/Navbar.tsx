"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) =>
    setOpenMenu(openMenu === menu ? null : menu);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-logo">
          <Link to="/">
            <Image src="/clinica.webp" alt="Logo" width={40} height={40} />
          </Link>
        </li>

        <div className="menu-desktop">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li className="dropdown">
            <button className="dropdown-btn" onClick={() => toggleMenu("esp")}>
              Especialidades
            </button>
            <div className={`dropdown-menu ${openMenu === "esp" ? "show" : ""}`}>
              <Link to="/especialidades/listar">Listar</Link>
              <Link to="/especialidades/adicionar">Adicionar</Link>
              <Link to="/especialidades/editar">Editar</Link>
              <Link to="/especialidades/excluir">Excluir</Link>
            </div>
          </li>

          <li className="dropdown">
            <button className="dropdown-btn" onClick={() => toggleMenu("med")}>
              Médicos
            </button>
            <div className={`dropdown-menu ${openMenu === "med" ? "show" : ""}`}>
              <Link to="/medicos/listar">Listar</Link>
              <Link to="/medicos/adicionar">Adicionar</Link>
              <Link to="/medicos/editar">Editar</Link>
              <Link to="/medicos/excluir">Excluir</Link>
            </div>
          </li>

          <li className="dropdown">
            <button className="dropdown-btn" onClick={() => toggleMenu("pac")}>
              Pacientes
            </button>
            <div className={`dropdown-menu ${openMenu === "pac" ? "show" : ""}`}>
              <Link to="/pacientes/listar">Listar</Link>
              <Link to="/pacientes/adicionar">Adicionar</Link>
              <Link to="/pacientes/editar">Editar</Link>
              <Link to="/pacientes/excluir">Excluir</Link>
            </div>
          </li>

          <li className="dropdown">
            <button className="dropdown-btn" onClick={() => toggleMenu("con")}>
              Consultas
            </button>
            <div className={`dropdown-menu ${openMenu === "con" ? "show" : ""}`}>
              <Link to="/consultas/listar">Listar</Link>
              <Link to="/consultas/adicionar">Adicionar</Link>
              <Link to="/consultas/editar">Editar</Link>
              <Link to="/consultas/excluir">Excluir</Link>
            </div>
          </li>
        </div>

        <li className="menu-icon" onClick={() => setOpenDrawer(true)}>
          <Image src="/menu-icon.webp" alt="Menu" width={32} height={32} />
        </li>
      </ul>

      <div className={`drawer ${openDrawer ? "drawer-open" : ""}`}>
        <div className="drawer-header">
          <span className="drawer-close" onClick={() => setOpenDrawer(false)}>
            ×
          </span>
        </div>

        <ul className="drawer-list">
          <li><Link to="/">Home</Link></li>

          <li><strong>Especialidades</strong></li>
          <li><Link to="/especialidades/listar">Listar</Link></li>
          <li><Link to="/especialidades/adicionar">Adicionar</Link></li>
          <li><Link to="/especialidades/editar">Editar</Link></li>
          <li><Link to="/especialidades/excluir">Excluir</Link></li>

          <li><strong>Médicos</strong></li>
          <li><Link to="/medicos/listar">Listar</Link></li>
          <li><Link to="/medicos/adicionar">Adicionar</Link></li>
          <li><Link to="/medicos/editar">Editar</Link></li>
          <li><Link to="/medicos/excluir">Excluir</Link></li>

          <li><strong>Pacientes</strong></li>
          <li><Link to="/pacientes/listar">Listar</Link></li>
          <li><Link to="/pacientes/adicionar">Adicionar</Link></li>
          <li><Link to="/pacientes/editar">Editar</Link></li>
          <li><Link to="/pacientes/excluir">Excluir</Link></li>

          <li><strong>Consultas</strong></li>
          <li><Link to="/consultas/listar">Listar</Link></li>
          <li><Link to="/consultas/adicionar">Adicionar</Link></li>
          <li><Link to="/consultas/editar">Editar</Link></li>
          <li><Link to="/consultas/excluir">Excluir</Link></li>
        </ul>
      </div>
    </nav>
  );
}
