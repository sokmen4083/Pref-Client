import React from 'react';
import { Form } from './Form';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { Profil } from './Profil';


function App() {
  return (
    <Router>
      <Security issuer='https://dev-516899.okta.com/oauth2/default'
                clientId='0oajr54xsSO4dG5dc4x6'
                redirectUri={window.location.origin + '/callback'}
                pkce={true}>
        <SecureRoute path='/' exact={true} component={Form}/>
        <Route path='/callback' component={LoginCallback}/>
        <Route path='/profil' component={Profil}/>
        <Route path='/document' component={Document}/>
      </Security>
    </Router>
  );
}

export default App;