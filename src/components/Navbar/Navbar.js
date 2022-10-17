import { Link } from "react-router-dom";
import "./navbar.css";
import { AiFillHome } from "react-icons/ai";

export const Navbar = () => {
	return (
		<div className="navbar">
			<p className="title">
				<span className="txt-blue">Da</span>shboard
			</p>
			<div className="navbar-mid">
				<Link to="/" className="navbar-item">
					<AiFillHome className="home-icon" />
				</Link>
			</div>
			<p className="navbar-username">
				{" "}
				<span className="username-avtar">JD</span>John Doe
			</p>
		</div>
	);
};
