"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Send, User, MessageSquareText, Wand2, Loader2 } from "lucide-react";
import { guestBlessingGenerator } from "@/ai/flows/guest-blessing-generator";
import { useToast } from "@/hooks/use-toast";

type GuestMessage = {
  name: string;
  message: string;
  timestamp: string;
};

export const Guestbook = () => {
  const [messages, setMessages] = useState<GuestMessage[]>([
    {
      name: "Bona Simanjuntak",
      message: "Selamat menempuh hidup baru Binsar & Indrawati! Horas! Semoga diberkati terus rumahtangga kalian.",
      timestamp: "2 hours ago",
    },
    {
      name: "Tini Hutauruk",
      message: "Beautiful couple. Wish you all the best and happiness forever!",
      timestamp: "5 hours ago",
    }
  ]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handlePostMessage = () => {
    if (!name || !message) {
      toast({
        variant: "destructive",
        title: "Missing Info",
        description: "Please fill in your name and message.",
      });
      return;
    }

    const newMessage = {
      name,
      message,
      timestamp: "Just now",
    };

    setMessages([newMessage, ...messages]);
    setName("");
    setMessage("");
    toast({
      title: "Message Posted",
      description: "Thank you for your warm wishes!",
    });
  };

  const generateAIBlessing = async () => {
    if (!name) {
      toast({
        variant: "destructive",
        title: "Name Required",
        description: "Please enter your name first so the AI can personalize the blessing.",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const result = await guestBlessingGenerator({
        coupleNames: "Binsar and Indrawati",
        guestName: name,
        relationship: "Family/Friend",
        sentimentKeywords: "Traditional Batak, Long Life, Prosperity",
      });
      setMessage(result.blessingMessage);
      toast({
        title: "Blessing Generated",
        description: "AI has composed a traditional Batak-inspired message for you.",
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "AI Error",
        description: "Failed to generate AI blessing. Please try again.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="guestbook" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl gold-text-gradient mb-4">Guestbook</h2>
          <p className="text-muted-foreground">Leave your blessings and warm wishes for the happy couple.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Post Message */}
          <div className="space-y-6">
            <Card className="bg-card/50 border-accent/20 border shadow-xl">
              <CardContent className="p-8">
                <h3 className="font-headline text-2xl text-accent mb-6 flex items-center gap-2">
                  <MessageSquareText className="w-6 h-6" /> Write a Blessing
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-accent block mb-2">Your Name</label>
                    <Input 
                      placeholder="e.g. Bona Simanjuntak" 
                      className="bg-background border-accent/10 focus:border-accent"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-accent">Your Message</label>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-accent hover:bg-accent/10 text-xs h-8"
                        onClick={generateAIBlessing}
                        disabled={isGenerating}
                      >
                        {isGenerating ? (
                          <Loader2 className="w-3 h-3 mr-2 animate-spin" />
                        ) : (
                          <Sparkles className="w-3 h-3 mr-2" />
                        )}
                        Use AI Blessing Tool
                      </Button>
                    </div>
                    <Textarea 
                      placeholder="Type your message here..." 
                      className="bg-background border-accent/10 min-h-[150px] focus:border-accent"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <Button 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={handlePostMessage}
                  >
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Message List */}
          <div className="max-h-[600px] overflow-y-auto pr-4 space-y-4 custom-scrollbar">
            {messages.map((msg, index) => (
              <Card key={index} className="bg-card border-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <User className="text-accent w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-headline text-lg text-accent">{msg.name}</h4>
                        <span className="text-[10px] uppercase text-muted-foreground tracking-tighter">{msg.timestamp}</span>
                      </div>
                      <p className="text-foreground/80 leading-relaxed text-sm italic">
                        "{msg.message}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
