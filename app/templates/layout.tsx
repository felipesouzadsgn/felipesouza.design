import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templates Framer | Felipe Souza",
  description:
    "Templates profissionais para Framer: landing pages, portfolios, SaaS e agências. Designs premium prontos para publicar, com preços de $3 a $18.",
  keywords: [
    "templates Framer",
    "Framer templates 2026",
    "landing page Framer",
    "portfolio template",
    "SaaS template",
    "no-code template",
    "Framer premium",
    "Felipe Souza templates",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/templates",
    siteName: "Felipe Souza | Dev, IA & Automação",
    title: "Templates Framer | Felipe Souza",
    description:
      "Templates profissionais para Framer: landing pages, portfolios, SaaS e agências. Designs premium prontos para publicar.",
    images: [
      {
        url: "/assets/fs-logo.svg",
        width: 1200,
        height: 630,
        alt: "Templates Framer - Felipe Souza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Templates Framer | Felipe Souza",
    description:
      "Templates profissionais para Framer: landing pages, portfolios, SaaS e agências.",
    images: ["/assets/fs-logo.svg"],
  },
};

export default function TemplatesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
