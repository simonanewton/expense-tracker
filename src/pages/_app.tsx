import type { AppProps } from "next/app";
import { Red_Hat_Display } from "next/font/google";
import "@/styles/globals.scss";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={redHatDisplay.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default App;