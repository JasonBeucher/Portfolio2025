import Link from 'next/link';

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed z-10 top-3 w-full px-4">
      <nav className="flex justify-center gap-0.5 p-0.5 border border-white/50 rounded-full bg-white/10 backdrop-blur">
        <Link href="#projects" passHref legacyBehavior>
          <a className="nav-item text-[10px] sm:text-xs md:text-sm whitespace-nowrap px-1 sm:px-1.5 md:px-2 py-1 sm:py-1.5">Projets</a>
        </Link>
        <Link href="#experiences" passHref legacyBehavior>
          <a className="nav-item text-[10px] sm:text-xs md:text-sm whitespace-nowrap px-1 sm:px-1.5 md:px-2 py-1 sm:py-1.5">Experiences</a>
        </Link>
        <Link href="#about" passHref legacyBehavior>
          <a className="nav-item text-[10px] sm:text-xs md:text-sm whitespace-nowrap px-1 sm:px-1.5 md:px-2 py-1 sm:py-1.5">À propos</a>
        </Link>
        <Link href="#contact" passHref legacyBehavior>
          <a className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 text-[10px] sm:text-xs md:text-sm whitespace-nowrap px-1 sm:px-1.5 md:px-2 py-1 sm:py-1.5">Contact</a>
        </Link>
      </nav>
    </div>
  );
};