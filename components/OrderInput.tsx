import {Button, FormControl, FormLabel, Radio, TextField} from "@material-ui/core";
// @ts-ignore
import MaskedInput from "react-text-mask";
import React, {Component} from "react";
import {render} from "react-dom";
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

function OrderInput(props: any) {
    const classes = useStyles();

    //Phone Number Values
    const [values, setValues] = React.useState({textmask: "(239) 123-4567",});

    const handleChanges = (event: { target: { name: any; value: any; }; }) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (

        <div>
            <div className={classes.cardStyle}>
                <h2>
                    Manual Order Entry
                </h2>
                <p>
                    Enter in the food information for a new order.
                </p>
                <div>
                    <h3>Meals</h3>
                    <form>
                        <FormControl>
                            <FormLabel>Radio Group</FormLabel>
                            <Radio>Test</Radio>
                            <Radio>Test 2</Radio>

                        </FormControl>
                    </form>

                </div>
                <div>

                    <br/>{/*todo: remove this break and replace it with css padding/margins */}
                    <h3>Allergies & Comments</h3>
                    <form>
                        <TextField
                            id={"allergies"}
                            label={"Allergies"}
                            variant={"outlined"}
                            placeholder={"Gluten free"}
                            className={classes.textField}
                        />
                        <TextField
                            id={"comments"}
                            label={"Comments"}
                            variant={"outlined"}
                            placeholder={"Likes extra seasoning."}
                            className={classes.textField}
                        />
                    </form>

                    <br/>
                    <Button
                        fullWidth={true}
                        variant={"contained"}
                        color={'secondary'}
                    > Submit </Button>
                    {/*todo: forward and back buttons on either side of the  modal*/}
                </div>
            </div>
        </div>
    );
}

export default OrderInput;