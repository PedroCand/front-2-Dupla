"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  // Alterna dropdown por clique
  function toggleDropdown(name: string) {
    setOpenDropdown(openDropdown === name ? null : name);
  }

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fecha com ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setDrawerOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav className="navbar" ref={navRef}>
        <ul className="navbar-list">

          {/* Logo */}
          <li className="navbar-logo">
            <Link href="/">
              <Image src="/logo.webp" alt="Logo" width={40} height={40} />
            </Link>
          </li>

          {/* Home */}
          <li className="menu-item">
            <Link href="/">Home</Link>
          </li>

          {/* Especialidades */}
          <li className="menu-item dropdown">
            <button
              type="button"
              className="dropdown-btn"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown("especialidades");
              }}
            >
              Especialidades
            </button>

            <div
              className={`dropdown-menu ${
                openDropdown === "especialidades" ? "show" : ""
              }`}
            >
              <Link href="/especialidades/listar">Listar</Link>
              <Link href="/especialidades/adicionar">Adicionar</Link>
              <Link href="/especialidades/editar">Editar</Link>
              <Link href="/especialidades/excluir">Excluir</Link>
            </div>
          </li>

          {/* Médicos */}
          <li className="menu-item dropdown">
            <button
              type="button"
              className="dropdown-btn"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown("medicos");
              }}
            >
              Médicos
            </button>

            <div
              className={`dropdown-menu ${
                openDropdown === "medicos" ? "show" : ""
              }`}
            >
              <Link href="/medicos/listar">Listar</Link>
              <Link href="/medicos/adicionar">Adicionar</Link>
              <Link href="/medicos/editar">Editar</Link>
              <Link href="/medicos/excluir">Excluir</Link>
            </div>
          </li>

          {/* Pacientes */}
          <li className="menu-item dropdown">
            <button
              type="button"
              className="dropdown-btn"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown("pacientes");
              }}
            >
              Pacientes
            </button>

            <div
              className={`dropdown-menu ${
                openDropdown === "pacientes" ? "show" : ""
              }`}
            >
              <Link href="/pacientes/listar">Listar</Link>
              <Link href="/pacientes/adicionar">Adicionar</Link>
              <Link href="/pacientes/editar">Editar</Link>
              <Link href="/pacientes/excluir">Excluir</Link>
            </div>
          </li>

          {/* Consultas */}
          <li className="menu-item dropdown">
            <button
              type="button"
              className="dropdown-btn"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown("consultas");
              }}
            >
              Consultas
            </button>

            <div
              className={`dropdown-menu ${
                openDropdown === "consultas" ? "show" : ""
              }`}
            >
              <Link href="/consultas/listar">Listar</Link>
              <Link href="/consultas/adicionar">Adicionar</Link>
              <Link href="/consultas/editar">Editar</Link>
              <Link href="/consultas/excluir">Excluir</Link>
            </div>
          </li>

          {/* Ícone mobile */}
          <li className="menu-item menu-icon" onClick={() => setDrawerOpen(true)}>
            <Image src="/menu-icon.webp" alt="Menu" width={32} height={32} />
          </li>
        </ul>
      </nav>

      {/* Drawer mobile */}
      <div className={`drawer ${drawerOpen ? "drawer-open" : ""}`}>
        <div className="drawer-header">
          <button className="drawer-close" onClick={() => setDrawerOpen(false)}>
            ×
          </button>
        </div>
        

        <ul className="drawer-list">
          <li><Link href="/" onClick={() => setDrawerOpen(false)}>Home</Link></li>

          <li><strong>Especialidades</strong></li>
          <li><Link href="/especialidades/listar" onClick={() => setDrawerOpen(false)}>Listar</Link></li>
          <li><Link href="/especialidades/adicionar" onClick={() => setDrawerOpen(false)}>Adicionar</Link></li>

          <li><strong>Médicos</strong></li>
          <li><Link href="/medicos/listar" onClick={() => setDrawerOpen(false)}>Listar</Link></li>

          <li><strong>Pacientes</strong></li>
          <li><Link href="/pacientes/listar" onClick={() => setDrawerOpen(false)}>Listar</Link></li>

          <li><strong>Consultas</strong></li>
          <li><Link href="/consultas/listar" onClick={() => setDrawerOpen(false)}>Listar</Link></li>
        </ul>
      </div>
    </>
  );
}
