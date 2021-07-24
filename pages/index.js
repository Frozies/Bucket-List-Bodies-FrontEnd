import TopAppBar from "../components/TopAppBar";
import OrderEntry from "../components/OrderEntry";
import React, {useState} from "react";
import AdminHome from "../components/AdminHome";
import {Helmet} from "react-helmet-async";


/*todo:
            -   Header -- finish buttons and stuff
            -   Mobile Styling -- css hell
            -   Multi page routing -- express?
            -   Footer -- app bar?
            -   What are the other pages.
            */

export default function Home() {
    const pageTitle = "Bucket List Bodies"
  return (
    <div>
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content="Bucket list bodies is a good place to get food from!" />
            <link rel="icon" href="/favicon.ico" />
        </Helmet>

        <TopAppBar pageTitle={pageTitle} />

        <AdminHome/>

        {/*<footer className={styles.footer}>
            // Hello World!
        </footer>*/}
    </div>
  )
}
