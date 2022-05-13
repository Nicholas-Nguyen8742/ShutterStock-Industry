import React from "react";
import "./Nav.scss";

export const Nav = () => {
	return (
		<nav className="nav">
			<ul className="nav__list">
				<li className="nav__item">Earnings</li>
				<li className="nav__item">Portfolio</li>
				<li className="nav__item">Insights</li>
				<li className="nav__item">Upload</li>
			</ul>
			<span className="nav__earnings">Unpaid Earnings: $0.00</span>
		</nav>
	);
};
