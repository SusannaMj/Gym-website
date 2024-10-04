import React from "react";
import "./courses.css";
import Footer from "../../Footer/footer";
import classImage from "../../Images/gym-class (2).jpg";

export default function Courses() {
  return (
    <div className="courseBody">
      <div className="courses">
        {" "}
        <div className="courses-wrapper">
          <h2>Training that suits everyone</h2>
          <h1>From open gym to personal training</h1>

          <div className="boxes">
            <div className="box boxOne">
              <h3>Classes</h3>
              <p>
                We offer classes to suit everyones schedule and favorites - from
                Zumba, to Karate, join and have fun
              </p>
            </div>

            <div className="box boxTwo">
              <h3>Gym</h3>
              <p>Our gym is open 24/7 and offers the latest equipment</p>
            </div>

            <div className="box boxThree">
              <h3>Personal Training</h3>
              <p>
                Our personal trainers will get you to reach your goals while
                bulding confidence and health
              </p>
            </div>

            <div className="box boxFour">
              <h3>Entertainment</h3>
              <p>
                We have an onsite juicebar, as well as free childcare, so you
                donät have to worry about anything despite your workout
              </p>
            </div>
          </div>
        </div>
      </div>
      Foto von{" "}
      <a href="https://unsplash.com/de/@brucemars?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        bruce mars
      </a>{" "}
      auf{" "}
      <a href="https://unsplash.com/de/fotos/frau-tragt-sport-bh-und-steht-auf-dem-boden-der-turnhalle-pFyKRmDiWEA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Unsplash
      </a>
      <Footer />
    </div>
  );
}
