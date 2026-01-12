import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Replace, XCircle, Clock, Star, Headphones } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  const services = [
    {
      icon: <Plane className="w-10 h-10 text-primary" />,
      title: 'New Flight Bookings',
      description: 'Find and book your perfect flight with the help of our expert travel agents. We handle all the details.',
    },
    {
      icon: <Replace className="w-10 h-10 text-primary" />,
      title: 'Changes & Modifications',
      description: 'Need to change your travel dates or destination? Our team is here to assist with any modifications.',
    },
    {
      icon: <XCircle className="w-10 h-10 text-primary" />,
      title: 'Cancellations',
      description: 'Plans changed? We can help you with cancelling your existing flight reservations quickly and efficiently.',
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: '24/7 Support',
      description: 'We are available around the clock to assist you.',
    },
    {
      icon: <Headphones className="w-8 h-8 text-accent" />,
      title: 'Expert Agents',
      description: 'Our experienced agents provide personalized service.',
    },
    {
      icon: <Star className="w-8 h-8 text-accent" />,
      title: 'Hassle-Free',
      description: 'We take the stress out of travel planning.',
    },
  ];

  return (
    <>
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        {heroImage && (
           <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight shadow-md">
            Book Your Flight Today
          </h1>
          <p className="text-lg md:text-xl mb-3 font-light max-w-2xl mx-auto">
            Skip the website hassle. Call now and book your airline tickets quickly with a live travel agent.
          </p>
          <p className="text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto">
             Need to book, change, or cancel a flight? Call today for fast airline reservations by phone.
          </p>
          <a href="tel:+18448170287">
            <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg md:text-xl px-8 py-6">
              Call (844) 817-0287 Now
            </Button>
          </a>
          <p className="text-sm md:text-base mt-6 text-white/90">
            Available 24/7 • Speak with a travel expert in under 30 seconds
          </p>
        </div>
      </section>
      
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">How We Can Help</h2>
            <p className="text-lg text-muted-foreground mt-4">
              Our travel specialists are ready to handle all your flight-related needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-4 rounded-full">
                    {service.icon}
                  </div>
                  <CardTitle className="pt-4 font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
           <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Airlines Ticket?</h2>
            <p className="text-lg text-muted-foreground mt-4">
              We provide a superior, personalized booking experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col items-center">
                {benefit.icon}
                <h3 className="text-xl font-bold mt-4 mb-2 font-headline">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Ready for a Stress-Free Experience?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Let our expert agents handle your travel plans. Get in touch today!
          </p>
          <a href="tel:+18448170287">
            <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg md:text-xl px-8 py-6">
              Call (844) 817-0287
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
