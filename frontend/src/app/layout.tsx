"use client";
import { useEffect, useState } from "react";
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import Navbar from "./sections/Navbar";
import Footer from './sections/Footer';
import { usePathname } from 'next/navigation';
import "./globals.css";

const thumbnailCasa = require("/public/pensaoMansaoAzulFotoDrone.png").default;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const localStorageTheme = localStorage.getItem("theme");

    const setDarkMode = (shouldAddDarkClass: boolean) => {
      const htmlElement = document.documentElement;
      if (shouldAddDarkClass) {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
    };

    if (
      localStorageTheme === "dark" ||
      (!localStorageTheme && prefersDarkMode.matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Meu Site</title>
        <meta property="og:title" content="Pensão Mansão Azul" />
        <meta property="og:description" content="O lugar certo para você ficar em Lavras-MG" />
        <meta property="og:image" content={thumbnailCasa} />
        <meta property="og:url" content="https://www.pensaomansaoazul.com.br" />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meu Site" />
        <meta name="twitter:description" content="Descrição do meu site." />
        <meta name="twitter:image" content="https://example.com/minha-imagem.jpg" /> */}
      </Head>
      <body>
        <Navbar activePath={pathname} />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
