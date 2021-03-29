import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import {ApolloProvider} from '@apollo/client'
import client from './apolloClient'
import Home from './components/Home'

import  "./App.css"

const App = () => (
    <ApolloProvider client={client}>
       {/* <div className="App" /> */}
      <Home />
    </ApolloProvider>
)


export default App;

//https://newsapi.org/
//https://www.newline.co/@amandeepmittal/how-to-build-react-native-apps-with-graphql-and-apollo--d74eb12e 