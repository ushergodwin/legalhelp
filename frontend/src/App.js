
import './App.css';

import Header1 from './components/layout/Header1'
import Header2 from './components/layout/Header2'
import Footer from './components/layout/Footer'
import Home from './components/Home';
import Login from './components/user/Login'
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
        <div className="container container-fluid">
        <Route  path="/" component={Home} exact/>

        <Route  path="/login" component={Login} />
        <Footer/>
        </div>

    </div>
    </Router>
  );
}

export default App;
