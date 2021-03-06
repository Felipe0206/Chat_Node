import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Intopcol</span>
                </Link>
            </div>

            
            <div className="topbarRight">
                
                <div className="topbarIcons">
                    
                    <div className="topbarIconItem">

                        <Link to="/messenger" >
                            <Chat />
                            <span className="topbarIconBadge">2</span>
                        </Link>
                    </div>
                    
                </div>
                <div className="containertopbarimg">
                    <Link to={`/profile/${user.username}`}>
                        <img
                            src={
                                user.profilePicture
                                    ? PF + user.profilePicture
                                    : PF + "person/noAvatar.png"
                            }
                            alt=""
                            className="topbarImg"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
