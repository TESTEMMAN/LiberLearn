import "./courses.css";
import background from "../Image/courses.png";
import Header from "../Navigation/header";
import Footer from "../Navigation/footer";
import mathematics from '../Image/mathematics.png';
import English from '../Image/English.png';
import tools from '../Image/tools.png';
import bulb from '../Image/bulb.png';
import rehab from '../Image/rehab.png';


function CoursesPage() {
  return (
    <div className="coursePage">
      <Header coursesActive="coursesActive" />
      <div
        className="CoursesBody"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div className="exploreCourses">
        <h1><h1>Explore <span className="blueText">Courses</span></h1></h1>
        <p>
          All our courses offers assignments, mentorship, relevant courses, and
          engaging videos.
        </p>
        <div className="courseDiv">
          <CoursesDiv
            courseImage={mathematics}
            courseName="Mathematics"
            courseInfo="Our students have access to topics on Number and Arithmetic."
            lessonNum={20}
            color="#A7AAFF"
          />
          <CoursesDiv
            courseImage={English}
            courseName="English"
            courseInfo="Our students have access to topics on Number and Arithmetic."
            lessonNum={20}
            color="#FBB2F3"
          />
          <CoursesDiv
            courseImage={bulb}
            courseName="Skill Development"
            courseInfo="Digital skills, Teamwork. ."
            lessonNum={20}
            color="#C4FECA"
          />
          <CoursesDiv
            courseImage={tools}
            courseName="Technical Skill"
            courseInfo="Carpentry, Plumbing, Computer programming, Graphic Design.. ."
            lessonNum={20}
            color="#A7EFFF"
          />
          <CoursesDiv
            courseImage={rehab}
            courseName="Rehabilitation"
            courseInfo="Anger management, Life skill training, Mental health and well-being, ."
            lessonNum={20}
            color="#A7AAFF"
          />
          
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CoursesPage;


function CoursesDiv(props) {
  return (
    <div className="indCourse" style={{ backgroundColor: props.color }}>
      <div className="coursesImage">
        <img src={props.courseImage} alt={props.courseName} />
      </div>
      <div className="courseName">
        <h1>{props.courseName}</h1>
      </div>
      <div className="courseInfo">
        <p>{props.courseInfo}</p>
      </div>
      <div className="lessonNum">
        <p>{props.lessonNum} Lessons</p>
      </div>
    </div>
  );
}