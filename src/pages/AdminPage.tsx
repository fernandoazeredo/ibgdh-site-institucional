import { LockKeyhole } from 'lucide-react'

export function AdminPage() {
  return <section className="section admin-page"><div className="container"><div className="admin-card"><span className="icon-box"><LockKeyhole /></span><span className="eyebrow">Acesso restrito</span><h1>Área administrativa</h1><p>O painel de gestão de conteúdos será ativado em uma etapa posterior, com autenticação e perfis de acesso pelo Firebase.</p><button className="button button--primary" type="button" disabled>Entrar — em preparação</button></div></div></section>
}
