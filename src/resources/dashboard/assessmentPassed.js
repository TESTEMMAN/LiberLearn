import "./assessmentPassed.css";
import passImage from '../Image/image2/e commerce completed order.png';
import userImage from "../Image/image2/userImage.png";
import SideBar from "../sideBar";
import TopBar from "../topBar";
import Button from "../Navigation/button";
import { useLocation } from "react-router-dom";

function AssessmentPassed() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const score = searchParams.get('score');

  return (
    <div className="assessmentPassedBody">
      <div className="assPassedLeftBody">
        <SideBar />
      </div>

      <div className="assPassedRightBody">
        <div className="rightBodyTop">
          <TopBar avatar={userImage} />
        </div>

        <section className="assPassedRightSection">
          <h2>Discover</h2>
          <p>Courses Computer Programming Assessment</p>
          <h1>Congrats</h1>
          <p>
            Congratulations on completing your course! 🎉🎓 Your hard work and
            dedication have paid off. Keep striving for excellence and embrace
            the opportunities ahead. Here's to a bright future! 🌟🌱
          </p>
          <div className="passMark">
            <h1>{score}%</h1>
            <img src={passImage} alt="e commerce completed order" />
          </div>
          <div className="btnHome">
            <Button
              url="/"
              bgColor="rgba(46, 49, 146, 1)"
              buttonText="Home"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default AssessmentPassed;

