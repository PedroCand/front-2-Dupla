'use client';
import { useEffect, useState } from 'react';
import style from './page.module.css';
import Link from 'next/link';

export default function EspecialidadesPage() {
    const [especialidades, setEspecialidades] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const [pacientes, setPacientes] = useState([]);
    const [selectedPaciente, setSelectedPaciente] = useState('');
    const [selectedMedico, setSelectedMedico] = useState('');
    const [selectedData, setSelectedData] = useState('');
    const [selectedHora, setSelectedHora] = useState('');
    const [selectedTipo, setSelectedTipo] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getEspecialidades = async () => {
            try {
                const res = await fetch('https://api.clinica.dev.vilhena.ifro.edu.br/especialidades');
                if (!res.ok) {
                    throw new Error('Ocorreu um erro ao buscar especialidades');
                } 
                const data = await res.json();
                setEspecialidades(data);
            } catch (e) {
                console.log('Erro', e.message);
            }
        }

        const getMedicos = async () => {
            try {
                const res = await fetch('https://api.clinica.dev.vilhena.ifro.edu.br/medicos');
                if (!res.ok) {
                    throw new Error('Ocorreu um erro ao buscar médicos');
                } 
                const data = await res.json();
                setMedicos(data);
            } catch (e) {
                console.log('Erro', e.message);
            }
        }

        const getPacientes = async () => {
            try {
                const res = await fetch('https://api.clinica.dev.vilhena.ifro.edu.br/pacientes');
                if (!res.ok) {
                    throw new Error('Ocorreu um erro ao buscar pacientes');
                } 
                const data = await res.json();
                setPacientes(data);
            } catch (e) {
                console.log('Erro', e.message);
            }
        }

        getEspecialidades();
        getMedicos();
        getPacientes();
    }, []);

    const formSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!selectedPaciente || !selectedMedico || !selectedData || !selectedHora || !selectedTipo) {
            setError('Por favor, preencha todos os campos obrigatórios.');
            setLoading(false);
            return;
        }

        const dataHora = `${selectedData}`;
        const consulta = {
            idPaciente: parseInt(selectedPaciente),
            idMedico: parseInt(selectedMedico),
            data: dataHora,
            hora: selectedHora,
            tipo: selectedTipo,
            matricula: '2024103030070'
        }
        
        console.log('Dados enviados:', consulta);

        try {
            const response = await fetch(`https://api.clinica.dev.vilhena.ifro.edu.br/consultas?matricula=2024103030070`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(consulta),
            });
            
            const result = await response.json();
            
            if (!response.ok) {
                throw new Error(result.error || 'Ocorreu um erro ao agendar consulta');
            }
            
            console.log('Consulta agendada com sucesso:', result);
            
            setSelectedPaciente('');
            setSelectedMedico('');
            setSelectedData('');
            setSelectedHora('');
            setSelectedTipo('');
            
            alert('Consulta agendada com sucesso!');
            
        } catch (e) {
            console.log('Erro', e.message);
            setError('Erro ao agendar consulta: ' + e.message);
        } finally {
            setLoading(false);
        }
    }

    const horarios = [
        '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
        '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
        '16:00', '16:30', '17:00'
    ];

    const tiposConsulta = [
        'Particular',
        'Plano de saúde',
    ];

    return (
        <div className={style.page}>
            <main className={style.main}>
                <h1>Agendar Consulta</h1>
                <p>Agende sua consulta médica escolhendo o médico, paciente e data desejada.</p>
                
                {error && (
                    <div className={style.errorMessage}>
                        {error}
                    </div>
                )}

                <form onSubmit={formSubmit} className={style.form}>
                    <fieldset className={style.fieldset}>
                        <div className={style.formGroup}>
                            <label htmlFor="paciente">Selecione um paciente:</label>
                            <select 
                                id="paciente" 
                                value={selectedPaciente} 
                                onChange={(e) => setSelectedPaciente(e.target.value)}
                                className={style.select}
                                required
                            >
                                <option value="">Selecione um paciente</option>
                                {pacientes.map(paciente => (
                                    <option key={paciente.id} value={paciente.id}>
                                        {paciente.nome}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={style.formGroup}>
                            <label htmlFor="medico">Selecione um médico:</label>
                            <select 
                                id="medico" 
                                value={selectedMedico} 
                                onChange={(e) => setSelectedMedico(e.target.value)}
                                className={style.select}
                                required
                            >
                                <option value="">Selecione um médico</option>
                                {medicos.map(medico => (
                                    <option key={medico.id} value={medico.id}>
                                        {medico.nome} - {medico.especialidade}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className={style.formRow}>
                            <input 
                                type="date" 
                                value={selectedData} 
                                onChange={(e) => setSelectedData(e.target.value)}
                                className={style.input}
                                required
                            />
                            
                            <select 
                                value={selectedHora} 
                                onChange={(e) => setSelectedHora(e.target.value)}
                                className={style.select}
                                required
                            >
                                <option value="">Selecione uma hora</option>
                                {horarios.map(hora => (
                                    <option key={hora} value={hora}>
                                        {hora}
                                    </option>
                                ))}
                            </select>
                            
                            <select 
                                value={selectedTipo} 
                                onChange={(e) => setSelectedTipo(e.target.value)}
                                className={style.select}
                                required
                            >
                                <option value="">Selecione o tipo</option>
                                {tiposConsulta.map(tipo => (
                                    <option key={tipo} value={tipo}>
                                        {tipo}
                                    </option>
                                ))}
                            </select>
                            
                            <button 
                                type="submit" 
                                className={style.button}
                                disabled={loading}
                            >
                                {loading ? 'Agendando...' : 'Agendar Consulta'}
                            </button>
                        </div>
                    </fieldset>
                </form>

                <Link href="/" className={style.botaoVoltar}>
                    ← Voltar
                </Link>
            </main>
        </div>
    );
}