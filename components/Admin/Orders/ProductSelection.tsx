import React, {useState} from 'react';
import {gql, useQuery} from "@apollo/client";
import {Button, Container, Grid, Paper} from '@material-ui/core';
import Image from 'next/image'
import {ToggleButton, ToggleButtonGroup} from '@material-ui/lab';

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

export default function ProductSelection(props: any) {
    const {loading: loadMeals, error: mealError, data: mealData} = useQuery(RETRIEVE_ALL_MEALS);

    if (loadMeals) return 'Loading...';
    if (mealError) return `Error! ${mealError.message}`;

    // @ts-ignore
    const [meals, setMeals] = useState([]);

    // @ts-ignore
    const handleSelection = (event: any, newSelection: React.SetStateAction) => {
        setMeals(newSelection);
    }

    return (
        <Paper style={{
            display: "flex",
            width: "auto",
            height: "auto"
        }}>
            <div>
                <Grid container spacing={10} >
                    {mealData.retrieveAllMeals.map((meal: any) => (
                        <Paper
                            key={meal.productID}
                            style={{
                                width: "250px",
                                height: "350px",
                                margin: "10px"
                            }}>
                            <Container>
                                <Button onClick={() => {

                                }}>
                                    <p>{meal.title}</p>
                                    <Image width={"100px"} height={"100px"} src={meal.photoURL}/>
                                    <p>{meal.sides}</p>
                                    <p>{meal.description}</p>
                                    <p>${meal.price}</p>
                                </Button>
                            </Container>
                        </Paper>
                    ))}
                    {/*<Paper>
                        <ToggleButtonGroup onChange={handleSelection} value={meals}>
                            <ToggleButton value={"1"}>
                                <Paper
                                    style={{
                                        width: "250px",
                                        height: "350px",
                                        margin: "10px"
                                    }}>
                                    <Container>
                                        <p>Blackend Chicken</p>
                                        <Image width={"100px"} height={"100px"} src={"https://res.cloudinary.com/bucketlistbodies/image/upload/v1628559096/blackened-chicken-recipe-6-of-8-735x1103_barvnu.jpg"}/>
                                        <p>with rice and beans</p>
                                        <p>Very Tasty</p>
                                        <p>$9.99</p>
                                    </Container>
                                </Paper>
                            </ToggleButton>
                            <ToggleButton value={"2"}>
                                <Paper
                                    style={{
                                        width: "250px",
                                        height: "350px",
                                        margin: "10px"
                                    }}>
                                    <Container>
                                        <p>Blackend Chicken</p>
                                        <Image width={"100px"} height={"100px"} src={"https://res.cloudinary.com/bucketlistbodies/image/upload/v1628559096/blackened-chicken-recipe-6-of-8-735x1103_barvnu.jpg"}/>
                                        <p>with rice and beans</p>
                                        <p>Very Tasty</p>
                                        <p>$9.99</p>
                                    </Container>
                                </Paper>
                            </ToggleButton>
                            <ToggleButton value={"3"}>
                                <Paper
                                    style={{
                                        width: "250px",
                                        height: "350px",
                                        margin: "10px"
                                    }}>
                                    <Container>
                                        <p>Blackend Chicken</p>
                                        <Image width={"100px"} height={"100px"} src={"https://res.cloudinary.com/bucketlistbodies/image/upload/v1628559096/blackened-chicken-recipe-6-of-8-735x1103_barvnu.jpg"}/>
                                        <p>with rice and beans</p>
                                        <p>Very Tasty</p>
                                        <p>$9.99</p>
                                    </Container>
                                </Paper>
                            </ToggleButton>
                            <ToggleButton value={"4"}>
                                <Paper
                                    style={{
                                        width: "250px",
                                        height: "350px",
                                        margin: "10px"
                                    }}>
                                    <Container>
                                        <p>Blackend Chicken</p>
                                        <Image width={"100px"} height={"100px"} src={"https://res.cloudinary.com/bucketlistbodies/image/upload/v1628559096/blackened-chicken-recipe-6-of-8-735x1103_barvnu.jpg"}/>
                                        <p>with rice and beans</p>
                                        <p>Very Tasty</p>
                                        <p>$9.99</p>
                                    </Container>
                                </Paper>
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Paper>*/}
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
                            props.onNext()
                        }}
                    > Next </Button>
                </div>
            </div>
        </Paper>
    )
}
