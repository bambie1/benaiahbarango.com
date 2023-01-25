import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import PlausibleProvider from "next-plausible";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="benaiahbarango.com">
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </PlausibleProvider>
  );
}

export default MyApp;
