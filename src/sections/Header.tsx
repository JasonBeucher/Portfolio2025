import Link from 'next/link';

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed z-10 top-3 w-full">
      <nav className="flex gap-1 p-0.5 border border-white/50 rounded-full bg-white/10 backdrop-blur">
        <Link href="#projects" passHref legacyBehavior>
          <a className="nav-item">Projets</a>
        </Link>
        <Link href="#experiences" passHref legacyBehavior>
          <a className="nav-item">Experiences</a>
        </Link>
        <Link href="#about" passHref legacyBehavior>
          <a className="nav-item">À propos</a>
        </Link>
        <Link href="#contact" passHref legacyBehavior>
          <a className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
        </Link>
      </nav>
    </div>
  );
};