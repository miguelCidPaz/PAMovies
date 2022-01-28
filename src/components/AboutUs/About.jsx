import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "../Randomizer/CustomStorageAux";
import Randomizer from "../Randomizer/Randomizer";
  
export default function About() {
  // eslint-disable-next-line no-unused-vars
  const [auxLocal, setAuxLocal] = useLocalStorage('auxiliarRandom', "")
  const location = useLocation().state;
  const [modal, setModal] = useState(location !== undefined && location !== null ? !location.modal : false);
  const [t] = useTranslation("global");

  return (
    <>
    {
    (location !== undefined && location !== null)
      ? location.modal === modal
      ? <Randomizer modal={modal} setModal={setModal} keys={auxLocal} /> 
      : null 
      : null
    } 
    <div className="container ">
      <div className="page">
        <br />
        <br />
        <div className="">
          <h2 className="titleAbout">{t("titleAbout")}</h2>
          <h2 className="titleAbout big">{t("titleAboutBig")} </h2>
        </div>
        <br />
        <div>
          <p className="textAbout">{t("contentAbout")}</p>
        </div>
        <br />
        <div className="order">
          <button className="points"> {t("Development")}.</button>
          <button className="points"> {t("Strategy")}.</button>
          <button className="points"> {t("UserExperience")}.</button>
          <button className="points"> {t("Design")}.</button>
        </div>
        <br />
        <button className="buttonAbout">
          <div>
            <span>
              <p>And you know what?</p>
              <p>:)</p>
            </span>
          </div>
          <div>
            <span>
              <p>It works</p>
              <p>:D</p>
            </span>
          </div>
        </button>
      </div>
    </div>
    </>
  );
}
