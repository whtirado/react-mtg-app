import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import Dashboard from './Components/Dashboard';
import CardDetail from './Components/CardDetail';
import DeckListManager from './Components/DeckListManager';
import DeckCardManager from './Components/DeckCardManager';

// - Upcoming App features
// Limit cards to 4 each
// Draw practice hands

// - Upcoming Server features
// Create Express.js Server
// Save data to mongoDB database
// Challenge friends to live duels (web sockets)

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/deck-list-manager' component={DeckListManager} />
          <Route
            path='/deck-card-manager/:deckName'
            component={DeckCardManager}
          />
          <Route path='/card-details/:cardName' component={CardDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
