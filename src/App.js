import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import {ApolloProvider} from '@apollo/client'
import client from './apolloClient'
import Home from './Home'
import Detail from './Detail'

const App = () => (
    <ApolloProvider client={client}>
      <Router>
        <React.Fragment>
          <Route exact={true} path={"/"} component={Home} />
          <Route path={"/details/:movieId"} component={Detail} />
        </React.Fragment>
      </Router>
      <div className="App" />
    </ApolloProvider>
)


export default App;

//https://newsapi.org/
//https://github.com/saebomp/news_app/blob/master/src/service/api.js