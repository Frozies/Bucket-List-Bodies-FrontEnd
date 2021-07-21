import {gql, useQuery} from "@apollo/client";
import {Box, Container, Grid, Input, InputAdornment, Paper, TextField} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import {makeStyles} from "@material-ui/styles";
import {spacing} from "@material-ui/system";
// @ts-ignore
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";
import React from "react";
import InputLabel from "@material-ui/core/InputLabel";


//Commented out temporarily input new commands here.
/*const randData = gql`
    query Query {
        orders {
            id
            customer {
                name
                address {
                    city
                    line1
                    line2
                    postal
                    state
                }
            }
            meals {
                protein
                status
            }
            status
        }
    }
`
// Fill in this query :D
const customerContactQuery = gql`
    query Query($customerId: ID) {
        customer(id: $customerId) {
            name
            phone
            address {
                state
                postal
                line2
                line1
                city
            }
        }
    }

`*/

function TextMaskCustom(props: { [x: string]: any; inputRef: any; }) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref: { inputElement: any; }) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[
                "(",
                /[1-9]/,
                /\d/,
                /\d/,
                ")",
                " ",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/
            ]}
            placeholderChar={"\u2000"}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired
};


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
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: '100%',
        width: '100%',
        padding: '30px 30px',
    }
}));

//*This class will retrieve the current customer's contact information using their ID.
// */
function CustomerContactInfo(customerId: Number) {
    const classes = useStyles();

    //Phone Number Values
    const [values, setValues] = React.useState({
        textmask: "(239) 123-4567",
    });

    const handleChange = (event: { target: { name: any; value: any; }; }) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    //write a new function here
    /*const {loading, error, data} = useQuery(customerContactQuery, {
        variables: {
            customerId
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :({console.log(error)}</p> ;
    if (!data) return <p>No Data!</p>
    if(data) console.log(data)*/

    return (
        <div className={classes.cardStyle}>
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
                        className={classes.textField}
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
                        onChange={handleChange}
                        label="Phone Number"
                        id="phone"
                        variant={"outlined"}
                        className={classes.textField}
                    />


                </form>
            </div>
        </div>
    )

};

//todo: add sources for specific order information. maybe even add a facade after you get a few functions.
//Todo: pass data as is and let components handle the stylizing.
//todo: Meals, orders, users crud

module.exports = CustomerContactInfo;