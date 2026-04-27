import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brandbook | Felipe Souza",
  description:
    "Identidade visual e diretrizes de marca de Felipe Souza. Logo, cores, tipografia, tom de voz e aplicações.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/brandbook",
    siteName: "Felipe Souza | Design Estratégico & IA",
    title: "Brandbook | Felipe Souza",
    description:
      "Identidade visual e diretrizes de marca de Felipe Souza. Logo, cores, tipografia, tom de voz e aplicações.",
    images: [
      {
        url: "/assets/fs-logo.svg",
        width: 1200,
        height: 630,
        alt: "Brandbook - Felipe Souza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandbook | Felipe Souza",
    description:
      "Identidade visual e diretrizes de marca de Felipe Souza. Logo, cores, tipografia, tom de voz e aplicações.",
    images: ["/assets/fs-logo.svg"],
  },
};

export default function BrandbookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
