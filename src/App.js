import Home from  './Components/Home'
import Nav from './Components/Nav'
import About from './Components/About'
import Kitchen from './Components/Kitchen'
import Bathroom from './Components/Bathroom'
import Decor from './Components/Decor'
import Contact from './Components/Contact'
import Thanks from './Components/Thanks'
import Whatsapp from './Components/Whatsapp'
import { Redirect, Route } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import{Footer} from './Components/Footer'
function App() {
  return (
    <>
    <>
    <Router>
    <Nav/>
    <Switch>
      <Route exact path = "/" component ={Home}/>
      <Route exact path = "/about" component = {About}/>
      <Route exact path = "/kitchen" component = {Kitchen}/>
      <Route exact path = "/Bathroom" component = {Bathroom}/>
      <Route exact path = "/Decor" component = {Decor}/>
      <Route exact path = "/Contact" component = {Contact}/>
      <Route exact path = "/thanks" component ={Thanks}/>
      <Redirect to = "/"></Redirect>
    </Switch>
    <Footer/>
    <Whatsapp/>
    </Router>
    </>
    </>
  );
}

export default App;
