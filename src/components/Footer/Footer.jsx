import React from "react";
import './index.css';
import telegram from "./img/Telegram.svg";
import instagram from "./img/Instagram.svg";
import whatsapp from "./img/Whatsapp.svg";
import vk from "./img/VK.svg";
import Logo from "../Logo/Logo";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<div className="footer__col">
						<Logo className="logo footer__logo" href="#" title="Логотип" aria-hidden={true}/>
					</div>
					<div className="footer__col">
						<nav className="menu-bottom">
							<a href="/catalogue" className="menu-bottom__item">
								Избранное
							</a>
							<a href="/catalogue" className="menu-bottom__item">
								Корзина
							</a>
							<a href="/catalogue" className="menu-bottom__item">
								Контакты
							</a>
						</nav>
					</div>
					<div className="footer__col">
						<nav className="menu-bottom">
							<a href="/catalogue" className="menu-bottom__item">
								Условия сервиса
							</a>
						</nav>
					</div>
                    <div className="footer__col">
                        <div className="language">
                          <nav className="menu-bottom">
                            <li className="language__item">
                              <a href="language__link" className="menu-bottom__item">
								Каз
						      </a>
                            </li>
                            <li className="language__item">
						      <a href="language__link" className="menu-bottom__item">
								Рус
						      </a>
                            </li>
                            <li className="language__item">
						      <a href="language__link" className="menu-bottom__item">
								Eng
						      </a>
                            </li>
                          </nav>
                        </div>
                    </div>
					<div className="footer__col">
						<div className="contacts">
							<ul className="socials contacts__socials">
								<li className="socials__item">
									<a className="socials__link" href="/#">
										<img src={telegram} alt="telegram" className="socials__icon"/>
									</a>
								</li>
								<li className="socials__item">
									<a className="socials__link" href="/#">
										<img src={whatsapp} alt="whatsapp" className="socials__icon"/>
									</a>
								</li>
								<li className="socials__item">
									<a className="socials__link" href="/#">
										<img src={instagram} alt="instagram" className="socials__icon"/>
									</a>
								</li>
								<li className="socials__item">
									<a className="socials__link" href="/#">
										<img src={vk} alt="vk" className="socials__icon"/>
									</a>
								</li>
							</ul>
						</div>

					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
