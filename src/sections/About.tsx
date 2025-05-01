import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';
import Image from 'next/image';
import ReactIcon from '@/assets/icons/react.svg';
import GithubIcon from '@/assets/icons/github.svg';
import vueIcon from '@/assets/icons/vue-js.svg';
import nextIcon from '@/assets/icons/next-js.svg';
import nodeIcon from '@/assets/icons/node-js.svg';
import symfonyIcon from '@/assets/icons/symfony.svg';
import mapImage from '@/assets/images/carte.png';
import smileMemoji from '@/assets/images/avatar_head.png';
import { CardHeader } from '@/components/CardHeader';
import { ToolboxItems } from '@/components/ToolboxItems';
import { Quiz } from '@/components/Quiz';
import { FaCode, FaSitemap } from 'react-icons/fa';
import { SiObsidian, SiDocker } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';

// Toolbox items
const toolboxItems = [
  {
    title: "Next",
    iconType: nextIcon,
  },
  {
    title: "Vue",
    iconType: vueIcon,
  },
  {
    title: "Node",
    iconType: nodeIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Symfony",
    iconType: symfonyIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  }
];



export const AboutSection = () => {
  interface Article {
    id: number;
    title: string;
    url: string;
    readable_publish_date?: string;
    user?: {
      name: string;
      profile_image?: string;
    };
    tag_list?: string[];
  }

  return (
        <div className='py-20 lg:py-28' id='about'>
          <div className='container'>
            <SectionHeader title="Un Aperçu de Mon Monde" eyebrow="À Propos de Moi" description="Découvrez qui je suis, ce que je fais et ce qui m'inspire" />
            <div className="mt-20 flex flex-col gap-8">
            <div className='grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3'>
            <Card className='h-[320px]  md:h-[360px] lg:h-[320px] md:col-span-2 lg:col-span-1'>
                <CardHeader title="Mes Outils" description="Les logiciels que j'utilise quotidiennement." className='pb-1 md:pb-1' />
                <div className='w-full px-4 mt-4'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col items-center justify-center p-2 rounded-lg bg-gradient-to-br from-white/90 to-blue-100/90 dark:from-blue-500/10 dark:to-blue-600/20 hover:from-white hover:to-blue-200 dark:hover:from-blue-500/20 dark:hover:to-blue-600/30 border border-blue-200 dark:border-blue-500/30 transition-colors shadow-sm'>
                      <span className='text-blue-700 dark:text-blue-500 text-3xl mb-2'><FaCode /></span>
                      <span className='text-sm font-medium text-center text-blue-900 dark:text-white'>VS Code</span>
                    </div>
                    <div className='flex flex-col items-center justify-center p-2 rounded-lg bg-gradient-to-br from-white/90 to-purple-100/90 dark:from-purple-500/10 dark:to-purple-600/20 hover:from-white hover:to-purple-200 dark:hover:from-purple-500/20 dark:hover:to-purple-600/30 border border-purple-200 dark:border-purple-500/30 transition-colors shadow-sm'>
                      <span className='text-purple-700 dark:text-purple-500 text-3xl mb-2'><SiObsidian /></span>
                      <span className='text-sm font-medium text-center text-purple-900 dark:text-white'>Obsidian</span>
                    </div>
                    <div className='flex flex-col items-center justify-center p-2 rounded-lg bg-gradient-to-br from-white/90 to-orange-100/90 dark:from-orange-500/10 dark:to-orange-600/20 hover:from-white hover:to-orange-200 dark:hover:from-orange-500/20 dark:hover:to-orange-600/30 border border-orange-200 dark:border-orange-500/30 transition-colors shadow-sm'>
                      <span className='text-orange-700 dark:text-orange-500 text-3xl mb-2'><VscGithub /></span>
                      <span className='text-sm font-medium text-center text-orange-900 dark:text-white'>Git</span>
                    </div>
                    <div className='flex flex-col items-center justify-center p-2 rounded-lg bg-gradient-to-br from-white/90 to-cyan-100/90 dark:from-cyan-500/10 dark:to-cyan-600/20 hover:from-white hover:to-cyan-200 dark:hover:from-cyan-500/20 dark:hover:to-cyan-600/30 border border-cyan-200 dark:border-cyan-500/30 transition-colors shadow-sm'>
                      <span className='text-cyan-700 dark:text-cyan-500 text-3xl mb-2'><SiDocker /></span>
                      <span className='text-sm font-medium text-center text-cyan-900 dark:text-white'>Docker</span>
                    </div>
                  </div>
                </div>
              </Card>
          <Card className='h-[320px]  md:h-[360px] lg:h-[320px] md:col-span-3 lg:col-span-2'>
            <div>
              <CardHeader title="Ma Boîte à Outils" description="Découvrez les technologies que j'utilise." className='' />
            </div>
            <ToolboxItems className='' items={toolboxItems} itemsWrapperClassName='animate-move-left [animation-duration:30s]'/>
            <ToolboxItems className='mt-6' itemsWrapperClassName='animate-move-right [animation-duration:30s]' items={toolboxItems} />
          </Card>
        </div>
          <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 overflow-auto'>
            <Card className='h-[320px] md:col-span-3 lg:col-span-2 flex flex-col overflow-auto'>
              <div className='flex-1 flex flex-col justify-center mx-4 mb-4 p-2 pb-0 overflow-auto'>
                <Quiz />
              </div>
            </Card>
            <Card className='h-[320px] p-0 relative md:col-span-2 lg:col-span-1'>
              <Image className='h-full w-full object-cover object-left-top' src={mapImage} alt="Carte" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className='absolute inset-0 rounded-full bg-white dark:bg-gradient-to-r from-[#ffc760] to-[#f0a800] -z-20 animate-ping [animation-duration:2s]'></div>
                <div className='absolute inset-0 rounded-full bg-white dark:bg-gradient-to-r from-[#ffc760] to-[#f0a800] -z-10'></div>
                <Image className='size-20' src={smileMemoji} alt="Memoji Sourire" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};