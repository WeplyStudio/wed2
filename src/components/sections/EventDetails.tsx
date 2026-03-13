
"use client";

import { MapPin, Calendar, Clock, Info, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const EventDetails = () => {
  const handleAddToCalendar = () => {
    const event = {
      title: "Wedding of Raja & Putri",
      start: "20251025T100000Z",
      end: "20251025T210000Z",
      location: "Balai Kartini, Jakarta, Indonesia",
      details: "Traditional Batak Wedding celebration for Raja and Putri."
    };
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="details" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl gold-text-gradient mb-4">Event Details</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We invite you to share our joy as we celebrate our love in a traditional Batak ceremony.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Ceremony */}
          <Card className="bg-card/50 border-accent/20 hover:border-accent/40 transition-all duration-300 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-primary/40 transition-all" />
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Calendar className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl text-accent">Pamasu-masuon</h3>
                  <p className="text-sm text-muted-foreground">Holy Matrimony</p>
                </div>
              </div>
              
              <ul className="space-y-4 text-foreground/80">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>10:00 AM - 12:00 PM</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>HKBP Sudirman Church, Jakarta Selatan</span>
                </li>
              </ul>

              <div className="mt-8">
                <Button 
                  variant="outline" 
                  className="w-full border-accent/30 text-accent hover:bg-accent/10"
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  <MapPin className="w-4 h-4 mr-2" /> View Location
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Reception */}
          <Card className="bg-card/50 border-accent/20 hover:border-accent/40 transition-all duration-300 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-primary/40 transition-all" />
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Info className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-headline text-2xl text-accent">Ulaon Unjuk</h3>
                  <p className="text-sm text-muted-foreground">Traditional Celebration</p>
                </div>
              </div>
              
              <ul className="space-y-4 text-foreground/80">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>01:00 PM - End</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Balai Kartini - Rafflesia Ballroom, Jakarta Selatan</span>
                </li>
              </ul>

              <div className="mt-8 flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1 border-accent/30 text-accent hover:bg-accent/10"
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" /> Open Maps
                </Button>
                <Button 
                  variant="default" 
                  className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                  onClick={handleAddToCalendar}
                >
                  <Calendar className="w-4 h-4 mr-2" /> Save Date
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
