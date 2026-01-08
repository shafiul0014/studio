import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card text-muted-foreground py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 px-4">
        <p className="text-sm">&copy; {currentYear} FlightConnect. All rights reserved.</p>
        <nav className="flex gap-4 md:gap-6">
          <Link href="/privacy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-sm hover:text-primary transition-colors">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
}
