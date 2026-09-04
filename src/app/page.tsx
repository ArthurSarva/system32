import Link from "next/link";

const recursos = [
  { titulo: "Pacientes", texto: "Cadastro e acompanhamento dos pacientes." },
  { titulo: "Médicos", texto: "Organização dos profissionais e especialidades." },
  { titulo: "Agenda", texto: "Consulta de horários e agendamento de consultas." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <span className="etiqueta">Software House System32</span>
          <h1>Agendamento médico simples e organizado</h1>
          <p>
            Uma base web para aproximar pacientes, médicos e clínicas por meio
            de uma agenda centralizada e intuitiva.
          </p>
          <Link href="/agendamentos" className="botao">Ver agendamentos</Link>
        </div>
      </section>

      <section className="secao">
        <h2>Principais módulos</h2>
        <div className="grade">
          {recursos.map((recurso) => (
            <article className="cartao" key={recurso.titulo}>
              <h3>{recurso.titulo}</h3>
              <p>{recurso.texto}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
