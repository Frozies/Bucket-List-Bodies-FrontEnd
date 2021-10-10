import React from 'react';
import TopAppBar from "../../components/Admin/Util/TopAppBar";
import styles from "../../styles/Home.module.scss";
import AdminHome from "../../components/Admin/AdminHome";
import {Helmet} from "react-helmet-async";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
    },
    textField: {
        background: 'white',
        border: 0,
        borderRadius: 3,
        margin: '0 5px 5px 0',
    },
    cardStyle: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        background: 'white',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px #42a5f4',
        color: 'black',
        // padding: '30px 30px',
        width: 'auto',
        height: "auto"
    },
    infoCard: {
        background: '#42a5f4',
        border: 0,
        borderRadius: 3,
        // boxShadow: '0 3px 5px 2px #808080',
        color: 'white',
        height: 140,
        width: 140,
        margin: '1rem 2.5rem 5rem 2.5rem',
        padding: '1rem 1rem 1rem 1rem',
        display: 'flex',
        flexWrap: 'wrap',
    }
}));

function Index(props: any) {
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
    );
}

export default Index;