import {gql, useQuery} from "@apollo/client";
import {Box, Container, Grid, Paper, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {spacing} from "@material-ui/system";

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


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: 3,
        marginRight: 3,
    },
    cardStyle: {
        border: '0',
        marginBottom: '30px',
        marginTop: '30px',
        borderRadius: '6px',
        color: 'rgba(0, 0, 0, 0.87)',
        background: '#ec0000',
        width: '100%',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '0',
        wordWrap: 'break-word',
        fontSize: '.875rem',
    }
}));

//*This class will retrieve the current customer's contact information using their ID.
// */
function CustomerContactInfo(customerId: Number) {
    const classes = useStyles();
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
        <div>
            <Box className={classes.cardStyle}>
                <h3>Address</h3>
                <TextField
                    margin={"normal"}
                    id={"line1"}
                    label={"Address Line 1"}
                    variant={"outlined"}
                    fullWidth={true}
                    className={classes.textField}
                />

                <TextField
                    margin={"normal"}
                    id={"line2"}
                    label={"Address Line 2"}
                    variant={"outlined"}
                    fullWidth={true}
                    className={classes.textField}
                />

                <TextField
                    margin={"normal"}
                    id={"zip"}
                    label={"Postal Code"}
                    variant={"outlined"}
                    className={classes.textField}
                />

                <TextField
                    margin={"normal"}
                    id={"city"}
                    label={"City"}
                    variant={"outlined"}
                    className={classes.textField}
                />

                <h3>Personal</h3>

                <TextField
                    margin={"normal"}
                    id={"email"}
                    label={"Email"}
                    variant={"outlined"}
                    className={classes.textField}
                />


                <TextField
                    margin={"normal"}
                    id={"Name"}
                    label={"Name"}
                    variant={"outlined"}
                    className={classes.textField}
                />

                <TextField
                    margin={"normal"}
                    id={"phone"}
                    label={"Phone"}
                    variant={"outlined"}
                    className={classes.textField}
                />
            </Box>
        </div>
    )

    // return data.customer.map((data: any)=> (
    //     <div key={data.id}>
    //         <h3>{data.name}</h3>
    //         <p>{data.phone}</p>
    //         <p>{data.address.line1}</p>
    //         <p>{data.address.city}</p>
    //         <p>{data.address.postal}</p>
    //     </div>
    // ));
};

//todo: add sources for specific order information. maybe even add a facade after you get a few functions.
//Todo: pass data as is and let components handle the stylizing.
//todo: Meals, orders, users crud

// function RandomData() {
//     const {loading, error, data} = useQuery(randData);
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error :({console.log(error)}</p> ;
//     if (!data) return <p>No Data!</p>
//
//     return data.orders.map((data: any)=> (
//         <div key={data.id}>
//             <h3>{data.customer.name}</h3>
//             <p>{data.customer.phone}</p>
//             <p>{data.customer.address.line1}</p>
//             <p>{data.customer.address.city}</p>
//             <p>{data.customer.address.postal}</p>
//             <p>{data.meals.map((mealData: any) => (
//                 <h1 key={mealData.id}>{mealData.protein}</h1>
//             ))}</p>
//         </div>
//     ));
// };

module.exports = CustomerContactInfo;