import "./divFive.css";

function DivFive() {
  return (
    <div className="landingFive">
      <h1 id="contact-us">Contact us</h1>
      <form className="contactForm">
        <input
          className="half1"
          type="text"
          name="first name"
          placeholder="First Name"
        ></input>
        <input
          className="half2"
          type="text"
          name="last name"
          placeholder="Last Name"
        ></input>
        <input
          className="fullWidth"
          type="email"
          name="email"
          placeholder="Email"
        ></input>
        <textarea
          className="fullWidth"
          type="text"
          name="message"
          placeholder="Message"
        ></textarea>
        <div className="submits">
          <input type="submit" value="Send"></input>
        </div>
      </form>
    </div>
  );
}

export default DivFive;
