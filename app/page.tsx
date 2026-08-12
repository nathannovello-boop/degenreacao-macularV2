"use client";

import { useEffect, useState } from "react";

const flashcards = [
  {
    tag: "Conceito",
    title: "O que é degeneração macular?",
    text: "É uma doença que afeta a mácula, região central da retina. Essa área é responsável pela visão de detalhes, usada para ler, reconhecer rostos e enxergar objetos com nitidez.",
    art: "macula",
  },
  {
    tag: "Tipos",
    title: "Seca ou úmida?",
    text: "A forma seca é a mais comum e costuma evoluir devagar. Na forma úmida, vasos anormais crescem sob a retina e podem causar perda visual mais rápida.",
    art: "types",
  },
  {
    tag: "Sintomas",
    title: "O que a pessoa percebe?",
    text: "Linhas retas podem parecer tortas, o centro da visão pode ficar borrado ou escuro e a leitura fica mais difícil. A doença geralmente não causa dor.",
    art: "vision",
  },
  {
    tag: "Física",
    title: "Como a imagem se forma?",
    text: "Córnea e cristalino desviam a luz e formam uma imagem na retina. A mácula registra os detalhes centrais e transforma a luz em sinais enviados ao cérebro.",
    art: "light",
  },
  {
    tag: "Diagnóstico",
    title: "Como ela é identificada?",
    text: "O oftalmologista examina o fundo do olho. A grade de Amsler ajuda a perceber distorções e o OCT cria imagens detalhadas das camadas da retina.",
    art: "exam",
  },
  {
    tag: "Tratamento",
    title: "Existe tratamento?",
    text: "Na forma úmida, medicamentos anti-VEGF podem controlar os vasos anormais. Na seca, o acompanhamento e medidas indicadas pelo médico ajudam a reduzir riscos e preservar a visão.",
    art: "care",
  },
  {
    tag: "Prevenção",
    title: "O risco pode diminuir?",
    text: "Idade e genética não podem ser mudadas, mas não fumar, controlar a pressão, manter alimentação equilibrada e fazer exames regulares ajudam a cuidar da visão.",
    art: "protect",
  },
  {
    tag: "Tecnologia",
    title: "Onde entram robótica e programação?",
    text: "Equipamentos automatizados fazem varreduras precisas. Programas analisam imagens, medem a retina e destacam possíveis alterações para apoiar o trabalho do especialista.",
    art: "tech",
  },
  {
    tag: "Dados",
    title: "Por que estudar esse tema?",
    text: "A OMS relaciona a DMRI a cerca de 8 milhões de casos de deficiência visual ou cegueira. Uma pesquisa projeta 288 milhões de pessoas com a doença em 2040.",
    art: "data",
  },
];

const disciplines = [
  {
    number: "01",
    name: "Física e Tecnociência",
    title: "A luz revela",
    text: "A Física explica a formação da imagem. No OCT, a luz é usada para observar as camadas da retina.",
    result: "gera a imagem",
  },
  {
    number: "02",
    name: "Robótica",
    title: "A máquina percorre",
    text: "Motores e sensores controlam a varredura, mantêm o aparelho estável e repetem o exame com precisão.",
    result: "garante precisão",
  },
  {
    number: "03",
    name: "Programação",
    title: "O código compara",
    text: "Programas organizam as imagens, medem a retina e ajudam a destacar possíveis mudanças entre os exames.",
    result: "transforma em dados",
  },
];

export default function Home() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [simulationActive, setSimulationActive] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function toggleCard(index: number) {
    setFlippedCards((current) => {
      const updated = new Set(current);
      if (updated.has(index)) updated.delete(index);
      else updated.add(index);
      return updated;
    });
  }

  function resetCards() {
    setFlippedCards(new Set());
  }

  const progress = (flippedCards.size / flashcards.length) * 100;

  return (
    <main>
      <header className="topbar">
        <a className="site-name" href="#inicio">Degeneração Macular</a>
        <nav aria-label="Navegação principal">
          <a href="#disciplinas">Disciplinas</a>
          <a href="#flashcards">Flashcards</a>
          <a href="#fontes">Fontes</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="experiment-copy">
          <span className="experiment-number">Experimento visual 01</span>
          <p className="hero-topic">Degeneração macular</p>
          <h1>Olhe para<br /><em>o ponto.</em></h1>
          <p className="hero-description">
            A mácula cuida do centro da visão. Quando ela é danificada, linhas e detalhes podem parecer diferentes.
          </p>
          <div className="simulation-controls">
            <button
              type="button"
              onClick={() => setSimulationActive((current) => !current)}
              aria-pressed={simulationActive}
            >
              {simulationActive ? "Retirar simulação" : "Ativar simulação"}
            </button>
            <a className="flashcards-hero-link" href="#flashcards">Estudar com flashcards</a>
            <span>Representação educativa — não é um diagnóstico.</span>
          </div>
        </div>

        <div className={`amsler-card ${simulationActive ? "is-active" : ""}`} aria-label="Simulação educativa da alteração da visão central">
          <div className="amsler-topline">
            <span>Grade de observação</span>
            <strong>{simulationActive ? "com alteração" : "sem alteração"}</strong>
          </div>
          <div className="amsler-grid">
            <i className="focus-point" />
            <i className="distortion distortion-one" />
            <i className="distortion distortion-two" />
          </div>
          <p>Mantenha o olhar no ponto laranja e alterne a simulação.</p>
        </div>
      </section>

      <section className="disciplines-section" id="disciplinas">
        <div className="disciplines-heading" data-reveal>
          <span className="section-label">Três disciplinas, um processo</span>
          <h2>Da luz até a análise.</h2>
          <p>Cada matéria resolve uma etapa do mesmo problema.</p>
        </div>
        <div className="discipline-flow">
          {disciplines.map((discipline, index) => (
            <div className="discipline-item" key={discipline.number}>
              <article data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
                <span className="discipline-number">{discipline.number}</span>
                <small>{discipline.name}</small>
                <h3>{discipline.title}</h3>
                <p>{discipline.text}</p>
                <strong>{discipline.result}</strong>
              </article>
              {index < disciplines.length - 1 && <span className="flow-arrow" aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
        <p className="connection-result" data-reveal><b>Resultado:</b> luz + movimento preciso + código = imagens que ajudam a acompanhar a mácula.</p>
      </section>

      <section className="flashcards-section" id="flashcards">
        <div className="section-intro" data-reveal>
          <div>
            <span className="section-label">Parte principal</span>
            <h2>9 flashcards interativos</h2>
            <p>Clique em cada card para revelar a resposta. O contador registra o que você já revisou.</p>
          </div>
          <div className="study-progress" aria-live="polite">
            <div className="progress-text">
              <span>Revisados</span>
              <strong>{flippedCards.size}/{flashcards.length}</strong>
            </div>
            <div className="progress-track" aria-hidden="true">
              <span style={{ width: `${progress}%` }} />
            </div>
            <button type="button" onClick={resetCards} disabled={flippedCards.size === 0}>Recomeçar</button>
          </div>
        </div>

        <div className="flashcards-grid">
          {flashcards.map((card, index) => {
            const isFlipped = flippedCards.has(index);
            return (
              <button
                className={`flashcard ${isFlipped ? "flipped" : ""}`}
                type="button"
                key={card.title}
                onClick={() => toggleCard(index)}
                aria-pressed={isFlipped}
                aria-label={`${card.tag}: ${card.title}. ${isFlipped ? "Mostrar frente" : "Mostrar resposta"}`}
                data-reveal
                style={{ transitionDelay: `${(index % 3) * 75}ms` }}
              >
                <span
                  className={`flashcard-face flashcard-single ${isFlipped ? "is-answer" : "is-question"}`}
                  key={isFlipped ? "answer" : "question"}
                >
                  <span className="card-topline">
                    <b>{String(index + 1).padStart(2, "0")}</b>
                    <em>{isFlipped ? "Resposta" : card.tag}</em>
                  </span>
                  {isFlipped ? (
                    <>
                      <strong>{card.title}</strong>
                      <span className="answer-text">{card.text}</span>
                      <small>Voltar para a pergunta</small>
                    </>
                  ) : (
                    <>
                      <span className={`card-art art-${card.art}`} aria-hidden="true">
                        <i /><i /><i /><i />
                      </span>
                      <strong>{card.title}</strong>
                      <small>Clique para ver a resposta</small>
                    </>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="numbers-section" aria-labelledby="numbers-title">
        <div className="section-intro compact-intro" data-reveal>
          <div>
            <span className="section-label">Dados de pesquisa</span>
            <h2 id="numbers-title">Em números</h2>
          </div>
        </div>
        <div className="numbers-grid">
          <article data-reveal><strong>2,2 bilhões</strong><p>de pessoas vivem com alguma deficiência visual no mundo.</p><span>OMS, 2026</span></article>
          <article data-reveal style={{ transitionDelay: "90ms" }}><strong>8 milhões</strong><p>têm deficiência visual ou cegueira atribuída à DMRI.</p><span>OMS, 2026</span></article>
          <article data-reveal style={{ transitionDelay: "180ms" }}><strong>288 milhões</strong><p>é a projeção de pessoas com DMRI no mundo em 2040.</p><span>Wong et al.</span></article>
        </div>
      </section>

      <section className="care-note-section">
        <aside className="warning-box" data-reveal>
          <strong>Atenção</strong>
          <p>Linhas que ficaram tortas, mancha central ou piora repentina da visão precisam de avaliação oftalmológica. Este site é educativo e não substitui consulta.</p>
        </aside>
      </section>

      <section className="sources-section" id="fontes">
        <div data-reveal>
          <span className="section-label">Pesquisa</span>
          <h2>Fontes utilizadas</h2>
          <p>Consulta realizada em agosto de 2026.</p>
        </div>
        <div className="sources-list" data-reveal>
          <a href="https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment" target="_blank" rel="noreferrer">
            <span>01</span><strong>Organização Mundial da Saúde</strong><small>Deficiência visual e cegueira</small>
          </a>
          <a href="https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/age-related-macular-degeneration" target="_blank" rel="noreferrer">
            <span>02</span><strong>National Eye Institute</strong><small>Conceito, tipos, sintomas e diagnóstico</small>
          </a>
          <a href="https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/age-related-macular-degeneration/treatments-wet-amd-advanced-neovascular-amd" target="_blank" rel="noreferrer">
            <span>03</span><strong>National Eye Institute</strong><small>Tratamentos para DMRI úmida</small>
          </a>
          <a href="https://pubmed.ncbi.nlm.nih.gov/25104651/" target="_blank" rel="noreferrer">
            <span>04</span><strong>The Lancet Global Health</strong><small>Prevalência mundial e projeção para 2040</small>
          </a>
        </div>
      </section>

      <footer>
        <strong>Degeneração Macular</strong>
        <span>Projeto interdisciplinar</span>
        <a href="#inicio">Voltar ao início</a>
      </footer>
    </main>
  );
}
