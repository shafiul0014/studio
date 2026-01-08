import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function CallNowButton() {
  return (
    <a
      href="tel:8445781549"
      className={cn(
        'fixed bottom-4 right-4 z-50 group',
        'md:bottom-8 md:right-8'
      )}
      aria-label="Call Now: (844) 578-1549"
    >
      <Button
        size="lg"
        className={cn(
          'h-16 w-16 rounded-full bg-accent text-accent-foreground shadow-2xl',
          'hover:bg-accent/90 transition-all duration-300 ease-in-out',
          'flex items-center justify-center gap-2',
          'animate-pulse-orange',
          'md:w-auto md:px-6 md:py-4'
        )}
      >
        <Phone className="h-7 w-7 md:h-6 md:w-6" />
        <div className="hidden md:flex flex-col items-start -ml-1">
            <span className="text-xs leading-none">Tap to Call</span>
            <span className="text-lg font-bold leading-tight">(844) 578-1549</span>
        </div>
      </Button>
    </a>
  );
}
