import "./studentDashboard.css";
import TopBar from "../topBar";
import SideBar from "../sideBar";
// import course1 from "../Image/image2/Image.png";
import ToIcon from "../Image/image2/ToIcon.png";
// import tell from "../Image/image2/tell.png";
// import mic from "../Image/image2/mic.png";
// import Program from "../Image/image2/Program.png";
// import Wood from "../Image/image2/Wood.png";
// import Counselling from "../Image/image2/Counselling.png";
// import Communication from "../Image/image2/Communication.png";
import first from "../Image/image2/first.png";
import Lube from "../Image/image2/Lube.png";
import Bube from "../Image/image2/Bube.png";
import Flag from "../Image/image2/Flag.png";
import Slide from "../Image/image2/Slide.png";
import MeMail from "../Image/image2/MeMail.png";
import YellowBulb from "../Image/image2/YellowBulb.png";
import Cool from "../Image/image2/Cool.png";
import LightBulb from "../Image/image2/LightBulb.png";
// import QuizQ from "../Image/image2/QuizQ.png";

import { useEffect, useState } from "react";

function StudentDashboard() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    fetch(`https://liberlearn-backend.up.railway.app/api/subjects`)
      .then(response => response.json())
      .then(data => {
        setCourses(data);
      })
      .catch(error => {
        console.error('Error fetching course details:', error);
      });
  });

  if (!courses) {
    return <div>Loading...</div>;
  }
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
              information="Course in progress"
              color="orange"
              percent="70%"
            />
            <CourseDifferent
              image={Flag}
              numbers="3"
              information="Career path"
              color="orange"
              percent="Start quiz" img=""
            />
          </div>
          <div className="rightBodyLow">
            <div className="rightBodyLow-Left">
              <p>Continue Courses</p>
              <div className="student-course-list">
                {courses.map(
                  course => (
                    <ComponentCourseA
                      key={course.id}
                      id={course.id}
                      title={course.title}
                      info={course.info}
                      image={course.image_link}
                      slug = {course.slug}
                      action="Continue"
                      url={`/courses/${course.slug}`}
                      courses={course.courses}
                    />
                  )
                )}
              </div>
            </div>
            <div className="rightBodyLow-Right-SDB">
              <p>Upcoming tasks</p>
              <div className="courseB-Act">
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
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <p className="infoInsert">{props.title}</p>
      </div>
      <p>
        {props.info && props.info.length > 80
          ? `${props.info.substring(0, 120)} ...`
          : props.info}
      </p>
      <div className="unitDetails">
        <p>
          <img src={ToIcon} alt="" />
          {props.courses.length > 0 ? (
            <>
              {props.courses.reduce(
                (totalLessons, course) => totalLessons + course.lessons.length, 0)
              } Lessons
            </>
          ) : (
            "No lessons yet"
          )}
          <a href={props.url}>{props.action}</a>
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


function CourseDifferent(props) {
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
        {/* <div className="horizontalBar">
          <div style={{ backgroundColor: `${props.color}` }}></div>
        </div> */}
        <p>{props.percent}</p>
      </div>
    </div>
  );
}