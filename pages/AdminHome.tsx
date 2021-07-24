import React, {useEffect, useState, Component} from 'react'
import styles from '../styles/Home.module.css'
import {Helmet} from "react-helmet";
import AddressInput from "../components/AddressInput";
import OrderInput from "../components/OrderInput";

class AdminHome extends Component <any, any>{

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
                        console.log("Click on Admin")
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
            <div className={styles.container}>
                <Helmet>
                    <title>Bucket List Bodies</title>
                    <meta name="description" content="Bucket list bodies is a good place to get food from!" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                </Helmet>


                <main className={styles.main}>
                    {getComponent()}
                </main>
            </div>
        )
    }
}

export default AdminHome;