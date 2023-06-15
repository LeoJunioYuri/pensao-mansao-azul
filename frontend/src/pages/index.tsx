import { useRef } from 'react'
import About from '@component/components/About';
import { Outlet } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

const quarto5 = require('/public/quarto5.jpg');
const quarto13 = require('/public/quarto13.jpg');
const quarto15 = require('/public/quarto15.jpg');
const quarto16 = require('/public/quarto16.jpg');
const quartoTorre = require('/public/quarto-torre.jpg');
const quarto18 = require('/public/quarto18.jpg');
import Header from '@component/components/Header';
import RoomCard from '@component/components/RoomCard';
import Perks from '@component/components/Perks';
import Contact from '@component/components/Contact';


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



export default function Home() {
  let roomRef = useRef<HTMLParagraphElement | null>(null);

  const scrollHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (roomRef.current) {
      roomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  
  

  return (
    <>
      <Header scrollHandler={scrollHandler} />
      <About />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 my-16">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-4xl font-bold uppercase rounded hover:babyBlue md:hover:bg-transparent md:border-0 md:hover:babyBlue sm:text-5xl sm:tracking-tight lg:text-5xl"
              ref={roomRef}
            >
              Veja nossas opções de estadia
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <RoomCard product={product} key={product.id} />
          ))}
        </div>
        <div className="md:py-16 mx-auto max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl flex justify-center">
            {/* <button
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-600 sm:px-8 shadow-[0_1px_0_rgb(0,0,0)] hover:shadow-[0_2px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all rounded"
              // onClick={}
            >
              Ver todas as opções
            </button> */}
            <Button
            variant="gradient"
            size="lg"
            className="mt-8 shadow-[0_1px_0_rgb(0,0,0)] hover:shadow-[0_2px_0px_rgb(0,0,0)] bg-white ease-out hover:translate-y-1 transition-all rounded"
            onClick={scrollHandler}
          >
            Ver todas as opções
          </Button>
          </div>
      </div>
      <Perks />
      <Contact />
      {/* <div id="detail">
        <Outlet />
      </div> */}
    </>
  )
}
