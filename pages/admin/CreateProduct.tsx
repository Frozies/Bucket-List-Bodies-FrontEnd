import React, {Component, useEffect, useState} from 'react';
import {
    Button,
    Container,
    FormControl,
    FormLabel, Grid, Input,
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
import {UploadFile} from "../../components/Admin/UploadFile";

interface IMealInput {
    title: String,
    sides: String,
    description: String,
    photoURL: String
    amount: String,
    carbs: String,
    calories: String,
    allergies: AllergyEnum
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

const SINGLE_UPLOAD = gql`
    mutation($file: Upload!) {
        singleUpload(file: $file) {
            filename
            mimetype
            encoding
            url
        }
    }
`;

function CreateProduct() {
    const { register, handleSubmit } = useForm<IMealInput>();
    const [createMeal, { data: mealData, loading: mealLoading, error: mealError }] = useMutation<IMealInput>(CREATE_MEAL);

    const [mutateUpload, { loading: uploadLoading, error: uploadError, data: uploadData }] = useMutation(SINGLE_UPLOAD);
    const [file, setFile] = useState();

    if (mealLoading) console.log("Loading");
    if (mealError) console.log(`Submission error! ${mealError.message}`);


    const onChange = ({
                          target: {
                              validity,
                              files: [file]
                          }
                      }: any) => {    // @ts-ignore
        validity.valid && mutateUpload({ variables: { file } })
    };


    const onSubmit: SubmitHandler<IMealInput> = (formData:IMealInput) => {

        try{
            console.log("Creating Meal")
            createMeal({
                variables: {
                    createMealMeal: {
                        title: formData.title,
                        sides: formData.sides,
                        description: formData.description,
                        photoURL: uploadData.singleUpload.url,
                        price: formData.amount,
                        carbs: formData.carbs,
                        calories: formData.calories,
                        allergies: formData.allergies
                    }
                }
            });
        } catch (e) {
            return e;
        }
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
                            <Grid>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label>Meal Photo</label>
                                    <Input {...register("photoURL")} type="file" name="picture" onChange={onChange}/>
                                    <br/>

                                    <label>Title</label>
                                    <Input {...register("title")} defaultValue={"Blackend Chicken"}/>
                                    <br/>

                                    <label>Sides</label>
                                    <Input {...register("sides")} defaultValue={"Green Beans"}/>
                                    <br/>

                                    <label>Description</label>
                                    <Input {...register("description")} />
                                    <br/>

                                    <label>Amount</label>
                                    <Input {...register("amount")}  />
                                    <br/>

                                    <label>Carbs</label>
                                    <Input {...register("carbs")} />
                                    <br/>

                                    <label>Calories</label>
                                    <Input {...register("calories")} />
                                    <br/>

                                    <label>Allergies Selection</label>
                                    <select {...register("allergies")} >
                                        <option value="fish">fish</option>
                                        <option value="nuts">nuts</option>
                                        <option value="other">other</option>
                                    </select>
                                    <br/>

                                    <Input type="submit" />
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