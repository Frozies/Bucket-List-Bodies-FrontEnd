
import React from "react";
import {Button} from "@mui/material";

export const SystemsStatus = (code: string) => {
    switch (code) {
        case 'OKAY': {
            return (
                <Button variant={"contained"} style={{
                    background: "#4caf50" //todo: Pallet success main
                }}>
                    ALL SYSTEMS OKAY
                </Button>
            )
        }
        case 'SHUTDOWN': {
            return (
                <Button variant={"contained"} style={{
                    background: "#f44336" //todo: Pallet Error
                }}>
                    ORDERS SHUTDOWN
                </Button>
            )
        }
        case 'ERROR': {
            return (
                <Button variant={"contained"} style={{
                    background: "#f44336" //todo: Pallet Error
                }}>
                    ERROR
                </Button>
            )
        }
        default: {
            return (
                <Button variant={"contained"} style={{
                    background: "#ff9800" //todo: Pallet Warning
                }}>
                    UNKNOWN STATUS
                </Button>
            )
        }
    }
}