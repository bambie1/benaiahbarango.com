import type { NextPage } from "next";
import Head from "next/head";

const PROJECTS = [
  {
    title: "SoPlugged",
    description: "A website to find black-owned businesses in Canada",
    link: {
      title: "soplugged.com",
      href: "https://www.soplugged.com",
    },
  },
  {
    title: "Treats Royale",
    description: "A Toronto-based bakery business built using Shopify's API",
    link: {
      title: "treatsroyale.ca",
      href: "https://www.treatsroyale.ca",
    },
  },
];

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Benaiah Barango | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex tracking-tighter w-full flex-1 flex-col items-center justify-center px-4 lg:px-20 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold">Benaiah Barango</h1>
        <p className="text-gray-600 font-light text-lg lg:text-2xl mt-2">
          Javascript Engineer @ Fullscript
        </p>
        <hr />
        <div className="mt-10">
          <h2 className="text-2xl lg:text-4xl font-semibold">WORK</h2>

          <ul className="grid gap-10 mt-6">
            {PROJECTS.map((project) => (
              <li key={project.title}>
                <h3 className="text-lg lg:text-xl font-light uppercase tracking-normal">
                  {project.title}
                </h3>
                <p>{project.description}</p>
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-gray-500"
                >
                  {project.link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className="flex py-4 w-full items-center justify-center border-t border-gray-100">
        Copyright. 2023
      </footer>
    </div>
  );
};

export default Home;
