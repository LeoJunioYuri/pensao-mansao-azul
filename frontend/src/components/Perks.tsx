import React from "react";
import Image from "next/image";
import img from "/public/Hohenzollern-Castle.jpg";

export default function Perks() {
  // Perks({ isDarkMode })
  //const bgColor = isDarkMode ? "bg-navy" : "bg-white";
  //const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const bgColor = "bg-navy";
  const textColor = "text-white";

  return (
    <div className="flex flex-wrap">
      <div className={`w-full sm:w-1/2 md:w-1/4 ${bgColor} flex-shrink`}>
        <div className="mx-auto w-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>
        </div>
        <div
          className={`px-6 py-8 ${textColor} text-center text-2xl font-bold`}
        >
          Lorem Ipsum
        </div>
        <div className={`px-6 pb-8 ${textColor} text-center`}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint.
        </div>
      </div>

      <div className={`w-full sm:w-1/2 md:w-1/4 ${bgColor} flex-shrink`}>
        <div className="mx-auto w-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        </div>
        <div
          className={`px-6 py-8 ${textColor} text-center text-2xl font-bold`}
        >
          Lorem Ipsum
        </div>
        <div className={`px-6 pb-8 ${textColor} text-center`}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores.
        </div>
      </div>

      <div className={`w-full sm:w-1/2 md:w-1/4 ${bgColor} flex-shrink`}>
        <div className="mx-auto w-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
        </div>
        <div
          className={`px-6 py-8 ${textColor} text-center text-2xl font-bold`}
        >
          Lorem Ipsum
        </div>
        <div className={`px-6 pb-8 ${textColor} text-center`}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores.
        </div>
      </div>

      <div className={`w-full sm:w-1/2 md:w-1/4 ${bgColor} flex-shrink`}>
        <div className="mx-auto w-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div
          className={`px-6 py-8 ${textColor} text-center text-2xl font-bold`}
        >
          Lorem Ipsum
        </div>
        <div className={`px-6 pb-8 ${textColor} text-center`}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores. At vero eos et accusamus et iusto odio dignissimos ducimus
          qui blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores.
        </div>
      </div>
    </div>
  );
}
