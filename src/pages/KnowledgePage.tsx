import { ArrowRight, BookOpenCheck, FileCheck2, ShieldCheck } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { simpleGuides } from '../content'

const icons = [FileCheck2, BookOpenCheck, ShieldCheck]
export function KnowledgePage() {
  return <><PageHero eyebrow="Conhecimento cidadão" title="Direitos em Linguagem Simples" description="Conteúdos introdutórios para ajudar você a compreender situações, organizar informações e localizar canais responsáveis." /><section className="section"><div className="container"><div className="card-grid card-grid--three">{simpleGuides.map((guide, index) => { const Icon = icons[index]; return <article className="guide-card" key={guide.title}><span className="icon-box"><Icon /></span><h2>{guide.title}</h2><p>{guide.description}</p><button type="button" disabled>Conteúdo em preparação <ArrowRight size={16} /></button></article> })}</div></div></section><section className="notice"><div className="container"><strong>Importante</strong><p>Este espaço oferece informação geral e não substitui atendimento jurídico, médico, social ou técnico individualizado. Em emergências, procure imediatamente os serviços públicos competentes.</p></div></section></>
}
