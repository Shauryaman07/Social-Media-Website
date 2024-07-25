import React from 'react';
import { Link } from "react-router-dom";
import FollowersCard from '../FollowersCard/FollowersCard';
import InfoCard from '../InfoCard/InfoCard';
import HomeIcon from "@mui/icons-material/Home";
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileSide from '../profileSide/ProfileSide';
import { UilSetting } from "@iconscout/react-unicons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileLeft = () => {
    const notify = () => {
        toast("Settings Coming soon");
    };

    return (
        <div className="ProfileSide">
            <InfoCard />
            <ToastContainer />
            <div className="Menu">
                <Link to="/home">
                    <div className="menu-items">
                        <HomeIcon style={{ marginRight: 10, color: "#3db3f3" }} />
                        Home
                    </div>
                </Link>
                <Link to="/profile">
                    <div className="menu-items">
                        <AccountCircleIcon
                            style={{ marginRight: 10, color: "#3db3f3" }}
                        />
                        Profile
                    </div>
                </Link>
                <div className="menu-items" onClick={notify}>
                    <UilSetting style={{ marginRight: 10, color: "#3db3f3" }} />
                    Settings
                </div>
                <Link to="/">
                    <div className="menu-items">
                        <LogoutIcon style={{ marginRight: 10, color: "#3db3f3" }} />
                        Log Out
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ProfileLeft;
