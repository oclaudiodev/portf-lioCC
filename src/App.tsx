import { PortfolioClient } from "@/components/PortfolioClient";

export default function App() {
  return (
    <>
      <header className="hero" id="topo">
        <img
          src="/computacao-cover.png"
          alt="Ilustração digital com bits, portas lógicas, CPU e redes"
          className="hero__image"
        />
        <nav className="topbar" aria-label="Navegação principal">
          <a href="#topo" className="brand">Portfólio CC</a>
          <h1 className="de"><span>Feito por:</span> José Claudio - ADS - 1NB 1S2026</h1>
          <div className="topbar__links">
            <a href="#aulas">Aulas</a>
            <a href="#cronograma">Cronograma</a>
            <a href="#avaliacao">Avaliação</a>
            <a href="#tendencias">Tendências</a>
          </div>
        </nav>
        <div className="hero__content">
          <p className="eyebrow">Disciplina: Conceitos de Computação</p>
          <h1>Portfólio Conceitos da Computação</h1>
          <p>Resumo organizado das aulas, conceitos fundamentais, evolução histórica, sistemas, numeração, lógica booleana, hardware, software, IA e segurança da informação.</p>
          <div className="hero__meta">
            <span>Professor: Fabio Brussolo</span>
            <span>Modelo presencial</span>
            <span>Projeto acadêmico</span>
          </div>
        </div>
      </header>

      <main>
        <PortfolioClient />
      </main>

      <footer>
        <p>Portfólio acadêmico de Conceitos de Computação • Professor Fabio Brussolo</p>
        <a href="#topo">Voltar ao topo</a>
      </footer>
    </>
  );
}
