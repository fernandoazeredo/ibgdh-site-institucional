import { ArrowRight, BookOpen, Building2, HandHeart, Landmark, Scale, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/SectionHeading'
import { actionAreas, projects } from '../content'

const icons = [Scale, Users, HandHeart, BookOpen, Building2, Landmark, Scale, Users]

export function HomePage() {
  return <>
    <section className="hero-home">
      <div className="container hero-home__grid">
        <div className="hero-copy">
          <span className="eyebrow">Instituto Brasil Global de Direitos Humanos</span>
          <h1>Direitos Humanos na prática, perto de quem precisa.</h1>
          <p>Informação clara, formação cidadã e iniciativas que aproximam direitos, serviços e oportunidades da vida das pessoas.</p>
          <div className="button-row">
            <Link className="button button--primary" to="/direitos-em-linguagem-simples">Conheça seus direitos <ArrowRight size={18} /></Link>
            <Link className="button button--secondary" to="/quem-somos">Conheça o IBGDH</Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="Compromissos do IBGDH">
          <span>Nosso compromisso</span>
          <strong>Dignidade, justiça, liberdade, equidade e humanidade.</strong>
          <p>Atuação institucional independente, responsável e acessível.</p>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Atuação" title="Direitos que fazem parte da vida" description="O Instituto organiza sua atuação em áreas conectadas às necessidades reais da população." />
        <div className="card-grid card-grid--four">
          {actionAreas.slice(0, 4).map((area, index) => { const Icon = icons[index]; return <article className="feature-card" key={area.slug}><span className="icon-box"><Icon /></span><h3>{area.title}</h3><p>{area.short}</p></article> })}
        </div>
        <Link className="text-link" to="/areas-de-atuacao">Ver todas as áreas <ArrowRight size={17} /></Link>
      </div>
    </section>

    <section className="section section--tint">
      <div className="container split-section">
        <div>
          <SectionHeading eyebrow="Informação para todos" title="Entender um direito é o primeiro passo para exercê-lo" description="Guias diretos e responsáveis ajudam a identificar caminhos, organizar documentos e procurar o serviço adequado." />
          <Link className="button button--primary" to="/direitos-em-linguagem-simples">Acessar conteúdos <ArrowRight size={18} /></Link>
        </div>
        <div className="number-list">
          <div><span>01</span><p><strong>Entenda</strong> a situação e os direitos relacionados.</p></div>
          <div><span>02</span><p><strong>Organize</strong> informações e documentos importantes.</p></div>
          <div><span>03</span><p><strong>Procure</strong> o órgão ou profissional responsável.</p></div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Iniciativas" title="Projetos em desenvolvimento" description="Programas que unem cidadania, conhecimento, inclusão e transformação social." />
        <div className="card-grid card-grid--three">{projects.map(project => <article className="project-card" key={project.title}><span className="status">{project.status}</span><small>{project.category}</small><h3>{project.title}</h3><p>{project.summary}</p><Link to="/projetos">Saiba mais <ArrowRight size={16} /></Link></article>)}</div>
      </div>
    </section>

    <section className="cta-band"><div className="container cta-band__content"><div><span className="eyebrow">Participe</span><h2>Quer conhecer, apoiar ou colaborar com o Instituto?</h2></div><Link className="button button--light" to="/contato">Fale com o IBGDH <ArrowRight size={18} /></Link></div></section>
  </>
}
