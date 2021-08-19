import type {AppProps} from 'next/app';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from '@apollo/client';
import {AuthProvider} from '../lib/auth';

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cks4k7g3g6fv401z834yf49p1/master',
  cache: new InMemoryCache(),
});

import '../styles/globals.css';

function App({Component, pageProps}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
