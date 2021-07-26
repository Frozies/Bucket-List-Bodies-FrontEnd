import React, {useEffect, useState, Component} from 'react'
import styles from '../../styles/Home.module.css'
import {Helmet} from "react-helmet";
import AddressInput from "./AddressInput";
import OrderInput from "./OrderInput";
import {Grid} from "@material-ui/core";

class OrderEntry extends Component <any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            componentState: 'address'
        };
    }

    updateState = (componentState: String) => {
        this.setState((state: any) => ({
            componentState: componentState
        }))
    }

    componentDidMount() {

    }

    render() {
        const getComponent = () => {
            switch (this.state.componentState) {
                case 'address':
                    console.log("Address Rendered")
                    return <AddressInput onSubmit={()=> {
                        this.updateState('personal')
                        getComponent()
                        console.log("Click on Index")
                    }}/>
                case 'personal':
                    console.log("Order Rendered")
                    return <OrderInput onSubmit={()=>{
                        this.updateState('address')
                        getComponent()
                        console.log("Click on Order")
                    }}/>
                default:
                    return null;
            }
        }

        return (
            <Grid className={styles.container}>



                <main className={styles.main}>
                    {/*{getComponent()}*/} // getComponent will load upo the order input stuff

                </main>
            </Grid>
        )
    }
}

export default OrderEntry;