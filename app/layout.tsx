// app/layout.tsx
import type { Metadata } from 'next';
import { BackgroundGradientAnimation } from './components/ui/background-gradient-animation';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'Bundl',
  description: 'Real Sustainable Fashion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BackgroundGradientAnimation>
          {children}
        </BackgroundGradientAnimation>
      </body>
    </html>
  );
}
