import React, {useState} from 'react';
import {gql, useQuery} from "@apollo/client";
import {Button, Container, Grid, Paper} from '@material-ui/core';
import Image from 'next/image'
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab';

export default function ProductSelection(props: any) {
    const mealData = props.mealData
    const [meals, setMeals] = useState(props.selectedMeals);

    // @ts-ignore
    const handleSelection = (event: any, newSelection: React.SetStateAction) => {
        setMeals(newSelection);
    }

    const mealsList = () => {
        return (
            <ToggleButtonGroup onChange={handleSelection} value={meals}>
                {mealData.retrieveAllMeals.map((meal: any) => (
                    <ToggleButton value={meal._id} key={meal._id}>
                        <Paper
                            key={meal.productID}
                            style={{
                                width: "250px",
                                height: "350px",
                                margin: "10px"
                            }}>
                            <p>{meal.title}</p>
                            <Image width={"100px"} height={"100px"} src={meal.photoURL}/>
                            <p>{meal.sides}</p>
                            <p>{meal.description}</p>
                            <p>${meal.price}</p>
                        </Paper>
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        )
    }

    return (
        <Paper style={{
            display: "flex",
            width: "auto",
            height: "auto"
        }}>
            <div>
                <Grid container spacing={10} >
                    {mealsList()}
                </Grid>
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
                    > Next </Button>
                </div>
            </div>
        </Paper>
    )
}
