import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './components/style/App.css';
import Account from './components/Account';
import Homepage from './components/Homepage';
import Messageboard from './components/Messageboard';
import Navigationbar from './components/Navigationbar'

import Artistboard from './components/Artistboard';
import Shopboard from './components/Shopboard';


function App() {
  return (
    <Router>
      <Navigationbar />
        <Route path='/' exact component={Homepage} />
        <Route path='/messageboard' exact component={Messageboard} />
        <Route path='/artistboard' exact component={Artistboard} />
        <Route path='/shop' exact component={Shopboard} />
        <Route path='/account' exact component={Account} />
    
    </Router>
    
  );
}

export default App;
