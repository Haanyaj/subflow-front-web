import { useState, useEffect } from 'react';

const BloomLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    { 
      title: "Visualisez vos dépenses", 
      desc: "Accédez à une vue d'ensemble claire de vos abonnements. SubFlow regroupe toutes vos dépenses mensuelles au même endroit."
    },
    { 
      title: "Analysez vos habitudes", 
      desc: "Profitez de graphiques intuitifs pour comprendre vos dépenses. Identifiez les tendances et les opportunités d'optimisation."
    },
    { 
      title: "Suivez votre budget", 
      desc: "Gardez un œil sur l'évolution de vos dépenses mois après mois. SubFlow vous aide à maintenir vos objectifs financiers."
    }
  ];

  return (
    <div className="min-h-screen w-screen bg-black flex items-center justify-center p-4 md:py-12 md:px-6">
      <div className="w-full md:w-[90%] max-w-[1600px] min-h-screen md:min-h-0 md:h-[90vh] bg-zinc-900 rounded-xl md:rounded-2xl shadow-2xl relative overflow-hidden border border-zinc-800">
        {/* Logo */}
        <div className={`absolute top-6 left-6 md:top-12 md:left-16 transition-all duration-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}>
          <div className="flex items-center">
            <span className="text-3xl md:text-5xl font-bold tracking-tighter text-white">SubFlow</span>
            <span className="text-3xl md:text-5xl text-blue-500 ml-0.5">.</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-16 px-6 md:px-16 py-8 md:py-12 h-full">
          {/* Left Column */}
          <div className="flex flex-col justify-center pt-8 md:pt-24">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 md:mb-8 transition-all duration-300 transform text-white ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              Comment ça marche
            </h1>
            <p className={`text-lg md:text-xl text-zinc-400 mb-8 md:mb-12 transition-all duration-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              Gardez le contrôle de vos abonnements.<br />
              SubFlow vous aide à suivre et optimiser vos dépenses mensuelles.
            </p>

            {/* App Store Section */}
            <div className={`mb-8 md:mb-16 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400 font-medium text-base md:text-lg">
                    Disponible sur
                  </span>
                  <div className="flex items-center">
                    <span className="text-white font-medium text-base md:text-lg">
                      App Store
                    </span>
                  </div>
                </div>
                <a 
                  href="https://apps.apple.com/fr/app/subflow/id6741497228" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-95"
                >
                  <img 
                    src="/assets/images/Logo_App_Store_d'Apple.png" 
                    alt="Télécharger sur l'App Store" 
                    className="h-12 md:h-14"
                  />
                </a>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              {sections.map((section, index) => (
                <div 
                  key={index}
                  className={`bg-zinc-900 hover:bg-zinc-800 p-4 rounded-xl md:rounded-2xl cursor-pointer transition-all duration-300 border border-zinc-800 hover:border-zinc-700
                    ${hoveredSection === index ? 'translate-x-2' : ''}`}
                  onMouseEnter={() => setHoveredSection(index)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <h3 className="text-sm md:text-base font-semibold mb-2 text-white">{section.title}</h3>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">{section.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Phone Mockups */}
          <div className="relative flex items-center justify-center h-[50vh] md:h-full mb-8 md:mb-0">
            <div className="relative w-[280px] md:w-[400px] h-[420px] md:h-[600px] overflow-visible">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="absolute transition-all duration-500 ease-in-out rounded-3xl overflow-hidden border border-zinc-800"
                  style={{ 
                    width: window.innerWidth < 768 ? '190px' : '270px',
                    height: window.innerWidth < 768 ? '411px' : '584px',
                    left: `${index * (window.innerWidth < 768 ? 35 : 50)}px`,
                    top: '0',
                    zIndex: hoveredSection === null ? 30 - index : 
                           hoveredSection === index ? 30 : 20 - index,
                    transform: `
                      ${hoveredSection === null ? 
                        `translateX(${index * (window.innerWidth < 768 ? 15 : 25)}px) translateY(${index * (window.innerWidth < 768 ? 10 : 15)}px) rotate(${(index * 15)}deg)` : 
                        hoveredSection <= index ?
                        `translateX(${(index - hoveredSection) * (window.innerWidth < 768 ? 100 : 150) + (window.innerWidth < 768 ? 70 : 100)}px) translateY(${(index - hoveredSection) * (window.innerWidth < 768 ? 10 : 15)}px) rotate(${((index - hoveredSection) * 5)}deg)` :
                        'translateX(-200px)'
                      }
                      ${hoveredSection === index ? 'scale(1.05)' : 'scale(1)'}
                    `,
                    opacity: hoveredSection === null ? 1 :
                            hoveredSection > index ? 0 :
                            hoveredSection === index ? 1 :
                            1 - ((index - hoveredSection) * 0.3),
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <img 
                    src={`/assets/images/screen${index + 1}.png`}
                    alt={`Screen ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloomLanding;