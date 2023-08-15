import './App.css';
import Login from './resources/login.js';
import onBoard from './resources/Image/onBoard.jpg';
// import mentor from './resources/Image/mentor.png';
// import admin from './resources/Image/admin.png';
import LandingPage from './resources/landing/LandingPage.js';
import CoursesBody from './resources/courses/courses';
import {Routes, Route} from 'react-router-dom';
import StudentDashboard from './resources/dashboard/studentDashboard';
import StudentCourseDetails from "./resources/dashboard/studentCourseDetails";
import AboutUsPage from "./resources/dashboard/AboutUs";
import AssessmentPassed from './resources/dashboard/assessmentPassed';
import AssessmentPage from './resources/dashboard/assessmentPage';
import AssessmentFail from './resources/dashboard/assessmentFail';
import CourseDetailsContent from './resources/dashboard/courseDetailContent';
import LessonPage from './resources/dashboard/LessonPage';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<LandingPage />}></Route>
        <Route path="/login" element={<Login image={onBoard} />}></Route>
        <Route path="/student-dashboard" element={<StudentDashboard />}></Route>
        <Route path="/courses" element={<CoursesBody />}></Route>
        <Route
          path="/courses/:slug/detail"
          element={<CourseDetailsContent />}
        ></Route>
        <Route path="/about-us" element={<AboutUsPage />}></Route>
        <Route
          path="/courses/:slug"
          element={<StudentCourseDetails />}
        ></Route>
        <Route
          path="/courses/:slug/:lessonId"
          element={<LessonPage />}
        ></Route>
        <Route path="/:slug/assessment" element={<AssessmentPage />}></Route>

        <Route path="/module-passed" element={<AssessmentPassed />}></Route>
        <Route path="/module-failed" element={<AssessmentFail />}></Route>
      </Routes>
    </div>
  );

}


export default App;


