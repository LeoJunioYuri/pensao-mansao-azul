import { BrowserRouter as Router } from "react-router-dom";
import Footer from "@component/sections/Footer";
import ErrorPage from "./error-page";
import "@component/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import AboutUs from "@component/pages/AboutUs";
import Navbar from "@component/sections/Navbar2";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add("dark");
    return () => {
      document.body.classList.remove("dark");
    };
  }, []);

  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);

  return render ? (
    <Router>
      <>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    </Router>
  ) : null;
}
