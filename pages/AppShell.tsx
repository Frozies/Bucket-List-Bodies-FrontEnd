import React from "react";
import Header from "../components/Header";
import {Footer} from "../components/Footer";

//todo pass header page title
export default function AppShell(children: any) {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
