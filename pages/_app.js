import Head from "next/head";
import "../Design/Header.css";
import "../Design/Index.css";
import "../app.css";
import "../Design/Product.scss";
import "../Components/infoBox/InfoBox.scss";
import "../Design/Search.scss";
import "../Components/sidebar/Sidebar.scss";
import "../Design/register.css";
import "../Design/category.scss";



export default function Pharmacy({ Component, pageProps }) {
    return(
        <>
        <Head>
            <title>
                Pharmacy-Management
            </title>
        </Head>
         <Component {...pageProps} />
        </>
    )

}