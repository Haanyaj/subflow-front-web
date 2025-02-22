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

  const navLinks = [
    "Comment ça marche",
    "Avis",
    "Fonctionnalités",
    "FAQ"
  ];

  return (
    <div className="h-screen w-screen bg-pink-50 flex items-center justify-center overflow-hidden">
      <div className="w-4/5 h-4/5 bg-white rounded-2xl shadow-xl relative overflow-hidden">
        {/* Navigation */}
        <nav className={`flex justify-between items-center p-6 transition-all duration-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}>
          <div className="text-2xl font-bold">SubFlow</div>
          <div className="flex gap-6">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-600 hover:text-gray-900 transition-all duration-200 hover:bg-pink-50 px-4 py-2 rounded-full"
              >
                {link}
              </a>
            ))}
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-200">
              Télécharger
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-8 px-12 py-8 h-[calc(100%-4rem)]">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h1 className={`text-5xl font-bold mb-6 transition-all duration-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              Comment ça marche
            </h1>
            <p className={`text-lg text-gray-600 mb-12 transition-all duration-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              Gardez le contrôle de vos abonnements.<br />
              SubFlow vous aide à suivre et optimiser vos dépenses mensuelles.
            </p>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <div 
                  key={index}
                  className={`bg-white hover:bg-pink-50 p-4 rounded-2xl cursor-pointer transition-all duration-300
                    ${hoveredSection === index ? 'translate-x-2' : ''}`}
                  onMouseEnter={() => setHoveredSection(index)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                  <p className="text-gray-600">{section.desc}</p>
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
                  className="absolute transition-all duration-500 ease-in-out rounded-3xl shadow-2xl w-[270px] h-[584px] overflow-hidden"
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