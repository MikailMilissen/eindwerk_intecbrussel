import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './components/style/App.css';
import Account from './components/Account';
import Homepage from './components/Homepage';
import Messageboard from './components/Messageboard';
import Navigationbar from './components/Navigationbar'

import Artistboard from './components/Artistboard';
import Shopboard from './components/Shopboard';
import ShopCart from './components/ShopCart';
import Register from './components/Register';
import Login from './components/Login';
import { AuthProvider } from './components/contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Navigationbar />
       <Switch>
       <Route exact path='/' exact component={Homepage} />
        <Route path='/messageboard' exact component={Messageboard} />
        <Route path='/artistboard' exact component={Artistboard} />
        <Route path='/shop' exact component={Shopboard} />
        <Route exact path='/shopcart' exact component={ShopCart}/>
        <Route path='/account' exact component={Account} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
       </Switch>
    </Router>
    </AuthProvider>
    
  );
}

export default App;
