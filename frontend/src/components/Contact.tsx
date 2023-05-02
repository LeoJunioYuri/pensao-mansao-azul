export default function Contact() {
  return (
    <section className="mb-32 mx-16 text-white-800">
      <div className="text-center">
        <p
          className="mt-1 text-4xl my-32 font-bold uppercase rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700sm:text-5xl sm:tracking-tight lg:text-5xl"
          // ref={roomRef}
        >
          Contato
        </p>
      </div>
      <div className="flex flex-wrap">
        <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-7/12 px-3 lg:px-6">
          <h2 className="text-3xl font-bold mb-2">Pensão Mansão Azul</h2>
          <p className="font-bold text-gray-400  mb-6">Agende já sua visita!</p>

          <p className="font-bold mb-2">Endereço</p>

          <p className="text-gray-500 mb-6 underline underline-offset-4">
            Rua Mariana Botelho dos Santos, 43 - Lavras, Minas Gerais
          </p>
          <p className="font-bold mb-2">Telefones</p>
          <p className="text-gray-500 mb-3">(35) 9 9921-4051</p>
          <p className="text-gray-500 mb-3">(35) 9 9921-4051</p>
          <p className="text-gray-500 mb-6">(35) 3826-0562</p>
          <p className="font-bold mb-2">E-mail</p>
          <p className="text-gray-500 mb-6">email@gmail.com</p>

          <p className="font-bold mb-2">Horário de atendimento</p>
          <p className="text-gray-500">
            Atendimento de visitas presenciais e atendimento por telefone
            funcionam todos os dias de 11:00 horas até 21:00 horas.
          </p>
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full md:w-5/12 px-3 lg:px-6">
          <p className="font-bold mb-6">Localização</p>
          <iframe
            src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
