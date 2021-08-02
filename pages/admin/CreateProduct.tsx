import React, {Component, useState} from 'react';
import {
    Button,
    Container,
    FormControl,
    FormLabel, Grid,
    InputAdornment,
    OutlinedInput,
    Paper,
} from "@material-ui/core";
import {Helmet} from "react-helmet-async";
import TopAppBar from "../../components/Admin/TopAppBar";
import styles from "../../styles/Home.module.css";
import AllergiesSelector from "../../components/Admin/AllergiesSelector";
import {gql, useMutation} from '@apollo/client';
import {SubmitHandler, useForm} from "react-hook-form";

interface IMealInput {
    title: String,
    sides: String,
    description: String,
    amount: String,
    carbs: String,
    calories: String,
    // allergies: AllergyEnum
}

enum AllergyEnum {
    fish = "fish",
    nuts = "nuts",
    other = "other"
}

const CREATE_MEAL = gql`
    #Creates a new product and price in stripe and send the information to mongodb database.
    mutation Mutation($createMealMeal: MealInput) {
        createMeal(meal: $createMealMeal)
    }
`;
/*
function CreateMeal(meal: IMeal) {


    return (
        <div>
            {/!*<form
                onSubmit={e => {
                    e.preventDefault();
                    addTodo({ variables: { text: input.value } });
                    input.value = '';
                }}
            >*!/}


            <FormControl
            onSubmit={ e => {
                e.preventDefault();
                /!*createMeal({
                    variables: {
                        title: meal.title,
                     }
                });*!/
                console.log(meal.title)
            }}
            >
                <Button type="submit">
                    Submit
                </Button>
            </FormControl>
        </div>
    );
}*/


function CreateProduct() {
    const { register, handleSubmit } = useForm<IMealInput>();

    const [createMeal, { data, loading, error }] = useMutation<IMealInput>(CREATE_MEAL);

    if (loading) console.log("Loading");
    if (error) console.log(`Submission error! ${error.message}`);

    const onSubmit: SubmitHandler<IMealInput> = (formData:IMealInput) => {
        console.log(formData)

        createMeal({
            variables: {
                createMealMeal: {
                    title: formData.title,
                    sides: formData.sides,
                    description: formData.description,
                    price: formData.amount,
                    carbs: formData.carbs,
                    calories: formData.calories,
                }
            }
        });
    }

    const pageTitle = "Create new meal"

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
                    <Paper elevation={1}>
                        <Container>
                            <div>
                                <input
                                    accept="image/*"
                                    // className={classes.input}
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="raised-button-file">
                                    <Button component="span"> {/* className={classes.button} variant="raised"*/}
                                        Upload Meal Photo
                                    </Button>
                                </label>
                            </div>

                            <Grid>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label>Meal Photo</label>
                                    <input {...register} type="file" name="picture" />
                                    <br/>

                                    <label>Title</label>
                                    <input {...register("title")} defaultValue={"Blackend Chicken"}/>
                                    <br/>

                                    <label>Sides</label>
                                    <input {...register("sides")} defaultValue={"Green Beans"}/>
                                    <br/>

                                    <label>Description</label>
                                    <input {...register("description")} />
                                    <br/>

                                    <label>Amount</label>
                                    <input {...register("amount")} />
                                    <br/>

                                    <label>Carbs</label>
                                    <input {...register("carbs")} />
                                    <br/>

                                    <label>Calories</label>
                                    <input {...register("calories")} />
                                    <br/>



                                    {/*<label>Allergies Selection</label>
                                    <select {...register("allergies")} >
                                        <option value="fish">fish</option>
                                        <option value="nuts">nuts</option>
                                        <option value="other">other</option>
                                    </select>
                                    <br/>*/}

                                    <input type="submit" />
                                </form>
                            </Grid>
                        </Container>
                    </Paper>
                </div>
            </main>

            {/*<footer className={styles.footer}>
            // Hello World!
        </footer>*/}
        </div>
    )
}

export default CreateProduct;