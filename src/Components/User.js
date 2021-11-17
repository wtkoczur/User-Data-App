import { Link } from "react-router-dom";

import '../App.css';

const User = ({ user, showUserDetails }) => {
	return (
		<Link to="/user-profile" style={{ textDecoration: 'none'}}>
			<div className="user" onClick={() => showUserDetails(user)}>
				{user.name}
			</div>
		</Link>
	);
};

export default User;