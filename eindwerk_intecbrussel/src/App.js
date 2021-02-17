import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './components/style/App.css';
import Account from './components/Account';
import Artists from './components/Artists';
import Homepage from './components/Homepage';
import Messageboard from './components/Messageboard';
import Navigationbar from './components/Navigationbar'
import Shop from './components/Shop';


function App() {
  return (
    <Router>
      <Navigationbar />
        <Route path='/' exact component={Homepage} />
        <Route path='/messageboard' exact component={Messageboard} />
        <Route path='/artists' exact component={Artists} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/account' exact component={Account} />
    
    </Router>
    
  );
}

export default App;
