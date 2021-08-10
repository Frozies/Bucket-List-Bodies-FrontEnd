import React, {useState} from 'react';
import {
    Button,
    Container,
    Grid, Input, InputLabel, MenuItem,
    Paper, Select, TextField,
} from "@material-ui/core";
import {Helmet} from "react-helmet-async";
import TopAppBar from "../../components/Admin/Util/TopAppBar";
import styles from "../../styles/Home.module.css";
import {gql, useMutation} from '@apollo/client';
import {SubmitHandler, useForm} from "react-hook-form";
import {makeStyles} from "@material-ui/styles";

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

interface IMealInput {
    title: String,
    sides: String,
    description: String,
    photoURL: String,
    price: String,
    carbs: String,
    calories: String,
    allergies: AllergyEnum,
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
    mutation SingleFileUploadMutation($singleFileUploadFile: Upload!) {
        singleFileUpload(file: $singleFileUploadFile)
    }
`;

function createProduct() {
    const classes = useStyles();
    const { register, handleSubmit } = useForm<IMealInput>();
    const [createMeal, { data: mealData, loading: mealLoading, error: mealError }] = useMutation<IMealInput>(CREATE_MEAL);

    const [mutateUpload, { loading: uploadLoading, error: uploadError, data: uploadData }] = useMutation(SINGLE_UPLOAD);

    const [file, setFile] = useState();
    const [success, setSuccess] = useState(false);

    if (mealLoading) console.log("Loading");
    if (mealError) console.log(`Submission error! ${mealError.message}`);

    if (uploadLoading) console.log("Uploading file...")
    if (uploadError) console.log(`Submission error! ${uploadError.message}`);

    /*
                  */

    const onChange = ({
                          target: {
                              validity,
                              files: [file]
                          }
                      }: any) => {

        validity.valid;
        setFile(file);
    };


    const onSubmit: SubmitHandler<IMealInput> = async (formData: IMealInput) => {
        try {
            await mutateUpload({
                variables: {
                    singleFileUploadFile: file
                }
            }).then(async (results)=>{
                if (results.data.singleFileUpload) {
                    await createMeal({
                        variables: {
                            createMealMeal: {
                                title: formData.title,
                                sides: formData.sides,
                                description: formData.description,
                                photoURL: results.data.singleFileUpload,
                                price: formData.price,
                                carbs: formData.carbs,
                                calories: formData.calories,
                                allergies: formData.allergies
                            }
                        }
                    }).then((results)=> {
                        setSuccess(true)
                    })
                }
                else {
                    throw (new Error("Failed to upload image!"))
                }
            })
        } catch (e) {
            return e;
        }
    }

    const pageTitle = "Create new meal"

    //todo: Move this to its own component
    const mealWizard = () => {
        if (!success) {
            return(
                <form onSubmit={handleSubmit(onSubmit)}>
                    <br/>
                    <InputLabel id={"photo"}>Meal Photo</InputLabel>
                    <TextField
                        className={classes.textField}
                        variant={"outlined"}
                        id={"photo"}
                        {...register("photoURL")}
                        type="file"
                        name="picture"
                        onChange={onChange}/>
                    <br/>

                    <TextField
                        {...register("title")}
                        label={"Title"}
                        className={classes.textField}
                        variant={"outlined"}
                    />
                    <br/>

                    <TextField
                        {...register("sides")}
                        label={"Sides"}
                        className={classes.textField}
                        variant={"outlined"}
                    />
                    <br/>

                    <TextField
                        {...register("description")}
                        label={"Description"}
                        className={classes.textField}
                        variant={"outlined"}
                    />
                    <br/>

                    <TextField
                        {...register("price")}
                        label={"Price"}
                        className={classes.textField}
                        variant={"outlined"}
                    />
                    <br/>

                    <TextField
                        {...register("carbs")}
                        label={"Carbs"}
                        className={classes.textField}
                        variant={"outlined"}
                    />
                    <br/>

                    <TextField
                        {...register("calories")}
                        label={"Calories"}
                        className={classes.textField}
                        variant={"outlined"}
                    />
                    <br/>
                    <br/>

                    <InputLabel id={"allergies"}>Allergies</InputLabel>
                    <Select
                        labelId={"allergies"}
                        fullWidth={true}
                        variant={"outlined"}
                    >
                        <MenuItem value="fish">fish</MenuItem>
                        <MenuItem value="nuts">nuts</MenuItem>
                        <MenuItem value="other">other</MenuItem>
                    </Select>
                    <br/>
                    <br/>

                    <Input type="submit" />
                </form>
            )
        }
        else {
            return (
                <div>
                    <h1> Success!</h1>
                    <Button
                        style={{
                        margin: "auto",
                        width: "25%"
                    }}
                                 variant={"contained"}
                                 color={'default'}>
                        <a href={"/admin/createProduct"}>Create another product</a>
                    </Button>
                    <Button
                        href={"/admin"}
                        style={{
                            margin: "auto",
                            width: "25%"
                        }}
                        variant={"contained"}
                        color={'default'}
                    >Return</Button>
                </div>
            )
        }
    }


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
                                {mealWizard()}
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

export default createProduct;