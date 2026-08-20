import {
  AlertTriangle,
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  ShieldCheck,
} from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { simpleGuides } from '../content'

const icons = [FileCheck2, BookOpenCheck, ShieldCheck]

export function KnowledgePage() {
  return (
    <>
      <PageHero
        eyebrow="Conhecimento cidadão"
        title="Direitos em Linguagem Simples"
        description="Conteúdos introdutórios para ajudar você a compreender situações, organizar informações e localizar canais responsáveis."
      />

      <section className="section">
        <div className="container">
          <div className="card-grid card-grid--three">
            {simpleGuides.map((guide, index) => {
              const Icon = icons[index]
              return (
                <article className="guide-card" key={guide.title}>
                  <span className="icon-box"><Icon aria-hidden="true" /></span>
                  <h2>{guide.title}</h2>
                  <p>{guide.description}</p>
                  <a className="text-link" href={`#${guide.slug}`}>
                    Ler orientação <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section guide-details" aria-labelledby="guias-completos">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Passo a passo</span>
            <h2 id="guias-completos">Orientações práticas</h2>
            <p>Consulte os cuidados essenciais e os canais oficiais para cada situação.</p>
          </div>
          <div className="guide-details__list">
            {simpleGuides.map((guide, guideIndex) => {
              const Icon = icons[guideIndex]
              return (
                <article className="guide-detail" id={guide.slug} key={guide.slug}>
                  <header className="guide-detail__header">
                    <span className="icon-box"><Icon aria-hidden="true" /></span>
                    <div>
                      <span className="eyebrow">Guia {guideIndex + 1}</span>
                      <h2>{guide.title}</h2>
                      <p>{guide.introduction}</p>
                    </div>
                  </header>

                  <ol className="guide-steps">
                    {guide.steps.map((step, stepIndex) => (
                      <li className="guide-step" key={step.title}>
                        <span aria-hidden="true">{stepIndex + 1}</span>
                        <div><h3>{step.title}</h3><p>{step.text}</p></div>
                      </li>
                    ))}
                  </ol>

                  <div className="guide-support-grid">
                    <div>
                      <h3>Lista de verificação</h3>
                      <ul className="guide-checklist">
                        {guide.checklist.map((item) => (
                          <li key={item}><CheckCircle2 size={19} aria-hidden="true" /><span>{item}</span></li>
                        ))}
                      </ul>
                    </div>
                    <aside className="guide-alert">
                      <AlertTriangle size={22} aria-hidden="true" />
                      <div><h3>Atenção</h3><p>{guide.attention}</p></div>
                    </aside>
                  </div>

                  <div className="guide-official-links">
                    <strong>Canais oficiais:</strong>
                    {guide.links.map((link) => (
                      <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
                        {link.label} <ExternalLink size={15} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="notice">
        <div className="container">
          <strong>Importante</strong>
          <p>Este espaço oferece informação geral e não substitui atendimento jurídico, médico, social ou técnico individualizado. Em emergências, procure imediatamente os serviços públicos competentes.</p>
        </div>
      </section>
    </>
  )
}
