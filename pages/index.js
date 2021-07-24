import TopAppBar from "../components/TopAppBar";
import OrderEntry from "../components/OrderEntry";
import React, {useState} from "react";
import AdminHome from "../components/AdminHome";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {makeStyles} from "@material-ui/styles";
import styles from '../styles/Home.module.css'



/*todo:
            -   Header -- finish buttons and stuff
            -   Mobile Styling -- css hell
            -   Multi page routing -- express?
            -   Footer -- app bar?
            -   What are the other pages.
            */

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        background: 'white',
        border: 0,
        borderRadius: 3,
        margin: '0 5px 5px 0',
    },
    cardStyle: {
        background: 'white',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px #42a5f4',
        color: 'black',
        height: '100%',
        width: '100%',
        padding: '30px 30px',
    }
}));


export default function Home() {
    const pageTitle = "Bucket List Bodies"
    const classes = useStyles();

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
                <AdminHome classes={classes}/>
            </div>
        </main>

        {/*<footer className={styles.footer}>
            // Hello World!
        </footer>*/}
    </div>
  )
}
