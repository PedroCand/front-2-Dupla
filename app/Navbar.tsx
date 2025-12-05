"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [submenuAberto, setSubmenuAberto] = useState<string | null>(null);

  const toggleMenu = () => setMenuAberto((prev) => !prev);

  const toggleSubmenu = (nome: string) => {
    setSubmenuAberto((atual) => (atual === nome ? null : nome));
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <Image
            src="/clinica.webp"
            alt="Clínica Vida Saudável"
            width={40}
            height={40}
          />
        </div>

        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Abrir menu de navegação"
        >
          <Image src="/mobile.png" alt="Menu" width={32} height={32} />
        </button>

        <nav className={`navbar-menu ${menuAberto ? "is-open" : ""}`}>
          <Link href="/">Home</Link>

          <div
            className={`dropdown ${
              submenuAberto === "especialidades" ? "open" : ""
            }`}
          >
            <button
              className="dropdown-toggle"
              type="button"
              onClick={() => toggleSubmenu("especialidades")}
            >
              Especialidades
            </button>
            <div className="dropdown-menu">
              <Link href="/">listar</Link>
              <Link href="/">Pediatria</Link>
              <Link href="/">Dermatologia</Link>
            </div>
          </div>

          <div
            className={`dropdown ${submenuAberto === "medicos" ? "open" : ""}`}
          >
            <button
              className="dropdown-toggle"
              type="button"
              onClick={() => toggleSubmenu("medicos")}
            >
              Médicos
            </button>
            <div className="dropdown-menu">
              <Link href="/medicos/listar">Lista de médicos</Link>
              <Link href="/medicos/cadastrar">Cadastrar médico</Link>
            </div>
          </div>

          <div
            className={`dropdown ${
              submenuAberto === "pacientes" ? "open" : ""
            }`}
          >
            <button
              className="dropdown-toggle"
              type="button"
              onClick={() => toggleSubmenu("pacientes")}
            >
              Pacientes
            </button>
            <div className="dropdown-menu">
              <Link href="/pacientes/listar">Lista de pacientes</Link>
              <Link href="/pacientes/cadastrar">Cadastrar paciente</Link>
            </div>
          </div>

          <div
            className={`dropdown ${
              submenuAberto === "consultas" ? "open" : ""
            }`}
          >
            <button
              className="dropdown-toggle"
              type="button"
              onClick={() => toggleSubmenu("consultas")}
            >
              Consultas
            </button>
            <div className="dropdown-menu">
              <Link href="/consultas/listar">Lista de consultas</Link>
              <Link href="/agenda">Agendar consulta</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
