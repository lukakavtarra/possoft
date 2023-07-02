import React from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import "./LanguageChange.css"

const LanguageChange = () => {
  const [t, i18n] = useTranslation("global")
  
  const [lg, setlg] = useState(localStorage.getItem('storedLanguage') || []);
  useEffect(() => {
    localStorage.setItem('storedLanguage', lg);
  }, [lg]);

  const handleChangeLanguage = (lang: lg) => {
    i18n.changeLanguage(lang);
  }
  if(localStorage.getItem('storeLanguage') === true ) {
    console.log("yes")
    handleChangeLanguage(localStorage.getItem('storeLanguage'));
  }
  return (
    <div className="languageChangeButtons">
    <div>
      <p className="languageChangeDivider" onClick={() => {
        setlg("en");
        handleChangeLanguage(lg);
        window.location.reload(false);
      }}>EN</p>
      </div>
      <div>
        <p className="languageChangeDivider" onClick={() => {
          setlg("ge");
          handleChangeLanguage(lg)
          window.location.reload(false);
        }}>GE</p>
      </div>
      <div>
      <p onClick={() => {
        setlg("ru");
        handleChangeLanguage(lg)
        window.location.reload(false);
      }}>RU</p>
    </div>
    </div>
  )
}

export default LanguageChange;