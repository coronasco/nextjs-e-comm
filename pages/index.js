import Head from "next/head";
import Header from "./../components/header";
import Hero from "./../components/hero";
import Categories from "../components/categories";
import Featured from "../components/featured";
import DealOfTheDay from "../components/dayDeal";
import Info from "../components/info";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
        <Categories />
        <Featured />
        <DealOfTheDay />
        <Info />
      </main>
    </div>
  );
}
