import TopAppBar from "../components/Admin/Util/TopAppBar";
import React from "react";
import {Helmet} from "react-helmet-async";
import styles from '../styles/Home.module.css'
import Image from 'next/image'

/*todo:
            -   Header -- finish buttons and stuff
            -   Mobile Styling -- css hell
            -   Multi page routing -- express?
            -   Footer -- app bar?
            */

const outcomes = [
    "How to build this landing page with Next.js",
    "How to create API endpoint and integrate with ConvertKit API",
    "How to use React Hook Form and TailwindCSS",
];

const ComingSoonBadge = () => (
    <span className="bg-blue-500 text-white text-xs py-1 px-2 rounded-md mb-4 inline-block">
    Coming Soon!
  </span>
);

export default function Home() {
    const pageTitle = "Bucket List Bodies"
    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content="Bucket list bodies is a good place to get food from!" />
                <link rel="icon" href="/favicon.ico" />
            </Helmet>

            {/*<TopAppBar pageTitle={pageTitle} />*/}

            {/*Hero banner*/}
            <div className={styles.hero} style={{
                backgroundImage: 'url(/shutterstock/hero.jpg)'
            }}>
                <div className={styles.heroOverlay}>
                    <h1 >Bucket list bodies is coming soon!</h1>
                </div>
            </div>

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
