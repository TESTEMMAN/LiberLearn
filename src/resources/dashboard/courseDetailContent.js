import "./courseDetailContent.css";
import SideBar from "../sideBar";
import TopBar from "../topBar";
import Button from "../Navigation/button";
import L1 from "../Image/image2/L1.png";
import MarkUp from "../Image/image2/MarkUp.png";
import L2 from "../Image/image2/L2.png";
import L3 from "../Image/image2/L3.png";
import L4 from "../Image/image2/L4.png";
import L5 from "../Image/image2/L5.png";
import L6 from "../Image/image2/L6.png";
import L7 from "../Image/image2/L7.png";
import L8 from "../Image/image2/L8.png";
import L88 from "../Image/image2/L88.png";
import ItmUP from "../Image/image2/ItmUP.png";
import ItmDown from "../Image/image2/ItmDown.png";
import PlayHub from "../Image/image2/PlayHub.png";
import Avatar from "../Image/image2/Avatar.png";

function CourseDetailContent() {
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
                <p>Courses &gt; <span>Computer Programming</span></p>
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
                      <img src={L1} alt="L1"></img>Definition of HTML
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>

                  <p>
                    <span>
                      <img src={L2} alt="L2"></img>HTML tags and elements
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={L3} alt="L3"></img>Text formatting and ...
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={L4} alt="L4"></img>Links and anchor
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={L5} alt="L5"></img>Images and multimedia
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={L6} alt="L6"></img>HTML forms
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={L7} alt="L7"></img>Semantics HTML
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={L8} alt="L8"></img>Tables
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                </div>

                <div className="bottomBorder">
                  <h2>COURSE 2 - Learn Manufacturing</h2>
                  <p>
                    <span>
                      <img src={L1} alt="L1"></img>Introduction to CSS
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={L2} alt="L2"></img>CSS selector
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={L3} alt="L3"></img>CSS properties
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={L4} alt="L4"></img>CSS box models
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={L5} alt="L5"></img>Styling
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={L6} alt="L6"></img>CSS color
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={L7} alt="L7"></img>CSS color
                    </span>
                    <img src={MarkUp} alt="MarkUp"></img>
                  </p>
                  <p>
                    <span>
                      <img src={L88} alt="L88"></img>CSS transitions
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

export default CourseDetailContent;

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
        <div className="dirToUnit-Container">
          <p>Course 1 of 6</p>
          <p>Course 1 - Introduction</p>
          <div className="hr-lightOrange">
            <div className="hr-orange"></div>
          </div>
          <p>1 completed units of 6 available</p>
        </div>
        <Button buttonText="Go to Unit 2" />
      </div>
      <article className="courseDetailArticle">
        <h3>
          Module 1 - Introduction
          <span>
            <img src={ItmUP} alt="ItmUp"></img>
          </span>
        </h3>
        <p style={{ backgroundImage: `url(${PlayHub})` }}>
          Lesson 1: HTML fundamentals{" "}
          <span>
            <img src={MarkUp} alt="MarkUp"></img>
          </span>
        </p>
        <p style={{ backgroundImage: `url(${PlayHub})` }} >
          Lesson 2: HTML semantic elements
          <span>
            <img src={MarkUp} alt="MarkUp"></img>
          </span>
        </p>
        <p>
          <span className="TakeAssessment">
            You have completed course 1:
            <a href="assessment">Take Assessment</a>
          </span>
        </p>
        <h3>
          Module 2- CSS BASICS
          <span>
            <img src={ItmDown} alt="ItmDown"></img>
          </span>
        </h3>
        <h3>
          Course 3-CSS Layouts and Styling
          <span>
            <img src={ItmDown} alt="ItmDown"></img>
          </span>
        </h3>
      </article>
    </div>
  );
}
