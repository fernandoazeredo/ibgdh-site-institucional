import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Accessibility, ChevronRight, Menu, Moon, Sun, X } from 'lucide-react'
import { organization } from '../content'

type SiteLayoutProps = { children: ReactNode }

const navigation = [
  ['Início', '/'],
  ['Quem Somos', '/quem-somos'],
  ['Áreas de Atuação', '/areas-de-atuacao'],
  ['Projetos', '/projetos'],
  ['Direitos em Linguagem Simples', '/direitos-em-linguagem-simples'],
  ['Transparência', '/transparencia'],
  ['Contato', '/contato'],
] as const

const homeAnchors = [
  ['Apresentação', 'inicio'],
  ['Áreas em destaque', 'atuacao'],
  ['Orientações ao cidadão', 'direitos'],
  ['Projetos em desenvolvimento', 'projetos'],
  ['Participe do Instituto', 'participe'],
] as const

export function SiteLayout({ children }: SiteLayoutProps) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [compactNavigation, setCompactNavigation] = useState(() => window.matchMedia('(max-width: 1050px)').matches)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('ibgdh-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('ibgdh-theme', theme)
  }, [theme])

  useEffect(() => {
    setMenuOpen(false)
    const scrollTimer = window.setTimeout(() => {
      if (location.hash) {
        const target = document.getElementById(location.hash.slice(1))
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 0)

    return () => window.clearTimeout(scrollTimer)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1050px)')
    const updateNavigationMode = () => {
      setCompactNavigation(mediaQuery.matches)
      if (!mediaQuery.matches) setMenuOpen(false)
    }

    updateNavigationMode()
    mediaQuery.addEventListener('change', updateNavigationMode)
    return () => mediaQuery.removeEventListener('change', updateNavigationMode)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    closeButtonRef.current?.focus()
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      menuButtonRef.current?.focus()
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const selectAnchor = (anchor: string) => {
    closeMenu()
    if (location.pathname !== '/') return

    window.requestAnimationFrame(() => {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="utility-bar">
          <div className="container utility-bar__content">
            <span>Instituto Brasil Global de Direitos Humanos</span>
            <Link to="/acessibilidade">
              <Accessibility size={16} aria-hidden="true" /> Acessibilidade
            </Link>
          </div>
        </div>
        <div className="container header-main">
          <Link className="brand" to="/" aria-label="IBGDH - Página inicial">
            <img src="/logo-ibgdh.png" alt="Logomarca do IBGDH" />
            <span>
              <strong>IBGDH</strong>
              <small>Direitos Humanos na prática</small>
            </span>
          </Link>

          <nav
            className={`main-nav${menuOpen ? ' main-nav--open' : ''}`}
            id="navegacao-principal"
            aria-label="Navegação principal"
            aria-hidden={compactNavigation && !menuOpen}
            inert={compactNavigation && !menuOpen}
          >
            <div className="mobile-nav-heading">
              <div>
                <strong>Menu</strong>
                <small>Navegue pelo site do IBGDH</small>
              </div>
              <button ref={closeButtonRef} className="icon-button" onClick={closeMenu} aria-label="Fechar menu">
                <X aria-hidden="true" />
              </button>
            </div>

            <div className="nav-links-primary">
              {navigation.map(([label, path]) => (
                <NavLink key={path} to={path} end={path === '/'} onClick={closeMenu}>
                  {label}
                </NavLink>
              ))}
            </div>

            <div className="mobile-nav-section">
              <span className="mobile-nav-label">Atalhos da página inicial</span>
              {homeAnchors.map(([label, anchor]) => (
                <Link key={anchor} to={`/#${anchor}`} onClick={() => selectAnchor(anchor)}>
                  {label}
                </Link>
              ))}
            </div>

            <div className="mobile-nav-section">
              <span className="mobile-nav-label">Outros acessos</span>
              <Link to="/acessibilidade" onClick={closeMenu}>Acessibilidade</Link>
              <Link to="/privacidade" onClick={closeMenu}>Privacidade</Link>
              <Link to="/administracao" onClick={closeMenu}>Área administrativa</Link>
            </div>
          </nav>

          <div className="header-actions">
            <button
              className="icon-button"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
            >
              {theme === 'light' ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
            </button>
            <button
              ref={menuButtonRef}
              className="icon-button menu-button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              aria-controls="navegacao-principal"
            >
              <Menu aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && <button className="menu-backdrop" onClick={closeMenu} aria-label="Fechar menu" />}

      <main id="conteudo-principal">{children}</main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/logo-ibgdh.png" alt="" />
            <div>
              <strong>{organization.shortName}</strong>
              <p>{organization.purpose}</p>
            </div>
          </div>
          <div>
            <h2>Institucional</h2>
            <Link to="/quem-somos">Quem Somos</Link>
            <Link to="/areas-de-atuacao">Áreas de Atuação</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/transparencia">Transparência</Link>
          </div>
          <div>
            <h2>Para o público</h2>
            <Link to="/direitos-em-linguagem-simples">Conheça seus direitos</Link>
            <Link to="/contato">Canais de contato</Link>
            <Link to="/acessibilidade">Acessibilidade</Link>
          </div>
          <div>
            <h2>Endereço oficial</h2>
            <p>{organization.address}</p>
            <p>{organization.district}, {organization.cityState}</p>
            <p>CEP {organization.zipCode}</p>
            <Link className="footer-action" to="/contato">Ver contato <ChevronRight size={16} /></Link>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} {organization.legalName}. Todos os direitos reservados.</p>
          <div>
            <Link to="/privacidade">Privacidade</Link>
            <Link to="/administracao">Administração</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
