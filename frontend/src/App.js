
import './App.css';

import Header1 from './components/layout/Header1'
import Header2 from './components/layout/Header2'
import Footer from './components/layout/Footer'
import Home from './components/Home';
import Login from './components/user/Login'
import AboutUs from './components/AboutUs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import LegalHelpBot from './components/LegalHelpBot';

function App() {
  return (
    <Router>
      <div className="App">
        <Header1/>
        <Header2/>
        <div className="container container-fluid">
        <Route  path="/" component={Home} exact/>
        <Route  path="/about" component={AboutUs} exact/>


        <Route  path="/login" component={Login} />
        <LegalHelpBot/>
        </div>
        <Footer/>

    </div>
    </Router>
  );
}

export default App;
