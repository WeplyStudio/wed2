
"use client";

import { CreditCard, Copy, Heart, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";

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
      title: "Berhasil!",
      description: "Nomor rekening telah disalin.",
    });
  };

  return (
    <section id="gift" className="relative py-24 flex items-center justify-center overflow-hidden min-h-[600px]">
      {/* Background Image - Blurred */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/giftbg/1200/800"
          alt="Gift Background"
          fill
          className="object-cover opacity-50 blur-sm"
          data-ai-hint="wedding couple"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex justify-center">
        {/* Main Gift Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-[32px] p-8 md:p-12 max-w-md w-full text-center shadow-2xl border border-white/20">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#3d4a3e] flex items-center justify-center">
              <Heart className="text-white w-8 h-8" />
            </div>
          </div>

          <h2 className="font-headline text-4xl md:text-5xl text-[#3d4a3e] mb-6">Wedding Gift</h2>
          
          <p className="text-[#3d4a3e]/80 text-sm md:text-base leading-relaxed mb-10">
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih, Anda dapat memberi melalui dibawah ini.
          </p>

          <Drawer>
            <DrawerTrigger asChild>
              <Button 
                className="w-full bg-[#d7e3d8] text-[#3d4a3e] hover:bg-[#c8d6c9] rounded-full h-14 font-medium text-base shadow-sm border border-black/5"
              >
                <Wallet className="w-5 h-5 mr-3" /> Kirim Hadiah
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-white border-none">
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader className="border-b border-muted/50 pb-6">
                  <DrawerTitle className="font-headline text-2xl text-[#3d4a3e]">Informasi Rekening</DrawerTitle>
                  <DrawerDescription className="text-sm">
                    Silakan salin nomor rekening di bawah ini untuk mengirimkan kado digital.
                  </DrawerDescription>
                </DrawerHeader>
                
                <div className="p-6 space-y-6">
                  {accounts.map((acc, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#3d4a3e] bg-[#d7e3d8] px-2 py-1 rounded">
                          {acc.bank}
                        </span>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-[#3d4a3e] hover:bg-[#d7e3d8] h-8 px-3 rounded-full text-xs"
                          onClick={() => copyToClipboard(acc.number)}
                        >
                          <Copy className="w-3 h-3 mr-2" /> Salin No. Rek
                        </Button>
                      </div>
                      <div className="bg-muted/30 p-4 rounded-2xl border border-muted/50">
                        <p className="font-mono text-xl tracking-wider text-[#3d4a3e] mb-1">{acc.number}</p>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest">a.n {acc.name}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <DrawerFooter className="pt-2 pb-8">
                  <DrawerClose asChild>
                    <Button variant="outline" className="rounded-full h-12">Tutup</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </section>
  );
};
