import React from "react";

import './_about.scss';

const About = () => {
	return (
		<div className="about-wrapper">
			<div className="about-title">
				<h2>Как работает наш сервис?</h2>
			</div>

			<div className="about-text">
				<span>Вы вводите ключевыми словами те продукты, которые у Вас есть, и наш бот-повар сопоставляет это с простыми рецептами, которые Вы сможете без труда приготовить изспользуя только те продукты, которые Вы указали.</span>
			</div>
		</div>
	)
};

export default About;