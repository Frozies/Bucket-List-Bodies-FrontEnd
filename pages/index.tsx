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
            </Helmet>

            {/*<TopAppBar pageTitle={pageTitle} />*/}

            {/*Hero banner*/}
            <div className={styles.hero} style={{
                backgroundImage: 'url(/shutterstock/hero2.jpg)'
            }}>
                <div className={styles.heroOverlay}>
                    <h3>Bucket List Bodies</h3>
                    <h1>Fresh handmade meals delivered to your home</h1>
                    <button>Signup now</button>
                    {/*TODO:
                        Instagram: https://www.instagram.com/bucket_list_body/
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
