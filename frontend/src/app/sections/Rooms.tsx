"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { useRef, useState } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Room {
  id: string | number;
  name: string;
  // shortDescription: string;
  // price: number;
  imageGroups: {
    images: {
      link: string;
    }[];
  }[];
}

export default function RoomCard({ product }: { product: Room }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 hover:shadow-lg dark:shadow-babyBlue transition-all duration-300 hover:scale-104">
        <Image
          alt="product image"
          src={product.imageGroups[0].images[0].link}
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
      </div>
      {/* <p className="mt-1 text-sm italic text-gray-500">
        {product.shortDescription}
      </p> */}
    </Link>
  );
}

export function Rooms({ products }: { products: Room[] }) {
  let roomRef = useRef<HTMLParagraphElement | null>(null);
  return (
    <>
      <div id="quartos" className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 my-16">
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
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 text-riverBed">
          {products.map((product) => (
            <RoomCard product={product} key={product.id} />
          ))}
        </div>
        <div className="md:py-16 mx-auto max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl flex justify-center">
          <Button
            variant="gradient"
            size="lg"
            className="mt-8 shadow-[0_1px_0_rgb(0,0,0)] hover:shadow-[0_2px_0px_rgb(0,0,0)] bg-white ease-out hover:translate-y-1 transition-all rounded"
          >
            <Link href="/quartos">Ver todas as opções</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
