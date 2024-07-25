import React from "react";
import ProfileCard from "../ProfileCard.jsx/ProfileCard";
import { UilSetting } from "@iconscout/react-unicons";
import HomeIcon from "@mui/icons-material/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./ProfileSide.css";

const ProfileSide = () => {
    const notify = () => {
        toast("Coming soon");
    };

    return (
        <div className="ProfileSide">
            <ProfileCard />
            <div className="Menu">
                <Link to="/">
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
            <ToastContainer /> {/* Ensure ToastContainer is rendered */}
        </div>
    );
};

export default ProfileSide;
