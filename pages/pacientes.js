import Head from "next/head";
import Image from "next/image";

export default function Pacientes() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="assets/favicon.ico" />
      </Head>
      <main>
        <span className="bg-red-300">pacientes</span>
      </main>
    </div>
  );
}
