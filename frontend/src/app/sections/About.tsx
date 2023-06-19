'use client'
import Link from "next/link";
import Image from "next/image";
import img from "/public/casa-frente-2.jpg";
import img2 from "/public/quarto6.jpg";
import img3 from "/public/vista.jpg";

export default function About() {
  return (
    <div className="relative mx-16 my-8 ">
      <div className="sm:py-15 mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8 bg:babyBlue">
        <div className="text-center">
          <p
            className="mb-2 text-4xl font-bold uppercase rounded md:hover:bg-transparent md:border-0 sm:tracking-tight lg:text-5xl"
            //ref={roomRef}
          >
            Sobre nós
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row max-w-screen-xl mx-auto group rounded-lg border-2 border-babyBlue hover:shadow-2xl dark:shadow-babyBlue transition-all duration-300 hover:scale-104">
        <div className="sm:w-1/2 lg:w-2/3 rounded relative ">
          <Link
            // href={`/blog/${featuredPost?.fields.slug}`}
            href={""}
            className="cursor-pointer"
          >
            <div className="h-64 sm:h-96 relative">
              <Image
                //src={featuredPost.fields.image.url}
                src={img}
                //alt={featuredPost.fields.image.label}
                alt="teste"
                className="object-cover object-center rounded-t-lg sm:rounded-r-none sm:rounded-l-lg"
                fill
                sizes="(max-width: 640px) 100vw,
                                            50vw"
              />
            </div>
          </Link>
        </div>
        <div className="sm:w-1/2 lg:w-1/3 bg-gray-100 dark:bg-riverBed p-8 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg relative">
          <Link
            // href={`/blog/${featuredPost.fields.slug}`}
            href={""}
            className="cursor-pointer"
          >
            <div className="border-b-2 border-primary-500 w-12 border-babyBlue"></div>
            <h2 className="font-display text-secondary-500 mt-1 text-riverBed dark:text-babyBlue text-2xl group-hover:text-primary-700 transition duration-300">
              {/* {featuredPost.fields.title} */}
              Ambiente seguro e familiar
            </h2>
            <p className="text-sm mt-3 leading-loose text-gray-600 dark:text-babyBlue font-medium line-clamp-none">
              {/* {contentStr} */}
              A Pensão Mansão Azul oferece um ambiente seguro e tranquilo para morar, estudar e fazer amizades com pessoas de boa índole.
              Com mais de 20 anos de tradição, proporciona conforto e privacidade aos seus residentes.
            </p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row max-w-screen-xl mx-auto mt-8 group rounded-lg border-2 border-babyBlue hover:shadow-2xl dark:shadow-babyBlue transition-all duration-300 hover:scale-104">
      {/* rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 */}
        <div className="sm:w-1/2 lg:w-1/3 bg-gray-100 dark:bg-riverBed p-8 rounded-t-lg rounded-b-none sm:rounded-l-lg sm:rounded-r-none">
          <Link
            // href={`/blog/${featuredPost.fields.slug}`}
            href={""}
            className="cursor-pointer"
          >
            <div className="border-b-2 border-primary-500 w-12 border-babyBlue"></div>
            <h2 className="font-display text-secondary-500 mt-1 text-riverBed dark:text-babyBlue text-2xl group-hover:text-primary-500 transition duration-300">
              {/* {featuredPost.fields.title} */}
              Quartos e suítes individuais mobiliados
            </h2>
            <p className="text-sm mt-3 leading-loose text-gray-600 dark:text-babyBlue font-medium line-clamp-none">
              {/* {contentStr} */}
              A Pensão Mansão Azul disponibiliza quartos, suítes e flats mobiliados para aluguel. Cada andar conta com salas compartilhadas e cozinhas mobiliadas.
              Os quartos são adequados para estudantes de graduação, mestrado e doutorado, além de professores e técnicos administrativos.
            </p>
          </Link>
        </div>
        <div className="sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg relative">
          <Link
            // href={`/blog/${featuredPost?.fields.slug}`}
            href={""}
            className="cursor-pointer"
          >
            <div className="h-64 sm:h-96 relative">
              <Image
                //src={featuredPost.fields.image.url}
                src={img2}
                //alt={featuredPost.fields.image.label}
                alt="teste"
                // rounded-t-lg sm:rounded-b-lg sm:rounded-t-none
                className="rounded-b-lg rounded-t-none sm:rounded-r-lg sm:rounded-l-none"
                fill
                sizes="(max-width: 640px) 100vw,
                                            50vw"
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row max-w-screen-xl mx-auto mt-8 group rounded-lg border-2 border-babyBlue hover:shadow-2xl dark:shadow-babyBlue transition-all duration-300 hover:scale-104 ">
        <div className="sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg relative">
          <Link
            // href={`/blog/${featuredPost?.fields.slug}`}
            href={""}
            className="cursor-pointer"
          >
            <div className="h-64 sm:h-96 relative">
              <Image
                //src={featuredPost.fields.image.url}
                src={img3}
                //alt={featuredPost.fields.image.label}
                alt="teste"
                className="object-cover object-center rounded-t-lg sm:rounded-r-none sm:rounded-l-lg"
                fill
                sizes="(max-width: 640px) 100vw,
                                            50vw"
              />
            </div>
          </Link>
        </div>
        <div className="sm:w-1/2 lg:w-1/3 bg-gray-100 dark:bg-riverBed p-8 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg relative hover:shadow-2xl transition-all duration-300 hover:scale-104">
          <Link
            // href={`/blog/${featuredPost.fields.slug}`}
            href={""}
            className="cursor-pointer"
          >
            <div className="border-b-2 border-primary-500 w-12 border-babyBlue"></div>
            <h2 className="font-display text-secondary-500 mt-1 text-riverBed dark:text-babyBlue text-2xl group-hover:text-primary-500 transition duration-300">
              {/* {featuredPost.fields.title} */}
              Localização privilegiada
            </h2>
            <p className="text-sm mt-3 leading-loose text-gray-600 dark:text-babyBlue font-medium line-clamp-none">
              {/* {contentStr} */}
              A pensão está situada em um lugar privilegiado com ótima segurança.
              Além disso, nas proximidades é possível encontrar padaria, farmácia, posto de saúde, papelaria, supermercados e armazém.
              A pensão fica a apenas 10 minutos a pé da UFLA, tornando-a uma opção conveniente para estudantes, professores e funcionários que se mudam para Lavras.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
