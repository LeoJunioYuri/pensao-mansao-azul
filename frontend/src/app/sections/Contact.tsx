export default function Contact() {
  return (
    <section id="contato" className="mb-32 mx-4 lg:mx-14 text-white-800">
      <div className="text-center">
        <p className="mt-1 text-4xl my-16 md:my-24 no-underline font-bold uppercase rounded sm:tracking-tight lg:text-5xl">
          Contato
        </p>
      </div>
      <div className="flex flex-wrap">
        <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-7/12 px-3 lg:px-6">
          <h2 className="text-3xl font-bold mb-2">Pensão Mansão Azul</h2>
          <p className="font-bold text-riverBed dark:text-gray-400  mb-6">
            Agende já sua visita!
          </p>

          <p className="font-bold">Endereço</p>
          <p className="text-gray-500 mb-6">
            <a
              href="https://www.google.com.br/maps/place/Pens%C3%A3o+Mans%C3%A3o+Azul/@-21.2394536,-44.9900948,17z/data=!4m6!3m5!1s0x9ffd8d9aa17823:0x8e385990b5c510ad!8m2!3d-21.2407649!4d-44.9915778!16s%2Fg%2F11c1vksrs6?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Rua Mariana Botelho dos Santos, 43 - Lavras, Minas Gerais
            </a>
          </p>

          <p className="font-bold">Telefones</p>
          <p className="text-gray-500 mb-1">(35) 9 9921-4051</p>
          <p className="text-gray-500 mb-1">
            <a
              href="https://wa.me/553599440891"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              (35) 9 9944-0891
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-5 pl-1 inline"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </p>

          <p className="text-gray-500 mb-6">(35) 3826-0562</p>
          <p className="font-bold">E-mail</p>
          <p className="text-gray-500 mb-6">
            <a
              href="mailto:rsguarnier@hotmail.com"
              className="underline underline-offset-4"
            >
              rsguarnier@hotmail.com
            </a>
          </p>

          <p className="font-bold">Horário de atendimento</p>
          <p className="text-gray-500">
            Atendimento de visitas presenciais e atendimento por telefone
            funcionam todos os dias de 11:00 horas até 21:00 horas.
          </p>
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-3 lg:px-6">
          <p className="font-bold mb-6">Localização</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1859.3880690356557!2d-44.992434!3d-21.2407239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ffd8d9aa17823%3A0x8e385990b5c510ad!2zUGVuc8OjbyBNYW5zw6NvIEF6dWw!5e0!3m2!1spt-BR!2sbr!4v1686695614335!5m2!1spt-BR!2sbr"
            className="left-0 top-0 h-full w-full rounded hover:shadow-md dark:shadow-babyBlue transition-all duration-300 hover:scale-104"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
