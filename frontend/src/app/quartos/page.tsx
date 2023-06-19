"use client";
import "src/app/globals.css";
import React from "react";
import RoomCard from "../sections/Rooms";

const quarto5 = require("/public/quarto5.jpg");
const quarto13 = require("/public/quarto13.jpg");
const quarto15 = require("/public/quarto15.jpg");
const quarto16 = require("/public/quarto16.jpg");
const quartoTorre = require("/public/quarto-torre.jpg");
const quarto18 = require("/public/quarto18.jpg");

export default function Quartos() {
  const allRooms = [
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
    {
        id: 7,
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
      {
        id: 8,
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
      {
        id: 9,
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
      {
        id: 10,
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
      {
        id:11,
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
