import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UsersContainer from './Components/UsersContainer';
import UserProfile from './Components/UserProfile';
import NavMenu from './Components/Menu/NavMenu';
import About from './Components/Menu/About';
import Home from './Components/Menu/Home';
import Contact from './Components/Menu/Contact';
import MenuBtn from './Components/Menu/MenuBtn';
import Footer from './Components/Menu/Footer';
import DialogApp from './Components/Dialog/DialogApp';
import SnackApp from './Components/Snackbar/SnackApp';


function App() {
  const [ menu, setOpenMenu ] = useState(false);
  const [ clickedData, setClickedData ] = useState('blank');

  const handleToggleMenu = () => {
    setOpenMenu(!menu);
  };

  return (

    <Router>
      <div className="App">
        <MenuBtn handleToggleMenu={handleToggleMenu} />
        <NavMenu isActive={menu} handleClose={handleToggleMenu}/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route  path="/about">
              <About />
            </Route>
            <Route  path="/contact">
              <Contact />
            </Route>
            <Route  path="/users">
              <UsersContainer setUserState={setClickedData} />
            </Route>
            <Route path="/user-profile" >
              <UserProfile data={clickedData} />
            </Route>
            <Route  path="/dialog">
              <DialogApp />
            </Route>
            <Route  path="/snackbar">
              <SnackApp />
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
