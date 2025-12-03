"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AgendaPage() {
  const [especialidades, setEspecialidades] = useState([]);
  const [medicos, setMedicos] = useState([]);
  const [pacientes, setPacientes] = useState([]);

  const [selectedPaciente, setSelectedPaciente] = useState("");
  const [selectedMedico, setSelectedMedico] = useState("");
  const [selectedData, setSelectedData] = useState("");
  const [selectedHora, setSelectedHora] = useState("");
  const [selectedTipo, setSelectedTipo] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getEspecialidades = async () => {
      try {
        const res = await fetch(
          "https://api.clinica.dev.vilhena.ifro.edu.br/especialidades"
        );
        if (!res.ok) throw new Error("Erro ao buscar especialidades");
        const data = await res.json();
        setEspecialidades(data);
      } catch (e) {
        console.log("Erro", e.message);
      }
    };

    const getMedicos = async () => {
      try {
        const res = await fetch(
          "https://api.clinica.dev.vilhena.ifro.edu.br/medicos"
        );
        if (!res.ok) throw new Error("Erro ao buscar médicos");
        const data = await res.json();
        setMedicos(data);
      } catch (e) {
        console.log("Erro", e.message);
      }
    };

    const getPacientes = async () => {
      try {
        const res = await fetch(
          "https://api.clinica.dev.vilhena.ifro.edu.br/pacientes"
        );
        if (!res.ok) throw new Error("Erro ao buscar pacientes");
        const data = await res.json();
        setPacientes(data);
      } catch (e) {
        console.log("Erro", e.message);
      }
    };

    getEspecialidades();
    getMedicos();
    getPacientes();
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (
      !selectedPaciente ||
      !selectedMedico ||
      !selectedData ||
      !selectedHora ||
      !selectedTipo
    ) {
      setError("Preencha todos os campos obrigatórios.");
      setLoading(false);
      return;
    }

    const consulta = {
      idPaciente: parseInt(selectedPaciente),
      idMedico: parseInt(selectedMedico),
      data: selectedData,
      hora: selectedHora,
      tipo: selectedTipo,
      matricula: "2024103030070",
    };

    try {
      const response = await fetch(
        "https://api.clinica.dev.vilhena.ifro.edu.br/consultas?matricula=2024103030070",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(consulta),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erro ao agendar consulta");
      }

      setSelectedPaciente("");
      setSelectedMedico("");
      setSelectedData("");
      setSelectedHora("");
      setSelectedTipo("");

      alert("Consulta agendada com sucesso!");

    } catch (e) {
      console.log("Erro", e.message);
      setError("Erro ao agendar consulta: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  const horarios = [
    "08:00","08:30","09:00","09:30","10:00","10:30",
    "11:00","11:30","14:00","14:30","15:00","15:30",
    "16:00","16:30","17:00"
  ];

  const tiposConsulta = ["Particular", "Plano de saúde"];

  return (
    <main className="hero">
      <h2>Agendar Consulta</h2>
      <p>Escolha o paciente, médico, data e tipo de atendimento.</p>

      {error && (
        <p style={{ color: "red", marginBottom: "12px" }}>{error}</p>
      )}

      <form onSubmit={formSubmit} className="agenda-form">
        <div className="agenda-row">
          <label>Paciente</label>
          <select
            value={selectedPaciente}
            onChange={(e) => setSelectedPaciente(e.target.value)}
            required
          >
            <option value="">Selecione um paciente</option>
            {pacientes.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="agenda-row">
          <label>Médico</label>
          <select
            value={selectedMedico}
            onChange={(e) => setSelectedMedico(e.target.value)}
            required
          >
            <option value="">Selecione um médico</option>
            {medicos.map((m) => (
              <option key={m.id} value={m.id}>
                {m.nome} - {m.especialidade}
              </option>
            ))}
          </select>
        </div>

        <div className="agenda-row">
          <label>Data</label>
          <input
            type="date"
            value={selectedData}
            onChange={(e) => setSelectedData(e.target.value)}
            required
          />
        </div>

        <div className="agenda-row">
          <label>Hora</label>
          <select
            value={selectedHora}
            onChange={(e) => setSelectedHora(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            {horarios.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
        </div>

        <div className="agenda-row">
          <label>Tipo</label>
          <select
            value={selectedTipo}
            onChange={(e) => setSelectedTipo(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            {tiposConsulta.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <button className="button-green" type="submit" disabled={loading}>
          {loading ? "Agendando..." : "Agendar Consulta"}
        </button>
      </form>

      <Link href="/" style={{ marginTop: "20px", display: "inline-block" }}>
        ← Voltar
      </Link>
    </main>
  );
}
