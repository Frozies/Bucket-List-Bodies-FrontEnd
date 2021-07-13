import {gql, useQuery} from "@apollo/client";

const randData = gql`
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
//TODO: Fill in this query :D
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

`

//*This class will retrieve the current customer's contact information using their ID.
// */
function CustomerContactInfo(customerId: Number) {
    const {loading, error, data} = useQuery(customerContactQuery, {
        variables: {
            customerId
        }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :({console.log(error)}</p> ;
    if (!data) return <p>No Data!</p>
    if(data) console.log(data)

    //TODO: Fill in some temporary loading boxes
    return (
        <div>
            Hello
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
