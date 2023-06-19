import Image from 'next/image'
import Header from './sections/Header'
import About from './sections/About'
import { Rooms } from './sections/Rooms'
import Contact from './sections/Contact'
import Perks from './sections/Perks'

const quarto5 = require('/public/quarto5.jpg');
const quarto13 = require('/public/quarto13.jpg');
const quarto15 = require('/public/quarto15.jpg');
const quarto16 = require('/public/quarto16.jpg');
const quartoTorre = require('/public/quarto-torre.jpg');
const quarto18 = require('/public/quarto18.jpg');

const topRooms = [
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

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Rooms products={topRooms} />
      <Perks />
      <Contact />
    </>
  );
}
