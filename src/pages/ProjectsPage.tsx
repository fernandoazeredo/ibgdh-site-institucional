import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { projects } from '../content'

export function ProjectsPage() {
  return <><PageHero eyebrow="Iniciativas" title="Projetos" description="Programas estruturados para gerar conhecimento, autonomia, participação e impacto social." /><section className="section"><div className="container project-list">{projects.map((project, index) => <article key={project.title}><div className="project-index">{String(index + 1).padStart(2, '0')}</div><div><div className="project-meta"><span>{project.category}</span><span className="status">{project.status}</span></div><h2>{project.title}</h2><p>{project.summary}</p><Link className="text-link" to="/contato">Manifestar interesse <ArrowRight size={17} /></Link></div></article>)}</div></section><section className="section section--tint"><div className="container narrow"><h2>Projetos construídos com responsabilidade</h2><p>Cada iniciativa será publicada gradualmente, com escopo, público, parceiros, agenda, entregas e indicadores. Informações ainda não formalizadas serão identificadas como planejadas ou em estruturação.</p></div></section></>
}
