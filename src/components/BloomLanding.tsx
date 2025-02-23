import React, { useState, useEffect, memo } from "react";

const BloomLanding = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      id: "visualize",
      title: "Visualisez vos dépenses",
      description:
        "Accédez à une vue d’ensemble claire de vos abonnements. SubFlow regroupe toutes vos dépenses mensuelles au même endroit.",
    },
    {
      id: "analyze",
      title: "Analysez vos habitudes",
      description:
        "Profitez de graphiques intuitifs pour comprendre vos dépenses. Identifiez les tendances et les opportunités d’optimisation.",
    },
    {
      id: "track",
      title: "Suivez votre budget",
      description:
        "Gardez un œil sur l’évolution de vos dépenses mois après mois. SubFlow vous aide à maintenir vos objectifs financiers.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-auto">
      <div className="w-full max-w-xxl min-h-[900px] max-h-[90vh] bg-zinc-900 rounded-2xl shadow-2xl relative overflow-hidden border border-zinc-800 flex flex-col">
        {/* Logo */}
        <header className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-10">
          <div
            className={`flex items-center transition-all duration-300 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-8 opacity-0"
            }`}
          >
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
              SubFlow
            </span>
            <span className="text-3xl sm:text-4xl lg:text-5xl text-blue-500 ml-0.5">
              .
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 px-6 sm:px-8 lg:px-16 py-10 sm:py-12 lg:py-14 flex-1 overflow-hidden items-center">
          {/* Left Column */}
          <section className="flex flex-col justify-center">
          <br></br><br></br>
            <p
              className={`text-base sm:text-lg lg:text-xl text-zinc-400 mb-6 sm:mb-8 transition-all duration-300 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              Gardez le contrôle de vos abonnements.
              <br />
              SubFlow vous aide à suivre et optimiser vos dépenses mensuelles.
            </p>

            {/* App Store Section */}
            <div className="w-full max-w-xs pb-5">
              <a
                href="https://apps.apple.com/fr/app/subflow/id6741497228"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-zinc-700 rounded-lg p-2 
      bg-zinc-800 
      flex items-center gap-2
      transition-all duration-300 
      hover:bg-zinc-750 hover:border-zinc-600 
      hover:shadow-md 
      hover:scale-[1.01]"
                aria-label="Télécharger SubFlow sur l'App Store"
              >
                <div className="bg-white rounded-lg p-3">
                  <img
                    src="/assets/images/Logo_App_Store_d'Apple.png"
                    alt="App Store"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <p className="text-zinc-300 text-sm">Disponible sur</p>
                  <p className="text-white font-semibold">App Store</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <path d="M5 18l6-6-6-6" />
                </svg>
              </a>
            </div>

            {/* Sections List */}
            <div className="space-y-3 sm:space-y-4 flex-1  lg:max-h-[55vh]">
              {sections.map((section, index) => (
                <article
                  key={section.id}
                  className={`bg-zinc-900 p-4 sm:p-5 rounded-xl cursor-pointer transition-all duration-300 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 ${
                    hoveredSection === index ? "translate-x-2" : ""
                  }`}
                  onMouseEnter={() => setHoveredSection(index)}
                  onMouseLeave={() => setHoveredSection(null)}
                  role="button"
                  tabIndex={0}
                  aria-label={section.title}
                >
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 text-white">
                    {section.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm lg:text-base leading-relaxed line-clamp-2">
                    {section.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Right Column - Phone Mockups */}
          <section className="relative flex items-center justify-center h-[45vh] sm:h-[55vh] lg:h-full">
            <div className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-full flex items-center justify-center overflow-visible">
              {sections.map((_, index) => (
                <div
                  key={index}
                  className="absolute rounded-2xl w-[200px] sm:w-[240px] lg:w-[280px] h-[400px] sm:h-[480px] lg:h-[560px] overflow-hidden border border-zinc-800 shadow-lg"
                  style={{
                    left: `${index * 50}px`,
                    top: 0,
                    zIndex:
                      hoveredSection === null
                        ? 30 - index
                        : hoveredSection === index
                        ? 30
                        : 20 - index,
                    transform: `
                      ${
                        hoveredSection === null
                          ? `translateX(${
                              index * 25
                            }px) translateY(${15}px) rotate(${index * 15}deg)`
                          : hoveredSection <= index
                          ? `translateX(${
                              (index - hoveredSection) * 10
                            }px) translateY(${
                              (index - hoveredSection) * 15
                            }px) rotate(${(index - hoveredSection) * 5}deg)`
                          : "translateX(-200px)"
                      }
                      ${hoveredSection === index ? "scale(1.05)" : "scale(1)"}
                    `,
                    opacity:
                      hoveredSection === null
                        ? 1
                        : hoveredSection > index
                        ? 0
                        : 1 - (index - hoveredSection) * 0.3,
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <img
                    src={`/assets/images/screen${index + 1}.png`}
                    alt={`Aperçu de l'écran ${index + 1} de SubFlow`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
});

BloomLanding.displayName = "SubFlow";

export default BloomLanding;
