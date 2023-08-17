import React from "react";
import Image from "next/image";

export default function Perks() {
  // Perks({ isDarkMode })
  //const bgColor = isDarkMode ? "bg-navy" : "bg-white";
  //const textColor = isDarkMode ? "text-white" : "text-white";
  const bgColor = "bg-navy";
  // const textColor = "text-white dark:text-white";

  return (
    <section id="vantagens" className="mx-16">
      <div className="text-center">
        <p className="mt-1 text-4xl my-16 font-bold uppercase rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700sm:text-5xl sm:tracking-tight lg:text-5xl">
          Vantagens
        </p>
      </div>
      <div className="flex flex-wrap my-16 ">
        <div className={`w-full sm:w-1/2 md:w-1/4 ${bgColor} flex-shrink`}>
          <div className="mx-auto w-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </div>
          <div
            className="px-6 py-8 text-riverBed dark:text-white text-center text-2xl font-bold"
          >
            Quartos mobiliados com roupa de cama
          </div>
          <div className={`px-4 sm:px-1 pb-8 text-riverBed dark:text-white text-center`}>
            A Pensão Mansão Azul oferece quartos completamente mobiliados,
            incluindo roupa de cama. Isso proporciona conveniência e conforto
            aos residentes, pois eles não precisam se preocupar em trazer ou
            comprar móveis e roupas de cama.
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
              className="w-12 h-12"
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
            className={`px-6 py-8 text-grey-700 dark:text-white text-center text-2xl font-bold`}
          >
            Localização próxima da UFLA, Unilavras e comércios
          </div>
          <div className={`px-4 sm:px-1 pb-8 text-riverBed dark:text-white text-center`}>
            A pensão está estrategicamente localizada perto da UFLA e da
            Unilavras, facilitando o deslocamento para estudantes e professores.
            Além disso, a proximidade com restaurantes, padarias e outros
            comércios oferece conveniência aos residentes, garantindo fácil
            acesso a serviços e produtos essenciais.
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
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
          </div>
          <div
            className={`px-2 py-8 text-grey-700 dark:text-white text-center text-2xl font-bold`}
          >
            Ambiente familiar e tranquilo para estudos, com regras de
            convivência e limpeza
          </div>
          <div className={`px-4 sm:px-1 pb-8 text-riverBed dark:text-white text-center`}>
            A Pensão Mansão Azul é conhecida por proporcionar um ambiente
            familiar e tranquilo, ideal para estudantes que buscam concentração
            e foco nos estudos. As regras de convivência e limpeza são
            estabelecidas para garantir um ambiente harmonioso e agradável para
            todos os residentes.
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
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div
            className={`px-6 py-8 text-grey-700 dark:text-white text-center text-2xl font-bold`}
          >
            Aluguel inclusivo de água, luz, telefone, internet, TV a cabo e vaga
            na garagem
          </div>
          <div className={`px-4 sm:px-1 pb-8 text-riverBed dark:text-white text-center`}>
            O valor do aluguel já inclui serviços essenciais, como água, luz,
            telefone, internet e TV a cabo na sala. Além disso, os residentes
            têm acesso a uma vaga de garagem, proporcionando segurança e
            comodidade para estacionar seus veículos.
          </div>
        </div>
      </div>
    </section>
  );
}
