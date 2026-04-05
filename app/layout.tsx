import type { Metadata } from "next";
import { Inter, JetBrains_Mono, REM, Raleway, Space_Grotesk, Bebas_Neue, Istok_Web } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});
const rem = REM({ subsets: ["latin"], variable: "--font-rem" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const bebasNeue = Bebas_Neue({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-bebas",
});
const istokWeb = Istok_Web({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-istok",
});

export const metadata: Metadata = {
  title: "Felipe Souza | Design Estratégico",
  description: "Especialista em design, websites, social media e branding estratégico. Desenvolva posicionamento forte e resultados reais com marketing digital e Inteligência Artificial.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${rem.variable} ${raleway.variable} ${spaceGrotesk.variable} ${bebasNeue.variable} ${istokWeb.variable} font-sans antialiased bg-[#020202] text-gray-200`}>
        {children}
      </body>
    </html>
  );
}
