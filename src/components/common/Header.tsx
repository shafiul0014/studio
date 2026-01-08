import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="py-4 bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-primary font-headline">
          <Logo className="w-8 h-8 text-primary" />
          Airlines Ticket
        </Link>
        <a href="tel:8445781549" className="hidden md:flex items-center gap-2 text-lg font-semibold text-foreground hover:text-primary transition-colors">
          <Phone className="w-5 h-5 text-primary" />
          (844) 578-1549
        </a>
      </div>
    </header>
  );
}
