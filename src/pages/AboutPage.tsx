import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { organization } from '../content'

export function AboutPage() {
  return <>
    <PageHero eyebrow="Institucional" title="Quem Somos" description="Uma instituição dedicada à promoção de direitos, ao conhecimento e à transformação social." />
    <section className="section"><div className="container split-section"><div><SectionHeading eyebrow="Nossa missão" title="Direitos Humanos compreensíveis e presentes no cotidiano" /><p className="lead-text">{organization.mission}</p><p>O IBGDH nasce com a proposta de aproximar instituições e sociedade, produzindo informação acessível, promovendo formação e estruturando projetos de interesse público.</p></div><aside className="quote-panel"><p>“Direitos precisam ser conhecidos, compreendidos e vividos.”</p><span>Princípio de atuação do IBGDH</span></aside></div></section>
    <section className="section section--tint"><div className="container"><SectionHeading eyebrow="Princípios" title="Valores que orientam cada iniciativa" /><div className="values-grid">{organization.values.map((value, index) => <div key={value}><span>0{index + 1}</span><strong>{value}</strong></div>)}</div></div></section>
    <section className="section"><div className="container"><SectionHeading eyebrow="Compromissos" title="Como queremos atuar" /><div className="card-grid card-grid--three"><article className="plain-card"><h3>Linguagem acessível</h3><p>Informações claras, sem simplificações irresponsáveis e com indicação dos caminhos adequados.</p></article><article className="plain-card"><h3>Responsabilidade institucional</h3><p>Governança, transparência, proteção de dados e respeito aos limites de cada área profissional.</p></article><article className="plain-card"><h3>Impacto verificável</h3><p>Projetos com objetivos, públicos, indicadores e resultados progressivamente divulgados.</p></article></div></div></section>
  </>
}
