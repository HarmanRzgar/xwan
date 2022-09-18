import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Component.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h4 className="logo"><a href="/">XWAN</a> </h4>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Fooditionary</a>
				<a href="/#">About</a>
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
