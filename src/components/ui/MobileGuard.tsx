'use client';

import { useState, useEffect } from 'react';
import { Smartphone } from 'lucide-react';

/**
 * Komponen untuk mendeteksi perangkat desktop dan tablet, 
 * lalu menampilkan pesan agar pengguna membuka website khusus melalui smartphone.
 */
export function MobileGuard() {
  const [isNotMobile, setIsNotMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // Breakpoint standar untuk tablet dimulai dari 768px.
      // Jadi jika lebar layar >= 768px, kita anggap itu Tablet atau Desktop.
      setIsNotMobile(window.innerWidth >= 768);
    };

    // Jalankan pengecekan saat mount
    checkDevice();

    // Tambahkan listener untuk perubahan ukuran layar
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (!isNotMobile) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center text-center p-8">
      {/* Background Pattern Subtle */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/batik.png')]" />

      <div className="relative z-10 bg-white/10 backdrop-blur-xl p-12 rounded-[40px] border border-white/20 flex flex-col items-center max-w-md animate-in fade-in zoom-in duration-700 shadow-2xl">
        <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-8 animate-pulse">
          <Smartphone className="w-12 h-12 text-white" />
        </div>
        
        <h2 className="font-headline text-3xl md:text-4xl text-white mb-6 italic leading-tight">
          Gunakan Smartphone
        </h2>
        
        <p className="text-white/90 font-body text-base leading-relaxed mb-10 italic">
          Mohon maaf, undangan digital ini dirancang khusus untuk memberikan pengalaman terbaik hanya melalui perangkat telepon genggam (Smartphone). Silakan buka kembali melalui ponsel Anda.
        </p>
        
        <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mb-10" />
        
        <p className="text-white/60 text-[10px] uppercase tracking-[0.4em] font-bold">
          ADAT & CINTA • SMARTPHONE ONLY
        </p>
      </div>
    </div>
  );
}
