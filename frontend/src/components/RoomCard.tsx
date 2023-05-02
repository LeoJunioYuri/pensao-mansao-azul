import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  

export default function RoomCard({ product } : { product: Product }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
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
      <div className="mt-4 flex items-center justify-between text-base font-medium rounded md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
      <p className="mt-1 text-sm italic text-gray-500">
        {product.shortDescription}
      </p>
    </Link>
  );
}
