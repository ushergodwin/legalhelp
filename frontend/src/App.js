
import './App.css';

import Header1 from './components/layout/Header1'
import Header2 from './components/layout/Header2'
import Footer from './components/layout/Footer'
import LegalServices from './components/LegalServices';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header1/>
        <Header2/>
        
        <Switch>
          <Route exact path="/">
            <LegalServices/>
          </Route>
        </Switch>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
