import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Styleguide & Brandbook",
  description: "Brandbook e styleguide oficial de Felipe Souza. Paleta de cores, tipografia, componentes, espaçamento e diretrizes de uso da marca.",
  keywords: ["brandbook", "styleguide", "design system", "identidade visual", "Felipe Souza brand", "cores", "tipografia"],
  openGraph: {
    title: "Styleguide & Brandbook | Felipe Souza",
    description: "Brandbook e styleguide oficial. Paleta de cores, tipografia, componentes e diretrizes de uso da marca.",
    url: "/styleguide",
    images: [{
      url: "/assets/fs-logo.svg",
      width: 1200,
      height: 630,
      alt: "Styleguide & Brandbook - Felipe Souza",
    }],
  },
  twitter: {
    title: "Styleguide & Brandbook | Felipe Souza",
    description: "Brandbook e styleguide oficial. Paleta de cores, tipografia, componentes e diretrizes.",
    images: ["/assets/fs-logo.svg"],
  },
};

export default function StyleguideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
