import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Component.css";
import { Link } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h4 className="logo"><a href="/">XWAN</a> </h4>
			<nav ref={navRef}>
				<Link to={"/"}>Home</Link>
				<Link to={"/About/"}>About</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
