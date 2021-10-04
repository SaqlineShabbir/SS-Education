import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';

import React from "react";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';
function App() {
  return (
    <div className="App">
     
     <Router>
     <Header></Header>
       <Switch>
         <Route exact path="/home">
           <Home></Home>
         </Route>
         <Route exact path="/about">
           <About></About>
         </Route>
       
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route exact path="/courses">
           <Courses></Courses>
         </Route>
         <Route exact path="/contact">
           <Contact></Contact>
         </Route>
         <Route exact path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
     <Footer></Footer>
    </div>
  );
}

export default App;
