import "./courses.css";
import background from "../Image/courses.png";
import Header from "../Navigation/header";
import Footer from "../Navigation/footer";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://liberlearn-backend.up.railway.app/api/subjects')
      .then(response => response.json())
      .then(data => {
        // console.log('API Response:', data);
        const mappedCourses = data.map(
          apiCourse => ({
            courseId: apiCourse.id,
            courseSlug: apiCourse.slug,
            courseImage: apiCourse.image_link,
            courseName: apiCourse.title,
            courseInfo: apiCourse.info,
            lessonNum: apiCourse.number_of_courses,
          })
        );
        // console.log('Mapped Courses:', mappedCourses);
        setCourses(mappedCourses);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <div className="coursePage">
      <Header coursesActive="coursesActive" />
      <div
        className="CoursesBody"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div className="exploreCourses">
        <h2>Explore <span className="blueText">Courses</span></h2>
        <p>
          All our courses offers assignments, mentorship, relevant courses, and
          engaging videos.
        </p>
        <div className="courseDiv">
          {courses.map(
            course => (
              <Link to={`/courses/${course.courseSlug}`} key={course.courseId}
                className="course-card-link">
                <CoursesDiv
                  key={course.courseName} // Assuming courseName is unique
                  courseImage={course.courseImage}
                  courseName={course.courseName}
                  courseInfo={course.courseInfo}
                  lessonNum={course.lessonNum}
                  color={getRandomColor()}
                />
              </Link>
            )
          )}
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
        <p>
          {props.courseInfo.length > 120 ?
          `${props.courseInfo.substring(0, 100)} ...` :
          props.courseInfo}
        </p>
      </div>
      <div className="lessonNum">
        <p>{props.lessonNum} Lessons</p>
      </div>
    </div>
  );
}

function getRandomColor() {
  const hexColors = [
    "#72bcd4", "#33FFA8", "#7DFDFE", "#AAF0D1", "#20B2AA", "#3B9C9C", "#00A36C",
    "#77DD77", "#CCFB5D", "#64E986", "#4863A0", "#6AFB92", "#C4FECA", "#A7EFFF",
    "#bf5f4c", "#F7E7CE", "#FBE7A1", "#FFE87C", "#B5A642", "#c6e2ff", "#fa8072", "#1E90FF",
    "#357EC7", "#3BB9FF", "#AB784E", "#EE9A4D", "#B0E0E6", "#FBB2F3",
    "#98AFC7", "#3090C7", "#7468bd", "#CCCCFF", "#FAF0E6", "#A7AAFF",
    "#D2691E", "#52595D", "#4682B4", "#E6E6FA", "#DDA0DD", "#438D80", "#F0E68C",
    "#ffd700", "#b0e0e6", "#c0d6e4", "#00ced1", "#ff7f50", "#5fa0b6", "#afeeee", "#81d8d0",
    "#4cbbf5", "#66cccc", "#6897bb", "#b4eeb4", "#16E2F5", "#ffdab9", "#dddddd",
    "#999999", "#2acaea", "#3399ff", "#a0db8e"
  ];
  const randomIndex = Math.floor(Math.random() * hexColors.length);
  return hexColors[randomIndex];
}

