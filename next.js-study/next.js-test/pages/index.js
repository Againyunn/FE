import Head from "next/head";
import Main from "@/components/Main";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Geeksloft.co" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
}
