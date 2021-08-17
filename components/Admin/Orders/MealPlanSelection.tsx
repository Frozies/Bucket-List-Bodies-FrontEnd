import {Button, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {Alert, ToggleButton, ToggleButtonGroup} from "@material-ui/lab";

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

export default function MealPlanSelection(props: any) {
    const selectedPlan = props.retrievedInfo
    const classes = useStyles();

    // @ts-ignore
    const [plan, setPlan] = useState<mealPlans>(selectedPlan);
    const [inputError, setInputError] = useState(false);

    // @ts-ignore
    const handleSelection = (event: any, newSelection: React.SetStateAction<mealPlans>) => {
        setPlan(newSelection);
    }

    const errorPopup = () => {
        if (inputError) {
            return (
                <Alert variant="filled" severity="error">
                    Please select a plan.
                </Alert>
            )
        }
    }

    // @ts-ignore
    return (
        <div>
            <div className={classes.cardStyle}>
                <h2>
                    Manual Order Entry
                </h2>
                <p>
                    Select the Meal Plan
                </p>

                {errorPopup()}

                <ToggleButtonGroup
                    onChange={handleSelection}
                    value={plan}
                    exclusive
                >
                    {/*TODO: Iterate over this later. Hard coding this is going to be a pain in the butt later...*/}
                    <ToggleButton value={4}>
                        4 meals
                    </ToggleButton>
                    <ToggleButton value={5}>
                        5 meals
                    </ToggleButton>
                    <ToggleButton value={6}>
                        6 meals
                    </ToggleButton>
                </ToggleButtonGroup>


                <br/>
                <br/>

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
                            props.setMealPlan(plan)
                            props.onPrev()
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
                            if (plan != undefined) {
                                props.setMealPlan(plan)
                                props.onNext()
                            }
                            else {
                                setInputError(true)
                            }
                        }}
                    > Next </Button>
                </div>
            </div>
        </div>
    )
}