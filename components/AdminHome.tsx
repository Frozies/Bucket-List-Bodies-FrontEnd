import React, {Component} from 'react';
import {makeStyles} from "@material-ui/styles";
import {Container, Grid} from "@material-ui/core";
import theme from "../src/theme";

//todo: Duplicate Code :)
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
    },
    orderInfo: {
        //todo:  Fillout css
    }
}));

class orderInfo extends Component {
    private color: string;
    private amount: number;
    private text: string;
    private className: any;

    render() {
        return (
            <Container className={this.className.orderInfo}>
                <h3>{this.color}</h3>
                <h3>{this.amount}</h3>
                <h3>{this.text}</h3>
            </Container>
        );
    }
}

class AdminHome extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
    }

    render() {
        return (
            <div>
                <Grid>
                    {/*{new orderInfo(this.props)}*/}
                </Grid>
            </div>
        );
    }
}

export default AdminHome;