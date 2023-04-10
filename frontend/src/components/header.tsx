import Image from 'next/image'
import img from '/public/Neuschwanstein_Castle-Germany.jpg'

export default function Header({ scrollHandler }) {
  return (
    <header className="relative">
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gray-100" />
      <div className="mx-auto">
        <div className="relative shadow-xl overflow-hidden sm:rounded-3xl sm:overflow-visible">
          <div className="absolute inset-0 blur-sm">
            <Image
              priority
              fill
              className="h-full w-full object-cover"
              src={img}
              placeholder="blur"
              alt="Coffee grinder"
            />
            <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-8 md:py-16 lg:py-32 sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto">
            <p className="text-center text-lg md:text-xl lg:text-2xl font-semibold uppercase tracking-wide text-blue-600 mb-4 md:mb-6 lg:mb-8">
              O lugar certo para você ficar em Lavras-MG
            </p>
            <h1 className="text-center font-bold uppercase text-gray-900 text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 lg:mb-8">
              <span className="text-white">Pensão Mansão</span>
              <span className="font-bold text-blue-500"> Azul</span>
            </h1>
            <p className="text-center text-lg md:text-xl lg:text-2xl font-semibold uppercase tracking-wide text-blue-600 mb-8 md:mb-12 lg:mb-16">
              Mais de 20 anos de tradição e qualidade
            </p>

            <div className="mx-auto max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl flex sm: justify-center">
              <button
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-orange-600 shadow-sm hover:bg-orange-100 sm:px-8"
                onClick={scrollHandler}
              >
                Ver Quartos
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
