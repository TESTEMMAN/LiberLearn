import "./courseDetailContent.css";
import SideBar from "../sideBar";
import TopBar from "../topBar";
import Button from "../Navigation/button";
import MarkUp from "../Image/image2/MarkUp.png";
import PlayHub from "../Image/image2/PlayHub.png";
import Avatar from "../Image/image2/Avatar.png";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import getIdFromSlug from "./getIdFromSlug";

function CourseDetailContent() {
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
    <div className="studentDashboardBody detail">
      <div className="leftBodyOO">
        <SideBar />
      </div>

      <div className="rightBody">
        <div className="rightBodyTop">
          <TopBar avatar={Avatar} />
        </div>

        <CourseDetail
          key               = {course.id}
          id                = {course.id}
          title             = {course.title}
          info              = {course.info}
          intro_video       = {course.intro_video}
          number_of_courses = {course.number_of_courses}
          slug              = {course.slug}
          courses           = {course.courses.sort(
                                (a, b) => a.id - b.id
                              )}
        />
      </div>
    </div>
  );
}

export default CourseDetailContent;

// Internal Components

function CourseDetail(props) {
  return (
    <section className="rightSection">
      <div className="rightBodyLow">
        <div className="rightBodyLow-Left">
          <div className="leftContainer">
            <h2>Discover</h2>
            <p className="course-breadcrumb">Courses &gt; <span>{props.title}</span></p>
            <div className="border">
              <div className="imageArea">
                <iframe
                  src={props.intro_video}
                  title="I                                                                                                                                                                                                                                                                                            introduction to Programming and Computer Science - Full Course"
                  // frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-black">{props.title}</h3>
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
                  <p  className="text-black">Module 1 of {props.number_of_courses}</p>
                  <p>Module 1 - Introduction</p>
                  <div className="hr-lightOrange">
                    <div className="hr-orange"></div>
                  </div>
                  <p>1 completed unit of {
                    props.courses && props.courses.map(course => {
                      if (course.id === 1) {
                        return `${course.lessons.length}`;
                      }
                      return '';
                    })
                  } available</p>
                </div>
                <Button buttonText="Go to Unit 2" />
              </div>
                  <Module
                    courses = {props.courses}
                  />
            </div>
          </div>
        </div>
        <div className="rightBodyLow-Right">
          <div className="rightContainer">
            <h2>Course Overview</h2>
              {
                props.courses && props.courses.map((course, index) => (
                  <div className="bottomBorder">
                    <h2>MODULE {index + 1} - {course.title.toUpperCase()}</h2>
                    {
                      course.lessons && course.lessons.map((lesson, index) => (
                        <a href={`/courses/${course.slug}/${lesson.id}`} className="lessons-links">
                          <p>
                            <div className="lesson-menu">
                              <span className="symbol">
                                {`L${index + 1}`}
                              </span>
                              {lesson.title}

                              <img src={MarkUp} alt="MarkUp" />
                            </div>
                          </p>
                        </a>
                      ))
                    }
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    </section>
  );
}

function Module(props) {
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleLessons = (index) => {
    if (expandedModule === index) {
      setExpandedModule(null);
    } else {
      setExpandedModule(index);
    }
  };

  return (
    <article className="courseDetailArticle">
      <div className="module-drop">
        {props.courses &&
          props.courses.map((course, index) => (
            <div className={
              `bottomBorder text-black ${expandedModule === index ? 'open' : ''}`
              }  key={index}
              >
              <h3
                className="dropdown-toggle"
                onClick={() => toggleLessons(index)}
              >
                MODULE {index + 1} - {course.title}
                <span className={`icon ${expandedModule === index ? 'open' : ''}`}>
                  ▼
                </span>
              </h3>
              {expandedModule === index && (
                <ul>
                  {course.lessons &&
                    course.lessons.map((lesson, lessonIndex) => (
                      <a href={`/courses/${course.slug}/${lesson.id}`} className="lessons-links">
                        <li
                          key={lessonIndex}
                          style={{ backgroundImage: `url(${PlayHub})` }}
                        >
                          {`Lesson ${lessonIndex + 1} : ${lesson.title}`}
                          <span>
                            <img src={MarkUp} alt="MarkUp"></img>
                          </span>
                        </li>
                      </a>
                    ))}
                </ul>
              )}
              <p>
                <span className="TakeAssessment">
                  {`You have completed Module ${index + 1}:`}
                  <a href={`/${course.slug}/assessment`} className="module-assessment-link">
                    Take Assessment
                  </a>
                </span>
              </p>
            </div>
          ))}
      </div>
    </article>
  );
}

