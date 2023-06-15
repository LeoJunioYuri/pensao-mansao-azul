import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function RoomCard({ product }: { product: Product }) {
  const [isLoading, setLoading] = useState(true);

  // const clip = document.querySelectorAll<HTMLVideoElement | HTMLAudioElement>(
  //   ".clip"
  // );
  // for (let i = 0; i < clip.length; i++) {
  //   clip[i].addEventListener("mouseenter", function (e) {
  //     clip[i].play();
  //   });
  //   clip[i].addEventListener("mouseout", function (e) {
  //     clip[i].pause();
  //   });
  // }

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
        {/* <video
          className="clip group:hover transition duration-300 ease-in-out hover:scale-110 hover:autoplay hover:shadow-lg dark:hover:shadow-black/30"
          muted
          loop
          width={500}
          height={500}
        >
          <source
            src="https://www.leagueoflegends.com/static/hero-de0ba45b1d0959277d12545fbb645722.mp4"
            type="video/mp4"
          />
        </video> */}
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
