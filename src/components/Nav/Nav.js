import React from "react";
import "./Nav.scss";

export const Nav = () => {
	return (
		<nav className="nav">
			<ul className="nav__list">
				<li className="nav__item">Earnings<span class="glyphicon glyphicon-menu-down"></span></li>
				<li className="nav__item">Portfolio<span class="glyphicon glyphicon-menu-down"></span></li>
				<li className="nav__item">Insights<span class="glyphicon glyphicon-menu-down"></span></li>
				<li className="nav__item">Upload<span class="glyphicon glyphicon-menu-down"></span></li>
			</ul>
			<span className="nav__earnings">Unpaid Earnings: $2,633.97</span>
		</nav>
	);
};
