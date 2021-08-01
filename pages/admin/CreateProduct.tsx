import React, {Component} from 'react';
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
import { gql, useMutation } from '@apollo/client';

interface IProps {
    classes: any
}

interface IMeal {
    title: String,
}

const CREATE_MEAL = gql`
    #Creates a new product and price in stripe and send the information to mongodb database.
    mutation Mutation($createMealMeal: MealInput) {
        createMeal(meal: $createMealMeal)
    }
`;

function CreateMeal(meal: IMeal) {
    const [createMeal, { data, loading, error }] = useMutation(CREATE_MEAL);

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    return (
        <div>
            {/*<form
                onSubmit={e => {
                    e.preventDefault();
                    addTodo({ variables: { text: input.value } });
                    input.value = '';
                }}
            >*/}


            <FormControl
            onSubmit={ e => {
                e.preventDefault();
                /*createMeal({
                    variables: {
                        title: meal.title,
                     }
                });*/
                console.log(meal.title)
            }}
            >
                <Button type="submit">
                    Submit
                </Button>
            </FormControl>
        </div>
    );
}

class CreateProduct extends Component <IProps, IMeal> {
    private classes: any;

    constructor(props: IProps) {
        super(props);
        this.classes = props.classes
        this.state = {
            title: "Hello World!"
        }
    }

    private pageTitle = "Create New Product"

    render() {
        return (
            <div>
                <Helmet>
                    <title>{this.pageTitle}</title>
                    <meta name="description" content="Bucket list bodies is a good place to get food from!" />
                    <link rel="icon" href="/favicon.ico" />
                </Helmet>

                <TopAppBar pageTitle={this.pageTitle} />

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
                                    <FormControl>
                                        <FormLabel> Title </FormLabel>
                                        <OutlinedInput
                                            id={"title"}
                                            name={'Title'}
                                            placeholder={'Blackened Chicken'}
                                            fullWidth={true}
                                        />
                                    </FormControl>

                                    <br/>

                                    <FormControl>
                                        <FormLabel>Sides</FormLabel>
                                        <OutlinedInput
                                            id={"sides"}
                                            name={'sides'}
                                            placeholder={'with green beans'}
                                            fullWidth={true}
                                        />
                                    </FormControl>

                                    <br/>

                                    <FormControl>
                                        <FormLabel>Description</FormLabel>
                                        <OutlinedInput
                                            id={"sides"}
                                            name={'sides'}
                                            placeholder={'A Gourmet chicken that is healthy and yummy!'}
                                            fullWidth={true}
                                        />
                                    </FormControl>

                                    <br/>

                                </Grid>

                                <FormControl>
                                    <FormLabel>Amount</FormLabel>
                                    <OutlinedInput
                                        id={'amount'}
                                        name={'amount'}
                                        placeholder={'9.99'}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    />
                                </FormControl>

                                <br/>

                                <FormControl>
                                    <FormLabel>Carbs</FormLabel>
                                    <OutlinedInput
                                        id={'carbs'}
                                        name={'carbs'}
                                        placeholder={'500'}
                                        startAdornment={<InputAdornment position="start">carbs</InputAdornment>}
                                    />
                                </FormControl>

                                <br/>

                                <FormControl>
                                    <FormLabel>Calories</FormLabel>
                                    <OutlinedInput
                                        id={'cals'}
                                        name={'cals'}
                                        placeholder={'500'}
                                        startAdornment={<InputAdornment position="start">cals</InputAdornment>}
                                    />
                                </FormControl>

                                <br/>

                                <AllergiesSelector/>

                                <br/>

                                {CreateMeal({
                                    title: this.state.title
                                })}
                            </Container>
                        </Paper>
                    </div>
                </main>

                {/*<footer className={styles.footer}>
            // Hello World!
        </footer>*/}
            </div>
        );
    }
}

export default CreateProduct;