import {
  aiApplications,
  aiCards,
  assessment,
  lessons,
  programCards,
  securityPractices,
  securityPrinciples,
  threats,
  timeline,
  trends
} from "@/data/portfolio";
import { CardGrid } from "@/components/CardGrid";
import { LessonCard } from "@/components/LessonCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TagList } from "@/components/TagList";
import { Timeline } from "@/components/Timeline";

export function PortfolioClient() {
  return (
    <>
      <section className="overview">
        <article>
          <h2>Objetivo da Disciplina</h2>
          <p>Apresentar a evolução da computação, seus impactos tecnológicos, a lógica interna do computador, o funcionamento computacional e aplicações modernas da tecnologia.</p>
        </article>
        <article>
          <h2>Metodologia</h2>
          <p>As aulas incluem apresentação de conteúdos, material no Blackboard, sugestões de vídeos e sites, sala invertida, aprendizagem baseada em problemas e pitch tecnológico em grupo.</p>
        </article>
        <article>
          <h2>Professor</h2>
          <p>Fabio Brussolo possui experiência em redes, projeto integrador, sistemas operacionais, cabeamento estruturado, hotelaria, defesa cibernética, segurança da informação, TI, gestão de TI e sistemas de informação.</p>
        </article>
      </section>

      <section className="content-block" id="ementa">
        <SectionHeading eyebrow="Ementário" title="Conteúdo Programático" />
        <CardGrid cards={programCards} />
      </section>

      <section className="content-block" id="cronograma">
        <SectionHeading eyebrow="Planejamento" title="Cronograma das Aulas" />
        <Timeline items={timeline} />
      </section>

      <section className="content-block" id="avaliacao">
        <SectionHeading eyebrow="Avaliação" title="Sistema de Avaliação" />
        <div className="assessment">
          {assessment.map((item) => (
            <article key={item.title} className={item.title === "Média" ? "formula" : ""}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-block" id="tendencias">
        <SectionHeading eyebrow="Tecnologia e sociedade" title="Tendências Tecnológicas e Evolução Humana" />
        <div className="split">
          <article>
            <h3>Tendências Tecnológicas</h3>
            <TagList items={trends} />
          </article>
          <article>
            <h3>Crescimento Humano e Evolução</h3>
            <p>Nos últimos 150 anos, a população mundial cresceu de 1 para mais de 7 bilhões, a expectativa de vida aumentou e a altura média também cresceu.</p>
            <p>Entre os fatores estão alimentação, saúde e desenvolvimento tecnológico.</p>
          </article>
        </div>
      </section>

      <section className="content-block" id="aulas">
        <SectionHeading eyebrow="Registro das aulas" title="Aulas do Portfólio" />
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </section>

      <section className="content-block searchable" id="ia">
        <SectionHeading eyebrow="Tema complementar" title="Inteligência Artificial" />
        <CardGrid cards={aiCards} />
        <h3 className="subheading">Aplicações da Inteligência Artificial</h3>
        <CardGrid cards={aiApplications} compact />
      </section>

      <section className="content-block searchable" id="seguranca">
        <SectionHeading
          eyebrow="Tema complementar"
          title="Segurança da Informação"
          description="Protege dados, sistemas, redes e informações digitais contra acessos não autorizados, perda de dados, ataques virtuais e vazamento de informações."
        />
        <CardGrid cards={securityPrinciples} />
        <h3 className="subheading">Ameaças digitais</h3>
        <CardGrid cards={threats} compact />
        <h3 className="subheading">Boas práticas</h3>
        <div className="practice-list">
          {securityPractices.map((practice) => (
            <p key={practice}>{practice}</p>
          ))}
        </div>
      </section>
    </>
  );
}
