"use client";

import { useState } from "react";
import "./consulta.css";

const medicos = [
  { id: 1, nome: "Wagner da Silva Ferreira Filho" },
  { id: 2, nome: "Ailla Odorizzi da Costa Teixeira" },
  { id: 3, nome: "Victor Hugo Nascimento Paiva" },
  { id: 4, nome: "Hérrique Oberherr Mendonça" },
  { id: 5, nome: "Eloíse Paulina Castilho" },
  { id: 6, nome: "Arthur Brito Maia de Oliveira" },
  { id: 7, nome: "Felipe Eduardo Marian Ronkoski" },
  { id: 8, nome: "Guilherme Sperfeld Vorgnes" },
  { id: 9, nome: "Henrique Freitas de Mathias" },
  { id: 10, nome: "Istely da Silva Andrade" },
  { id: 11, nome: "Izaias Gomes de Oliveira Neto" },
  { id: 12, nome: "Jhamilly Phyetra Assis da Silva" },
  { id: 13, nome: "João Paulo Crisóstomo Neves" },
  { id: 14, nome: "Kelly Somara Lustosa" },
  { id: 15, nome: "Yarah dos Santos Ferreira" },
];

const pacientes = [
  { id: 1, nome: "Yarah dos Santos Ferreira" },
  { id: 2, nome: "Albert Murilo Cerozini da Silva" },
  { id: 3, nome: "Mariah Vitória de Oliveira Martins" },
  { id: 4, nome: "Ariel Closs Novais" },
  { id: 5, nome: "Rafael Barros dos Santos" },
  { id: 6, nome: "Ariane de Oliveira Pereira" },
  { id: 7, nome: "Amanda Santos Zamarchi" },
  { id: 8, nome: "Alexandra Luiza de Morais Gonçalves" },
  { id: 9, nome: "Bruna Freitas de Lima" },
  { id: 10, nome: "Carlos Eduardo Vieira Matos" },
  { id: 11, nome: "Daniela Barbosa de Souza" },
  { id: 12, nome: "Eduardo Salas Monteiro" },
  { id: 13, nome: "Fernanda Knobel Rodrigues" },
  { id: 14, nome: "Gabriel Dornbusch Araujo" },
  { id: 15, nome: "Helena Aberastury Campos" },
];

const consultas = [
  {
    id: 111,
    medico: "Wagner da Silva Ferreira Filho",
    especialidade: "Clínico Geral",
    paciente: "Yarah dos Santos Ferreira",
    tipo: "Plano de Saúde",
    data: "07/07/2026",
    hora: "07:00",
  },
  {
    id: 64,
    medico: "Ailla Odorizzi da Costa Teixeira",
    especialidade: "Clínico Geral",
    paciente: "Albert Murilo Cerozini da Silva",
    tipo: "Plano de Saúde",
    data: "04/05/2026",
    hora: "09:00",
  },
  {
    id: 216,
    medico: "Victor Hugo Nascimento Paiva",
    especialidade: "Clínico Geral",
    paciente: "Mariah Vitória de Oliveira Martins",
    tipo: "Plano de Saúde",
    data: "12/02/2026",
    hora: "14:00",
  },
  {
    id: 154,
    medico: "Hérrique Oberherr Mendonça",
    especialidade: "Dermatologia",
    paciente: "Ariel Closs Novais",
    tipo: "Plano de Saúde",
    data: "12/02/2026",
    hora: "09:00",
  },
  {
    id: 123,
    medico: "Eloíse Paulina Castilho",
    especialidade: "Ortopedia",
    paciente: "Rafael Barros dos Santos",
    tipo: "Plano de Saúde",
    data: "04/05/2028",
    hora: "15:00",
  },
  {
    id: 103,
    medico: "Ailla Odorizzi da Costa Teixeira",
    especialidade: "Clínico Geral",
    paciente: "Ariane de Oliveira Pereira",
    tipo: "Particular",
    data: "24/11/2027",
    hora: "16:30",
  },
  {
    id: 131,
    medico: "Arthur Brito Maia de Oliveira",
    especialidade: "Pediatria",
    paciente: "Amanda Santos Zamarchi",
    tipo: "Plano de Saúde",
    data: "21/12/2026",
    hora: "07:00",
  },
  {
    id: 114,
    medico: "Arthur Brito Maia de Oliveira",
    especialidade: "Pediatria",
    paciente: "Alexandra Luiza de Morais Gonçalves",
    tipo: "Plano de Saúde",
    data: "20/12/2026",
    hora: "10:30",
  },
  {
    id: 59,
    medico: "Wagner da Silva Ferreira Filho",
    especialidade: "Clínico Geral",
    paciente: "Albert Murilo Cerozini da Silva",
    tipo: "Plano de Saúde",
    data: "04/11/2026",
    hora: "11:00",
  },
  {
    id: 176,
    medico: "Arthur Brito Maia de Oliveira",
    especialidade: "Pediatria",
    paciente: "Alexandra Luiza de Morais Gonçalves",
    tipo: "Particular",
    data: "25/10/2026",
    hora: "09:00",
  },
  {
    id: 188,
    medico: "Felipe Eduardo Marian Ronkoski",
    especialidade: "Cardiologia",
    paciente: "Bruna Freitas de Lima",
    tipo: "Plano de Saúde",
    data: "02/02/2027",
    hora: "08:00",
  },
  {
    id: 201,
    medico: "Guilherme Sperfeld Vorgnes",
    especialidade: "Neurologia",
    paciente: "Carlos Eduardo Vieira Matos",
    tipo: "Particular",
    data: "15/03/2027",
    hora: "13:30",
  },
  {
    id: 209,
    medico: "Henrique Freitas de Mathias",
    especialidade: "Ginecologia",
    paciente: "Daniela Barbosa de Souza",
    tipo: "Plano de Saúde",
    data: "30/03/2027",
    hora: "09:30",
  },
  {
    id: 222,
    medico: "Istely da Silva Andrade",
    especialidade: "Psiquiatria",
    paciente: "Eduardo Salas Monteiro",
    tipo: "Plano de Saúde",
    data: "10/04/2027",
    hora: "10:00",
  },
  {
    id: 230,
    medico: "Kelly Somara Lustosa",
    especialidade: "Endocrinologia",
    paciente: "Helena Aberastury Campos",
    tipo: "Particular",
    data: "20/04/2027",
    hora: "16:00",
  },
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

          {filtrados.length === 0 && (
            <p className="modal-vazio">Nenhum resultado encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ConsultasListarPage() {
  const [modal, setModal] = useState(null);

  return (
    <main className="consultas-conteudo">
      <h1>Lista de Consultas</h1>

      <div className="botoes">
        <button className="botao-verde" onClick={() => setModal("medico")}>
          Buscar por Médico
        </button>

        <button className="botao-verde" onClick={() => setModal("paciente")}>
          Buscar por Paciente
        </button>
      </div>

      <div className="tabela-container">
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
      </div>

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
    </main>
  );
}
