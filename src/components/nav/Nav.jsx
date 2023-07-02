import React from 'react'
import { useTranslation } from "react-i18next";
import "./nav.css"
import LanguageChange from '../languagechange/LanguageChange';
import mainlogo from '../images/mainlogo.png'

const Nav = () => {
  let classNames = [];
  if (localStorage.getItem('storedLanguage') === "ge") {
    classNames.push('georgianStyle')
  } else if (localStorage.getItem('storedLanguage') === "en") {
    classNames.push('englishStyle')
  } else if (localStorage.getItem('storedLanguage') === "ru") {
    classNames.push('russianStyle')
  } else {
    classNames.push("englishStyle")
  }
    const [t, i18n] = useTranslation("global");

  return (
    <div className={classNames.join(" ")}>
    <div className='fullNavBar'>
    <div className="fullLogo ">
    <img className='mainLogo' src={mainlogo} alt="mainlogo" />
    <h1><span className='posSoft'>POS soft</span>  <span>sakartvelo</span> </h1>
    </div>
    <div className="gridBar">
    <div className="navBarUpperside">
    <button className={`${classNames.join(" ")}` }>{t("navbar.upperside.button")}</button>
    <a href="tel:+995 574 55 9955">+995 574 55 9955</a>
    </div>
    <div className="">
        <ul className='navBar' >
            <li >{t("navbar.restaurant")}</li>
            <li>{t("navbar.functional")}</li>
            <li>{t("navbar.prices")}</li>
            <li>{t("navbar.services")}</li>
            <li>{t("navbar.aboutus")}</li>
            <LanguageChange />
        </ul>
        </div>
        </div>
        </div>
        <hr />  
    </div>
  )
}

export default Nav