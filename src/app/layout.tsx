import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { Providers } from '~/components/providers/root-provider';
import FloatingNavbar from '~/components/layout/navigation/floating-navbar';

export const metadata: Metadata = {
  title: "Yenom",
  description: "Yenom app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pl" className={`${GeistSans.variable}`}>
      <body className='dark'>
        <Providers>
          {children}
          <FloatingNavbar />
        </Providers>
      </body>
    </html>
  );
}
