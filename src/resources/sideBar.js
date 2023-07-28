import "./sideBar.css";
import Layer2 from "../resources/Image/image2/Layer 2.png";
import house from "../resources/Image/image2/house.png";
import list from "../resources/Image/image2/List.png";
import Headset from "../resources/Image/image2/Headset.png";
import Settings from "../resources/Image/image2/Settings.png";
import frame from "../resources/Image/image2/frame.png";
import logOut from "../resources/Image/image2/logout-icon.png";

function SideBar(props) {
  return (
    <section>
      <div className="sideBarA">
        <img className="sideBarAImage" src={Layer2} alt="Layer2" />
        <p>
          <img className="HOUSE" src={house} alt="house" /> Home
        </p>
        <p>
          <img className="LIST" src={list} alt="list" />
          Discovery
        </p>
        <p>
          <img className="HEADSET" src={Headset} alt="Headset" />
          Headset
        </p>
        <p>
          <img className="SETTING" src={Settings} alt="Settings" />
          Settings
        </p>
      </div>

      <div className="sideBarB">
        <p>
          <img className="ACCOUNT" src={frame} alt="account" />
          Account
        </p>
        <p>
          <img className="ACCOUNT" src={logOut} alt="account" />
          Logout
        </p>
      </div>
    </section>
  );
}

export default SideBar;