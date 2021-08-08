import React from 'react';
import {gql, useMutation, useQuery} from "@apollo/client";
import {Button, Container, Grid, Paper} from '@material-ui/core';
import {Helmet} from "react-helmet-async";
import TopAppBar from "../../components/Admin/TopAppBar";
import styles from "../../styles/Home.module.css";
import AdminHome from "../../components/Admin/AdminHome";
import Image from 'next/image'
import Router from 'next/router'

const RETRIEVE_ALL_MEALS = gql`
    query Query {
        retrieveAllMeals {
            _id
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

const DELETE_MEAL = gql`
    mutation DeleteMealMutation($deleteMealMeal: MealInput) {
        deleteMeal(meal: $deleteMealMeal)
    }
`

function Products() {
    const {loading: loadMeals, error: mealError, data: mealData} = useQuery(RETRIEVE_ALL_MEALS);
    const [mutateDeleteMeal, {loading: loadingDeleteMeal, error: deleteError, data: deleteData}] = useMutation(DELETE_MEAL);

    if (loadMeals) return 'Loading...';
    if (mealError) return `Error! ${mealError.message}`;
    const pageTitle = "Products"

    function deleteMeal(mealID: String) {
        mutateDeleteMeal({
            variables: {
                deleteMealMeal: {
                    _id: mealID
                }
            }
        })

        //Refresh the page
        // @ts-ignore
        Router.reload(window.location.pathname)
    }

    if (loadingDeleteMeal) return 'Loading Delete';
    if (deleteError) return `Error Delete! ${deleteError.message}`;

    // @ts-ignore
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
                            {mealData.retrieveAllMeals.map((meal: any) => (
                                <Paper
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
                                        <Button onClick={() => {
                                            console.log("ID: " + meal._id)
                                            deleteMeal(meal._id)
                                        }}>Delete</Button>
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