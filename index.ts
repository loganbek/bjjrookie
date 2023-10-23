import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Rankings from './pages/Rankings';
import Techniques from './pages/Techniques';
import ContactUs from './pages/ContactUs';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/rankings" component={Rankings} />
      <Route path="/techniques" component={Techniques} />
      <Route path="/contact-us" component={ContactUs} />
    </Switch>
  </Router>
);

export default App;