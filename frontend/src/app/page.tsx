import Image from 'next/image'
import Header from './sections/Header'
import About from './sections/About'
import { Rooms } from './sections/Rooms'
import Contact from './sections/Contact'
import Perks from './sections/Perks'

const quarto6 = require('/public/quarto6.jpg');
const quarto15 = require('/public/quarto15.jpeg');
const quarto16 = require('/public/quarto16.jpeg');
const quartoTorre = require('/public/quarto-torre.jpg');
const quarto18 = require('/public/quarto18.jpg');
const sala4 = require('/public/sala4andar.jpeg');
const vistaAerea = require('/public/vistaAerea.jpg');
const casaDrone = require('/public/casaDrone.jpg');

const topRooms = [
  {
    id: 1,
    name: "Pensão Mansão Azul",
    imageGroups: [
      {
        images: [
          {
            link: casaDrone,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Sala 4 andar",
    imageGroups: [
      {
        images: [
          {
            link: sala4,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Vista aérea",
    imageGroups: [
      {
        images: [
          {
            link: vistaAerea,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Suíte 6",
    imageGroups: [
      {
        images: [
          {
            link: quarto6,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Suíte 15",
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
    id: 6,
    name: "Suíte 16",
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
    id: 7,
    name: "Suíte 18",
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
    id: 8,
    name: "Quarto torre",
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
