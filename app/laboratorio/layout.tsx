import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laboratório | Felipe Souza",
  description:
    "Laboratório de experimentos digitais. Testes de UI, animações, interações e protótipos interativos.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/laboratorio",
    siteName: "Felipe Souza | Design Estratégico & IA",
    title: "Laboratório | Felipe Souza",
    description:
      "Laboratório de experimentos digitais. Testes de UI, animações, interações e protótipos interativos.",
    images: [
      {
        url: "/assets/fs-logo.svg",
        width: 1200,
        height: 630,
        alt: "Laboratório - Felipe Souza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laboratório | Felipe Souza",
    description:
      "Laboratório de experimentos digitais. Testes de UI, animações, interações e protótipos interativos.",
    images: ["/assets/fs-logo.svg"],
  },
};

export default function LaboratorioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
