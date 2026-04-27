import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria de Prompts",
  description:
    "Coleção exclusiva de prompts de IA otimizados para copywriting, design, desenvolvimento e produtividade.",
  openGraph: {
    title: "Galeria de Prompts | Felipe Souza",
    description:
      "Coleção exclusiva de prompts de IA otimizados para copywriting, design, desenvolvimento e produtividade.",
    images: ["/assets/fs-logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galeria de Prompts | Felipe Souza",
    description:
      "Coleção exclusiva de prompts de IA otimizados para copywriting, design, desenvolvimento e produtividade.",
    images: ["/assets/fs-logo.svg"],
  },
};

export default function PromptsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
