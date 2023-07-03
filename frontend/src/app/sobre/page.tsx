"use client";
import "src/app/globals.css";
import React, { useState } from "react";
import Image from "next/image";
import PageTitle from "@component/app/components/page-title";
import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import img from "/public/casa-frente-2.jpg";
import img2 from "/public/sala.jpg";

export default function Sobre() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleEnviarMensagem = () => {
    const subject = encodeURIComponent("Mensagem para a Pensão Mansão Azul");
    const body = encodeURIComponent(
      `Nome: ${nome}\n${mensagem}`
    );
    const email = 'leojunioyuri@hotmail.com'
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  const icons = [
    { icon: "fas fa-user", title: "Equipe" },
    { icon: "fas fa-chart-line", title: "Resultados" },
    { icon: "fas fa-cogs", title: "Inovação" },
    { icon: "fas fa-handshake", title: "Parcerias" },
    { icon: "fas fa-lightbulb", title: "Ideias" },
    { icon: "fas fa-heart", title: "Paixão" },
  ];

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-md py-32 bg-fixed overflow-hidden">
          <h2 className="mx-auto w-full px-4 text-center lg:w-6/12 blue-gray dark:text-slate-400 text-5xl font-semibold">
            Sobre Nós
          </h2>
          <Typography color="white" className="font-normal py-10">
            Bem-vindos à Pensão Mansão Azul, o lugar perfeito para morar,
            estudar e fazer amizades em um ambiente seguro, tranquilo e
            familiar.
            <br></br>
            <br></br>
            Nossa pensão, também conhecida como Mansão dos Estudantes, oferece
            quartos e suítes individuais completamente mobiliados, além de salas
            e cozinhas compartilhadas, equipadas e mobiliadas por andar.
            <br></br>
            <br></br>
            Localizada em uma região privilegiada, proporcionamos ótima
            segurança para garantir a tranquilidade de todos os moradores.
            Estamos abertos para receber estudantes de graduação, mestrado e
            doutorado, bem como professores e técnicos administrativos.
            <br></br>
            <br></br>
            Não perca a oportunidade de viver em um lugar que valoriza a sua
            segurança e bem-estar. Entre em contato conosco e agende uma visita
            à Pensão Mansão Azul, onde a qualidade de vida e o ambiente amigável
            estão garantidos.
          </Typography>
          <Image
            //src={featuredPost.fields.image.url}
            src={img}
            //alt={featuredPost.fields.image.label}
            alt="teste"
            className="h-[32rem] w-full object-cover object-center rounded-lg"
          />
        </div>
      </section>

      <section className="relative bg-gray-100 py-2 px-4 ">
        <div className="mx-auto max-w-screen-md py-40 bg-fixed overflow-hidden">
          <Typography variant="h2" color="blue-gray" className="mb-2 mx-auto">
            O Lugar Perfeito para Estudantes e Profissionais em Lavras
          </Typography>
          <Typography color="gray" className="font-normal">
            A Pensão Mansão Azul, popularmente conhecida como Mansão dos
            Estudantes, oferece quartos, suítes e flats completamente
            mobiliados.
            <br />
            Nossa taxa de aluguel abrange serviços essenciais como água, luz,
            telefone local, internet e TV a cabo na sala. Além disso,
            disponibilizamos garagem para sua comodidade. Aceitamos pagamentos
            com cartão de crédito, tanto à vista como parcelado, e também
            realizamos transferências bancárias.
            <br />
            Localizada em uma região privilegiada, a Pensão Mansão Azul está
            cercada por conveniências, como padarias, farmácias, postos de
            saúde, papelarias, supermercados e armazéns.
            <br />
            Se você é estudante, professor ou técnico administrativo e está
            planejando se mudar para Lavras, convidamos você a conhecer a nossa
            pensão.
            <br />
            Entre em contato conosco para obter mais informações sobre as nossas
            acomodações através do email no nosso site ou por telefone. Visite a
            nossa página de quartos para conferir mais detalhes das nossas
            acomodações.
          </Typography>
        </div>
      </section>

      <section className="relative py-2 px-4">
        <div className="mx-auto max-w-screen-md py-40 bg-fixed overflow-hidden">
          <Typography variant="h2" color="text-slate-400" className="mb-2">
            Conforto para você estudar bem
          </Typography>
          <Card className="mb-12 overflow-hidden">
            <Image
              alt="sala da casa"
              className="h-[32rem] w-full object-cover object-center"
              src={img2}
            />
          </Card>
          <Typography color="text-slate-400" className="font-normal">
            Aqui na Pensão Mansão Azul, você encontrará conforto, privacidade e
            um ambiente propício para o seu desenvolvimento acadêmico e pessoal.
            Estamos comprometidos em oferecer um espaço acolhedor, onde você
            poderá se concentrar nos seus estudos, desfrutar de momentos de
            descanso e conviver com pessoas de boa índole.
          </Typography>
        </div>
      </section>

      <section className="relative bg-gray-100 py-20 px-4">
  <div className="container mx-auto">
    <h2 className="mx-auto w-full px-4 text-center lg:w-6/12 text-blue-gray-900 text-5xl font-semibold">
      Aqui você vai encontrar
    </h2>

    <div className="mx-auto mt-20 mb-24 grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      <Card
        key="card1"
        color="transparent"
        shadow={false}
        className="col-span-1 text-center text-blue-gray-900"
      >
        <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
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
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Sua Casa Longe de Casa em Lavras
        </Typography>
        <Typography className="font-normal text-blue-gray-500">
          Na Pensão Mansão Azul, você encontrará a sua casa longe de casa em Lavras. Nossas acomodações são seguras, confortáveis e familiares, proporcionando um ambiente acolhedor onde você pode se concentrar nos seus estudos e desfrutar de momentos de convívio social.
        </Typography>
      </Card>

      <Card
        key="card2"
        color="transparent"
        shadow={false}
        className="col-span-1 text-center text-blue-gray-900"
      >
        <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
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
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Conforto e Comodidade
        </Typography>
        <Typography className="font-normal text-blue-gray-500">
          Oferecemos quartos, suítes e flats totalmente mobiliados, incluindo serviços essenciais como água, luz, telefone, internet e TV a cabo na sala. Aceitamos pagamentos com cartão de crédito e temos disponibilidade de garagem. Aproveite a proximidade de padarias, farmácias, supermercados e outras conveniências.
        </Typography>
      </Card>

      <Card
        key="card3"
        color="transparent"
        shadow={false}
        className="col-span-1 text-center text-blue-gray-900"
      >
        <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
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
        <Typography variant="h5" color="blue-gray" className="mb-2">
          A melhor localização
        </Typography>
        <Typography className="font-normal text-blue-gray-500">
          Se você é estudante, professor ou técnico administrativo e está planejando se mudar para Lavras, a Pensão Mansão Azul é o local perfeito para você. Oferecemos acomodações seguras, familiares e confortáveis, a apenas 15 minutos da UFLA. Faça uma visita, faça amizades e aproveite o melhor ambiente para viver e estudar durante o seu semestre.
        </Typography>
      </Card>
    </div>
  </div>
</section>


      <section className="relative dark:bg-navy py-24 px-4">
        <PageTitle heading="Alugue conosco">
          Nos envie uma mensagem com sua dúvida e retornaremos em até 24 horas.
        </PageTitle>
        <form className="mx-auto mt-12 max-w-3xl text-center">
          <div className="mb-8 flex gap-8">
            <Input
              variant="standard"
              size="lg"
              label="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <Textarea
            variant="standard"
            size="lg"
            label="Mensagem"
            rows={8}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          />
          <Button
            variant="gradient"
            size="lg"
            className="mt-8"
            onClick={handleEnviarMensagem}
          >
            Enviar Mensagem
          </Button>
        </form>
      </section>
    </>
  );
}
