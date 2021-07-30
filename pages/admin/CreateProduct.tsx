import React, {Component} from 'react';
import {Button, Paper} from "@material-ui/core";
import {Helmet} from "react-helmet-async";
import TopAppBar from "../../components/Admin/TopAppBar";
import styles from "../../styles/Home.module.css";

{/*
                    Photo Upload - File
                    Description - Text
                    Gluten Free - Check
                    Calories - Text
                    Carbs - Text
                    Meal title - Text
                    Sides - Text
                    Price - Text
                    Special Price - Check
                 */}

interface IProps {
    classes: any
}

class CreateProduct extends Component <IProps> {
    private classes: any;
    constructor(props: IProps) {
        super(props);
        this.classes = props.classes
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
                                        Upload
                                    </Button>
                                </label>
                            </div>
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