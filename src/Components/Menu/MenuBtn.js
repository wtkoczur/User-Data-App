import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const MenuBtn = ({handleToggleMenu}) => {
    return (
        <div className="header">
            <button onClick={handleToggleMenu} className="menuBtn"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
        </div>
    )
}

export default MenuBtn