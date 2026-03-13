"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Send, User, MessageSquareText, Loader2, Quote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { BatakPattern } from "../ui/BatakPattern";
import { 
  useFirebase, 
  useCollection, 
  useMemoFirebase, 
  setDocumentNonBlocking 
} from "@/firebase";
import { collection, query, orderBy, doc, serverTimestamp } from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";
import { id as localeId } from "date-fns/locale";

export const Guestbook = () => {
  const { firestore, user } = useFirebase();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  // Fetch guestbook entries from Firestore
  const guestbookQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(
      collection(firestore, "guestbook_entries"),
      orderBy("submittedAt", "desc")
    );
  }, [firestore]);

  const { data: messages, isLoading } = useCollection(guestbookQuery);

  const handlePostMessage = () => {
    if (!name || !message) {
      toast({
        variant: "destructive",
        title: "Informasi Kurang",
        description: "Silakan isi nama dan pesan Anda.",
      });
      return;
    }

    if (!user) {
      toast({
        variant: "destructive",
        title: "Akses Ditolak",
        description: "Anda harus membuka undangan untuk mengirim pesan.",
      });
      return;
    }

    if (!firestore) return;

    // Create a new document reference to get the ID beforehand
    const entriesRef = collection(firestore, "guestbook_entries");
    const newEntryRef = doc(entriesRef);
    const entryId = newEntryRef.id;

    const entryData = {
      id: entryId,
      guestName: name,
      message: message,
      submittedAt: serverTimestamp(),
    };

    // Use non-blocking update to satisfy Firestore Security Rules and performance
    setDocumentNonBlocking(newEntryRef, entryData, { merge: true });

    setName("");
    setMessage("");
    toast({
      title: "Pesan Terkirim",
      description: "Terima kasih atas doa dan ucapan hangat Anda!",
    });
  };

  const formatTimestamp = (timestamp: any) => {
    if (!timestamp) return "Baru saja";
    try {
      // Handle Firestore Timestamp or Date string
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      return formatDistanceToNow(date, { addSuffix: true, locale: localeId });
    } catch (e) {
      return "Beberapa saat lalu";
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
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary/70">Pesan & Doa</label>
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

          {/* Message List - Scrollable with custom styling */}
          <div className="lg:col-span-3 space-y-6 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar scroll-smooth">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                <Loader2 className="w-8 h-8 animate-spin mb-4 text-primary" />
                <p className="italic">Memuat ucapan...</p>
              </div>
            ) : !messages || messages.length === 0 ? (
              <div className="text-center py-20 bg-muted/10 rounded-3xl border border-dashed border-primary/20">
                <MessageSquareText className="w-12 h-12 text-primary/20 mx-auto mb-4" />
                <p className="text-muted-foreground italic">Belum ada ucapan. Jadilah yang pertama!</p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <Card key={msg.id} className="bg-white border-none shadow-sm rounded-2xl group transition-all hover:shadow-md hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <User className="w-6 h-6" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-center">
                          <h4 className="font-headline text-lg text-primary">{msg.guestName}</h4>
                          <span className="text-[10px] uppercase text-muted-foreground/60 tracking-wider font-bold">
                            {formatTimestamp(msg.submittedAt)}
                          </span>
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
