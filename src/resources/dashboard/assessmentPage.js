import "./assessmentPage.css";
import cancelIcon from "../Image/image2/cancel icon.png";
import SideBar from "../sideBar";
import TopBar from "../topBar";
import userImage from "../Image/image2/userImage.png";
import Button from "../Navigation/button";

function AssessmentPage() {
  return (
    <div className="assessmentPageBody">
      <div className="assPageLeftBody">
        <SideBar />
      </div>

      <div className="assPageRightBody">
        <div className="rightBodyTop">
          <TopBar avatar={userImage} />
        </div>

        <section className="assPageRightSection">
          <div className="assPageTop">
            <div>
              <h2>Discover</h2>
              <p>Courses Computer Programming Assessment</p>
            </div>
            <Button url="/trial-link" buttonText="Submit" />
          </div>
          <div className="assPageLower">
            <h1>WELCOME!</h1>
            <h2> Instruction</h2>
            <p>This assessment is timed for 10 minutes</p>
            <p>Choose the correct option</p>
            <form>
            
                <span className="Ash">Question 1/100</span> <br/><span className="Ash2">Which HTML element is used
                to define the structure of a web page?
              </span>
              <label className="inputType">
                <span>&lt;body&gt;</span>{" "}
                <input type="radio" name="qst-one" value="body" />
              </label>

              <label className="inputType">
                <span>&lt;head&gt;</span>{" "}
                <input type="radio" name="qst-one" value="body" />
              </label>

              <label className="inputType">
                <span>&lt;html&gt;</span>{" "}
                <input type="radio" name="qst-one" value="body" />
              </label>
            </form>

            <form>
                <span className="Ash">Question 2/100</span> <br/> <span className="Ash2">What is the correct way
                to create a hyperlink in HTML?
              </span>
              <label className="inputType">
                <span>&lt;link&gt;</span>{" "}
                <input type="radio" name="qst-one" value="body" />
              </label>

              <label className="inputType">
                <span>&lt;a href=""&gt;</span>{" "}
                <input type="radio" name="qst-one" value="body" />
              </label>

              <label className="inputType">
                <span>&lt;hyperlink&gt;</span>{" "}
                <input type="radio" name="qst-one" value="body" />
              </label>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AssessmentPage;
