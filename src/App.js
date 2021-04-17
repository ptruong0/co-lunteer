import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Switch, Route } from 'react-router-dom';

import Landing from './screens/Landing';
import User from './screens/User';
import Organizer from './screens/Organizer';
import Events from './screens/Events';


const App = () => {
  return (
    <div className="App">
      {/* <Navbar className="navbar">
          <Navbar.Brand style={{color: "white"}}>Volunteer Finder</Navbar.Brand>
      </Navbar> */}
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/user" component={User} />
        <Route path="/events" component={Events} />
        <Route path="/organizer" component={Organizer} />
        <Route component={Error} />
      </Switch>
      
    </div>
  );
}

export default App;
