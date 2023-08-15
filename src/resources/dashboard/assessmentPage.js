import "./assessmentPage.css";
// import cancelIcon from "../Image/image2/cancel icon.png";
import SideBar from "../sideBar";
import TopBar from "../topBar";
import userImage from "../Image/image2/userImage.png";
import Button from "../Navigation/button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getModuleIdFromSlug from "./getModuleIdFromSlug";
import { Link } from "react-router-dom";

function AssessmentPage() {
  const { slug } = useParams();
  const [assessment, setAssessment] = useState(null);

  useEffect(() => {
    async function fetchModule() {
      const moduleId = await getModuleIdFromSlug(slug);

      if (moduleId !== null) {
        fetch(`https://liberlearn-backend.up.railway.app/api/assessments`)
          .then(response => response.json())
          .then(assessments => {
            if (assessments) {
              const dAssessment = assessments.find(assessment => assessment.course === parseInt(moduleId));
              setAssessment(dAssessment);
            }
          })
          .catch(error => {
            console.error('Error fetching assessment:', error);
          });
      }
    }

    fetchModule();
  }, [slug]);

  if (!assessment) {
    return <div>Loading your assessment...</div>
  }
  return (
    <div className="assessmentPageBody">
      <div className="assPageLeftBody">
        <SideBar />
      </div>

      <div className="assPageRightBody">
        <div className="rightBodyTop">
          <TopBar avatar={userImage} />
        </div>
<<<<<<< HEAD

        <section className="assPageRightSection">
          <div className="assPageTop">
            <div>
              <h2>Discover</h2>
              <p>Courses &gt; Computer Programming &gt; Assessment</p>
            </div>
          </div>
          <div className="assPageLower">
            <h1>WELCOME!</h1>
            <h2> Instruction</h2>
            <p>
              This assessment is timed for 10 minutes
              <br />
              Choose the correct option
            </p>
            <form className="assessmentForm">
              <p>
                <span className="Ash">Question 1/100</span>
                Which HTML element is used to define the structure of a web
                page?
              </p>
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

            <form className="assessmentForm">
              <p>
                <span className="Ash">Question 2/100</span>
                What is the correct way to create a hyperlink in HTML?
              </p>
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
            <div className="mitBtn">
              <Button url="/trial-link" buttonText="Submit" />
            </div>
          </div>
        </section>
=======
        <Assessment
          moduleId={assessment.course}
          title={assessment.title}
          desc={assessment.description}
          questions={assessment.questions}
        />
>>>>>>> 44382cd0421c7dc14bd19bbad471fb1cfd5e8ff2
      </div>
    </div>
  );
}
export default AssessmentPage;

function Assessment(props) {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const handleAnswerSelection = (questionId, choiceId, isCorrect) => {
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: {
        choiceId,
        isCorrect,
      },
    }));
  };
  const calculateCorrectAnswers = () => {
    let correctCount = 0;
    props.questions.forEach(question => {
      const userAnswer = selectedAnswers[question.id];
      if (userAnswer && userAnswer.isCorrect) {
        correctCount++;
      }
    });
    return correctCount;
  };
  const correctCount = calculateCorrectAnswers();
  const passPercentage = (correctCount / props.questions.length) * 100;
  const isModulePassed = () => {
    return passPercentage >= 70;
  };
  // const handleSubmit = () => {
  //   if (isModulePassed()) {
  //   } else {
  //   }
  // };
  const score = passPercentage;
  return (
    <section className="assPageRightSection">
      <div className="assPageTop">
        <div>
          <h2>Discover</h2>
          <p className="text-faint">Courses &gt; Computer Programming &gt;<span> {props.title}</span> </p>
        </div>
      </div>
      <div className="assPageLower">
        <h1>WELCOME!</h1>
        <h2> Instruction</h2>
        <p>
          This assessment is timed for 10 minutes
          <br />
          Choose the correct option
        </p>
        {
          props.questions && props.questions.map((question, index) => (
            <form className="assessmentForm" key={question.id}>
              <p>
                <span className="Ash">Question {index + 1}/{props.questions.length}</span>
                {question.text}
              </p>
              {
                question.choices && question.choices.map(choice => (
                  <label className="inputType" key={choice.id}>
                    <span>{choice.text}</span>{" "}
                    <input
                      type="radio"
                      name={`question_${question.id}`}
                      value={choice.is_correct}
                      onChange={() => handleAnswerSelection(
                        question.id, choice.id, choice.is_correct
                      )}
                    />
                  </label>
                ))
              }
            </form>
          ))
        }
        <Link className="no-link-style" to={isModulePassed() ? `/module-passed?score=${score}` : `/module-failed?score=${score}`}>
          <Button buttonText="Submit" />
        </Link>
      </div>
    </section>
  )
}


