import '../../App.css'
import { NavLink } from 'react-router-dom';import reactLogo from '../../reactLogo.png'


const NavMenu = ({ isActive, handleClose }) => {
    if(isActive) {
        return(
      <div className="navMenu downSlide">
        <NavLink
            className="link"
            active
            exact to="/"
        >
            <img src={reactLogo} alt="logo" style={{width: "50px", position: "absolute", top: 3, right: 80}}/>
            Home
        </NavLink>
        <NavLink className="link" active to="/users">Users</NavLink>
        <NavLink className="link" active to="/dialog">Dialog</NavLink>
        <NavLink className="link" active to="/snackbar">Snackbar</NavLink>
        <NavLink className="link" active to="/contact">Contact</NavLink>
        <button onClick={handleClose} active className="navMenuBtn">x</button>
      </div>
    )
    }else{
        return null;
    }

  }

  export default NavMenu;