import React from "react";
import "./courses.css";

export default function Courses() {
  return (
    <div className="courses">
      {" "}
      <div className="wrapper">
        <h1>Training that suits everyone</h1>
        <h2>From open gym to personal training</h2>

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
    </div>
  );
}
