//TODO: Move this to pages
import React from "react";
import Image from "next/image";
//import ProfileImage from './profile.jpg';
import ProfileImage from "/public/Hohenzollern-Castle.jpg";
import PageTitle from "@component/components/page-title";
import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";

export default function AboutUs() {
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
        <div className="mx-auto max-w-screen-md py-12">
          <Card className="mb-12 overflow-hidden">
            <img
              alt="nature"
              className="h-[32rem] w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
            />
          </Card>
          <Typography variant="h2" color="blue-gray" className="mb-2">
            What is Material Tailwind
          </Typography>
          <Typography color="gray" className="font-normal">
            Can you help me out? you will get a lot of free exposure doing this
            can my website be in english?. There is too much white space do less
            with more, so that will be a conversation piece can you rework to
            make the pizza look more delicious other agencies charge much lesser
            can you make the blue bluer?. I think we need to start from scratch
            can my website be in english?, yet make it sexy i&apos;ll pay you in
            a week we don&apos;t need to pay upfront i hope you understand can
            you make it stand out more?. Make the font bigger can you help me
            out? you will get a lot of free exposure doing this that&apos;s
            going to be a chunk of change other agencies charge much lesser. Are
            you busy this weekend? I have a new project with a tight deadline
            that&apos;s going to be a chunk of change. There are more projects
            lined up charge extra the next time.
          </Typography>
        </div>
      </section>

      <section className="relative bg-gray-100 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Build something">
            A Pensão Mansão Azul, também conhecida como Mansão dos Estudantes.
            Um lugar seguro, tranquilo e familiar para você morar, estudar com
            segurança e fazer amigos de boa índole em um ambiente com conforto e
            privacidade.
          </PageTitle>

          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-3 gap-16 md:grid-cols-2 lg:grid-cols-3">
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

          <PageTitle heading="Alugue conosco">
            Nos envie uma mensagem com sua dúvida e retornaremos em até 24
            horas.
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
        </div>
      </section>
    </>
  );
}
