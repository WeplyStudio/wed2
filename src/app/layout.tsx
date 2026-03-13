import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adat & Cinta - Wedding of Binsar & Indrawati',
  description: 'Digital wedding invitation for the wedding of Binsar Sitorus and Indrawati Siburian. A traditional Batak celebration in Porsea.',
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
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
