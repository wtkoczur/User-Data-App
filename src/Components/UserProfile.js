import { Link } from "react-router-dom";
import '../App.css';

const UserProfile = ({ data }) => {
    console.log('UserProfile clicked data: ', data)
    return(
        <div className="title">
            <div className="userProfile">
                <h3>Name: {data.name}</h3>
                <p>Age: {data.age}</p>
                <p>Gender: {data.gender}</p>
                <p>Company: {data.company}</p>
                <p>Email: <Link style={{ textDecoration: 'none' }}>{data.email}</Link></p>
                <p>Phone: {data.phone}</p>
                <p>Address: {data.address}</p>
                <p>About: {data.about}</p>

                <Link to="users" style={{ textDecoration: 'none', fontSize: '14px' }}>Back</Link>
            </div>
        </div>
    )
}

export default UserProfile;