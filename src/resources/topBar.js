import "./topBar.css";
import Group594 from "../resources/Image/image2/Group594.png"
import search from "../resources/Image/image2/search.png"
import notification from "../resources/Image/image2/notification.png"
// import Avatar from "../resources/Image/image2/Avatar.png"


function TopBar(props) {
    return (
      <div className="topBar">
        <img src={Group594} alt="Group594" />

        <form className="search">
          <input className="searchInput" type="text" placeholder="search anything" style={{backgroundImage: `url(${search})`}} />
        </form>
        <div className="loggedUserDetail">
          <img src={ notification } alt="notification" />
          <div className="avatar" style={{backgroundImage: `url(${props.avatar})`}}></div>
          <p>Opemidimeji<span className="spanTopBar">Level 1</span></p>
        </div>
      </div>
    );
}

export default TopBar;