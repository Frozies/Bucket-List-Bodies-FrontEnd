import React, {Component} from 'react';
import {makeStyles} from "@material-ui/styles";
import {Container, Grid} from "@material-ui/core";

const orderInfo = (colors: string, amount: number, text: string) => {
    return(
        <div>
            color: {colors}
            <br/>
            amount: {amount}
            <br/>
            text: {text}
        </div>
    )
}

interface IProps {
    classes: any
}

class AdminHome extends Component <IProps> {
    private classes: any;
    constructor(props: IProps) {
        super(props);
        this.classes = props.classes
    }

    render() {
        return (
            <div>
                <Grid  className={this.classes.cardStyle}>
                    {orderInfo("Red", 5, "Test")}
                </Grid>
            </div>
        );
    }
}

export default AdminHome;