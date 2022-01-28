import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { genres } from "../Main/data-main";
import Divisor from "../Divisor/Divisor";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export default function About() {
  const location = useLocation().state;
  const navigate = useNavigate();
  const [t] = useTranslation("global");

  return (
    <div className="container ">
      {/* <Divisor title="About us"></Divisor> */}
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
  );
}
