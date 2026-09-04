const consultas = [
  { horario: "08:00", paciente: "Exemplo: Ana Silva", medico: "Dr. Carlos", status: "Confirmada" },
  { horario: "09:30", paciente: "Exemplo: João Souza", medico: "Dra. Mariana", status: "Pendente" },
];

export default function AgendamentosPage() {
  return (
    <section className="secao">
      <div className="titulo-pagina">
        <div>
          <span className="etiqueta">Módulo inicial</span>
          <h1>Agendamentos</h1>
          <p>Visualização demonstrativa da agenda da clínica.</p>
        </div>
        <button className="botao" type="button">Nova consulta</button>
      </div>

      <div className="tabela-container">
        <table>
          <thead>
            <tr>
              <th>Horário</th>
              <th>Paciente</th>
              <th>Médico</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {consultas.map((consulta) => (
              <tr key={consulta.horario}>
                <td>{consulta.horario}</td>
                <td>{consulta.paciente}</td>
                <td>{consulta.medico}</td>
                <td><span className="status">{consulta.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="aviso">Os registros acima são apenas dados de demonstração.</p>
    </section>
  );
}
