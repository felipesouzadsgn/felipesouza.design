"use client";

import React from "react";
import { 
  Instagram, 
  Linkedin, 
  ArrowUpRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000] text-white font-sans overflow-x-hidden selection:bg-white/20 selection:text-white">
      <div className="flex flex-col items-center w-full max-w-[390px] mx-auto px-0 pb-10">
        
        {/* Header */}
        <header className="flex justify-between items-center w-full px-6 pt-14 pb-10">
          <span className="text-[11px] tracking-[0.23em] text-[#2a2a2a] font-normal" style={{ fontFamily: "'Istok Web', sans-serif" }}>FELIPE</span>
          <LogoIcon size={28} />
          <span className="text-[11px] tracking-[0.23em] text-[#2a2a2a] font-normal" style={{ fontFamily: "'Istok Web', sans-serif" }}>SOUZA</span>
        </header>

        {/* Profile */}
        <section className="flex flex-col items-center w-full mb-10">
          <div className="w-[82px] h-[82px] rounded-full border-[1.5px] border-[#4f4f4f] p-[3px] mb-5">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#111]">
              <img 
                src="https://framerusercontent.com/images/DaoV0tpWoWbSWNQ7L3ABfldZ8.png" 
                alt="Felipe Souza" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          <h1 className="text-[21px] font-normal text-white mb-1.5">Felipe Souza</h1>
          <p className="text-[9px] tracking-[0.21em] text-[#636363]" style={{ fontFamily: "'Istok Web', sans-serif" }}>PRODUCT DESIGNER</p>
          
          {/* Social Icons */}
          <div className="flex gap-2.5 mt-6">
            <SocialIcon href="https://instagram.com/felipesouza.ai">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon href="#">
              <TikTokIcon />
            </SocialIcon>
            <SocialIcon href="https://x.com/felipesouzadsgn">
              <XIcon />
            </SocialIcon>
            <SocialIcon href="#">
              <LinkedinIcon />
            </SocialIcon>
          </div>
        </section>

        {/* Partners Carousel */}
        <section className="w-full mb-8 relative flex flex-col items-center px-6">
          <a 
            href="https://app.orayon.ai/register/fs" 
            target="_blank" 
            rel="noopener"
            className="absolute -top-3 z-10 bg-[#090909] px-4 py-1.5 border border-[#353535] rounded-md"
          >
            <span className="text-[10px] tracking-[0.26em] text-[#9b9b9b] font-normal">PARTNERS</span>
          </a>
          
          <div className="w-full relative">
            <div className="w-full h-[80px] rounded-2xl border border-[#262626] bg-gradient-to-br from-[#090909] to-[#000] flex items-center justify-center overflow-hidden">
              <div className="flex items-center gap-2">
                <div className="relative w-7 h-7 flex items-center justify-center">
                  <div className="absolute inset-0 bg-blue-500 blur-lg opacity-15"></div>
                  <svg viewBox="0 0 50 50" className="w-5 h-5">
                    <path d="M 15 35 L 5 45 L 25 25 C 23 24.5 22 23.5 21.5 22 C 20.5 19 23 16 24.5 14.5 L 38 2 L 18 22 C 19.5 24 20 26 20.5 28 C 21 32 18.5 35.5 15 35 Z" fill="#d9d9d9"/>
                    <path d="M 30 22 L 10 40 L 28 22 C 26.5 21.5 25.5 21 25 20 C 23.5 17.5 26 14.5 28 13 L 45 0 L 32 18 C 31.5 18.5 31 19.5 31 20 C 31.5 21 32.5 21.5 33 21.5 Z" fill="#d9d9d9"/>
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tighter text-white">orayon</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-1.5 mt-3">
            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-100"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></div>
          </div>
        </section>

        {/* Links List */}
        <section className="w-full space-y-3 mb-12 px-6">
          <LinkItem 
            icon={<OrayonIcon />} 
            label="Parceiro Orayon AI" 
            href="https://app.orayon.ai/register/fs" 
          />
          <LinkItem 
            icon={<GuideIcon />} 
            label="Guia: Openclaw + Obsidian" 
            href="#" 
          />
          <LinkItem 
            icon={<PromptsIcon />} 
            label="Roube Meus Prompts" 
            href="./prompter" 
          />
          <LinkItem 
            icon={<YouTubeIcon />} 
            label="Profissão do Futuro" 
            href="https://www.youtube.com/watch?v=_VBLRKbuZdw&list=PLCwljn_s4lcuhTVE7oyXVpXxc7bjJP-Xn&index=1"
            target="_blank"
            rel="noopener"
          />
          <LinkItem 
            icon={<WhatsAppIcon />} 
            label="Grupo de Networking" 
            href="https://chat.whatsapp.com/LGBpzI6OHZrC6OS410Q88u"
            target="_blank"
            rel="noopener"
          />
        </section>

        {/* Watermark + CTA */}
        <section className="w-full relative flex flex-col items-center justify-center mb-8 px-6">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none z-0">
            <h2 className="text-[80px] leading-[0.87] font-normal text-[#1f1f1f] tracking-tighter text-center" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              FRAMER<br/>EXPERT
            </h2>
          </div>
          
          <div className="w-[86px] h-[86px] rounded-full border border-[#4c4c4c] bg-[#000] flex items-center justify-center z-10 mb-16">
            <LogoIcon size={32} />
          </div>

          <a 
            href="https://wa.me/551396487696" 
            target="_blank" 
            rel="noopener"
            className="w-full py-4 rounded-xl border border-[#353535] bg-[#090909] hover:bg-[#111] transition-colors text-[13px] text-[#9b9b9b] font-normal text-center z-10"
          >
            Construa sua Autoridade
          </a>
        </section>

        {/* Footer */}
        <footer className="text-center pb-6 pt-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3.5">
            <span className="text-[10px] text-[#707070]">Developed by:</span>
            <LogoIcon size={16} />
            <span className="text-[10px] font-semibold text-[#d9d9d9]" style={{ fontFamily: "'Inter', sans-serif" }}>Felipe Souza</span>
          </div>
          <p className="text-[8px] tracking-[0.23em] text-[#2a2a2a] uppercase" style={{ fontFamily: "'Istok Web', sans-serif" }}>
            Copyright © 2026 – Felipe SOUZA
          </p>
        </footer>
      </div>
    </div>
  );
}

function LogoIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 107 107" fill="none" style={{ imageRendering: "pixelated" }}>
      <path d="M 22.11 75.884 L 2.312 106.656 L 43.721 61.466 C 40.608 61.038 39.1 59.501 38.488 57.716 C 37.283 54.198 40.106 50.835 42.72 48.267 L 78.991 12.637 L 23.942 50.245 C 26.371 52.915 27.447 56.229 27.785 59.376 C 28.429 65.358 25.331 70.877 22.11 75.884 Z" fill="#d9d9d9"/>
      <path d="M 81.428 49.436 L 20.825 98.973 L 54.829 61.972 C 52.289 61.735 50.76 60.813 49.9 59.603 C 47.205 55.812 51.369 51.106 54.673 47.876 L 103.642 0 L 69.562 43.857 C 69.03 44.541 68.35 45.615 68.458 46.487 C 68.7 48.429 70.883 48.602 72.768 48.751 Z" fill="#d9d9d9"/>
    </svg>
  );
}

function SocialIcon({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener"
      className="w-[33px] h-[33px] rounded-md bg-[#1c1c1c] border border-[#474747] flex items-center justify-center text-white hover:bg-[#2a2a2a] transition-colors"
    >
      {children}
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 30 30" fill="white">
      <path d="M 15 8.077 C 11.176 8.077 8.077 11.176 8.077 15 C 8.077 18.824 11.176 21.923 15 21.923 C 18.824 21.923 21.923 18.824 21.923 15 C 21.919 11.178 18.822 8.081 15 8.077 Z M 15 19.615 C 12.451 19.615 10.385 17.549 10.385 15 C 10.385 12.451 12.451 10.385 15 10.385 C 17.549 10.385 19.615 12.451 19.615 15 C 19.615 17.549 17.549 19.615 15 19.615 Z M 21.923 0 L 8.077 0 C 3.618 0.005 0.005 3.618 0 8.077 L 0 21.923 C 0.005 26.382 3.618 29.995 8.077 30 L 21.923 30 C 26.382 29.995 29.995 26.382 30 21.923 L 30 8.077 C 29.995 3.618 26.382 0.005 21.923 0 Z M 27.692 21.923 C 27.692 25.109 25.109 27.692 21.923 27.692 L 8.077 27.692 C 4.891 27.692 2.308 25.109 2.308 21.923 L 2.308 8.077 C 2.308 4.891 4.891 2.308 8.077 2.308 L 21.923 2.308 C 25.109 2.308 27.692 4.891 27.692 8.077 Z M 24.231 7.5 C 24.231 8.456 23.456 9.231 22.5 9.231 C 21.544 9.231 20.769 8.456 20.769 7.5 C 20.769 6.544 21.544 5.769 22.5 5.769 C 23.456 5.769 24.231 6.544 24.231 7.5 Z"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 30" fill="white">
      <path d="M 21.118 14.373 C 20.618 13.996 20.08 13.671 19.513 13.403 C 18.936 9.092 16.051 7.734 14.739 7.336 C 11.886 6.47 8.608 7.507 7.116 9.744 C 6.763 10.275 6.906 10.992 7.437 11.345 C 7.967 11.699 8.684 11.556 9.038 11.025 C 9.956 9.646 12.211 8.983 14.07 9.544 C 15.505 9.976 16.496 11.029 16.976 12.573 C 16.249 12.434 15.511 12.365 14.771 12.366 C 12.763 12.366 10.884 12.884 9.482 13.823 C 7.832 14.938 6.923 16.587 6.923 18.462 C 6.923 21.43 9.211 23.585 12.362 23.585 C 14.234 23.572 16.022 22.801 17.316 21.449 C 18.245 20.482 19.336 18.8 19.568 16.098 C 19.623 16.135 19.675 16.174 19.726 16.213 C 21.185 17.315 21.923 18.848 21.923 20.769 C 21.923 23.562 18.989 27.692 12.692 27.692 C 8.837 27.692 6.133 26.445 4.422 23.879 C 3.019 21.779 2.308 18.788 2.308 15 C 2.308 11.212 3.019 8.221 4.422 6.121 C 6.133 3.555 8.837 2.308 12.692 2.308 C 17.442 2.308 20.481 4.219 22 8.152 C 22.144 8.541 22.487 8.823 22.897 8.889 C 23.307 8.955 23.721 8.795 23.981 8.471 C 24.241 8.147 24.307 7.708 24.153 7.323 C 22.31 2.533 18.346 0 12.692 0 C 8.077 0 4.643 1.628 2.501 4.84 C 0.841 7.331 0 10.748 0 15 C 0 19.252 0.841 22.669 2.501 25.16 C 4.643 28.372 8.077 30 12.692 30 C 17.029 30 19.745 28.344 21.26 26.957 C 23.12 25.252 24.231 22.933 24.231 20.769 C 24.231 18.124 23.155 15.912 21.118 14.373 Z M 15.653 19.853 C 14.794 20.755 13.607 21.27 12.362 21.281 C 10.803 21.281 9.231 20.416 9.231 18.466 C 9.231 16.644 10.962 14.686 14.771 14.686 C 15.628 14.683 16.482 14.801 17.308 15.035 C 17.308 17.065 16.731 18.73 15.653 19.849 Z"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 27 30" fill="white">
      <path d="M 27.315 28.08 L 17.534 12.708 L 27.185 2.091 C 27.639 1.579 27.597 0.796 27.091 0.336 C 26.584 -0.124 25.802 -0.092 25.335 0.409 L 16.141 10.522 L 9.815 0.58 C 9.586 0.219 9.188 0 8.76 0 L 1.26 0 C 0.804 0 0.383 0.248 0.164 0.649 C -0.056 1.049 -0.04 1.537 0.205 1.922 L 9.987 17.292 L 0.335 27.917 C 0.028 28.247 -0.077 28.716 0.058 29.145 C 0.193 29.574 0.549 29.898 0.989 29.991 C 1.43 30.085 1.886 29.935 2.185 29.598 L 11.379 19.486 L 17.705 29.428 C 17.937 29.786 18.334 30.002 18.76 30 L 26.26 30 C 26.716 30 27.136 29.751 27.355 29.352 C 27.575 28.952 27.559 28.465 27.315 28.08 Z M 19.446 27.5 L 3.537 2.5 L 8.068 2.5 L 23.984 27.5 Z"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 30 30" fill="white">
      <path d="M 27.692 0 L 2.308 0 C 1.033 0 0 1.033 0 2.308 L 0 27.692 C 0 28.967 1.033 30 2.308 30 L 27.692 30 C 28.967 30 30 28.967 30 27.692 L 30 2.308 C 30 1.033 28.967 0 27.692 0 Z M 27.692 27.692 L 2.308 27.692 L 2.308 2.308 L 27.692 2.308 Z M 10.385 12.692 L 10.385 21.923 C 10.385 22.56 9.868 23.077 9.231 23.077 C 8.594 23.077 8.077 22.56 8.077 21.923 L 8.077 12.692 C 8.077 12.055 8.594 11.538 9.231 11.538 C 9.868 11.538 10.385 12.055 10.385 12.692 Z M 23.077 16.731 L 23.077 21.923 C 23.077 22.56 22.56 23.077 21.923 23.077 C 21.286 23.077 20.769 22.56 20.769 21.923 L 20.769 16.731 C 20.769 15.138 19.478 13.846 17.885 13.846 C 16.291 13.846 15 15.138 15 16.731 L 15 21.923 C 15 22.56 14.483 23.077 13.846 23.077 C 13.209 23.077 12.692 22.56 12.692 21.923 L 12.692 12.692 C 12.695 12.107 13.136 11.617 13.717 11.552 C 14.298 11.486 14.837 11.866 14.97 12.436 C 16.56 11.357 18.617 11.244 20.315 12.144 C 22.014 13.044 23.076 14.809 23.077 16.731 Z M 10.962 8.654 C 10.962 9.61 10.187 10.385 9.231 10.385 C 8.275 10.385 7.5 9.61 7.5 8.654 C 7.5 7.698 8.275 6.923 9.231 6.923 C 10.187 6.923 10.962 7.698 10.962 8.654 Z"/>
    </svg>
  );
}

function OrayonIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 37 37" fill="#d4d4d4">
      <path d="M 37.474 20.316 C 36.622 30.23 28.181 37.756 18.235 37.472 C 8.289 37.187 0.292 29.191 0.008 19.244 C -0.277 9.298 7.249 0.858 17.163 0.005 C 17.96 -0.061 18.659 0.532 18.724 1.328 C 18.79 2.125 18.198 2.824 17.401 2.89 C 9.01 3.611 2.64 10.754 2.88 19.172 C 3.121 27.59 9.889 34.358 18.307 34.599 C 26.725 34.839 33.869 28.469 34.59 20.078 C 34.655 19.282 35.354 18.689 36.151 18.755 C 36.948 18.821 37.54 19.52 37.474 20.316 Z M 17.282 8.659 L 17.282 18.755 C 17.282 19.552 17.928 20.197 18.724 20.197 L 28.82 20.197 C 29.617 20.197 30.263 19.552 30.263 18.755 C 30.263 17.958 29.617 17.313 28.82 17.313 L 20.167 17.313 L 20.167 8.659 C 20.167 7.862 19.521 7.217 18.724 7.217 C 17.928 7.217 17.282 7.862 17.282 8.659 Z M 24.494 4.332 C 25.688 4.332 26.657 3.363 26.657 2.168 C 26.657 0.974 25.688 0.005 24.494 0.005 C 23.299 0.005 22.33 0.974 22.33 2.168 C 22.33 3.363 23.299 4.332 24.494 4.332 Z M 30.984 8.659 C 32.179 8.659 33.147 7.69 33.147 6.495 C 33.147 5.301 32.179 4.332 30.984 4.332 C 29.789 4.332 28.82 5.301 28.82 6.495 C 28.82 7.69 29.789 8.659 30.984 8.659 Z M 35.311 15.149 C 36.506 15.149 37.474 14.181 37.474 12.986 C 37.474 11.791 36.506 10.822 35.311 10.822 C 34.116 10.822 33.147 11.791 33.147 12.986 C 33.147 14.181 34.116 15.149 35.311 15.149 Z"/>
    </svg>
  );
}

function GuideIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 36 36" fill="white">
      <path d="M 35.971 2.727 C 35.883 1.274 34.724 0.115 33.271 0.027 C 31.007 -0.108 25.22 0.099 20.418 4.899 L 19.563 5.765 L 9.063 5.765 C 8.296 5.761 7.56 6.064 7.018 6.607 L 0.844 12.785 C 0.072 13.557 -0.197 14.699 0.148 15.734 C 0.494 16.77 1.396 17.521 2.477 17.674 L 9.402 18.64 L 17.359 26.598 L 18.326 33.526 C 18.478 34.608 19.23 35.509 20.266 35.852 C 20.562 35.951 20.872 36.001 21.184 36.001 C 21.947 36.003 22.68 35.7 23.218 35.159 L 29.396 28.985 C 29.939 28.444 30.243 27.707 30.238 26.94 L 30.238 16.441 L 31.097 15.582 C 35.899 10.78 36.106 4.993 35.971 2.727 Z M 9.063 8.645 L 16.683 8.645 L 9.567 15.759 L 2.878 14.826 Z M 22.457 6.944 C 25.256 4.127 29.133 2.654 33.097 2.899 C 33.352 6.865 31.881 10.748 29.061 13.548 L 18.718 23.887 L 12.116 17.285 Z M 27.358 26.94 L 21.179 33.125 L 20.245 26.434 L 27.358 19.321 Z M 14.01 28.65 C 13.2 30.425 10.491 34.565 2.878 34.565 C 2.083 34.565 1.438 33.92 1.438 33.125 C 1.438 25.513 5.578 22.804 7.353 21.992 C 8.077 21.662 8.931 21.981 9.261 22.705 C 9.591 23.428 9.272 24.283 8.548 24.613 C 7.391 25.14 4.837 26.838 4.387 31.617 C 9.166 31.167 10.867 28.612 11.391 27.455 C 11.721 26.731 12.575 26.412 13.299 26.742 C 14.022 27.072 14.341 27.926 14.011 28.65 Z"/>
    </svg>
  );
}

function PromptsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 36 36" fill="white">
      <path d="M 24.518 11.482 C 24.778 11.742 24.924 12.094 24.924 12.462 C 24.924 12.829 24.778 13.182 24.518 13.441 L 13.441 24.518 C 12.9 25.059 12.023 25.059 11.482 24.518 C 10.941 23.977 10.941 23.1 11.482 22.559 L 22.559 11.482 C 22.818 11.222 23.171 11.076 23.538 11.076 C 23.906 11.076 24.258 11.222 24.518 11.482 Z M 33.161 2.839 C 31.343 1.021 28.878 0 26.307 0 C 23.737 0 21.271 1.021 19.454 2.839 L 14.251 8.04 C 13.71 8.581 13.71 9.458 14.251 9.999 C 14.792 10.54 15.669 10.54 16.21 9.999 L 21.413 4.807 C 24.125 2.155 28.466 2.179 31.148 4.861 C 33.831 7.542 33.855 11.884 31.203 14.596 L 25.999 19.798 C 25.458 20.339 25.458 21.216 25.998 21.757 C 26.539 22.298 27.416 22.298 27.957 21.757 L 33.161 16.546 C 34.979 14.729 36 12.263 36 9.693 C 36 7.122 34.979 4.657 33.161 2.839 Z M 19.789 25.999 L 14.587 31.202 C 12.845 32.983 10.279 33.691 7.87 33.055 C 5.461 32.419 3.58 30.537 2.944 28.128 C 2.308 25.718 3.016 23.153 4.798 21.411 L 9.999 16.211 C 10.54 15.67 10.54 14.792 9.999 14.251 C 9.458 13.71 8.581 13.71 8.04 14.251 L 2.839 19.454 C -0.946 23.239 -0.946 29.376 2.839 33.161 C 6.624 36.946 12.761 36.946 16.546 33.161 L 21.749 27.957 C 22.289 27.416 22.289 26.539 21.748 25.999 C 21.207 25.458 20.33 25.458 19.789 25.999 Z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 36 36" fill="white">
      <path d="M 35.971 2.727 C 35.883 1.274 34.724 0.115 33.271 0.027 C 31.007 -0.108 25.22 0.099 20.418 4.899 L 19.563 5.765 L 9.063 5.765 C 8.296 5.761 7.56 6.064 7.018 6.607 L 0.844 12.785 C 0.072 13.557 -0.197 14.699 0.148 15.734 C 0.494 16.77 1.396 17.521 2.477 17.674 L 9.402 18.64 L 17.359 26.598 L 18.326 33.526 C 18.478 34.608 19.23 35.509 20.266 35.852 C 20.562 35.951 20.872 36.001 21.184 36.001 C 21.947 36.003 22.68 35.7 23.218 35.159 L 29.396 28.985 C 29.939 28.444 30.243 27.707 30.238 26.94 L 30.238 16.441 L 31.097 15.582 C 35.899 10.78 36.106 4.993 35.971 2.727 Z M 9.063 8.645 L 16.683 8.645 L 9.567 15.759 L 2.878 14.826 Z M 22.457 6.944 C 25.256 4.127 29.133 2.654 33.097 2.899 C 33.352 6.865 31.881 10.748 29.061 13.548 L 18.718 23.887 L 12.116 17.285 Z M 27.358 26.94 L 21.179 33.125 L 20.245 26.434 L 27.358 19.321 Z M 14.01 28.65 C 13.2 30.425 10.491 34.565 2.878 34.565 C 2.083 34.565 1.438 33.92 1.438 33.125 C 1.438 25.513 5.578 22.804 7.353 21.992 C 8.077 21.662 8.931 21.981 9.261 22.705 C 9.591 23.428 9.272 24.283 8.548 24.613 C 7.391 25.14 4.837 26.838 4.387 31.617 C 9.166 31.167 10.867 28.612 11.391 27.455 C 11.721 26.731 12.575 26.412 13.299 26.742 C 14.022 27.072 14.341 27.926 14.011 28.65 Z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 36 26" fill="white">
      <path d="M 35.516 15.357 C 34.986 15.755 34.234 15.647 33.837 15.117 C 32.37 13.146 30.054 11.988 27.597 11.997 C 27.115 11.997 26.68 11.708 26.492 11.264 C 26.366 10.966 26.366 10.629 26.492 10.331 C 26.68 9.887 27.115 9.598 27.597 9.598 C 29.468 9.598 31.027 8.165 31.184 6.301 C 31.341 4.437 30.045 2.763 28.2 2.449 C 26.356 2.136 24.579 3.287 24.112 5.098 C 23.946 5.74 23.291 6.126 22.649 5.961 C 22.007 5.795 21.621 5.14 21.787 4.498 C 22.428 2.019 24.572 0.219 27.125 0.019 C 29.678 -0.182 32.077 1.26 33.098 3.608 C 34.118 5.957 33.536 8.695 31.647 10.424 C 33.278 11.131 34.697 12.252 35.761 13.676 C 35.952 13.931 36.033 14.252 35.988 14.567 C 35.942 14.883 35.772 15.167 35.516 15.357 Z M 27.435 24.596 C 27.672 24.968 27.685 25.44 27.471 25.824 C 27.256 26.209 26.847 26.445 26.407 26.439 C 25.966 26.433 25.564 26.186 25.36 25.796 C 23.822 23.192 21.023 21.594 17.998 21.594 C 14.974 21.594 12.175 23.192 10.637 25.796 C 10.433 26.186 10.031 26.433 9.59 26.439 C 9.15 26.445 8.741 26.209 8.526 25.824 C 8.312 25.44 8.325 24.968 8.562 24.596 C 9.725 22.597 11.498 21.024 13.622 20.109 C 11.172 18.233 10.19 15.004 11.18 12.082 C 12.17 9.16 14.913 7.193 17.998 7.193 C 21.084 7.193 23.827 9.16 24.817 12.082 C 25.807 15.004 24.825 18.233 22.375 20.109 C 24.498 21.024 26.272 22.597 27.435 24.596 Z M 17.998 19.197 C 20.649 19.197 22.798 17.048 22.798 14.397 C 22.798 11.746 20.649 9.598 17.998 9.598 C 15.348 9.598 13.199 11.746 13.199 14.397 C 13.199 17.048 15.348 19.197 17.998 19.197 Z M 9.599 10.798 C 9.599 10.135 9.062 9.598 8.4 9.598 C 6.529 9.598 4.97 8.165 4.813 6.301 C 4.656 4.437 5.952 2.763 7.796 2.449 C 9.641 2.136 11.418 3.287 11.885 5.098 C 12.051 5.74 12.706 6.126 13.347 5.961 C 13.989 5.795 14.376 5.14 14.21 4.498 C 13.569 2.019 11.425 0.219 8.872 0.019 C 6.319 -0.182 3.92 1.26 2.899 3.608 C 1.879 5.957 2.461 8.695 4.35 10.424 C 2.72 11.131 1.303 12.252 0.24 13.676 C -0.158 14.206 -0.05 14.958 0.48 15.356 C 1.01 15.754 1.762 15.647 2.16 15.117 C 3.627 13.146 5.942 11.988 8.4 11.997 C 9.062 11.997 9.599 11.46 9.599 10.798 Z"/>
    </svg>
  );
}

function LinkItem({ icon, label, href, target, rel }: { icon: React.ReactNode, label: string, href: string, target?: string, rel?: string }) {
  return (
    <a 
      href={href}
      target={target}
      rel={rel}
      className="group flex items-center justify-between w-full py-3.5 px-3.5 bg-[#090909] border border-[#353535] rounded-xl hover:border-gray-500 transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#1c1c1c] border border-[#474747] flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
          {icon}
        </div>
        <span className="text-[13px] font-normal text-[#e8e8e8] group-hover:text-white transition-colors" style={{ fontFamily: "'REM', sans-serif" }}>{label}</span>
      </div>
      <div className="w-7 h-7 rounded-lg bg-[#1c1c1c]/20 border border-[#1c1c1c]/30 flex items-center justify-center text-gray-500 group-hover:text-white transition-colors">
        <svg width="11" height="11" viewBox="0 0 26 26" fill="currentColor">
          <path d="M 26.5 1.472 L 26.5 20.61 C 26.5 21.424 25.841 22.083 25.028 22.083 C 24.215 22.083 23.556 21.424 23.556 20.61 L 23.556 5.026 L 2.515 26.069 C 1.939 26.644 1.007 26.644 0.431 26.069 C -0.144 25.493 -0.144 24.561 0.431 23.985 L 21.474 2.944 L 5.89 2.944 C 5.076 2.944 4.417 2.285 4.417 1.472 C 4.417 0.659 5.076 0 5.89 0 L 25.028 0 C 25.841 0 26.5 0.659 26.5 1.472 Z"/>
        </svg>
      </div>
    </a>
  );
}
