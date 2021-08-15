import React, {useEffect, useState} from 'react';
import {Button, Container, Grid, Paper} from '@material-ui/core';
import Image from 'next/image'
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab';
import cartShape from '../../../components/cartShape'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {set} from "react-hook-form";

export default function ProductSelection(props: any) {
    const mealData = props.mealData
    const mealPlan = props.mealPlan

    const total = mealPlan
    const [currentCount, setCurrentCount] = useState(()=> {
        if(props.selectedMeals) return props.selectedMeals.length
        else return 0
    });
    const [meals, setMeals] = useState(()=> {
        if(props.selectedMeals) return props.selectedMeals
        else return []
    });

    const addMeal = (meal: String) => {
        setMeals(meals.concat(meal))
        iterateCount(1)
        //todo: if meals are greater than the meal-plan count => do stuff
    }

    const removeMeal = (meal: String) => {
        // setMeals(meals.splice(newMeal))
        let index = meals.indexOf(meal);
        meals.splice(index,1);
        iterateCount(-1)
    }

    const iterateCount = (amount: Number) => {
        if (currentCount + amount < 0) setCurrentCount(0)
        else setCurrentCount(currentCount + amount)
    }

    const mealsList = () => {
        return (
            <Grid container direction={"row"} spacing={8}>
                {mealData.retrieveAllMeals.map((meal: any) => (
                    <Paper
                        key={meal.productID}
                        style={{
                            width: "250px",
                            height: "400px",
                            margin: "10px",
                            display: "flex",
                            flexDirection: "column",

                        }}>
                        <div style={{
                            margin: "auto",
                        }}
                        >
                            <div style={{
                                width: "250px",
                                height: "200px",
                                position: "relative"
                            }}>,
                                <Image layout={"fill"} src={meal.photoURL}/>
                            </div>
                            <p>{meal.title}</p>
                            <p>{meal.sides}</p>
                            <p>{meal.description}</p>
                            <p>${meal.price}</p>
                            <div>
                                <Button
                                    onClick={()=>{
                                    removeMeal(meal._id)
                                }}>
                                    <RemoveIcon/>
                                </Button>
                                <Button
                                    onClick={()=>{
                                        addMeal(meal._id)
                                    }}
                                >
                                    <AddIcon/>
                                </Button>
                            </div>
                        </div>
                    </Paper>
                ))}
            </Grid>
        )
    }

    return (
        <Paper style={{
            display: "flex",
            width: "auto",
            height: "auto"
        }}>
            <div>
                {mealsList()}
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
                            props.setMeals(meals)
                            props.onPrev()
                        }}
                    > Previous </Button>

                    {cartShape(currentCount, total)}

                    <Button
                        style={{
                            margin: "auto",
                            width: "25%"
                        }}
                        variant={"contained"}
                        color={'secondary'}
                        onClick={() => {
                            props.setMeals(meals)
                            props.onNext()
                        }}
                    > Submit order </Button>
                </div>
            </div>
        </Paper>
    )
}
