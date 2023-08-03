import "./studentDashboard.css";
import TopBar from "../topBar";
import SideBar from "../sideBar";
// import course1 from "../Image/image2/Image.png";
import ToIcon from "../Image/image2/ToIcon.png";
import tell from "../Image/image2/tell.png";
import mic from "../Image/image2/mic.png";
import Program from "../Image/image2/Program.png";
import Wood from "../Image/image2/Wood.png";
import Counselling from "../Image/image2/Counselling.png";
import Communication from "../Image/image2/Communication.png";
import first from "../Image/image2/first.png";
import Lube from "../Image/image2/Lube.png";
import Bube from "../Image/image2/Bube.png";
import Flag from "../Image/image2/Flag.png";
import Slide from "../Image/image2/Slide.png";
import MeMail from "../Image/image2/MeMail.png";
import YellowBulb from "../Image/image2/YellowBulb.png";
import Cool from "../Image/image2/Cool.png";
import LightBulb from "../Image/image2/LightBulb.png";

function StudentDashboard() {
  return (
    <div className="studentDashboardBody">
      <div className="leftBodyOO">
        <SideBar />
      </div>
      <div className="rightBody">
        <div className="rightBodyTop">
          <TopBar />
        </div>

        <section className="rightSection">
          <div className="rightBodyMiddle">
            <CourseDetails
              image={first}
              numbers="1"
              information="Course completed"
              color="blue"
              percent="50%"
            />
            <CourseDetails
              image={Lube}
              numbers="1"
              information="Certificate earned"
              color="orange"
              percent="10%"
            />
            <CourseDetails
              image={Bube}
              numbers="5"
              information="Certificate earned"
              color="orange"
              percent="10%"
            />
            <CourseDetails
              image={Flag}
              numbers="3"
              information="Certificate earned"
              color="orange"
              percent="10%"
            />
          </div>

          <div className="rightBodyLow">
            <div className="rightBodyLow-Left">
              <p>Continue Courses</p>

              <ComponentCourseA
                courseImage={tell}
                courseTitle="mathematics"
                courseDetailedInfo="Learn the basics of numbers and arithmetic."
                action="Continue"
              />

              <ComponentCourseA
                courseImage={mic}
                courseTitle="English"
                courseDetailedInfo="Learn vocabulary and grammar."
                action="Continue"
              />
              <ComponentCourseA
                courseImage={Program}
                courseTitle="Computer Programming"
                courseDetailedInfo="Introduction to programming language."
                action="Continue"
              />
              <ComponentCourseA
                courseImage={Wood}
                courseTitle="Technical skill training"
                courseDetailedInfo="Carpentry and Woodwork, Plumbing."
                action="Continue"
              />
              <ComponentCourseA
                courseImage={Counselling}
                courseTitle="Rehabilitation and counselling"
                courseDetailedInfo="Get access to Rehabilitation and Counselling sections.."
                action="Continue"
              />
              <ComponentCourseA
                courseImage={Communication}
                courseTitle="Skill development"
                courseDetailedInfo="Learn communication and critical thinking skills."
                action="Continue"
              />
            </div>
            <div className="rightBodyLow-Right">
              <p>Upcoming tasks</p>
              <div className="courseB-Body">
                <ComponentCourseB
                  image={Slide}
                  numbers="Craft Making"
                  information="08.00 am- 10.00 pm"
                />
                <ComponentCourseB
                  image={MeMail}
                  numbers="Counselling"
                  information="08.00 am- 10.00 pm"
                />
                <ComponentCourseB
                  image={YellowBulb}
                  numbers="Task - Arithmetic"
                  information="08.00 am- 10.00 pm"
                />
                <ComponentCourseB
                  image={Cool}
                  numbers="Task 2 - HTML"
                  information="08.00 am- 10.00 pm"
                />
                <ComponentCourseB
                  image={LightBulb}
                  numbers="Quiz Test 01"
                  information="08.00 am- 10.00 pm"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StudentDashboard;

// Create Components Down Here
// componentCurse;

function CourseDetails(props) {
  return (
    <div className="courseDetail">
      <div className="detTop">
        <div
          className="imageTag"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <p>
          {props.numbers} <span>{props.information}</span>
        </p>
      </div>
      <div className="detBottom">
        <div className="horizontalBar">
          <div style={{ backgroundColor: `${props.color}` }}></div>
        </div>
        <p>{props.percent}</p>
      </div>
    </div>
  );
}

// function ComponentCourse(props) {
//   return <div className="componentCurse"></div>;
// }

function ComponentCourseA(props) {
  return (
    <div className="componentCourseA">
      <div
        className="courseImage"
        style={{ backgroundImage: `url(${props.courseImage})` }}
      >
        <p className="infoInsert">{props.courseTitle}</p>
      </div>
      <p>{props.courseDetailedInfo}</p>
      <div className="unitDetails">
        <p>
          <img src={ToIcon} />
          15 Lessons <a href="/courses/details">{props.action}</a>
        </p>
      </div>
    </div>
  );
}

function ComponentCourseB(props) {
  return (
    <div className="courseDetailing">
      <div className="detTopI">
        <div
          className="imageTagI"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <div className="sp">
          <p>
            {props.numbers} <span className="ps">{props.information}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
