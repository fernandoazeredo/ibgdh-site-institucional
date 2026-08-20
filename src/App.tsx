import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ActionAreasPage } from './pages/ActionAreasPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { KnowledgePage } from './pages/KnowledgePage'
import { TransparencyPage } from './pages/TransparencyPage'
import { ContactPage } from './pages/ContactPage'
import { AdminPage } from './pages/AdminPage'
import { StaticPage } from './pages/StaticPage'

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quem-somos" element={<AboutPage />} />
        <Route path="/areas-de-atuacao" element={<ActionAreasPage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/direitos-em-linguagem-simples" element={<KnowledgePage />} />
        <Route path="/transparencia" element={<TransparencyPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/administracao" element={<AdminPage />} />
        <Route path="/acessibilidade" element={<StaticPage kind="accessibility" />} />
        <Route path="/privacidade" element={<StaticPage kind="privacy" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  )
}
