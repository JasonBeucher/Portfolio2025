import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
const footerLinks = [
  { title: "Linkedin", href: "https://www.linkedin.com/in/jason-beucher/" },
  { title: "Github", href: "https://github.com/JasonBeucher" },
  { title: "Root Me", href: "https://www.root-me.org/JonasChebure" },
  { title: "Codingame", href: "https://www.codingame.com/profile/46a3b3392f486ab9798fc51b1a903b673412965" },
];


export const Footer = () => {
  return <div className="relative overflow-x-clip">
    <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-white/30 dark:bg-[#f0a800]/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
    <div className="container relative z-10">
      <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
        <div className="text-white/40">2025. contact@jasonbeucher.fr</div>
        <div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a 
                key={link.title} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-white hover:text-white/80 transition-colors"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  </div>;
};