import type { Metadata } from 'next';
import { Audiowide, Rajdhani } from 'next/font/google';
import './globals.css';
import Script from 'next/script'; // ✅ Import Script

const audiowide = Audiowide({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-audiowide',
  display: 'swap',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cambrian Open House',
  description:
    "Experience innovation at Cambrian Open House — CIT's first-ever tech fest and open day, featuring 100+ interactive tech stalls, student-led innovations, workshops, and a celebration of future-ready minds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager using next/script */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TWM6T25X');
            `,
          }}
        />

      </head>
      <body className={`${audiowide.variable} ${rajdhani.variable}`}>
        {/* ✅ GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWM6T25X"
            height="0"
            width="0"
            className="gtm-noscript-frame"
          ></iframe>
        </noscript>

        {/* Main Content */}
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
