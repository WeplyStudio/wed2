"use client";

import { CreditCard, Copy, Heart, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const Gift = () => {
  const { toast } = useToast();

  const accounts = [
    {
      name: "Binsar Sitorus",
      number: "1190011094628",
      bank: "MANDIRI",
    },
    {
      name: "Indrawati Siburian",
      number: "1090018483297",
      bank: "MANDIRI",
    }
  ];

  const copyToClipboard = (number: string) => {
    navigator.clipboard.writeText(number);
    toast({
      title: "Copied!",
      description: "Account number copied to clipboard.",
    });
  };

  return (
    <section id="gift" className="py-24 bg-card/10 border-y border-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Heart className="w-8 h-8 text-accent mx-auto mb-4" />
          <h2 className="font-headline text-4xl md:text-5xl gold-text-gradient mb-4">Digital Gift</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Your presence is enough of a gift, but if you wish to give more, we have provided digital options for your convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {accounts.map((acc, index) => (
            <Card key={index} className="bg-card border-accent/10 hover:border-accent/30 transition-all group">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <CreditCard className="text-accent w-5 h-5" />
                    </div>
                    <span className="font-bold tracking-widest text-accent text-sm">{acc.bank}</span>
                  </div>
                  <CheckCircle2 className="text-accent/20 group-hover:text-accent/50 transition-colors" />
                </div>
                
                <div className="space-y-1 mb-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Account Holder</p>
                  <p className="font-headline text-2xl text-foreground">{acc.name}</p>
                </div>

                <div className="bg-background/50 p-4 rounded-lg flex items-center justify-between border border-accent/5">
                  <p className="font-mono text-lg tracking-wider">{acc.number}</p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-accent hover:bg-accent/10 h-10 w-10 p-0"
                    onClick={() => copyToClipboard(acc.number)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
