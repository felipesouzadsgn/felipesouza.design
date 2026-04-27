import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Styleguides | Felipe Souza",
  description:
    "Diretrizes de design, componentes UI, grid, espaçamento e padrões visuais usados nos projetos de Felipe Souza.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/styleguides",
    siteName: "Felipe Souza | Design Estratégico & IA",
    title: "Styleguides | Felipe Souza",
    description:
      "Diretrizes de design, componentes UI, grid, espaçamento e padrões visuais usados nos projetos de Felipe Souza.",
    images: [{
      url: "/assets/fs-logo.svg",
      width: 1200,
      height: 630,
      alt: "Felipe Souza - Styleguides",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Styleguides | Felipe Souza",
    description:
      "Diretrizes de design, componentes UI, grid, espaçamento e padrões visuais usados nos projetos de Felipe Souza.",
    images: ["/assets/fs-logo.svg"],
  },
};

export default function StyleguidesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
