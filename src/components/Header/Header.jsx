import React from "react";

import logo from '../../img/recipe.png';

import './_header.scss';

const Header = () => {
	return (
		<header id="header">
			<div className="header-wrapper">
				<div className="header-logo">
					<div className="header-img">
						<img src={logo} alt="" />
					</div>
					<div className="header-logo-text">
						<span>Smart Reicipe</span>
					</div>
				</div>

				<div className="header-title">
					<div className="header-title-text">
						<h2>Подбор рецептов по Вашим продуктам.</h2>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;