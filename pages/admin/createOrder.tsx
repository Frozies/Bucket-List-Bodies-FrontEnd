import AddressInput from "../../components/Admin/Orders/AddressInput";
import {Helmet} from "react-helmet-async";
import TopAppBar from "../../components/Admin/Util/TopAppBar";
import styles from "../../styles/Home.module.css";
import React, {useState} from "react";
import {Button} from "@material-ui/core";
import MealPlanSelection from "../../components/Admin/Orders/MealPlanSelection";
import ProductSelection from "../../components/Admin/Orders/ProductSelection";
import {gql, useMutation, useQuery} from "@apollo/client";

enum wizardStates {
    customerInfo,
    mealPlan,
    selectMeals,
    success,
    failed,
}

interface ICustomer {
    name: string
    email: string
    phone: string
    address1: string
    address2: string
    postal: string
    city: string
}

const RETRIEVE_ALL_MEALS = gql`
    query Query {
        retrieveAllMeals {
            _id
            title
            description
            photoURL
            price
            sides
            carbs
            calories
            allergies
        }
    }
`

const PUSH_ORDER = gql`
    mutation Mutation($orderInput: OrderInput) {
        createOrder(order: $orderInput){
            customer {
                name
            }
            
            total
        }
    }
`

let order = function createOrder() {
    //Current Order States
    let [customerInfo, setCustomerInfo] = useState<ICustomer>();
    let [selectedPlan, setSelectedPlan] = useState();
    let [selectedMeals, setSelectedMeals] = useState();
    let [successfulOrder, setSuccessfulOrder] = useState(false);

    //Page states
    let [wizardState, setWizardState] = useState<wizardStates>( wizardStates.customerInfo );

    const {loading: loadMeals, error: mealError, data: mealData} = useQuery( RETRIEVE_ALL_MEALS );
    const [createOrder, { loading: uploadLoading, error: uploadError, data: uploadData }] = useMutation(PUSH_ORDER);

    const submitOrder = async (formData: any) => {
        try {
            await createOrder({
                variables: {
                    orderInput: {
                        customer: {
                            name: formData.customer.name,
                            phone: formData.customer.phone,
                            address: {
                                city: formData.customer.address.city,
                                line1: formData.customer.address.line1,
                                line2: formData.customer.address.line2,
                                postal: formData.customer.address.postal,
                                state: formData.customer.address.state,
                            }
                        },
                        meals: {
                            _id: formData.meals._id,
                        },
                        coupon: formData.coupon,
                        notes: formData.notes,
                    }
                }
            }).then((results)=> {
                setSuccessfulOrder(true)
            })
        } catch (e) {
            return e;
        }
    }

    if (loadMeals) return 'Loading...';
    if (mealError) return `Error! ${mealError.message}`;

    let pageTitle = "Create Order";

    const switchStates = (wizardState: wizardStates) => {
        switch (wizardState) {
            case wizardStates.customerInfo:
                return (
                    <div>
                        <AddressInput
                            retrievedInfo={customerInfo}
                            setCustomerInfo={(customer: ICustomer) => setCustomerInfo( customer )}
                            onNext={() => {
                                setWizardState( wizardStates.mealPlan )
                            }}/>
                    </div>
                )
            case wizardStates.mealPlan:
                return (
                    <MealPlanSelection
                        retrievedInfo={selectedPlan}
                        setMealPlan={(plan: any) => {
                            setSelectedPlan( plan )
                        }}
                        onNext={() => {
                            setWizardState( wizardStates.selectMeals )
                        }}
                        onPrev={() => {
                            setWizardState( wizardStates.customerInfo )
                        }}
                    />
                )
            case wizardStates.selectMeals:
                return (
                    <div>
                        {/*retrievedMeals={retrievedMeals}*/}
                        {/*retrievedInfo={selectedMeals}*/}
                        <ProductSelection
                            mealData={mealData} //todo: rename to explain that this is a list of every meal
                            mealPlan={selectedPlan}
                            setMeals={(meals: any) => {
                                setSelectedMeals( meals )
                            }}
                            selectedMeals={selectedMeals}
                            onNext={() => {
                                /*Send the meal to the db then success*/
                                    submitOrder( {

                                    }).then( r => {
                                        if (r) setWizardState( wizardStates.success )
                                        else setWizardState( wizardStates.failed )
                                    })

                             }}
                            onPrev={() => {
                                setWizardState( wizardStates.mealPlan )
                            }}
                        />
                    </div>
                )
            case wizardStates.success:
                return (
                    <div>
                        <h1>Success</h1>
                        <Button
                            style={{
                                margin: "auto",
                                width: "25%"
                            }}
                            variant={"contained"}
                            color={'secondary'}>
                            <a href={"/admin"}>Return</a>
                        </Button>
                        <Button
                            style={{
                                margin: "auto",
                                width: "25%"
                            }}
                            variant={"contained"}
                            color={'secondary'}>
                            <a href={'/admin/createOrder'}>Create another order</a>
                        </Button>
                    </div>
                )
            case wizardStates.failed:
                return (
                    <div>
                        failed
                    </div>
                )
        }
    }

    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content="Bucket list bodies is a good place to get food from!"/>
                <link rel="icon" href="/favicon.ico"/>
            </Helmet>

            <TopAppBar pageTitle={pageTitle}/>

            <main className={styles.container}>
                <div className={styles.main}>
                    {switchStates( wizardState )}
                </div>
            </main>

            {/*<footer className={styles.footer}>
            // Hello World!
        </footer>*/}
        </div>
    )
};
export default order