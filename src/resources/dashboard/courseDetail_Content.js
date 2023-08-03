import "./courseDetail_Content.css";
import SideBar from "../sideBar";
import TopBar from "../topBar";
import Button from "../Navigation/button";
import U1 from "../Image/image2/U1.png";
import MarkUp from "../Image/image2/MarkUp.png";
import TU2 from "../Image/image2/TU2.png";
import TU3 from "../Image/image2/TU3.png";
import TU4 from "../Image/image2/TU4.png";
import TU5 from "../Image/image2/TU5.png";
import TU6 from "../Image/image2/TU6.png";
import TU7 from "../Image/image2/TU7.png";
import TU8 from "../Image/image2/TU8.png";
import Avatar from "../Image/image2/Avatar.png";


function CourseDetail_Content() {
  return (
    <div className="studentDashboardBody">
      <div className="leftBodyOO">
        <SideBar />
      </div>

      <div className="rightBody">
        <div className="rightBodyTop">
          <TopBar avatar={Avatar} />
        </div>

        <section className="rightSection">
          <div className="rightBodyLow">
            <div className="rightBodyLow-Left">
              <div className="leftContainer">
                <h2>Discover</h2>
                <p>Courses ** Computer Programming</p>
                <CourseDetail />
              </div>
            </div>
            <div className="rightBodyLow-Right">
              <div className="rightContainer">
                <h2>Basics Overview</h2>

                <div className="bottomBorder">
                  <h2>MODULE 1 - INTRODUCTION</h2>
                  <p>
                    <span>
                      <img src={U1} alt="UI"></img>Definition of HTML
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>

                  <p>
                    <span>
                      <img src={TU2} alt="UI"></img>HTML tags and elements
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU3} alt="UI"></img>Text formatting and ...
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU4} alt="UI"></img>Links and anchor
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU5} alt="UI"></img>Images and multimedia
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU6} alt="UI"></img>HTML forms
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU7} alt="UI"></img>Semantics HTML
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU8} alt="UI"></img>Tables
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                </div>

                <div className="bottomBorder">
                  <h2>COURSE 2 - Learn Manufacturing</h2>
                  <p>
                    <span>
                      <img src={U1} alt="UI"></img>Introduction to CSS
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU2} alt="UI"></img>CSS selector
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU3} alt="UI"></img>CSS properties
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU4} alt="UI"></img>CSS box models
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU5} alt="UI"></img>Styling
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU6} alt="UI"></img>CSS color
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU7} alt="UI"></img>CSS color
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={TU8} alt="UI"></img>CSS transitions
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CourseDetail_Content;

// An Internal Component

function CourseDetail() {
  return (
    <div className="border">
      <div className="imageArea">
        <iframe
          width="770"
          height="491"
          src="https://www.youtube.com/embed/zOjov-2OZ0E"
          title="Introduction to Programming and Computer Science - Full Course"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <h3>Computer Programming</h3>
      <p>By Oluwasijibomi Fayilenu, Computer Programming Expert</p>
      <div className="courseInfo">
        <span>Information</span>
        <span className="roundedTextBox">Content</span>
        <span>Content</span>
        <span>Community</span>
        <span>Students</span>
      </div>

      <div className="directToUnit">
        <div>
          <p>Course 1 of 6</p>
          <p>Course 1 - Introduction</p>
          <div className="hr-lightOrange">
            <div className="hr-orange"></div>
          </div>
          <p>1 completed units of 6 available</p>
        </div>
        <Button url="assessment" buttonText="Go to Unit 2" />
      </div>
      <article>
        <h3>Module 1 - Introduction</h3>
        <p>Lesson 1: HTML fundamentals </p>
        <p>Lesson 2: HTML semantic elements</p>
        <p>You have completed course 1: Take Assessment</p>
        <h3>Module 2- CSS BASICS</h3>
        <h3>Course 3-CSS Layouts and Styling</h3>
      </article>
    </div>
  );
}
