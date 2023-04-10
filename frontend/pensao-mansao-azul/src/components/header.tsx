import Image from 'next/image'
import img from '/public/Neuschwanstein_Castle-Germany.jpg'

export default function Header({ scrollHandler }) {
  return (
    <header className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto">
        <div className="relative shadow-xl sm:overflow-hidden">
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
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center text-xl font-semibold uppercase tracking-wide text-blue-600">
                O lugar certo para você ficar em Lavras-MG
            </p>
            <h1 className="mt-1 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
              <span className="block text-white">Pensão Mansão</span>
              <span className="block font-bold text-blue-500">Azul</span>
            </h1>
            <p className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center text-xl font-semibold uppercase tracking-wide text-blue-600">
                Mais de 20 anos de tradição e qualidade
            </p>

            <div className="mx-auto mt-10  flex max-w-none justify-center">
              <button
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-blue-600 shadow-sm hover:bg-orange-100 sm:px-8"
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