import React from "react";
import siteLogo from "../../assets/images/logo-contributor.png";
import "./Header.scss";
import { Nav } from "../Nav/Nav";

export const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<a className="header__image" href="/" />
				<div className="header__buttons">
					<button className="header__user">Stephanie</button>
					<button className="header__language">English</button>
				</div>
			</div>
			<Nav />
		</header>
	);
};
