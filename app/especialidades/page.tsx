"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Especialidades() {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showEspecialidades, setShowEspecialidades] = useState(false);
  const [selectedEspecialidade, setSelectedEspecialidade] = useState(null);

  const especialidades = [
    { id: 3, nome: "Cardiologia", descricao: "Tratamento de doenças do coração." },
    { id: 1, nome: "Clínico Geral", descricao: "Atendimento básico e diagnóstico inicial." },
    { id: 4, nome: "Dermatologia", descricao: "Tratamento de doenças da pele." },
    { id: 5, nome: "Ortopedia", descricao: "Cuidados com ossos e articulações." },
    { id: 2, nome: "Pediatria", descricao: "Cuidados médicos para crianças e adolescentes." },
  ];

  const filteredEspecialidades = especialidades.filter((especialidade) =>
    especialidade.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuscarClick = () => {
    setShowEspecialidades(true);
  };

  const handleSelectEspecialidade = (nome: string) => {
    setSelectedEspecialidade(nome);
    setShowEspecialidades(false);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>Logo</div>

        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {menuOpen && (
          <nav className={styles.nav}>
            <ul>
              <li><a href="">Listar</a></li>
              <li><a href="">Adicionar</a></li>
              <li><a href="">Editar</a></li>
              <li><a href="">Excluir</a></li>
            </ul>
          </nav>
        )}
      </header>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Digite o nome da especialidade"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleBuscarClick}>
          Buscar Especialidade
        </button>
      </div>

      {showEspecialidades && (
        <div className={styles.especialidadesList}>
          <h2>Selecione uma Especialidade</h2>
          <ul>
            {filteredEspecialidades.map((especialidade) => (
              <li
                key={especialidade.id}
                onClick={() =>
                  handleSelectEspecialidade(especialidade.nome)
                }
              >
                {especialidade.nome}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedEspecialidade && (
        <div className={styles.selectedEspecialidade}>
          <h3>
            Especialidade Selecionada: {selectedEspecialidade}
          </h3>
        </div>
      )}

      <div className={styles.tableContainer}>
        <h2>Lista de Especialidades Médicas</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {especialidades.map((especialidade) => (
              <tr key={especialidade.id}>
                <td>{especialidade.id}</td>
                <td>{especialidade.nome}</td>
                <td>{especialidade.descricao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
