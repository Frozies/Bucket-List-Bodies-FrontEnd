import {Button, TextField} from "@material-ui/core";
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

function AddressInput(props: any) {
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
                    Enter in the address and contact information for a new order.
                </p>
                <div>
                    <h3>Address</h3>
                    <form>
                        <TextField
                            id={"line1"}
                            label={"Address Line 1"}
                            variant={"outlined"}
                            fullWidth={true}
                            className={classes.textField}
                        />

                        <TextField
                            id={"line2"}
                            label={"Address Line 2"}
                            fullWidth={true}
                            variant={"outlined"}
                            className={
                                classes.textField
                            }
                        />

                        <TextField
                            id={"zip"}
                            label={"Postal Code"}
                            variant={"outlined"}
                            placeholder={"33919"}
                            className={classes.textField}
                        />

                        <TextField
                            id={"city"}
                            label={"City"}
                            variant={"outlined"}
                            placeholder={"New York"}
                            className={classes.textField}
                        />
                    </form>

                </div>
                <div>

                    <br/>{/*todo: remove this break and replace it with css padding/margins */}
                    <h3>Personal</h3>
                    <form>
                        <TextField
                            id={"email"}
                            label={"Email"}
                            variant={"outlined"}
                            placeholder={"JohnWick@hotmail.com"}
                            className={classes.textField}
                        />


                        <TextField
                            id={"Name"}
                            label={"Name"}
                            variant={"outlined"}
                            placeholder={"John Wick"}
                            className={classes.textField}
                        />

                        <TextField
                            placeholder={values.textmask}
                            onChange={handleChanges}
                            label="Phone Number"
                            id="phone"
                            variant={"outlined"}
                            className={classes.textField}
                        />
                    </form>

                    <br/>
                    <Button
                        fullWidth={true}
                        variant={"contained"}
                        color={'secondary'}
                        onClick={() => {
                            console.log("Address Clicked")
                            props.onSubmit()
                        }}
                    > Submit </Button>
                    {/*todo: forward and back buttons on either side of the  modal*/}
                </div>
            </div>
        </div>
    );
}

export default AddressInput;