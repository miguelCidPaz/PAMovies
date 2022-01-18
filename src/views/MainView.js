import React from "react";
import ReactDOM from "react-dom";
import BirthdayPeople from "../components/birthdayPeople/BirthdayPeople";
// import Main from '../components/Main/main'
import Main from "../components/Main/main";
import News from "../components/news/News";
function MainView() {
  return (
    <div>
      <Main />
      {/* <News></News> */}
      <BirthdayPeople></BirthdayPeople>
    </div>
  );
}
export default MainView;
