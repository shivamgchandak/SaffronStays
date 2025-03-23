import Main from "@/components/Main";
import Header from "@/components/Header";
import Other from "@/components/Other";
import Head from "next/head";
import type { NextPage } from "next/types";
import Footer from "@/components/Footer";
import Price from "@/components/Price";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SaffronStays | XSERIES</title>
        <meta name="description" content="SaffronStays Frontend Task" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/saffronstays.png" />
      </Head>

      <main>
        {/* Header */}
        <header>
          <Header />
        </header>

        {/* Main */}
        <section>
          <Main />
        </section>

        {/* Additional */}
        <section>
          <Other />
        </section>

        {/* Footer */}
        <footer>
          <Footer/>
          <Price/>
        </footer>
      </main>
    </>
  );
};

export default Home;