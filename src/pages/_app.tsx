import React, { useState, useEffect } from "react";
import { setAccessToken } from "../accessToken";
import {ThemeProvider} from "@mui/material";
import mainTheme from "../theme";
import {Helmet, HelmetProvider} from "react-helmet-async";
import type { AppProps /*, AppContext */ } from 'next/app'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";



import {createUploadLink} from "apollo-upload-client";

interface Props {}

export default function MyApp({ Component, pageProps }: AppProps) {
    /*const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:4001/refresh_token", {
            method: "POST",
            credentials: "include"
        }).then(async x => {
            const { accessToken } = await x.json();
            setAccessToken(accessToken);
            setLoading(false);
        });
    }, []);*/
    /*if (loading) {
        return <div>loading...</div>;
    }*/

    const URI = 'http://localhost:4001/'

    const client = new ApolloClient({
        uri: URI,
        cache: new InMemoryCache(),
        link: createUploadLink({
            uri: URI + '/graphql',
        }),
    });



    const [pageTitle, setPageTitle] = useState('Bucket List Bodies');

    return (

            <ApolloProvider client={client}>
                <ThemeProvider theme={mainTheme}>
                    <HelmetProvider>
                        <Helmet>
                            <title>{pageTitle}</title>
                            <meta name="description" content="Bucket list bodies is a good place to get food from!" />
                            <link rel="icon" href="/favicon.ico" />
                        </Helmet>
                        <Component {...pageProps} />
                    </HelmetProvider>
                </ThemeProvider>
            </ApolloProvider>




    );
};