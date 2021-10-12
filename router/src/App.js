import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { Home,Contact,Location } from './pages';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/Location'  >
            <Location></Location>
          </Route>
          <Route path='/'  >
            <Home></Home>
          </Route>
        </Switch>
        <NavLink className='btn btn-primary' to="/">Home</NavLink>
        <NavLink className='btn btn-primary' to="/Contact">Contact</NavLink>
        <NavLink className='btn btn-primary' to="/Location">Location</NavLink>

      </div>
    </Router>
  );
}

export default App;
