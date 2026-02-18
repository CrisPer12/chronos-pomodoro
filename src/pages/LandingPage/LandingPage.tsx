import { Link } from "react-router-dom";
import {
  Timer,
  ListChecks,
  BarChart3,
  ArrowRight,
  Clock,
  Zap,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <div className="landing-page min-h-screen bg-surface-page">
      {/* Navbar */}
      <nav className="landing-nav">
        <div className="landing-container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-action-primary flex items-center justify-center">
              <Clock size={20} className="text-text-on-primary" />
            </div>
            <span className="text-xl font-bold text-text-primary">Chronos</span>
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="secondary" size="sm">
                Entrar
              </Button>
            </Link>
            <Link to="/login">
              <Button size="sm">Começar Grátis</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section">
        <div className="landing-container">
          <div className="hero-content">
            <div className="hero-badge">
              <Zap size={14} />
              <span>Produtividade inteligente</span>
            </div>
            <h1 className="hero-title">
              Domine seu tempo.
              <br />
              <span className="hero-title-accent">
                Conquiste seus objetivos.
              </span>
            </h1>
            <p className="hero-subtitle">
              Chronos combina a técnica Pomodoro com gestão inteligente de
              tarefas para você alcançar o máximo de foco e produtividade.
            </p>
            <div className="hero-actions">
              <Link to="/login">
                <Button size="lg" className="hero-cta-button">
                  Começar Agora
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link to="/app">
                <Button variant="secondary" size="lg">
                  Ver Demo
                </Button>
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-timer-card">
              <div className="hero-timer-ring">
                <svg viewBox="0 0 120 120" className="hero-timer-svg">
                  <circle cx="60" cy="60" r="52" className="hero-timer-track" />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    className="hero-timer-progress"
                  />
                </svg>
                <div className="hero-timer-text">25:00</div>
              </div>
              <div className="hero-timer-label">Foco</div>
              <div className="hero-timer-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="landing-container">
          <div className="section-header-landing">
            <h2 className="section-title-landing">
              Tudo que você precisa para ser produtivo
            </h2>
            <p className="section-description">
              Ferramentas poderosas em uma interface limpa e intuitiva.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Timer size={24} />
              </div>
              <h3 className="feature-title">Timer Pomodoro</h3>
              <p className="feature-description">
                Timer configurável com modos Foco, Pausa Curta e Pausa Longa.
                Progresso visual circular para acompanhar cada sessão.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <ListChecks size={24} />
              </div>
              <h3 className="feature-title">Gestão de Tarefas</h3>
              <p className="feature-description">
                Organize suas tarefas, defina metas de pomodoros por tarefa e
                acompanhe o que foi concluído ao longo do dia.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <BarChart3 size={24} />
              </div>
              <h3 className="feature-title">Progresso Diário</h3>
              <p className="feature-description">
                Visualize seu progresso diário com métricas claras. Saiba
                exatamente quanto você produziu e onde pode melhorar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-section">
        <div className="landing-container">
          <div className="section-header-landing">
            <h2 className="section-title-landing">Como funciona</h2>
            <p className="section-description">
              Três passos simples para transformar sua produtividade.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Adicione suas tarefas</h3>
                <p className="step-description">
                  Liste o que precisa fazer e defina quantos pomodoros cada
                  tarefa vai precisar.
                </p>
              </div>
            </div>

            <div className="step-divider">
              <ChevronRight size={24} className="text-text-muted" />
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Inicie o timer</h3>
                <p className="step-description">
                  Foque por 25 minutos, faça uma pausa curta e repita. O Chronos
                  cuida do ciclo para você.
                </p>
              </div>
            </div>

            <div className="step-divider">
              <ChevronRight size={24} className="text-text-muted" />
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Acompanhe seu progresso</h3>
                <p className="step-description">
                  Veja suas métricas diárias e sinta a evolução constante da sua
                  produtividade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="landing-container">
          <div className="cta-card">
            <h2 className="cta-title">Pronto para ser mais produtivo?</h2>
            <p className="cta-description">
              Junte-se a milhares de pessoas que já transformaram sua rotina com
              o Chronos.
            </p>
            <Link to="/login">
              <Button size="lg" className="cta-button">
                Começar Gratuitamente
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="landing-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-action-primary flex items-center justify-center">
                  <Clock size={16} className="text-text-on-primary" />
                </div>
                <span className="text-lg font-semibold text-text-primary">
                  Chronos
                </span>
              </div>
              <p className="text-sm text-text-muted mt-2">
                Produtividade com foco e simplicidade.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-column-title">Produto</h4>
                <a href="#" className="footer-link">
                  Features
                </a>
                <a href="#" className="footer-link">
                  Preços
                </a>
                <a href="#" className="footer-link">
                  Changelog
                </a>
              </div>
              <div className="footer-column">
                <h4 className="footer-column-title">Suporte</h4>
                <a href="#" className="footer-link">
                  Documentação
                </a>
                <a href="#" className="footer-link">
                  Contato
                </a>
                <a href="#" className="footer-link">
                  FAQ
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="text-xs text-text-muted">
              © 2026 Chronos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
