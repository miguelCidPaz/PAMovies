import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="container">
        <div className="container-footer">
          <p
            onClick={() => {
              navigate(`/AllGenres`);
            }}
          >
            All Categories
          </p>
          <p
            onClick={() => {
              navigate(`/AboutUs`);
            }}
          >
            About Us
          </p>
        </div>
      </div>
      <div className="subfooter">
        <p className="copy">
          Developed by PAM <span> all rights reserved &copy;</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
