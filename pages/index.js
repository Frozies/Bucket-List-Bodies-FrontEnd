import TopAppBar from "../components/Admin/TopAppBar";
import React from "react";
import {Helmet} from "react-helmet-async";
import styles from '../styles/Home.module.css'

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

            <main className={styles.container}>
                <div className={styles.main}>
                </div>
            </main>

            {/*<footer className={styles.footer}>
                // Hello World!
            </footer>*/}
        </div>
    )
}
