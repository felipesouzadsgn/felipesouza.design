import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links",
  description: "Conecte-se com Felipe Souza. Portfolio, propostas comerciais, redes sociais, recomendações de ferramentas e artigos sobre design, IA e desenvolvimento.",
  keywords: ["Felipe Souza links", "designer portfolio", "proposta comercial", "WhatsApp", "LinkedIn", "Instagram", "designer Santos"],
  openGraph: {
    title: "Links | Felipe Souza",
    description: "Conecte-se com Felipe Souza. Portfolio, propostas, redes sociais e recursos.",
    url: "/links",
    images: [{
      url: "/assets/fs-logo.svg",
      width: 1200,
      height: 630,
      alt: "Links - Felipe Souza",
    }],
  },
  twitter: {
    title: "Links | Felipe Souza",
    description: "Conecte-se com Felipe Souza. Portfolio, propostas, redes sociais e recursos.",
    images: ["/assets/fs-logo.svg"],
  },
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
