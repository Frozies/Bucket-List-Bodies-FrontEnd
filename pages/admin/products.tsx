import React from 'react';
import {gql, useQuery} from "@apollo/client";
import {Button, Container, Grid, Paper} from '@material-ui/core';
import {Helmet} from "react-helmet-async";
import TopAppBar from "../../components/Admin/TopAppBar";
import styles from "../../styles/Home.module.css";
import AdminHome from "../../components/Admin/AdminHome";
import Image from 'next/image'

const RETRIEVE_ALL_MEALS = gql`
    query Query {
        retrieveAllMeals {
            title
            description
            photoURL
            price
            sides
            carbs
            calories
            allergies
        }
    }
`

function Products() {
    const {loading, error, data} = useQuery(RETRIEVE_ALL_MEALS);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const pageTitle = "Products"

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

                    <div>
                        <Grid container spacing={10} style={{flexGrow: 1}}>
                            {data.retrieveAllMeals.map((meal: any) => (
                                <Paper key={meal.key}
                                    style={{
                                    width: "250px",
                                    height: "350px",
                                    margin: "10px"
                                }}>
                                    <Container>
                                        <p>{meal.title}</p>
                                        <Image width={"100px"} height={"100px"} src={meal.photoURL}/>
                                        <p>{meal.sides}</p>
                                        <p>{meal.description}</p>
                                        <p>${meal.price}</p>
                                        <Button>Edit</Button>
                                    </Container>
                                </Paper>
                            ))}
                        </Grid>
                    </div>

                </div>
            </main>

            {/*<footer className={styles.footer}>
            // Hello World!
        </footer>*/}
        </div>
    )
}

export default Products;