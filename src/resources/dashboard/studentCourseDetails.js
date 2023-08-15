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

function StudentCourseDetails() {
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
          <div className="rightBodyLow">
            <div className="rightBodyLow-Left">
              <div className="leftContainer">
                <h2>Discover</h2>
                <p>
                  Courses &gt;{" "}
                  <span className="ElectSP">Computer Programming</span>
                </p>
                <CourseDetail />
              </div>
            </div>
            <div className="rightBodyLow-Right">
              <div className="rightContainer">
                <div className="bottomBorder">
                  {/* <a href="/enroll" className="enrollBtn"> */}
                  <a href="/course-detail-content" className="enrollBtn">
                    Enroll
                  </a>
                </div>
                <div className="bottomBorder">
                  <h2 className="ElectSP1">What you'll learn</h2>
                  <p>
                    You will learnt he basic of Computer Programming using HTML
                    and CSS
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
                      <img src={TCI2} alt="TCI2"></img> 20 Students
                    </span>
                  </p>
                  <p>
                    <span>
                      <img src={TCI3} alt="TCI3"></img>15 Lessons (10h 5m)
                    </span>
                  </p>
                  <p>
                    <span>
                      <img src={TCI4} alt="TCI4"></img>6 Courses
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
                      <img src={TCI8} alt="TCI8"></img>Level
                      <span className="level">Beginner</span>
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
      </div>
    </div>
  );
}

export default StudentCourseDetails;

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
      <p>
        By <span className="ElectSP">Oluwasijibomi Fayilenu, </span> Computer
        Programming Expert
      </p>
      <div className="courseInfo">
        <span className="roundedTextBox">Information</span>
        <span>Content</span>
        <span>Community</span>
        <span style={{ backgroundImage: `url(${TCI1})`}}>Students</span>
      </div>
      <article className="StudentArticleCDP">
        <p>
          Welcome to the exciting world of computer programming! Computer
          programming is like giving instructions to a computer to perform
          specific tasks. It's like teaching your electronic friend to do cool
          and fun things! Just like learning a new language, programming
          involves using special words and phrases, known as "code," to
          communicate with the computer.{" "}
        </p>

        <p>
          In programming, you'll learn about algorithms, which are step-by-step
          instructions that help solve problems. You'll use programming
          languages, such as HTML abd CSS, to write these instructions. As you
          gain more skills, you'll be able to create games, animations, and
          interactive stories. So, get ready to unlock your creativity and start
          your journey into the magical world of computer programming, where
          you'll become a digital wizard and make your ideas come to life!
          Remember, practice and patience are the keys to becoming a pro
          programmer. Happy coding! 🚀
        </p>
      </article>
    </div>
  );
}
