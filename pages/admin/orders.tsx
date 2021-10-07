import React from 'react';
import {gql, useMutation, useQuery} from "@apollo/client";
import {Button, Container, Grid, Paper} from '@material-ui/core';
import {Helmet} from "react-helmet-async";
import TopAppBar from "../../components/Admin/Util/TopAppBar";
import styles from "../../styles/Home.module.css";
import AdminHome from "../../components/Admin/AdminHome";
import Image from 'next/image'
import Router from 'next/router'
import XGridOrders from "../../components/Admin/Util/XGridOrders";

function Products() {
    const pageTitle = "Orders"

    return(
        <div>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content="Bucket list bodies is a good place to get food from!" />
                <link rel="icon" href="/favicon.ico" />
            </Helmet>

            <TopAppBar pageTitle={pageTitle} />

            <main className={styles.container}>
                <div className={styles.main}>

                    <XGridOrders/>

                </div>
            </main>

            {/*<footer className={styles.footer}>
            // Hello World!
        </footer>*/}
        </div>
    )
}

export default Products;