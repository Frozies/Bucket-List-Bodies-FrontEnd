import React, {Component, useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {Button, Grid, TextField} from "@material-ui/core";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

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

    // @ts-ignore
    return (

        <div>
            <div className={classes.cardStyle}>
                <h2>
                    Manual Order Entry
                </h2>
                <p>
                    Enter in the address and contact information for a new order.
                </p>
                <ValidatorForm
                    onSubmit={()=>{
                        props.setCustomerInfo(values)
                        props.onNext();
                    }}
                    onError={(errors: any) => console.log(errors)}
                    >
                    <h3>Personal</h3>
                        <TextValidator
                            value={values.name}
                            name={"name"}
                            // @ts-ignore
                            onChange={handleChanges}
                            id={"Name"}
                            label={"Name"}
                            variant={"outlined"}
                            placeholder={"John Wick"}
                            className={classes.textField}
                            validators={['required']}
                            errorMessages={['This field is required.']}
                        />
                        <TextValidator
                            value={values.email}
                            name={"email"}
                            // @ts-ignore
                            onChange={handleChanges}
                            id={"email"}
                            label={"Email"}
                            variant={"outlined"}
                            placeholder={"JohnWick@hotmail.com"}
                            className={classes.textField}
                            /*validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}*/
                        />

                        <TextValidator
                            value={values.phone}
                            name={"phone"}
                            // @ts-ignore
                            onChange={handleChanges}
                            placeholder={"239-123-4567"}
                            label="Phone Number"
                            id="phone"
                            variant={"outlined"}
                            className={classes.textField}
                            validators={['required']}
                            errorMessages={['This field is required.']}
                        />

                    <h3>Address</h3>
                        <TextValidator
                            value={values.address1}
                            name={"address1"}
                            // @ts-ignore
                            onChange={handleChanges}
                            id={"line1"}
                            label={"Address Line 1"}
                            variant={"outlined"}
                            fullWidth={true}
                            className={classes.textField}
                            validators={['required']}
                            errorMessages={['This field is required.']}
                        />

                        <TextValidator
                            value={values.address2}
                            name={"address2"}
                            // @ts-ignore
                            onChange={handleChanges}
                            id={"line2"}
                            label={"Address Line 2"}
                            fullWidth={true}
                            variant={"outlined"}
                            className={
                                classes.textField
                            }
                        />

                        <TextValidator
                            value={values.postal}
                            name={"postal"}
                            // @ts-ignore
                            onChange={handleChanges}
                            id={"zip"}
                            label={"Postal Code"}
                            variant={"outlined"}
                            placeholder={"33919"}
                            className={classes.textField}
                            validators={['required']}
                            errorMessages={['This field is required.']}
                        />

                        <TextValidator
                            value={values.city}
                            name={"city"}
                            // @ts-ignore
                            onChange={handleChanges}
                            id={"city"}
                            label={"City"}
                            variant={"outlined"}
                            placeholder={"New York"}
                            className={classes.textField}

                            validators={['required']}
                            errorMessages={['This field is required.']}
                        />
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
                        type={"submit"}
                    > Next </Button>

                </div>

                </ValidatorForm>
            </div>
        </div>
    );
}

export default AddressInput;