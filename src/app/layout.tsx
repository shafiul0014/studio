import type {Metadata} from 'next';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { CallNowButton } from '@/components/common/CallNowButton';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: 'Airlines Ticket | Your Personal Flight Assistant',
  description: 'Book, change, or cancel flights with a simple phone call. Our expert agents are available 24/7 to help you with all your travel needs. Call (844) 578-1549 now!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
