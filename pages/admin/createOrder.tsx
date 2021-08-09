import AddressInput from "../../components/Admin/Orders/AddressInput";
import {Helmet} from "react-helmet-async";
import TopAppBar from "../../components/Admin/Util/TopAppBar";
import styles from "../../styles/Home.module.css";
import AdminHome from "../../components/Admin/AdminHome";
import React, {useState} from "react";
import {Button} from "@material-ui/core";

enum wizardStates {
    customerInfo,
    mealPlan,
    selectMeals,
    success,
    failed,
}

export default function createOrder() {
    let [wizardState, setWizardState] = useState<wizardStates>(wizardStates.customerInfo);

    let pageTitle = "Create Order";

    const switchStates = (wizardState: wizardStates) => {
        switch (wizardState) {
            case wizardStates.customerInfo:
                return (
                    <AddressInput
                        onNext={() => {setWizardState(wizardStates.mealPlan)}}/>
                )
            case wizardStates.mealPlan:
                return (
                    <div>
                        <h1>Meal Plan</h1>
                        <div
                            style={{
                                display: "flex"
                            }}>
                            <Button
                                style={{
                                    margin: "auto",
                                    width: "25%"
                                }}
                                variant={"contained"}
                                color={'default'}
                                onClick={() => {
                                    // props.onSubmit()
                                    console.log("Previous")
                                    setWizardState(wizardStates.customerInfo)
                                }}
                            > Previous </Button>
                            <Button
                                style={{
                                    margin: "auto",
                                    width: "25%"
                                }}
                                variant={"contained"}
                                color={'secondary'}
                                onClick={() => {
                                    // props.onSubmit()
                                    console.log("Next")
                                    setWizardState(wizardStates.selectMeals)
                                }}
                            > Next </Button>
                        </div>
                    </div>
                )
            case wizardStates.selectMeals:
                return (
                    <div>
                        <h1>Select Meals</h1>
                        <div
                            style={{
                                display: "flex"
                            }}>
                            <Button
                                style={{
                                    margin: "auto",
                                    width: "25%"
                                }}
                                variant={"contained"}
                                color={'default'}
                                onClick={() => {
                                    // props.onSubmit()
                                    console.log("Previous")
                                    setWizardState(wizardStates.mealPlan)
                                }}
                            > Previous </Button>
                            <Button
                                style={{
                                    margin: "auto",
                                    width: "25%"
                                }}
                                variant={"contained"}
                                color={'secondary'}
                                onClick={() => {
                                    // props.onSubmit()
                                    console.log("Next")
                                    setWizardState(wizardStates.success)
                                }}
                            > Next </Button>
                        </div>
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