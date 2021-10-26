import {Helmet} from "react-helmet-async";
import React from "react";

//todo: Pass props in to header page title. (pageTitle: string = "Bucket list bodies") {pageTitle}
export default function Header () {
    return (
        <Helmet>
            <title>Bucket List Bodies</title>
            <meta name="description" content="Bucket list bodies is a good place to get food from!" />
            <link rel="icon" href="/favicon.ico" />
        </Helmet>
    )
}