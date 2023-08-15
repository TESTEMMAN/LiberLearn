import "./AboutUs.css";
import Header from "../Navigation/header";
import Footer from "../Navigation/footer";
import background from "../Image/image2/UsAbout.png";
import OurMission from "../Image/image2/OurMission.png";
import VisionImage from "../Image/image2/VisionImage.png";

function AboutUsPage() {
  return (
    <div className="AboutUsPage">
      <Header aboutActive="aboutActive" />
      <div
        className="AboutUsBody"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div className="AboutUse">
        <h1>
          <h1 className="AboutUsH1">Who We Are</h1>
        </h1>
        <p>
          At LiberLearn, we are driven by a profound mission to rescue, empower,
          and uplift the lives of juvenile offenders. We firmly believe that a
          single mistake should not define their entire future, and being
          detained should not hinder their growth and transformation towards a
          better life.
        </p>
        <p>
          Our journey began with an unwavering commitment to revolutionize the
          lives of juvenile offenders. After extensive research and heartfelt
          observations, we recognized a critical issue: young offenders lacked
          the necessary resources and support systems to navigate life after
          release, leading to a cycle of re-offending or further deterioration.
        </p>
        <p>
          This realization spurred us into action, determined to create a
          solution that would offer life-changing experiences to these young
          souls as they bid farewell to correctional institutions. Our aim is to
          equip them with the tools and opportunities they need to thrive in the
          world beyond those walls.
        </p>
      </div>
      <div className="AboutUsMission">
        <div className="MissionA">
          <h1 className="MissionTag">Our Vision </h1>
          <p>
            To be the most accessible and valuable <br></br>platform for
            educational and rehabilitation <br></br> processes specially
            designed for juvenile <br></br> offenders.
          </p>
        </div>
        <div
          className="MissionB"
          style={{ backgroundImage: `url(${OurMission})` }}
        ></div>
      </div>

      <div className="AboutUsVision">
        <div
          className="VisionA"
          style={{ backgroundImage: `url(${VisionImage})` }}
        ></div>
        <div className="VisionB">
          <h1 className="VisionTag">Our Mission</h1>
          <p>
            By leveraging technology and innovative<br></br> approaches to offer
            personalized and <br></br>transformative experiences that promote
            <br></br>
            growth, self-discovery, and a successful <br></br>reintegration into
            the society
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUsPage;
