import React, { useState, useEffect } from 'react';

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
    <div className="h-screen w-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="w-4/5 h-4/5 bg-zinc-900 rounded-2xl shadow-2xl relative overflow-hidden border border-zinc-800">
        {/* Logo */}
        <div className={`absolute top-8 left-12 transition-all duration-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}>
          <div className="flex items-center">
            <span className="text-4xl font-bold tracking-tighter text-white">SubFlow</span>
            <span className="text-4xl text-blue-500 ml-0.5">.</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-8 px-12 py-8 h-full">
          {/* Left Column */}
          <div className="flex flex-col justify-center pt-20">
            <h1 className={`text-5xl font-bold mb-6 transition-all duration-300 transform text-white ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              Comment ça marche
            </h1>
            <p className={`text-lg text-zinc-400 mb-12 transition-all duration-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              Gardez le contrôle de vos abonnements.<br />
              SubFlow vous aide à suivre et optimiser vos dépenses mensuelles.
            </p>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <div 
                  key={index}
                  className={`bg-zinc-900 hover:bg-zinc-800 p-4 rounded-2xl cursor-pointer transition-all duration-300 border border-zinc-800 hover:border-zinc-700
                    ${hoveredSection === index ? 'translate-x-2' : ''}`}
                  onMouseEnter={() => setHoveredSection(index)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <h3 className="text-lg font-semibold mb-2 text-white">{section.title}</h3>
                  <p className="text-zinc-400">{section.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Phone Mockups */}
          <div className="relative flex items-center justify-center h-full">
            <div className="relative w-[400px] h-[600px] overflow-visible">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="absolute transition-all duration-500 ease-in-out rounded-3xl w-[270px] h-[584px] overflow-hidden border border-zinc-800"
                  style={{ 
                    left: `${index * 40}px`,
                    top: '0',
                    zIndex: hoveredSection === null ? 30 - index : 
                           hoveredSection === index ? 30 : 20 - index,
                    transform: `
                      ${hoveredSection === null ? 
                        `translateX(${index * 20}px) translateY(${index * 10}px) rotate(${(index * 15)}deg)` : 
                        hoveredSection <= index ?
                        `translateX(${(index - hoveredSection) * 150 + 100}px) translateY(${(index - hoveredSection) * 10}px) rotate(${((index - hoveredSection) * 5)}deg)` :
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
                    src={`/assets/images/screen${index + 1}.jpeg`}
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