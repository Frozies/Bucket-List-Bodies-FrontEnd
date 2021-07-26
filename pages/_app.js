import '../styles/globals.scss'
import theme from '../src/theme'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import {MuiThemeProvider} from "@material-ui/core";
import TopAppBar from "../components/Admin/TopAppBar";
import * as ReactDOMServer from "react-dom/server";
import {HelmetProvider} from "react-helmet-async";


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
          <HelmetProvider>
              <MuiThemeProvider theme={theme}>
                  <Component {...pageProps} />
              </MuiThemeProvider>
          </HelmetProvider>
      </ApolloProvider>
  )
}

export default MyApp
