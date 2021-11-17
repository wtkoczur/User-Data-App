import { Link } from "react-router-dom";
import '../../App.css';

const Contact = () => {
    return(
        <div className="title">
            <h1>Contact</h1>
            <p style={{marginTop: 80}}>email: </p>
                <Link to="contact" style={{ textDecoration: 'none', fontSize: '20px', color: '#000' }}> wtkoczur@gmail.com</Link>
        </div>
    )
}

export default Contact