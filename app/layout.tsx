import type { Metadata } from 'next';
import './globals.css';
import { Cinzel, Inter } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400','700','900'], variable: '--font-cinzel' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Elders of Emberfall — Fantasy RPG Roguelite',
  description: 'Descend into procedurally generated dungeons, forge builds from arcane relics, and challenge the Twelve Elders in this fantasy roguelite.',
  openGraph: {
    title: 'Elders of Emberfall — Fantasy RPG Roguelite',
    description: 'Descend into procedurally generated dungeons, forge builds from arcane relics, and challenge the Twelve Elders.',
    url: 'https://agentic-c3dcca4b.vercel.app',
    images: [
      { url: 'https://images.unsplash.com/photo-1549887534-1541e9323d17?q=80&w=1600&auto=format&fit=crop' }
    ]
  },
  twitter: { card: 'summary_large_image' },
  metadataBase: new URL('https://agentic-c3dcca4b.vercel.app')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="font-body bg-night-900 selection:bg-ember-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
