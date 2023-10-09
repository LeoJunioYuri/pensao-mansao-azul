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
const sala4 = require('/public/sala4andar.jpeg');
const salaEstar = require('/public/sala.jpg');
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
    name: "Quarto 5",
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
    id: 4,
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
    id: 5,
    name: "Quarto 16",
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
    id: 6,
    name: "Quarto 18",
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
    id: 7,
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
