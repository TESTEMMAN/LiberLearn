import './divTwo.css';
import image1 from '../Image/Little boy listening to his teacher through headphones.png';
import image2 from "../Image/Small black boy elearning on a computer at home.png";
import image3 from "../Image/readingGuys.png";
// import arrowImage from "../Image/blue_arrow-up-right.png";


function DivTwo () {
    return (
      <div className="landingTwo">
        <div className="twoLeft">
          <div className="leftOne">
            <img src={image1} alt="Boy Learning" />
          </div>
          <div className="leftTwo">
            <div className="leftTwoTop">
              <img
                src={image2}
                alt="Small black boy elearning on a computer at home"
              />
            </div>
            <div className="leftTwoBottom">
              <img src={image3} alt="readingGuys" />
            </div>
          </div>
        </div>
        <div className="twoRight">
          <div className="twoRightContent">
            <h1>Who We Are</h1>
            <p>
              Welcome to our educational website, where we ensure juvenile
              correctional children have access to education.
            </p>
            <p>
              We aim to create an engaging and interactive learning experience.
            </p>

            <div className="buttonDivTwo">
              <a
                href="about-us"
                // style={{ backgroundImage: `url(${arrowImage})` }}
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default DivTwo;