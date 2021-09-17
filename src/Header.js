import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import {logout, selectUser} from "./features/userSlice"
import { auth } from './firebase';


function Header() {

    // const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutOfApp = () =>{
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className="header">
            
            <div className="header__left">
                <img src="data:image/jpeg;base64,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" alt=""/>
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder=" Search" type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption 
                    Icon = {HomeIcon}
                    title = "Home"
                />
                <HeaderOption 
                    Icon = {SupervisorAccountIcon}
                    title = "My Network"
                />
                <HeaderOption 
                    Icon = {BusinessCenterIcon}
                    title = "Jobs"
                />
                <HeaderOption 
                    Icon = {ChatIcon}
                    title = "Messaging"
                />
                <HeaderOption 
                    Icon = {NotificationsIcon}
                    title = "Notifications"
                />

                <HeaderOption 
                    avatar={true}
                    // avatar={user.photoUrl}
                    // avatar = "https://media-exp1.licdn.com/dms/image/C5103AQEjjB9Fq4zaEQ/profile-displayphoto-shrink_100_100/0/1568299487343?e=1636588800&v=beta&t=r2GybYYu9PubjA2rGRcYlz5L5xatDEAtQ3nfA2eHhk0"
                    onClick={logoutOfApp}
                    title = "Me"
                />
            </div>
        </div>
    )
}

export default Header
