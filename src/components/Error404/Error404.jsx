import React from "react";

const Error404 = () => {
  return (
    <div className="error">
      <div className="leftside">
        <p className="cry">Ooops!</p>
        <p className="just">It's just a 404 Error!</p>
        <p className="misplaced">
          We can't find the page you're looking for.
          <br /> Maybe you can find what you need from our homepage.
        </p>
      </div>
      <div className="rightside">
        <img
          className="sad"
          src="https://media4.giphy.com/media/SXCQWrsob9TGg/giphy.gif?cid=ecf05e4734l9dr1tskf6p35hi5gjmffmkc8sqp5jcl385k4h&rid=giphy.gif&ct=g"
          alt="sadness"
        />
      </div>
    </div>
  );
};
export default Error404;
