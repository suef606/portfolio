// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: '박정수 포트폴리오',
  description: '프론트엔드 개발자 박정수의 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        {/* Google Analytics 태그 */}
        <Script
          strategy="afterInteractive" 
          src={`https://www.googletagmanager.com/gtag/js?id=G-C0WYQNQKW3`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C0WYQNQKW3');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}