import React, {Component} from 'react';
import {Button, Grid, Paper} from "@material-ui/core";

const orderInfo = (colors: string, amount: number, text: string, className: string) => {
    return(
        <Paper elevation={2} className={className}>
            {text} {amount}
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
                            {orderInfo("Red", 2, "Orders to be made", this.classes.infoCard)}
                            {orderInfo("Red", 5, "Deliveries", this.classes.infoCard)}
                            {orderInfo("Red", 5, "Unconfirmed", this.classes.infoCard)}
                        </Grid>

                        <Paper elevation={2}>
                            <Button>
                                <a href={"/admin/createProduct"}>
                                    Create Product
                                </a>
                            </Button>
                        </Paper>

                        <Paper elevation={2}>
                            <Button>
                                <a href={"/admin/products"}>
                                    View Products
                                </a>
                            </Button>
                        </Paper>

                        <Paper elevation={2}>
                            <Button>
                                <a href={"/admin/createOrder"}>
                                    Create Order
                                </a>
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default AdminHome;