import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import { useLocalStorage } from "../Details/CustomStorage";
import Randomizer from "../Randomizer/Randomizer";

export default function About() {
  const location = useLocation().state;
  const [modal, setModal] = useState(location !== undefined && location !== null ? !location.modal : false);
  // eslint-disable-next-line no-unused-vars
  const [auxLocal, setAuxLocal] = useLocalStorage('auxiliarRandom', "")

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
      {/* <Divisor title="About us"></Divisor> */}
      <div className="page">
        <br />
        <br />
        <div className="">
          <h2 className="titleAbout">We execute our ideas </h2>
          <h2 className="titleAbout big">from start to finish. </h2>
        </div>
        <br />
        <div>
          <p className="textAbout">
            Why? Because we design and create for (and within) context.
            Combining deep technical expertise with artistic talent, we create
            everything inside the medium it is meant for.So, from the very
            start, every stage of our creative process is holistic, functional,
            and interactive. From every angle, our process is highly
            collaborative. Internally, we have overlapping roles. Externally, we
            socialize stakeholders into our decision-making; and we test and
            validate our ideas with real people that want to use them.
          </p>
        </div>
        <br />
        <div className="order">
          <button className="points"> Development.</button>
          <button className="points"> Strategy.</button>
          <button className="points"> User Experience.</button>
          <button className="points"> Design.</button>
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
