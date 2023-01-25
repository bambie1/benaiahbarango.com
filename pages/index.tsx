import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

import SVGLinks from "../src/components/SVGLinks";

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
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Benaiah Barango | Portfolio</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex tracking-tighter w-full flex-1 flex-col items-center justify-center px-4 lg:px-20 text-center">
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold">Benaiah Barango</h1>
          <p className="text-gray-500 font-light text-lg lg:text-2xl mt-2">
            Javascript Engineer @ Fullscript
          </p>

          <SVGLinks />

          <section className="mt-5">
            <p>Looking for a website?</p>
            <p className="text-gray-500 lg:text-lg">
              Reach out on{" "}
              <Link
                className="underline"
                href="https://www.soplugged.com/pro"
                target="_blank"
                rel="norefferer"
              >
                SoPlugged Pro
              </Link>
            </p>
          </section>
        </div>

        <hr className="w-full max-w-md mt-10 mb-6" />

        <div>
          <div className="flex flex-wrap gap-2">
            <p>Currently maintaining:</p>
            <ul>
              <li>
                <ProjectLink href="soplugged.com" title="SoPlugged" />
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2">
            <p>Past projects:</p>
            <ul>
              <li>
                <ProjectLink href="treatsroyale.ca" title="Treats Royale" />
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="flex py-4 w-full items-center justify-center text-sm text-gray-400">
        <p>Copyright. {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

const ProjectLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      href={`https://www.${href}`}
      title={title}
      className="underline text-gray-500 font-light"
      target="_blank"
    >
      {href}
    </Link>
  );
};

export default Home;
