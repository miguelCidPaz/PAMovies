import React from "react";
import { useTranslation } from "react-i18next";
import ButtonTranslations from "./buttomTranslate";

export default function Nav() {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <nav className="nav">
        <p className="views-nav">{t("header.top-movies")}</p>
        <p className="views-nav">inicio</p>
        <p className="views-nav">inicio</p>
        <ButtonTranslations></ButtonTranslations>
      </nav>
    </>
  );
}
