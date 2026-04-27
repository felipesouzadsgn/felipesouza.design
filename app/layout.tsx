import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Felipe Souza | Design Estratégico & IA",
    template: "%s | Felipe Souza",
  },
  description: "Especialista em design, websites, social media e branding estratégico. Desenvolva posicionamento forte e resultados reais com marketing digital e Inteligência Artificial.",
  keywords: ["design", "web design", "branding", "IA", "inteligência artificial", "landing pages", "UI/UX", "Felipe Souza", "Santos", "São Paulo"],
  authors: [{ name: "Felipe Souza", url: "https://instagram.com/felipesouzadsgn" }],
  creator: "Felipe Souza",
  metadataBase: new URL("https://felipesouza-dsgn.vercel.app"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Felipe Souza | Design Estratégico & IA",
    title: "Felipe Souza | Design Estratégico & IA",
    description: "Especialista em design, websites, social media e branding estratégico. Desenvolva posicionamento forte e resultados reais com marketing digital e Inteligência Artificial.",
    images: [{
      url: "/assets/fs-logo.svg",
      width: 1200,
      height: 630,
      alt: "Felipe Souza - Design Estratégico & IA",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Felipe Souza | Design Estratégico & IA",
    description: "Especialista em design, websites, social media e branding estratégico.",
    images: ["/assets/fs-logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/assets/fs-logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/assets/fs-logo.svg",
    apple: "/assets/fs-logo.svg",
  },
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
