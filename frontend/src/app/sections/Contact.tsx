export default function Contact() {
  return (
    <section id="contato" className="mb-32 mx-16 text-white-800">
      <div className="text-center">
        <p
          className="mt-1 text-4xl my-16 md:my-24 underline underline-offset-8 md:no-underline font-bold uppercase rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700sm:text-5xl sm:tracking-tight lg:text-5xl"
          // ref={roomRef}
        >
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

          {/* <p className="text-gray-500 mb-6 underline underline-offset-4">
              Rua Mariana Botelho dos Santos, 43 - Lavras, Minas Gerais
            </p> */}
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
              (35) 9 99944-0891
            </a>
          </p>

          <p className="text-gray-500 mb-6">(35) 3826-0562</p>
          <p className="font-bold">E-mail</p>
          <p className="text-gray-500 mb-6">
            <a
              href="mailto:email@gmail.com"
              className="underline underline-offset-4"
            >
              email@gmail.com
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
