import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import SEO from "../src/components/SEO";
import SVGLinks from "../src/components/SVGLinks";

interface DribbleShot {
  html_url: string;
  id: number;
  images: {
    hidpi: string;
    normal: string;
    one_x: string;
    two_x: string;
    teaser: string;
  };
  title: string;
  published_at: string;
  updated_at: string;
}

const HomePage = ({
  shots,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const topShots = shots
    ?.slice(0, 3)
    .sort(() => Math.random() - Math.random())
    .map((shot) => ({
      title: shot.title,
      id: shot.id,
      image_large: shot.images.hidpi,
      image_small: shot.images.two_x,
    }));

  return (
    <div className="flex min-h-screen w-full max-w-lg lg:max-w-screen-2xl mx-auto flex-col">
      <SEO />

      <div className="fixed lg:top-0 right-0 bottom-0 w-full h-[150px] lg:w-1/3 -z-50 lg:h-full bg-gray-200"></div>
      <main className="grid lg:grid-cols-2 gap-24 lg:gap-10 tracking-tight w-full flex-1 flex-col justify-center mt-36 mb-10 lg:mt-20 items-center px-4 lg:px-20">
        <div className="lg:max-w-xl">
          <div className="aspect-square w-16 mb-10 border border-black relative rounded-full overflow-hidden">
            <Image
              src="/ben.jpg"
              fill
              alt="Benaiah smiling"
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold">Benaiah Barango</h1>
          <p className="text-gray-600 font-light lg:text-lg mt-2 lg:mt-4">
            I am a UX Developer based in Ontario, Canada. I work on the Aviary
            design system at{" "}
            <Link
              href="https://fullscript.com/"
              target="_blank"
              className="border-b hover:border-transparent hover:text-fullscript transition duration-150 border-fullscript"
            >
              Fullscript
            </Link>{" "}
            and freelance as a Web designer for{" "}
            <Link
              href="https://soplugged.com/pro"
              target="_blank"
              className="border-b hover:border-transparent hover:text-soplugged transition duration-150 border-soplugged"
            >
              entrepreneurs and business-owners
            </Link>
            .
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
        </div>

        <div className="flex max-w-xl ml-auto w-full gap-6 lg:gap-0 flex-col">
          <a
            href="https://dribbble.com/benaiahbarango"
            target="_blank"
            rel="noreferrer"
            className="relative group"
          >
            {topShots.map((shot, index) => (
              <>
                <Image
                  key={shot.id}
                  alt={`Dribble shot - ${shot.title}`}
                  src={shot.image_large}
                  width={800}
                  height={600}
                  className={classNames(
                    "aspect-[4/3] hidden mx-auto lg:block group-hover:grayscale-[60%] transition duration-150 object-cover border border-black/50 rounded-2xl",
                    {
                      "-z-10 absolute inset-0 left-10 -bottom-10 rotate-6":
                        index === 1,
                    },
                    {
                      "-z-20 absolute inset-0 left-20 -bottom-20 rotate-12":
                        index === 2,
                    }
                  )}
                  priority={index === 0}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8u21yPQAHBQKXKv8OfQAAAABJRU5ErkJggg==`}
                />

                <Image
                  key={shot.id}
                  alt={`Dribble shot - ${shot.title}`}
                  src={shot.image_small}
                  width={400}
                  height={300}
                  className={classNames(
                    "aspect-[4/3] lg:hidden group-hover:grayscale-[60%] transition duration-150 object-cover border border-black/50 rounded-2xl",
                    {
                      "-z-10 absolute inset-0 left-10 -bottom-10 rotate-6":
                        index === 1,
                    },
                    {
                      "-z-20 absolute inset-0 left-20 -bottom-20 rotate-12":
                        index === 2,
                    }
                  )}
                  priority={index === 0}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8u21yPQAHBQKXKv8OfQAAAABJRU5ErkJggg==`}
                />
              </>
            ))}

            <div className="opacity-0 transition duration-150 group-hover:opacity-100 flex items-center justify-center absolute inset-0">
              <p className="border bg-white/90 border-dribbble flex items-center gap-2 text-dribbble rounded-lg p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-dribbble text-dribbble"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                </svg>
                View on Dribbble
              </p>
            </div>
          </a>
        </div>
      </main>

      <footer className="flex py-4 px-4 lg:px-20 w-full text-gray-600">
        <p>Copyright. {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  shots: DribbleShot[];
}> = async () => {
  const res = await fetch("https://api.dribbble.com/v2/user/shots", {
    headers: {
      Authorization: `Bearer ${process.env.DRIBBBLE_ACCESS_TOKEN}`,
    },
  });
  const shots = await res.json();
  return { props: { shots }, revalidate: 60 * 60 };
};

export default HomePage;
