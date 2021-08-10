import AddressInput from "../../components/Admin/Orders/AddressInput";
import {Helmet} from "react-helmet-async";
import TopAppBar from "../../components/Admin/Util/TopAppBar";
import styles from "../../styles/Home.module.css";
import AdminHome from "../../components/Admin/AdminHome";
import React, {useState} from "react";
import {Button} from "@material-ui/core";
import MealPlanSelection from "../../components/Admin/Orders/MealPlanSelection";
import ProductSelection from "../../components/Admin/Orders/ProductSelection";

enum wizardStates {
    customerInfo,
    mealPlan,
    selectMeals,
    success,
    failed,
}

enum mealPlans {
    "4_meals",
    "5_meals",
    "6_meals"
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

export default function createOrder() {
    //Current Order States
    let [customerInfo, setCustomerInfo] = useState<ICustomer>()
    let [selectedPlan, setSelectedPlan] = useState<mealPlans>()

    //Page states
    let [wizardState, setWizardState] = useState<wizardStates>(wizardStates.customerInfo);

    let pageTitle = "Create Order";

    const switchStates = (wizardState: wizardStates) => {
        switch (wizardState) {
            case wizardStates.customerInfo:
                return (
                    <div>
                        <AddressInput
                            retrievedInfo={customerInfo}
                            setCustomerInfo={(customer: ICustomer) => setCustomerInfo(customer)}
                            onNext={() => {setWizardState(wizardStates.mealPlan)}}/>
                    </div>
                )
            case wizardStates.mealPlan:
                return (
                    <MealPlanSelection
                        retrievedInfo={selectedPlan}
                        mealPlans={mealPlans}
                        setMealPlan={(plan: any)=> {setSelectedPlan(plan)}}
                        onNext={()=> {setWizardState(wizardStates.selectMeals)}}
                        onPrev={()=> {setWizardState(wizardStates.customerInfo)}}
                    />
                )
            case wizardStates.selectMeals:
                return (
                    <div>
                        {/*retrievedMeals={retrievedMeals}*/}
                        {/*retrievedInfo={selectedMeals}*/}
                        <ProductSelection
                            onNext={()=> {setWizardState(wizardStates.success)}}
                            onPrev={()=> {setWizardState(wizardStates.mealPlan)}}
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
                <meta name="description" content="Bucket list bodies is a good place to get food from!" />
                <link rel="icon" href="/favicon.ico" />
            </Helmet>

            <TopAppBar pageTitle={pageTitle} />

            <main className={styles.container}>
                <div className={styles.main}>
                    {switchStates(wizardState)}
                </div>
            </main>

            {/*<footer className={styles.footer}>
            // Hello World!
        </footer>*/}
        </div>
    )
}