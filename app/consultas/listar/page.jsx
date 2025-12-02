import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/consultas.css";

const medicos = [
  { id: 1, nome: "Wagner da Silva Ferreira Filho" },
  { id: 2, nome: "Ailla Odorizzi da Costa Teixeira" },
  // ... resto dos médicos
];

const pacientes = [
  { id: 1, nome: "Yarah dos Santos Ferreira" },
  { id: 2, nome: "Albert Murilo Cerozini da Silva" },
  // ... resto dos pacientes
];

const consultas = [
  { id: 111, medico: "Wagner da Silva Ferreira Filho", especialidade: "Clínico Geral", paciente: "Yarah dos Santos Ferreira", tipo: "Plano de Saúde", data: "07/07/2026", hora: "07:00" },
  // ... resto das consultas
];

function ModalBusca({ titulo, placeholder, itens, fechar }) {
  const [termo, setTermo] = useState("");

  const filtrados = itens.filter((item) =>
    item.nome.toLowerCase().includes(termo.toLowerCase())
  );

  return (
    <div className="modal-overlay" onClick={fechar}>
      <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
        <h2>{titulo}</h2>
        <input
          className="modal-input"
          placeholder={placeholder}
          value={termo}
          onChange={(e) => setTermo(e.target.value)}
        />
        <div className="modal-lista">
          {filtrados.map((item) => (
            <button key={item.id} className="modal-item">
              {item.nome}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Consultas() {
  const [modal, setModal] = useState<"medico" | "paciente" | null>(null);

  return (
    <>
      <header className="topo">
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/consultas">Consultas</Link>
        </nav>
      </header>

      <main className="conteudo">
        <h1>Lista de Consultas</h1>

        <div className="botoes">
          <button className="botao-verde" onClick={() => setModal("medico")}>
            Buscar por Médico
          </button>
          <button className="botao-verde" onClick={() => setModal("paciente")}>
            Buscar por Paciente
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Médico</th>
              <th>Especialidade</th>
              <th>Paciente</th>
              <th>Tipo</th>
              <th>Data</th>
              <th>Hora</th>
            </tr>
          </thead>

          <tbody>
            {consultas.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.medico}</td>
                <td>{c.especialidade}</td>
                <td>{c.paciente}</td>
                <td>{c.tipo}</td>
                <td>{c.data}</td>
                <td>{c.hora}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      {modal === "medico" && (
        <ModalBusca
          titulo="Buscar por Médico"
          placeholder="Digite o nome do Médico"
          itens={medicos}
          fechar={() => setModal(null)}
        />
      )}

      {modal === "paciente" && (
        <ModalBusca
          titulo="Buscar por Paciente"
          placeholder="Digite o nome do Paciente"
          itens={pacientes}
          fechar={() => setModal(null)}
        />
      )}
    </>
  );
}
