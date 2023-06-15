import Image from "next/image";
import img from "/public/Neuschwanstein_Castle-Germany.jpg";
import { MouseEventHandler } from "react";
import { Button } from "@material-tailwind/react";

interface HeaderProps {
  scrollHandler: MouseEventHandler<HTMLButtonElement>;
}

export default function Header({ scrollHandler }: HeaderProps) {
  return (
    <header className="relative shadow-xl overflow-hidden sm:rounded-3xl sm:overflow-visible">
      <div className="absolute inset-x-0 inset-0 blur-sm">
        <video autoPlay muted loop className="h-full w-full object-cover">
          <source
            src="https://www.leagueoflegends.com/static/hero-de0ba45b1d0959277d12545fbb645722.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="relative px-4 py-8 md:py-16 lg:py-32 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        <p className="text-center text-lg md:text-xl lg:text-2xl font-semibold tracking-wide mb-8 md:mb-12 lg:mb-16 mt-6 text-gray-300">
          O lugar certo para você ficar em Lavras-MG
        </p>
        <h1 className="text-center font-extrabold uppercase text-gray-900 text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 lg:mb-8">
          <span className="text-white">Pensão Mansão</span>
          <span className="text-blue-700"> Azul</span>
        </h1>
        <p className="text-center text-lg md:text-xl lg:text-2xl font-semibold tracking-wide mb-8 md:mb-12 lg:mb-16 mt-6 text-gray-300">
          Mais de 20 anos de tradição e qualidade
        </p>

        <div className="mx-auto max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl flex justify-center ">
          <Button
            variant="gradient"
            size="lg"
            className="mt-8 shadow-[0_1px_0_rgb(0,0,0)] hover:shadow-[0_2px_0px_rgb(0,0,0)] bg-white ease-out hover:translate-y-1 transition-all rounded"
            onClick={scrollHandler}
          >
            Ver Quartos
          </Button>
        </div>
      </div>
    </header>
  );
}