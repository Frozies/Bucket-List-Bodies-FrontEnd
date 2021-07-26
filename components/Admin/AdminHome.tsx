import React, {Component} from 'react';
import {Grid, Paper} from "@material-ui/core";
import XGridDemo from "./XGridDemo";


const orderInfo = (colors: string, amount: number, text: string, className: string) => {
    return(
        <Paper elevation={2} className={className}>
            {text}{amount}
        </Paper>
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
            <Paper elevation={1}>
                <Grid container className={this.classes.cardStyle} spacing={5}>
                    <Grid item>
                        <Grid container justifyContent="center" direction={"row"} spacing={2}>
                            {orderInfo("Red", 2, "Unmade Orders ", this.classes.infoCard)}
                            {orderInfo("Red", 5, "Deliveries ", this.classes.infoCard)}
                            {orderInfo("Red", 5, "Completed ", this.classes.infoCard)}
                        </Grid>
                        <XGridDemo/>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AdminHome;