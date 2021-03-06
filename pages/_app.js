import '../styles/globals.scss'
import theme from '../src/theme'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import {MuiThemeProvider} from "@material-ui/core";
import {HelmetProvider} from "react-helmet-async";
import {createUploadLink} from "apollo-upload-client";

let apolloURI = 'http://localhost:4001'

const client = new ApolloClient({
    uri: apolloURI,
    cache: new InMemoryCache(),
    //@ts-ignore
    link: createUploadLink({
        uri: apolloURI + '/graphql',
    }),
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
