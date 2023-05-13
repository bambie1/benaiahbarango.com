import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import SEO from "../src/components/SEO";
import SVGLinks from "../src/components/SVGLinks";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <SEO />

      <header className="flex w-full absolute top-0 pt-4 lg:pt-10 flex-col justify-center max-w-3xl px-4 lg:px-20">
        <Image src="/Logo.png" width={35} height={35} alt="" />
      </header>

      <main className="flex tracking-tight w-full flex-1 flex-col justify-center max-w-3xl px-4 lg:px-20">
        <h1 className="text-4xl lg:text-5xl font-bold">Benaiah Barango</h1>
        <p className="text-gray-600 font-light lg:text-xl mt-2 lg:mt-4">
          I am a Design engineer based in Ontario, Canada. I work on the Aviary
          design system at{" "}
          <Link
            href="https://fullscript.com/"
            target="_blank"
            className="underline hover:text-[#437256] transition duration-150 hover:no-underline"
          >
            Fullscript
          </Link>{" "}
          and freelance as a UX designer.
        </p>

        <SVGLinks />

        <section className="mt-5">
          <p className="text-lg">
            Looking for a website?{" "}
            <Link
              href="mailto:benbarango@gmail.com"
              target="_blank"
              rel="norefferer"
              className="underline text-gray-600 hover:text-black transition duration-150"
            >
              Send me a message
            </Link>
          </p>
        </section>
      </main>

      <footer className="flex py-4 px-4 lg:px-20 w-full text-gray-600">
        <p>Copyright. {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Home;
