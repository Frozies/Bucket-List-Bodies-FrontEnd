import '../styles/globals.scss'
import theme from '../src/theme'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import {MuiThemeProvider} from "@material-ui/core";
import TopAppBar from "../components/TopAppBar";
import {Helmet} from "react-helmet";
import * as ReactDOMServer from "react-dom/server";

//This is kind of a dumb way to use env, but we're just going to do it anyways...
let apolloURI;
if (process.env.NODE_ENV === "development") {
    apolloURI = 'http://localhost:4001/'
};

if (process.env.NODE_ENV === "production") {
    apolloURI = 'https://bucketlistbodies-fw9oq.ondigitalocean.app:4001'
};

const client = new ApolloClient({
    uri: apolloURI,
    cache: new InMemoryCache()
});


function MyApp({ Component, pageProps }) {
  return (
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
            <Component {...pageProps} />
        </MuiThemeProvider>
      </ApolloProvider>
  )
}

export default MyApp
