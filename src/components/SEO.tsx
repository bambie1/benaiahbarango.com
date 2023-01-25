import Head from "next/head";

const DESCRIPTION =
  "Javascript Engineer at Fullscript. Looking for a website? Reach out on soplugged.com/pro";
const TITLE = "Benaiah Barango | Portfolio";

const SEO = () => {
  return (
    <Head>
      <meta name="description" content={DESCRIPTION} />
      <meta name="title" content={TITLE} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:site_name" content={TITLE} />
      <meta property="og:type" content="website" />
      <title>{TITLE}</title>
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default SEO;
