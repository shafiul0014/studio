import type {Metadata} from 'next';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { CallNowButton } from '@/components/common/CallNowButton';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: 'Book Your Flight Today | Airlines Ticket',
  description: 'Book your flight today with Airlines Ticket. We offer fast and easy flight booking, changes, and cancellations over the phone. Get the best deals on airline tickets and speak with a live travel agent now.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <CallNowButton />
        <Toaster />
      </body>
    </html>
  );
}
