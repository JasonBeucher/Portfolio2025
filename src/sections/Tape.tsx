import StarIcon from "@/assets/icons/star.svg"
import { Fragment } from "react"

const words = [
  "Performant",  
  "Évolutif",  
  "Sécurisé",  
  "Fiable",  
  "Intuitif",  
  "Facile à maintenir",  
  "Ergonomique",  
  "Optimisé pour la recherche",  
  "Interactif",  
  "Accessible"
];

export const TapeSection = () => {
  return <div className="py-16 lg:py-24 overflow-x-clip">
    <div className="bg-white -rotate-3 -mx-1">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]">
          {[...new Array(2)].fill(0).map((_, i) => (
            <Fragment key={i}>
              {words.map(word => (
                <div key={word} className="inline-flex gap-4 items-center">
                  <span className="text-sky-600 dark:text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                  <StarIcon className="size-6 text-sky-600 dark:text-gray-900 -rotate-12" />
                </div>
              ))}
            </Fragment>
          ))}

        </div>
      </div>
    </div>
  </div>;
};
