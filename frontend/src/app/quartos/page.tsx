"use client";
import "src/app/globals.css";
import React from "react";
import RoomCard from "../sections/Rooms";

const quarto1 = require("/public/quarto1.jpeg");
const quarto2 = require("/public/quarto2.jpeg");
const quarto3 = require("/public/quarto3.jpeg");
const quarto4 = require("/public/quarto4.jpeg");
const quarto5 = require("/public/quarto5.jpg");
const quarto6 = require("/public/quarto6.jpg");
const quarto7 = require("/public/quarto7.jpg");
const quarto8 = require("/public/quarto8.jpg");
const quarto9 = require("/public/quarto9.jpg");
const quarto13 = require("/public/quarto13.jpg");
const quarto15 = require("/public/quarto15.jpeg");
const quarto16 = require("/public/quarto16.jpeg");
const quarto17 = require("/public/quarto17.jpg");
const quarto18 = require("/public/quarto18.jpg");
const quarto19 = require("/public/quarto19.jpg");
const quarto20 = require("/public/quarto20.jpeg");
const quarto21 = require("/public/quarto21.jpeg");
const quarto22 = require("/public/quarto22.jpeg");
const quarto23 = require("/public/quarto23.jpg");
const quarto24 = require("/public/quarto24.jpg");
const quarto25 = require("/public/quarto25.jpg");
// const quarto27 = require("/public/quarto27.jpg");
const quartoTorre = require("/public/quarto-torre.jpg");

export default function Quartos() {
  const allRooms = [
    {
      id: 1,
      name: "Quarto 1",
      price: 549,
      imageGroups: [
        {
          images: [
            {
              link: quarto1,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Suíte 2",
      price: 549,
      imageGroups: [
        {
          images: [
            {
              link: quarto2,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Quarto 3",
      price: 549,
      imageGroups: [
        {
          images: [
            {
              link: quarto3,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Quarto 4",
      price: 549,
      imageGroups: [
        {
          images: [
            {
              link: quarto4,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Quarto 5",
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
      id: 6,
      name: "Quarto 6",
      price: 1099,
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
      id: 7,
      name: "Quarto 7",
      price: 799,
      imageGroups: [
        {
          images: [
            {
              link: quarto7,
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "Quarto 8",
      price: 749,
      imageGroups: [
        {
          images: [
            {
              link: quarto8,
            },
          ],
        },
      ],
    },
    {
      id: 9,
      name: "Quarto 9",
      price: 749,
      imageGroups: [
        {
          images: [
            {
              link: quarto9,
            },
          ],
        },
      ],
    },
    {
      id: 10,
      name: "Quarto 13",
      price: 749,
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
      id: 11,
      name: "Quarto 15",
      price: 599,
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
      id: 12,
      name: "Quarto 16",
      price: 599,
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
      id: 13,
      name: "Quarto 17",      //   price: 599,
      imageGroups: [
        {
          images: [
            {
              link: quarto17,
            },
          ],
        },
      ],
    },
    {
      id: 14,
      name: "Quarto 18",      //   price: 599,
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
      id: 15,
      name: "Quarto 19",      //   price: 599,
      imageGroups: [
        {
          images: [
            {
              link: quarto19,
            },
          ],
        },
      ],
    },
    {
      id: 16,
      name: "Quarto 20",
      price: 599,
      imageGroups: [
        {
          images: [
            {
              link: quarto20,
            },
          ],
        },
      ],
    },
    {
      id: 17,
      name: "Quarto 21",
      price: 599,
      imageGroups: [
        {
          images: [
            {
              link: quarto21,
            },
          ],
        },
      ],
    },
    {
      id: 18,
      name: "Quarto 22",
      price: 599,
      imageGroups: [
        {
          images: [
            {
              link: quarto22,
            },
          ],
        },
      ],
    },
    {
      id: 19,
      name: "Quarto 23",
      price: 599,
      imageGroups: [
        {
          images: [
            {
              link: quarto23,
            },
          ],
        },
      ],
    },
    {
      id: 20,
      name: "Quarto 24",
      price: 599,
      imageGroups: [
        {
          images: [
            {
              link: quarto24,
            },
          ],
        },
      ],
    },
    {
      id: 21,
      name: "Quarto 25",
      price: 599,
      imageGroups: [
        {
          images: [
            {
              link: quarto25,
            },
          ],
        },
      ],
    },
    // {
    //   id: 22,
    //   name: "Suíte 27",
    //   price: 599,
    //   imageGroups: [
    //     {
    //       images: [
    //         {
    //           link: quarto27,
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      id: 22,
      name: "Quarto torre",
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
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="sm:py-15 mx-auto max-w-7xl pt-28 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold uppercase text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-5xl">
              Nossas acomodações
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {allRooms &&
            allRooms.map((product) => (
              <RoomCard product={product} key={product.id} />
            ))}
        </div>
      </div>
    </>
  );
}
