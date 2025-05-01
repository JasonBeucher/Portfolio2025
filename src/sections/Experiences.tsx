'use client'; // Add this since we're using hooks

import { ScrollableTimeline, TimelineEntry } from '@/components/ScrollableTimeline';
import {
  TechCorpIcon,
  InnovateSoftIcon,
  UniversityIcon,
  EducationIcon
} from '@/components/CompanyIcons';
import { SectionHeader } from '@/components/SectionHeader';

export const ExperiencesSection = () => {
  // Work experience timeline entries
  const workEntries: TimelineEntry[] = [
    {
      id: "job-1",
      date: "2022 - 2025",
      title: "Développeur Full-Stack",
      company: "Porsolt",
      icon: <TechCorpIcon className="size-4 xl:size-5" />,
      description: (
        <div className="space-y-1 xl:space-y-2">
          <p className="mb-1">
            Chez Porsolt, j&apos;ai mené la refonte d&apos;une application métier en migrant une solution Microsoft Access vers une API Symfony-centric.
          </p>
          <ul className="list-disc pl-4 xl:pl-5 space-y-0.5 xl:space-y-1">
            <li>Développement d&apos;un système de planification intelligente</li>
            <li>Collaboration avec d&apos;autres développeurs</li>
            <li>Utilisation quotidienne par plus de 100 collaborateurs</li>
          </ul>
        </div>
      )
    },
    {
      id: "job-2",
      date: "2021",
      title: "Service Informatique",
      company: "Lycée Raoul Vadepied",
      icon: <InnovateSoftIcon className="size-4 xl:size-5" />,
      description: (
        <div className="space-y-1 xl:space-y-2">
          <p className="mb-1">
            J&apos;ai participé à la gestion des infrastructures informatiques du lycée, assurant l&apos;installation et la maintenance des postes.
          </p>
          <ul className="list-disc pl-4 xl:pl-5 space-y-0.5 xl:space-y-1">
            <li>Configuration et gestion des VLAN pour la sécurité</li>
            <li>Administration système et gestion du réseau</li>
            <li>Installation et maintenance des postes de travail</li>
          </ul>
        </div>
      )
    },
  ];

  // Education timeline entries
  const educationEntries: TimelineEntry[] = [
    {
      id: "edu-1",
      date: "2022 - 2025",
      title: "École d'ingénieur",
      company: "ESIEA",
      icon: <UniversityIcon className="size-4 xl:size-5" />,
      description: (
        <div className="space-y-1 xl:space-y-2">
          <p className="mb-1">
            À l&apos;ESIEA, j&apos;ai acquis des compétences en développement logiciel et en gestion de projets informatiques.
          </p>
          <ul className="list-disc pl-4 xl:pl-5 space-y-0.5 xl:space-y-1">
            <li>Concepts avancés en programmation et architecture</li>
            <li>Projets en équipe avec méthodologies agiles</li>
            <li>Exploration de la cybersécurité et systèmes embarqués</li>
          </ul>
        </div>
      )
    },
    {
      id: "edu-2",
      date: "2020 - 2022",
      title: "BTS SNIR",
      company: "Lycée Bréquigny",
      icon: <UniversityIcon className="size-4 xl:size-5" />,
      description: (
        <div className="space-y-1 xl:space-y-2">
          <p className="mb-1">
            Développement de compétences en programmation, administration système et gestion des réseaux.
          </p>
          <ul className="list-disc pl-4 xl:pl-5 space-y-0.5 xl:space-y-1">
            <li>Applications embarquées et web</li>
            <li>Administration de systèmes d&apos;exploitation</li>
            <li>Mise en place et gestion de réseaux</li>
          </ul>
        </div>
      )
    },
    {
      id: "edu-3",
      date: "2018 - 2020",
      title: "BAC STi2D",
      company: "Lycée Réaumur",
      icon: <EducationIcon className="size-4 xl:size-5" />,
      description: (
        <div className="space-y-1 xl:space-y-2">
          <p className="mb-1">
            Mon bac STI2D m&apos;a permis de découvrir le monde de l&apos;ingénierie et des technologies.
          </p>
          <ul className="list-disc pl-4 xl:pl-5 space-y-0.5 xl:space-y-1">
            <li>Découverte de l&apos;électronique et de l&apos;informatique</li>
            <li>Premiers projets en programmation</li>
            <li>Exploration des innovations technologiques</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section id="experiences" className="relative py-6 xl:py-10 min-h-[2300px]">
      <SectionHeader
        title="Mes Expériences"
        eyebrow="Parcours & Réalisations"
        description="Des expériences qui m&apos;ont permis de grandir et de concrétiser des projets."
      />


      {/* Pass both entry arrays separately to the timeline component */}
      <ScrollableTimeline
        workEntries={workEntries}
        educationEntries={educationEntries}
      />
    </section>
  );
};
