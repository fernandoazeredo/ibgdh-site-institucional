import { PageHero } from '../components/PageHero'
import { actionAreas } from '../content'

export function ActionAreasPage() {
  return <><PageHero eyebrow="Atuação institucional" title="Áreas de Atuação" description="Frentes integradas para ampliar informação, cidadania, inclusão e acesso a direitos." /><section className="section"><div className="container area-list">{actionAreas.map((area, index) => <article key={area.slug}><span>{String(index + 1).padStart(2, '0')}</span><div><h2>{area.title}</h2><p className="lead-text">{area.short}</p><p>{area.description}</p></div></article>)}</div></section><section className="notice"><div className="container"><strong>Atuação responsável</strong><p>Os conteúdos têm finalidade educativa e institucional. Situações individuais devem ser avaliadas pelos órgãos e profissionais competentes.</p></div></section></>
}
