// @ts-ignore
import MaskedInput from "react-text-mask";
import React, {Component, useState} from "react";
import {render} from "react-dom";
import {makeStyles} from "@material-ui/styles";
import {Button, Grid, TextField} from "@material-ui/core";

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

interface ICustomer {
    name: string
    email: string
    phone: string
    address1: string
    address2: string
    postal: string
    city: string
}


function AddressInput(props: any) {
    const retrievedInfo = props.retrievedInfo

    const classes = useStyles();
    let [values, setValues] = useState<ICustomer>({
        ...retrievedInfo
    })

    const handleChanges = (event: { target: { name: any; value: any; }; }) => {
        // @ts-ignore
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
                    <h3>Personal</h3>
                    <form>

                        <TextField
                            value={values.name}
                            name={"name"}
                            onChange={handleChanges}
                            id={"Name"}
                            label={"Name"}
                            variant={"outlined"}
                            placeholder={"John Wick"}
                            className={classes.textField}
                        />
                        <TextField
                            value={values.email}
                            name={"email"}
                            onChange={handleChanges}
                            id={"email"}
                            label={"Email"}
                            variant={"outlined"}
                            placeholder={"JohnWick@hotmail.com"}
                            className={classes.textField}
                        />

                        <TextField
                            value={values.phone}
                            name={"phone"}
                            onChange={handleChanges}
                            placeholder={"239-123-4567"}
                            label="Phone Number"
                            id="phone"
                            variant={"outlined"}
                            className={classes.textField}
                        />
                    </form>

                </div>

                <div>
                    <h3>Address</h3>
                    <form>
                        <TextField
                            value={values.address1}
                            name={"address1"}
                            onChange={handleChanges}
                            id={"line1"}
                            label={"Address Line 1"}
                            variant={"outlined"}
                            fullWidth={true}
                            className={classes.textField}
                        />

                        <TextField
                            value={values.address2}
                            name={"address2"}
                            onChange={handleChanges}
                            id={"line2"}
                            label={"Address Line 2"}
                            fullWidth={true}
                            variant={"outlined"}
                            className={
                                classes.textField
                            }
                        />

                        <TextField
                            value={values.postal}
                            name={"postal"}
                            onChange={handleChanges}
                            id={"zip"}
                            label={"Postal Code"}
                            variant={"outlined"}
                            placeholder={"33919"}
                            className={classes.textField}
                        />

                        <TextField
                            value={values.city}
                            name={"city"}
                            onChange={handleChanges}
                            id={"city"}
                            label={"City"}
                            variant={"outlined"}
                            placeholder={"New York"}
                            className={classes.textField}
                        />
                    </form>

                </div>

                <br/>

                <div
                    style={{
                        display: "flex"
                    }}
                >
                    <Button
                        disabled
                        style={{
                            margin: "auto",
                            width: "25%"
                        }}
                        variant={"contained"}
                        color={'default'}
                    >Previous </Button>
                    <Button
                        style={{
                            margin: "auto",
                            width: "25%"
                        }}
                        variant={"contained"}
                        color={'secondary'}
                        onClick={() => {
                            /*Using an interface, update the information state on the page*/
                            props.setCustomerInfo(values)
                            props.onNext();
                        }}
                    > Next </Button>
                </div>
            </div>
        </div>
    );
}

export default AddressInput;