import {Button, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";

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
    const mealPlans = props.mealPlans;
    const selectedPlan = props.retrievedInfo
    const classes = useStyles();

    console.log(props.retrievedInfo)

    // @ts-ignore
    const [plan, setPlan] = useState<mealPlans>(selectedPlan);

    // @ts-ignore
    const handleSelection = (event: any, newSelection: React.SetStateAction<mealPlans>) => {
        setPlan(newSelection);
    }

    return (
        <div>
            <div className={classes.cardStyle}>
                <h2>
                    Manual Order Entry
                </h2>
                <p>
                    Select the Meal Plan
                </p>


                <ToggleButtonGroup onChange={handleSelection} value={plan} exclusive>
                    <ToggleButton value={mealPlans["4_meals"]}>
                        4 meals
                    </ToggleButton>
                    <ToggleButton value={mealPlans["5_meals"]}>
                        5 meals
                    </ToggleButton>
                    <ToggleButton value={mealPlans["6_meals"]}>
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
                            props.setMealPlan(plan)
                            props.onNext()
                        }}
                    > Next </Button>
                </div>
            </div>
        </div>
    )
}