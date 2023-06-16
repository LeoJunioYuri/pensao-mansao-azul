'use client';

import { useRef } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Perks from "./components/Perks";
import { RoomCardContainer } from "./components/RoomCard";

const quarto5 = require('/public/quarto5.jpg');
const quarto13 = require('/public/quarto13.jpg');
const quarto15 = require('/public/quarto15.jpg');
const quarto16 = require('/public/quarto16.jpg');
const quartoTorre = require('/public/quarto-torre.jpg');
const quarto18 = require('/public/quarto18.jpg');


export default function Home() {
  let roomRef = useRef<HTMLParagraphElement | null>(null);

  const scrollHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (roomRef.current) {
      roomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const products = [
    {
      id: 1,
      name: "Quarto 5",
      shortDescription: "Lorem ipsum dolor sit amet",
      price: 549,
      imageGroups: [
        {
          images: [
            {
              link: quarto5,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Quarto 13",
      shortDescription: "Lorem ipsum dolor sit amet",
      price: 1099,
      imageGroups: [
        {
          images: [
            {
              link: quarto13,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Quarto 15",
      shortDescription: "Lorem ipsum dolor sit amet",
      price: 799,
      imageGroups: [
        {
          images: [
            {
              link: quarto15,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Quarto 16",
      shortDescription: "Lorem ipsum dolor sit amet",
      price: 749,
      imageGroups: [
        {
          images: [
            {
              link: quarto16,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Quarto 18",
      shortDescription: "Lorem ipsum dolor sit amet",
      price: 749,
      imageGroups: [
        {
          images: [
            {
              link: quarto18,
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Quarto torre",
      shortDescription: "Lorem ipsum dolor sit amet",
      price: 599,
      imageGroups: [
        {
          images: [
            {
              link: quartoTorre,
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Header scrollHandler={scrollHandler} />
      <About />
      <RoomCardContainer products={products} />
      <Perks />
      <Contact />
    </>
  );
}
