import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Merchants </title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"
        style={{
          backgroundImage: "url('/images/merchants-bg.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="flex h-full w-full  grow  flex-col items-center justify-center bg-black/30 p-6 backdrop-blur-[1px]">
          <div className="flex flex-col items-center justify-center">
            <div className="text-shadow-3 font-[sign45] text-7xl font-bold tracking-tighter text-white">
              MERCHANTS
            </div>
            <div className="mt-[-7px] text-sm font-semibold text-white">
              Board Game by Yuri Garcia
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-6 font-[sign45] text-4xl  text-gray-900">
            <Link
              className="w-full rounded-md border-[5px] border-white bg-white/70 px-6 py-3"
              href={"/blueprints"}
            >
              Receitas
            </Link>
            <Link
              className="w-full rounded-md border-[5px] border-white bg-white/70 px-6 py-3"
              href={"/events"}
            >
              Eventos
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
