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
import CreateMessage from './components/CreateMessage';
import MessageLong from './components/MessageLong';
import ShopItem from './components/ShopItem';
import Artist from './components/Artist';
import About from './components/About'

function App() {
  return (
    <AuthProvider>
    <Router>
      <Navigationbar />
       <Switch>
       <Route exact path='/' exact component={Homepage} />
        <Route path='/messageboard' exact component={Messageboard} />
        <Route path='/messageboard/createmessage' exact component={CreateMessage} />
        <Route path='/messages/:id' exact component={MessageLong} />
        <Route path='/artistboard' exact component={Artistboard} />
        <Route path='/artists' exact component={Artist} />
        <Route path='/shop' exact component={Shopboard} />
        <Route path='/shopitem' exact component={ShopItem} />
        <Route exact path='/shopcart' exact component={ShopCart}/>
        <Route exact path='/account' exact component={Account} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <Route path='/about' exact component={About} />
        
       </Switch>
    </Router>
    </AuthProvider>
    
  );
}

export default App;
