import React from "react";
import siteLogo from "../../assets/images/logo-contributor.png";
import "./Header.scss";
import Promo from "../Promo/Promo";
import { Nav } from "../Nav/Nav";

export const Header = () => {
	return (
		<header className="header">
			<Promo />
			<div className="header__container">
				<a className="header__image" href="/" />
				<div className="header__buttons">
					<button className="header__user"><span className="glyphicon glyphicon-user"></span>Stephanie<span class="glyphicon glyphicon-menu-down"></span></button>
					<button className="header__language"><span class="glyphicon glyphicon-globe"></span>English<span class="glyphicon glyphicon-menu-down"></span></button>
				</div>
			</div>
			<Nav />
		</header>
	);
};
