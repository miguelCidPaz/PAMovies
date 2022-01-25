import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import TranslateIcon from "@mui/icons-material/Translate";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";
export default function Nav() {
  const [t, i18n] = useTranslation("global");
  const [language, setLanguage] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const Spanish = (event) => {
    handleClose();
    i18n.changeLanguage("es");
  };
  const English = (event) => {
    handleClose();
    i18n.changeLanguage("en");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    // changeLang();
  };
  return (
    <>
      <nav className="nav">
        <p className="views-nav">{t("header.top-movies")}</p>
        <p className="views-nav">inicio</p>
        <p className="views-nav">inicio</p>

        <div className="views-nav">
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <TranslateIcon></TranslateIcon>
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            className="language"
          >
            <MenuItem onClick={Spanish}>Español</MenuItem>
            <MenuItem onClick={English}>Ingles</MenuItem>
          </Menu>
        </div>
      </nav>
    </>
  );
}
