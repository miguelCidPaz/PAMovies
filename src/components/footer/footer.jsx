import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const navigate = useNavigate();
  const [t] = useTranslation("global");

  return (
    <footer className="footer">
      <div className="container">
        <div className="container-footer">
          <p
            className="itemFooter"
            onClick={() => {
              navigate(`/AllGenres`);
            }}
          >
            {t("dividers.categories")}
          </p>
          <p
            className="itemFooter"
            onClick={() => {
              navigate(`/AboutUs`);
            }}
          >
            {t("aboutUs")}
          </p>
        </div>
      </div>
      <div className="subfooter">
        <img
          className="tmdb"
          alt="atribution"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
        />

        <p className="copy">
          <span>
            {" "}
            &copy; 2022 PAM Movies. Developed by PAM. All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
