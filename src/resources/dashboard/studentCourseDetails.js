import "./studentCourseDetails.css";
import SideBar from "../sideBar";
import TopBar from "../topBar";
import TCI1 from "../Image/image2/TCI1.png";
import TCI2 from "../Image/image2/TCI2.png";
import TCI3 from "../Image/image2/TCI3.png";
import TCI4 from "../Image/image2/TCI4.png";
import TCI5 from "../Image/image2/TCI5.png";
import TCI6 from "../Image/image2/TCI6.png";
import TCI7 from "../Image/image2/TCI7.png";
import TCI8 from "../Image/image2/TCI8.png";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getIdFromSlug from './getIdFromSlug'

function StudentCourseDetails() {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      const courseId = await getIdFromSlug(slug);

      if (courseId !== null) {
        fetch(`https://liberlearn-backend.up.railway.app/api/subjects/${courseId}`)
        .then(response => response.json())
        .then(data => {
          setCourse(data);
        })
        .catch(error => {
          console.error('Error fetching course details:', error);
        });
      }
    }

    fetchCourse();
  }, [slug]);

  if (!course) {
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

        <CourseDetail
          key               = {course.id}
          id                = {course.id}
          slug              = {course.slug}
          title             = {course.title}
          info              = {course.info}
          intro_video       = {course.intro_video}
          number_of_courses = {course.number_of_courses}
          courses           = {course.courses}
        />
      </div>
    </div>
  );
}
export default StudentCourseDetails;

// An Internal Component

function CourseDetail(props) {
  return (
    <section className="rightSection">
      <div className="rightBodyLow">
        <div className="rightBodyLow-Left">
          <div className="leftContainer">
            <h2>Discover</h2>
            <p>
              Courses &gt;{" "}
              <span className="ElectSP">{props.title}</span>
            </p>
            <div className="border">
              <div className="imageArea">
                <iframe
                  src={props.intro_video}
                  title={props.title}
                  // frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <h3>{props.title}</h3>
              <p>
                By Oluwasijibomi Fayilenu, <span className="ElectSP">Computer Programming Expert</span>
              </p>
              <div className="courseInfo">
                <span className="roundedTextBox">Information</span>
                <span>Content</span>
                <span>Community</span>
                <span>Students</span>
              </div>
              <article className="StudentArticleCDP">
                <p>
                  {props.info}
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className="rightBodyLow-Right">
          <div className="rightContainer">
            <div className="bottomBorder">
              <a href={`/courses/${props.slug}/detail`} className="enrollBtn">
                Enroll
              </a>
            </div>
            <div className="bottomBorder">
              <h2 className="ElectSP1">What you'll learn</h2>
              <p>
                You will learn the basics of the {props.title}
              </p>
            </div>
            <div className="bottomBorder">
              <h2 className="ElectSP1">This course includes:</h2>
              <p>
                <span>
                  <img src={TCI1} alt="TCI1"></img> 100% positive reviews
                </span>
              </p>
              <p>
                <span>
                  <img src={TCI2} alt="TCI2"></img>
                  {props.courses.length > 0 ? (
                    <>
                      { props.courses.reduce(
                        (totalStudents, course) => totalStudents + course.number_of_students, 0)
                      } Students
                    </>
                  ) : (
                    "No student enrolled yet"
                  )}
                </span>
              </p>
              <p>
                <span>
                  <img src={TCI3} alt="TCI3"></img>
                  {props.courses.length > 0 ? (
                    <>
                      { props.courses.reduce(
                        (totalLessons, course) => totalLessons + course.lessons.length, 0)
                      } Lessons (10h 5m)
                    </>
                  ) : (
                    "No lessons yet"
                  )}
                </span>
              </p>
              <p>
                <span>
                  <img src={TCI4} alt="TCI4"></img>{props.number_of_courses} Modules
                </span>
              </p>
              <p>
                <span>
                  <img src={TCI5} alt="TCI5"></img>20 downloads (20 files)
                </span>
              </p>
              <p>
                <span>
                  <img src={TCI6} alt="TCI6"></img>Available from the app
                </span>
              </p>
              <p>
                <span>
                  <img src={TCI7} alt="TCI7"></img>Audio: English
                </span>
              </p>
              <p>
                <span>
                  <img src={TCI8} alt="TCI8"></img>
                  Level: <span className="level">Beginner</span>
                </span>
              </p>
            </div>

            <div className="tags">
              <h2 className="ElectSP1">Tags:</h2>
              <p>
                <span>HTML X</span> <span>CSS X</span>
              </p>
              <br />
              <p>
                <span>togs X</span> <span>coding X</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

