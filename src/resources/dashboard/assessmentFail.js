import "./assessmentFail.css";
import cancelIcon from "../Image/image2/cancel icon.png";
import SideBar from "../sideBar";
import TopBar from "../topBar";
import userImage from "../Image/image2/userImage.png";
import Button from "../Navigation/button";


function AssessmentFail() {
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
          <div className="passMark">
            <h1>25%</h1>
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
