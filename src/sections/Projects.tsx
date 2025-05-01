import cyberboloss from "@/assets/images/cyberboloss.png";
import owntube from "@/assets/images/owntube.png";
import chronos from "@/assets/images/chronos.png";
import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Cloud } from "@/components/Cloud";
import GithubIcon from '@/assets/icons/github.svg';

const portfolioProjects = [
  {
    company: "Personnel",
    year: "2024",
    title: "Owntube",
    results: [
      { title: "Plateforme d’hébergement vidéo décentralisée" },
      { title: "Interface minimaliste et moderne" },
      { title: "Confidentialité et contrôle des données" },
    ],
    link: "https://github.com/JasonBeucher/OwnTube",
    image: owntube,
  },
  {
    company: "Personnel",
    year: "2025",
    title: "Cyberboloss",
    results: [
      { title: "Propose des défis pratiques basés sur des vulnérabilités réelles" },
      { title: "Permet aux utilisateurs d'apprendre la cybersécurité de manière pratique" },
      { title: "Apprentissage par l'action, simulant des problèmes de sécurité réels" },
    ],
    link: "https://github.com/JasonBeucher/cyberboloss",
    image: cyberboloss,
  },
  {
    company: "Porsolt",
    year: "2023",
    title: "Chronos",
    results: [
      { title: "Planification intelligente des tâches et des ressources" },
      { title: "Gestion des études et des projets de manière optimisée" },
      { title: "Suivi et attribution des tâches aux collaborateurs simplifiés" },
    ],
    link: "",
    image: chronos,

  },
];

export const ProjectsSection = () => {
  return <section className="pb-16 py-24 relative " id="projects">
    <div className="absolute inset-0 overflow-hidden">
      <Cloud className="top-[180px] right-[110px] md:top-[380px] md:right-[250px] lg:bottom-[1480px] lg:right-[350px] xl:bottom-[1250px] xl:right-[448px]" flipped />
      <Cloud className="top-[180px] left-[110px] md:top-[380px] md:left-[250px] lg:bottom-[1480px] lg:left-[350px] scale-x-[-1] xl:bottom-[1250px] xl:left-[448px]" flipped />
    </div>
    <div className="container relative">
      <SectionHeader
        title="Projets"
        eyebrow="Créations & Impact"
        description="Une sélection de projets qui ont marqué mon parcours."
      />
      <div className="flex flex-col mt-10 gap-20">
        {portfolioProjects.map((project, index) => (
          <Card
            key={project.title}
            style={{ top: `calc(64px + ${index * 30}px)` }}
            className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-[#ffc760] to-[#f0a800] text-center inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map(result => (
                    <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                    <button
                      className="group bg-white text-gray-900 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-3 mt-8 md:w-auto md:px-8 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20 transform hover:-translate-y-1"
                    >
                      <span>Voir le projet</span>
                      <GithubIcon className="size-5 transition-transform duration-300 group-hover:rotate-12" />
                    </button>
                  </a>
                ) : (
                  <div className="inline-block w-full">
                    <button
                      disabled
                      className="group bg-gray-300 text-gray-500 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-3 mt-8 md:w-auto md:px-8 cursor-not-allowed opacity-70"
                    >
                      <span>Projet non disponible</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                        <path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0"></path>
                        <path d="M9.5 9.5l5 5"></path>
                        <path d="M14.5 9.5l-5 5"></path>
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              <div className="relative">
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
              </div>
            </div>
          </Card>
        ))}
      </div>

    </div>

  </section>;
};
