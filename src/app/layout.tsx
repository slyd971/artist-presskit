import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Sly'D - Artist Press Kit",
  description: "Official press kit for Sly'D, singer, songwriter, and live performer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
