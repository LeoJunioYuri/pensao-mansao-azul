"use client";
import "src/app/globals.css";
import React from "react";
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

export default function Sobre() {
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
          <h2 className="mx-auto w-full px-4 text-center lg:w-6/12 blue-gray dark:text-slate-400 text-5xl font-semibold">Sobre Nós</h2>
          <Typography color="white" className="font-normal py-10">
            Can you help me out? you will get a lot of free exposure doing this
            can my website be in english?. There is too much white space do less
            with more, so that will be a conversation piece can you rework to
            make the pizza look more delicious other agencies charge much lesser
            can you make the blue bluer?.
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
          What is Material Tailwind
        </Typography>
        <Typography color="gray" className="font-normal">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?. I think we need to start from scratch can my
          website be in english?, yet make it sexy i&apos;ll pay you in a week
          we don&apos;t need to pay upfront i hope you understand can you make
          it stand out more?. Make the font bigger can you help me out? you will
          get a lot of free exposure doing this that&apos;s going to be a chunk
          of change other agencies charge much lesser. Are you busy this
          weekend? I have a new project with a tight deadline that&apos;s going
          to be a chunk of change. There are more projects lined up charge extra
          the next time.
        </Typography>
        </div>
      </section>

      <section className="relative py-2 px-4">
        <div className="mx-auto max-w-screen-md py-40 bg-fixed overflow-hidden">
        <Typography variant="h2" color="text-slate-400" className="mb-2">
          What is Material Tailwind
        </Typography>
          <Card className="mb-12 overflow-hidden">
            <img
              alt="nature"
              className="h-[32rem] w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
            />
          </Card>
        <Typography color="text-slate-400" className="font-normal">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?
        </Typography>
        </div>
      </section>

      <section className="relative bg-gray-100 py-20 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Build something">
            A Pensão Mansão Azul, também conhecida como Mansão dos Estudantes.
            Um lugar seguro, tranquilo e familiar para você morar, estudar com
            segurança e fazer amigos de boa índole em um ambiente com conforto e
            privacidade.
          </PageTitle>

          <div className="mx-auto mt-20 mb-24 grid max-w-5xl grid-cols-3 gap-16 md:grid-cols-2 lg:grid-cols-3">
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
                Title 1
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                Description 1
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
                Title 2
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                Description 2
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
                Title 3
              </Typography>
              <Typography className="font-normal text-blue-gray-500">
                Description 3
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
            <Input variant="standard" size="lg" label="Nome Completo" />
            <Input variant="standard" size="lg" label="Endereço de email" />
          </div>
          <Textarea variant="standard" size="lg" label="Mensagem" rows={8} />
          <Button variant="gradient" size="lg" className="mt-8">
            Enviar Mensagem
          </Button>
        </form>
      </section>
    </>
  );
}
