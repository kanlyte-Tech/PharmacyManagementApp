import Head from "next/head";
import "../Design/Header.css";
import "../Design/Index.css";
import "../app.css";
import "../Design/Search.scss";
import "../Design/newbss.css";
import "../Design/register.css";
import "../Design/category.scss";
import "../Design/pharmacy.scss";

export default function Pharmacy({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pharmacy-Management</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
