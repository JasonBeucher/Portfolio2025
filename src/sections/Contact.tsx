"use client";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { useState } from "react";

export const ContactSection = () => {
  // Email à copier
  const email = "contact@jasonbeucher.fr";
  // État pour gérer le message de confirmation de copie
  const [copied, setCopied] = useState(false);

  // Fonction pour copier l&apos;email et ouvrir le client de messagerie
  const handleContact = () => {
    // Copie de l&apos;email dans le presse-papiers
    navigator.clipboard.writeText(email).then(() => {
      // Afficher le message de confirmation
      setCopied(true);
      // Cacher le message après 2 secondes
      setTimeout(() => setCopied(false), 2000);
      
      // Ouvrir le client de messagerie
      window.location.href = `mailto:${email}`;
    }).catch(err => {
      console.error('Erreur lors de la copie du mail:', err);
    });
  };

  return <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
    <div className="container">
      <div className="bg-white dark:bg-gradient-to-r from-[#ffc760] to-[#f0a800] text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-10">
        <div className="absolute inset-0 opacity-5 -z-10" style={
          {
            backgroundImage: `url(${grainImage.src})`
          }
        }></div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">Construisons ensemble l&apos;avenir du numérique</h2>
            <p className="text-sm md:text-base mt-2">
              Vous recherchez un développeur fullstack passionné ? Discutons de vos projets et voyons comment je peux contribuer à leur succès.
            </p>
          </div>
          <div className="relative">
            <button 
              onClick={handleContact}
              className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-800 transition-colors"
            >
              <span className="font-semibold">Me contacter</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
            
            {/* Message de confirmation de copie */}
            {copied && (
              <div className="absolute -top-10 left-0 right-0 mx-auto text-center bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm animate-fade-in">
                Email copié !
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>;
};
