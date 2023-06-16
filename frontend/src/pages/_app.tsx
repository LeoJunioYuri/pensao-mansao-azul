import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import "@component/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import AboutUs from "@component/pages/AboutUs";
import Navbar from "@component/components/Navbar";
import Footer from "@component/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    (document as any).body.classList.add("dark");
    return () => {
      (document as any).body.classList.remove("dark");
    };
  }, []);

  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? (
    <>
      
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      
    </>
  ) : null;
}
