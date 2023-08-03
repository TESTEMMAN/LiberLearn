import "./divFour.css";
import Mentors from "../landing/mentors";
import mentor1 from "../Image/mentor1.png";
import mentor2 from "../Image/mentor2.png";
import mentor3 from "../Image/mentor3.png";

function DivFour() {
  return (
    <div className="landingFour">
      <h1>Our Expert Mentors</h1>
      <div className="mentorsList">
        <Mentors
          image={mentor1}
          mentor="Oluwaseyi Sorinade"
          title="Mathematics Tutor"
          information="Passionate about numbers and problem-solving, our math tutor helps students excel in algebra, geometry, and calculus, making math enjoyable."
        />
        <Mentors
          image={mentor2}
          mentor="Goodness Atunde"
          title="English Tutor"
          information="Our English tutor fosters language proficiency and a love for literature, guiding students in grammar, vocabulary, and creative writing.."
        />
        <Mentors
          image={mentor3}
          mentor="Anuoluwa Balogun"
          title="Computer Programming"
          information="With expertise in various programming languages like Python and Java, our programming tutor inspires students to become confident coders."
        />
      </div>
    </div>
  );
}

export default DivFour;
