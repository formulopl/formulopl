import React from 'react';
import './WelcomeLanding.css';
import { AiIcon, CubeIcon, NoAccountsIcon, StepIcon } from './DesignIcons';

/* SVG Icons */
const TextInputIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
    <line x1="7" y1="10" x2="17" y2="10"></line>
    <line x1="7" y1="14" x2="17" y2="14"></line>
    <line x1="7" y1="18" x2="13" y2="18"></line>
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
    <path d="M9 12h0"></path>
    <path d="M15 12h0"></path>
    <path d="M6 20c-1.1 0 -2 -.9 -2 -2v-1c0 -1.1 1 -2 2 -2h1v-3c0 -2.21 1.79 -4 4 -4h2c2.21 0 4 1.79 4 4v3h1c1.1 0 2 .9 2 2v1c0 1.1 -.9 2 -2 2h-12z"></path>
  </svg>
);

const ListIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="9" y1="6" x2="20" y2="6"></line>
    <line x1="9" y1="12" x2="20" y2="12"></line>
    <line x1="9" y1="18" x2="20" y2="18"></line>
    <line x1="5" y1="6" x2="5" y2="6.01"></line>
    <line x1="5" y1="12" x2="5" y2="12.01"></line>
    <line x1="5" y1="18" x2="5" y2="18.01"></line>
  </svg>
);

const WelcomeLanding: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Wpisz lub wklej zadanie',
      icon: TextInputIcon,
      description: 'Podaj treść zadania w dowolnej postaci',
    },
    {
      num: '2',
      title: 'AI analizuje i tłumaczy',
      icon: BrainIcon,
      description: 'System rozkłada zadanie i przygotowuje wyjaśnienie',
    },
    {
      num: '3',
      title: 'Uczysz się metody krok po kroku',
      icon: ListIcon,
      description: 'Szczegółowe wyjaśnienie każdego etapu i wzoru',
    },
  ];

  const topics = [
    'Równania i nierówności',
    'Funkcje',
    'Trygonometria',
    'Logarytmy',
    'Pochodne',
    'Całki',
    'Ciągi',
    'Kombinatoryka',
  ];

  return (
    <div className="welcome-landing">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <AiIcon size={16} />
            <span>Powered by <strong>Bielik v3 11B</strong></span>
          </div>
          <h1 className="hero-headline">
            Naucz się matematyki z korepetytorem AI
          </h1>
          <p className="hero-subheadline">
            Wpisz lub wklej dowolne zadanie. Korepetytor AI po polsku wytłumaczy ci metodę krok po kroku i pokaże, jak myśleć matematycznie. <strong>Bez logowania, bez opłat.</strong>
          </p>

          {/* Feature Pills */}
          <div className="feature-pills">
            <div className="feature-pill">
              <div className="pill-icon">
                <CubeIcon />
              </div>
              <span>Matura podstawowa i rozszerzona</span>
            </div>
            <div className="feature-pill">
              <div className="pill-icon">
                <NoAccountsIcon />
              </div>
              <span>Bez logowania</span>
            </div>
            <div className="feature-pill">
              <div className="pill-icon">
                <StepIcon />
              </div>
              <span>Krok po kroku</span>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Principle: jasna deklaracja edukacyjnego charakteru
          aplikacji, widoczna od razu po hero. Adresuje obawy o "ściąganie"
          i ułatwia ręczną weryfikację w Google Ads / Search. */}
      {/* <section className="learning-principle" aria-label="Cel aplikacji">
        <div className="principle-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>
        <div className="principle-text">
          <strong>Formulo to korepetytor, nie generator gotowych odpowiedzi.</strong>{' '}
          Tłumaczymy metodę krok po kroku, żebyś zrozumiał materiał i samodzielnie rozwiązał kolejne zadanie. Aplikacja służy do nauki przed egzaminem, nie do zastępowania własnej pracy.
        </div>
      </section> */}

      {/* Przykładowe zapytania przeniesione pod pole wpisywania (renderowane w App.tsx). */}

      {/* Daily Challenge Section */}
      {/* <section className="daily-challenge-section">
        {dailyChallengeSlot}
      </section> */}

      {/* How It Works Section */}
      {/* <section className="how-it-works-section">
        <h2 className="section-title">Jak to działa?</h2>
        <div className="steps-container">
          <div className="steps-grid">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="step-card">
                  <div className="step-number-badge">{step.num}</div>
                  <div className="step-icon">
                    <Icon />
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  {idx < steps.length - 1 && (
                    <div className="step-connector"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      {/* <section className="stats-section">
        <h3 className="stats-title">Obsługiwane tematy:</h3>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">800+</div>
            <div className="stat-label">Koncepcji matematycznych</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">128</div>
            <div className="stat-label">Wzorów CKE</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">100</div>
            <div className="stat-label">Arkuszy maturalnych (2015-2024)</div>
          </div>
        </div>
      </section> */}

      {/* Topics Section */}
      {/* <section className="topics-section">
        <h2 className="section-title">Popularne tematy</h2>
        <div className="topics-grid">
          {topics.map((topic) => (
            <button
              key={topic}
              className="topic-link"
              onClick={() => onSubmitQuery(topic)}
            >
              {topic}
            </button>
          ))}
        </div>
      </section> */}

    </div>
  );
};

export default WelcomeLanding;
