import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { projects } from '../content'

export function ProjectsPage() {
  return <>
    <PageHero
      eyebrow="Iniciativas"
      title="Projetos"
      description="Programas estruturados para gerar conhecimento, autonomia, participação e impacto social."
    />

    <section className="section">
      <div className="container project-list">
        {projects.map((project, index) => <article key={project.title}>
          <div className="project-index">{String(index + 1).padStart(2, '0')}</div>
          <div>
            <div className="project-meta"><span>{project.category}</span><span className="status">{project.status}</span></div>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <Link className="text-link" to="/contato">Manifestar interesse <ArrowRight size={17} /></Link>
          </div>
        </article>)}
      </div>
    </section>

    <section className="section external-platform-section" aria-labelledby="concurssauro-title">
      <div className="container">
        <a
          className="external-platform-card"
          href="https://www.concurssauro.com.br/auth/login.html"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Acessar a plataforma externa Concurssauro em uma nova aba"
        >
          <div className="external-platform-card__image">
            <img
              src="/imagens/concurssauro-dino.webp"
              alt="Mascote dinossauro da plataforma Concurssauro"
              loading="lazy"
            />
            <strong>Concurssauro</strong>
          </div>
          <div className="external-platform-card__content">
            <span className="eyebrow">Plataforma educacional externa</span>
            <h2 id="concurssauro-title">Sua Central de Estudos</h2>
            <p>Acesse as ferramentas inteligentes para sua aprovação</p>
            <span className="external-platform-card__action">
              Acessar a Concurssauro <ExternalLink size={18} aria-hidden="true" />
            </span>
          </div>
        </a>
      </div>
    </section>

    <section className="section section--tint">
      <div className="container narrow">
        <h2>Projetos construídos com responsabilidade</h2>
        <p>Cada iniciativa será publicada gradualmente, com escopo, público, parceiros, agenda, entregas e indicadores. Informações ainda não formalizadas serão identificadas como planejadas ou em estruturação.</p>
      </div>
    </section>
  </>
}
