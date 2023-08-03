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
import CourseDetails_Content from './resources/dashboard/courseDetail_Content';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<LandingPage />}></Route>
        <Route path="/login" element={<Login image={onBoard} />}></Route>
        <Route path="/student-dashboard" element={<StudentDashboard />}></Route>
        <Route path="/courses" element={<CoursesBody />}></Route>
        <Route
          path="/courses/details"
          element={<StudentCourseDetails />}
        ></Route>
        <Route path="/about-us" element={<AboutUsPage />}></Route>
        <Route
          path="/course-detail-content"
          element={<CourseDetails_Content />}
        ></Route>
        <Route path="/assessment" element={<AssessmentPage />}></Route>

        for assessment fail
        {/* <Route path="/trial-link" element={<AssessmentPassed />}></Route> */}

        {/* for assessment passed */}
        {/* <Route path="/trial-link" element={<AssessmentFail />}></Route> */}
      </Routes>
    </div>
  );
  
}


export default App;


