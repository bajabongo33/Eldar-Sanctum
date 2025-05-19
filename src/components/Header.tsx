import Link from 'next/link';

const Header = () => (
  <header className="bg-eldar-dark text-eldar-gold p-4 flex justify-between items-center">
    <Link href="/">
      <img src="/images/logo.png" alt="Eldar Sanctum Logo" className="h-10" />
    </Link>
    <nav className="space-x-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/library/roots">Library</Link>
      <Link href="/vault">Vault</Link>
      <Link href="/blog/what-is-a-monad">Blog</Link>
      <Link href="/community">Community</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
