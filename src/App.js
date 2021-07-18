import react from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Notification from './pages/notification';
import Order from './pages/order';
import Message from './pages/message';
import signup from './pages/signup';
import Signin from './pages/signin';
import { render } from '@testing-library/react';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/notification" exact component={Notification} />
        <Route path="/order" exact component={Order} />
        <Route path="/message" exact component={Message}/>
        <Route path="/sign-up" exact component={signup}/>
        <Route path="/sign-in" exact component={Signin}/>
      </Switch>
      <Footer/>
    </Router>
  );

}
export default App;
