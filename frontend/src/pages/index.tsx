import { useRef } from 'react'
import Navbar from '@component/components/Navbar';
import RoomCard from '@component/components/RoomCard'
import Header from '@component/components/Header';

const products = [
  {
    id: 1,
    name: "Product 1",
    shortDescription: "Lorem ipsum dolor sit amet",
    price: 10,
    imageGroups: [
      {
        images: [
          {
            link: "https://via.placeholder.com/150",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Product 2",
    shortDescription: "Lorem ipsum dolor sit amet",
    price: 20,
    imageGroups: [
      {
        images: [
          {
            link: "https://via.placeholder.com/150",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Product 3",
    shortDescription: "Lorem ipsum dolor sit amet",
    price: 30,
    imageGroups: [
      {
        images: [
          {
            link: "https://via.placeholder.com/150",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Product 3",
    shortDescription: "Lorem ipsum dolor sit amet",
    price: 30,
    imageGroups: [
      {
        images: [
          {
            link: "https://via.placeholder.com/150",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Product 3",
    shortDescription: "Lorem ipsum dolor sit amet",
    price: 30,
    imageGroups: [
      {
        images: [
          {
            link: "https://via.placeholder.com/150",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Product 3",
    shortDescription: "Lorem ipsum dolor sit amet",
    price: 30,
    imageGroups: [
      {
        images: [
          {
            link: "https://via.placeholder.com/150",
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
      <Navbar />
      <Header scrollHandler={scrollHandler} />
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              className="mt-1 text-4xl font-bold uppercase rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700sm:text-5xl sm:tracking-tight lg:text-5xl"
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
            <button
              className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-600 shadow-sm hover:bg-orange-100 sm:px-8"
              // onClick={}
            >
              Ver todas as opções
            </button>
          </div>
      </div>
    </>
  )
}
