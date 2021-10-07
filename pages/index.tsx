import TopAppBar from "../components/Admin/Util/TopAppBar";
import React from "react";
import {Helmet} from "react-helmet-async";
import styles from '../styles/Home.module.css'

export default function Home() {
    const pageTitle = "Bucket List Bodies"
    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content="Bucket list bodies is a good place to get food from!" />
                <link rel="icon" href="/favicon.ico" />
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap');
                </style>
            </Helmet>

            {/*<TopAppBar pageTitle={pageTitle} />*/}

            {/*Hero banner*/}
            <div className={styles.hero} style={{
                backgroundImage: 'url(/shutterstock/hero.jpg)'
            }}>
                <div className={styles.heroOverlay}>
                    <h1>Bucket list bodies is coming soon!</h1>
                    {/*TODO:
                        Instagram: https://www.instagram.com/bucket_list_body/
                        Email:
                        Phone:
                        Current Menu:
                        Instagram Gallery:

                    */}

                </div>
            </div>

            {/*<main className={styles.container}>
                <div className={styles.main}>
                </div>
            </main>*/}

            {/*<footer className={styles.footer}>
                // Hello World!
            </footer>*/}
        </div>
    )
}
