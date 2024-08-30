import React from "react";
import "./courses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

export default function Courses() {
  return (
    <div className="courseBody">
      <div className="courses">
        {" "}
        <div className="wrapper">
          <h2>Training that suits everyone</h2>
          <h1>From open gym to personal training</h1>

          <div className="boxes">
            <div className="boxOne">
              <h3>Classes</h3>
              <p>
                We offer classes to suit everyones schedule and favorites - from
                Zumba, to Karate, join and have fun
              </p>
            </div>

            <div className="boxTwo">
              <h3>Gym</h3>
              <p>Our gym is open 24/7 and offers the latest equipment</p>
              <div className="icon">
                <FontAwesomeIcon icon={faDumbbell} />
              </div>
            </div>

            <div className="boxThree">
              <h3>Personal Training</h3>
              <p>
                Our personal trainers will get you to reach your goals while
                bulding confidence and health
              </p>
            </div>

            <div className="boxFour">
              <h3>Entertainment</h3>
              <p>
                We have an onsite juicebar, as well as free childcare, so you
                donät have to worry about anything despite your workout
              </p>
            </div>
          </div>
        </div>
        <footer>
          <span>
            Free SVG Background by{" "}
            <a target="_blank" href="https://bgjar.com" rel="noreferrer">
              BGJar
            </a>
          </span>
          <span>
            <a href="https://www.flaticon.com/free-icons/gym" title="gym icons">
              Gym icons created by Freepik - Flaticon
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
