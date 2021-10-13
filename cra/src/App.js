import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import './styles/main.scss';
import {
  Home,
  Components,
  ClassVsFunctions,
  Localisation,
  HttpRequests,
  UseRef,
  UseReducer,
  Observables
} from './pages/';

const routes = [
  {
    path: '/httpRequests',
    exact: true,
    component: HttpRequests
  },
  {
    path: '/components',
    exact: true,
    component: Components
  },
  {
    path: '/classvsfunctions',
    exact: true,
    component: ClassVsFunctions
  },
  {
    path: '/i18n',
    exact: true,
    component: Localisation
  },
  {
    path: '/UseRef',
    exact: true,
    component: UseRef
  },
  {
    path: '/UseReducer',
    exact: true,
    component: UseReducer
  },
  {
    path: '/Observables',
    exact: true,
    component: Observables
  },
  {
    path: '/',
    exact: true,
    component: Home
  }
]

const Routes = () => <Switch>
  {
    routes.map(
      (route, index) => <Route path={route.path} exact={route.exact} key={index}>
        <route.component />
      </Route>
    )
  }
</Switch>;

const BackButton = routeProps => (routeProps.location.pathname !== "/")
  ? <div className="col-12">
    <NavLink className='btn btn-outline-secondary' to="/">Home</NavLink>
  </div>
  : null;

const App = () => {
  return (
    <Router>
      <div className="container py-3">
        <Routes />
        <Route render={routeProps => <BackButton {...routeProps} />} />
      </div>
    </Router>
  );
}

export default App;