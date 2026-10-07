// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

export const metadata: Metadata = {
  title: 'Mahdin Mahboob | Assistant Professor & Researcher',
  description: 'Academic portfolio of Mahdin Mahboob — Assistant Professor at Southeast University, Former Guest Researcher at Brookhaven National Laboratory (BNL), NY.',
  keywords: ['Mahdin Mahboob', 'Southeast University', 'Brookhaven National Laboratory', 'Machine Learning', 'Computer Vision', 'Stony Brook University'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-blue-600 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}