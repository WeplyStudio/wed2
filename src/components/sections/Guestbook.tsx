"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Send, User, MessageSquareText, Wand2, Loader2, Quote } from "lucide-react";
import { guestBlessingGenerator } from "@/ai/flows/guest-blessing-generator";
import { useToast } from "@/hooks/use-toast";
import { BatakPattern } from "../ui/BatakPattern";

type GuestMessage = {
  name: string;
  message: string;
  timestamp: string;
};

export const Guestbook = () => {
  const [messages, setMessages] = useState<GuestMessage[]>([
    {
      name: "Bona Simanjuntak",
      message: "Selamat menempuh hidup baru Binsar & Indrawati! Horas! Semoga diberkati terus rumahtangga kalian sampai kakek nenek.",
      timestamp: "2 jam yang lalu",
    },
    {
      name: "Tini Hutauruk",
      message: "Pasangan yang sangat serasi. Semoga cinta kalian terus tumbuh setiap harinya. Selamat berbahagia!",
      timestamp: "5 jam yang lalu",
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
        title: "Informasi Kurang",
        description: "Silakan isi nama dan pesan Anda.",
      });
      return;
    }

    const newMessage = {
      name,
      message,
      timestamp: "Baru saja",
    };

    setMessages([newMessage, ...messages]);
    setName("");
    setMessage("");
    toast({
      title: "Pesan Terkirim",
      description: "Terima kasih atas doa dan ucapan hangat Anda!",
    });
  };

  const generateAIBlessing = async () => {
    if (!name) {
      toast({
        variant: "destructive",
        title: "Nama Diperlukan",
        description: "Silakan masukkan nama Anda terlebih dahulu agar AI dapat mempersonalisasi ucapan.",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const result = await guestBlessingGenerator({
        coupleNames: "Binsar & Indrawati",
        guestName: name,
        relationship: "Keluarga/Teman",
        sentimentKeywords: "Doa tradisional Batak, Berkat, Kebahagiaan",
      });
      setMessage(result.blessingMessage);
      toast({
        title: "Ucapan Terbuat",
        description: "AI telah membuatkan ucapan hangat untuk Anda.",
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Kesalahan AI",
        description: "Gagal membuat ucapan otomatis. Silakan coba lagi.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="guestbook" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Patterns */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-muted/30 to-transparent" />
      <BatakPattern className="absolute -top-10 -right-10 w-40 h-40 opacity-5 rotate-12" />
      <BatakPattern className="absolute -bottom-10 -left-10 w-40 h-40 opacity-5 -rotate-12" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-headline text-sm text-primary uppercase tracking-[0.3em] mb-2">Buku Tamu</p>
          <h2 className="font-headline text-4xl md:text-5xl gold-text-gradient mb-4">Ucapan & Doa Restu</h2>
          <div className="w-16 h-px bg-primary/20 mx-auto mb-6" />
          <p className="text-muted-foreground italic">
            "Kehadiran dan doa restu Anda adalah kado terindah bagi kami."
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-start">
          {/* Post Message Form */}
          <div className="lg:col-span-2 sticky top-24">
            <Card className="bg-white/80 backdrop-blur-sm border-primary/10 shadow-2xl rounded-3xl overflow-hidden">
              <div className="bg-primary p-6 text-white">
                <h3 className="font-headline text-xl flex items-center gap-2">
                  <MessageSquareText className="w-5 h-5" /> Tulis Ucapan
                </h3>
              </div>
              <CardContent className="p-8 space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">Nama Lengkap</label>
                  <Input 
                    placeholder="Masukkan nama Anda..." 
                    className="rounded-xl border-primary/10 focus:border-primary/40 bg-muted/20"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">Pesan & Doa</label>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-primary hover:bg-primary/5 text-[10px] h-7 px-2 rounded-full font-bold uppercase tracking-tighter"
                      onClick={generateAIBlessing}
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                      ) : (
                        <Sparkles className="w-3 h-3 mr-1" />
                      )}
                      Bantuan AI
                    </Button>
                  </div>
                  <Textarea 
                    placeholder="Tuliskan doa restu Anda untuk pengantin..." 
                    className="rounded-xl border-primary/10 focus:border-primary/40 bg-muted/20 min-h-[120px] resize-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <Button 
                  className="w-full bg-primary text-white hover:bg-primary/90 rounded-xl h-12 shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]"
                  onClick={handlePostMessage}
                >
                  <Send className="w-4 h-4 mr-2" /> Kirim Pesan
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Message List */}
          <div className="lg:col-span-3 space-y-6 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
            {messages.length === 0 ? (
              <div className="text-center py-20 bg-muted/10 rounded-3xl border border-dashed border-primary/20">
                <MessageSquareText className="w-12 h-12 text-primary/20 mx-auto mb-4" />
                <p className="text-muted-foreground italic">Belum ada ucapan. Jadilah yang pertama!</p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <Card key={index} className="bg-white border-none shadow-sm rounded-2xl group transition-all hover:shadow-md hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <User className="w-6 h-6" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-center">
                          <h4 className="font-headline text-lg text-primary">{msg.name}</h4>
                          <span className="text-[10px] uppercase text-muted-foreground/60 tracking-wider font-bold">{msg.timestamp}</span>
                        </div>
                        <div className="relative">
                          <Quote className="absolute -top-1 -left-1 w-8 h-8 text-primary/5 -z-0" />
                          <p className="text-foreground/80 leading-relaxed text-sm italic relative z-10">
                            "{msg.message}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
