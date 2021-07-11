import '../styles/globals.css'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

//This is kind of a dumb way to use env, but we're just going to do it anyways...
let apolloURI;
if (process.env.NODE_ENV === "development") {
    apolloURI = 'http:/localhost:4001/'
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
        <Component {...pageProps} />
      </ApolloProvider>
  )
}

export default MyApp
