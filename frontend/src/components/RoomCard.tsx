import Image from "next/image";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
const quarto5 = require('/public/quarto5.jpg');
const quarto13 = require('/public/quarto13.jpg');
const quarto15 = require('/public/quarto15.jpg');
const quarto16 = require('/public/quarto16.jpg');
const quartoTorre = require('/public/quarto-torre.jpg');
const quarto18 = require('/public/quarto18.jpg');

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Product {
  id: string | number;
  name: string;
  shortDescription: string;
  price: number;
  imageGroups: {
    images: {
      link: string;
    }[];
  }[];
}

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

export default function RoomCard({ product }: { product: Product }) {
  
  const [isLoading, setLoading] = useState(true);

  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 hover:shadow-lg dark:shadow-babyBlue transition-all duration-300 hover:scale-104">
        <Image
          alt="product image"
          src={product.imageGroups[0].images[0].link}
          layout="responsive"
          width={500}
          height={500}
          className={cn(
            "object-cover duration-700 ease-in-out group-hover:opacity-75	",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <h3>{product.name}</h3>
        <p>R${product.price}</p>
      </div>
      <p className="mt-1 text-sm italic text-gray-500">
        {product.shortDescription}
      </p>
    </Link>
  );
}


export function RoomCardContainer({ products }: { products: Product[] }) {
  let roomRef = useRef<HTMLParagraphElement | null>(null);
  return (
    <>
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
            //onClick={scrollHandler}
          >
            Ver todas as opções
          </Button>
          </div>
      </div>
    </>
  )
}
