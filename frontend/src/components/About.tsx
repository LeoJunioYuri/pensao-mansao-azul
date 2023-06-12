import Link from "next/link";
import Image from "next/image";
import img from "/public/casa-frente-2.jpg";
import img2 from "/public/casa_longe.jpg";
import img3 from "/public/vista.jpg";

export default function About() {
  return (
    <div className="relative mx-16 my-16 ">
      <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8 bg:babyBlue">
        <div className="text-center">
          <p
            className="mt-1 text-4xl font-bold uppercase rounded md:hover:bg-transparent md:border-0 sm:tracking-tight lg:text-5xl"
            //ref={roomRef}
          >
            Sobre nós
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row max-w-screen-xl mx-auto pt-8 group">
        <div className="sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg relative ">
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
                className="object-cover object-center rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                fill
                sizes="(max-width: 640px) 100vw,
                                            50vw"
              />
            </div>
          </Link>
        </div>
        <div className="sm:w-1/2 lg:w-1/3 bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 relative">
          <Link
            // href={`/blog/${featuredPost.fields.slug}`}
            href={""}
            className="cursor-pointer"
          >
            <div className="font-display uppercase text-gray-600 text-primary-500 text-xs font-bold tracking-widest leading-loose after:content">
              {/* {featuredPost.fields.category.fields.title} */}
              Teste Titulo Categoria
            </div>
            <div className="border-b-2 border-primary-500 w-8"></div>
            <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
              {/* {dateStr} */}
              data
            </div>
            <h2 className="font-display text-secondary-500 mt-1 text-gray-600 text-2xl group-hover:text-primary-500 transition duration-300">
              {/* {featuredPost.fields.title} */}
              Teste Titulo Post
            </h2>
            <p className="text-sm mt-3 leading-loose text-gray-600 font-medium line-clamp-4">
              {/* {contentStr} */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor, magna eget convallis consectetur, eros est luctus nulla,
              vel pellentesque magna nunc eget ipsum. Donec vel lacus vitae
              augue interdum tincidunt eget vel nibh.
            </p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row max-w-screen-xl mx-auto pt-8 group">
        <div className="sm:w-1/2 lg:w-1/3 bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 relative">
          <Link
            // href={`/blog/${featuredPost.fields.slug}`}
            href={""}
            className="cursor-pointer"
          >
            <div className="font-display uppercase text-gray-600 text-primary-500 text-xs font-bold tracking-widest leading-loose after:content">
              {/* {featuredPost.fields.category.fields.title} */}
              Teste Titulo Categoria
            </div>
            <div className="border-b-2 border-primary-500 w-8"></div>
            <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
              {/* {dateStr} */}
              data
            </div>
            <h2 className="font-display text-secondary-500 mt-1 text-gray-600 text-2xl group-hover:text-primary-500 transition duration-300">
              {/* {featuredPost.fields.title} */}
              Teste Titulo Post
            </h2>
            <p className="text-sm mt-3 leading-loose text-gray-600 font-medium line-clamp-4">
              {/* {contentStr} */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor, magna eget convallis consectetur, eros est luctus nulla,
              vel pellentesque magna nunc eget ipsum. Donec vel lacus vitae
              augue interdum tincidunt eget vel nibh.
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
                className="rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                fill
                sizes="(max-width: 640px) 100vw,
                                            50vw"
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row max-w-screen-xl mx-auto pt-8 group">
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
                className="object-cover object-center rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                fill
                sizes="(max-width: 640px) 100vw,
                                            50vw"
              />
            </div>
          </Link>
        </div>
        <div className="sm:w-1/2 lg:w-1/3 bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 relative">
          <Link
            // href={`/blog/${featuredPost.fields.slug}`}
            href={""}
            className="cursor-pointer"
          >
            <div className="font-display uppercase text-gray-600 text-primary-500 text-xs font-bold tracking-widest leading-loose after:content">
              {/* {featuredPost.fields.category.fields.title} */}
              Teste Titulo Categoria
            </div>
            <div className="border-b-2 border-primary-500 w-8"></div>
            <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
              {/* {dateStr} */}
              data
            </div>
            <h2 className="font-display text-secondary-500 mt-1 text-gray-600 text-2xl group-hover:text-primary-500 transition duration-300">
              {/* {featuredPost.fields.title} */}
              Teste Titulo Post
            </h2>
            <p className="text-sm mt-3 leading-loose text-gray-600 font-medium line-clamp-4">
              {/* {contentStr} */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              auctor, magna eget convallis consectetur, eros est luctus nulla,
              vel pellentesque magna nunc eget ipsum. Donec vel lacus vitae
              augue interdum tincidunt eget vel nibh.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
