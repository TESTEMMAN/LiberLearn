import "./assessmentFail.css";
import cancelIcon from "../Image/image2/cancel icon.png";
import SideBar from "../sideBar";
import TopBar from "../topBar";
import userImage from "../Image/image2/userImage.png";
import Button from "../Navigation/button";
import { useLocation } from 'react-router-dom';


function AssessmentFail() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const score = searchParams.get('score');

  return (
    <div className="assessmentFailBody">
      <div className="assFailLeftBody">
        <SideBar />
      </div>

      <div className="assFailRightBody">
        <div className="rightBodyTop">
          <TopBar avatar={userImage} />
        </div>

        <section className="assFailRightSection">
          <h2>Discover</h2>
          <p>Courses Computer Programming Assessment</p>
          <h1>Oops</h1>
          <p>
            Don't worry about the test result. Failure is part of learning. Use
            this opportunity to improve and retake the test. You've got this!
            🌟📚💪
          </p>
          <div className="failMark">
            <h1>{score}%</h1>
            <img src={cancelIcon} alt="assessment failed" />
          </div>
          <div className="btnRetake">
            <Button url="/" bgColor='rgba(39, 174, 96, 1)'
 buttonText="Retake" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default AssessmentFail;
