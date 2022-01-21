import React from "react";
import BirthdayPeople from "../components/birthdayPeople/BirthdayPeople";
import Main from "../components/Main/main";

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
