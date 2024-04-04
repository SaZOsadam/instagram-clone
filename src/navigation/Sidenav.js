import React from "react";
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';


function Sidenav() {
  return (
    <div>Sidenav
        <img 
            className="sidenav__logo" src="https://www.pngkey.com/png/full/1-13459_instagram-font-logo-white-png-instagram-white-text.png" 
            alt="" 
        />
        <div className="sidenav__buttons">
            <div className="sidenavBtn">
                <HomeIcon />
                <span>Home</span>
            </div>
            <div className="sidenavBtn">
                <SearchIcon />
                <span>Search</span>
            </div>
            <div className="sidenavBtn">
                <ExploreIcon />
                <span>Explore</span>
            </div>
            <div className="sidenavBtn">
                <SlideshowIcon />
                <span>Reels</span>
            </div>
            <div className="sidenavBtn">
                <ChatIcon />
                <span>Messages</span>
            </div>
            <div className="sidenavBtn">
                <FavoriteBorderIcon />
                <span>Notifications</span>
            </div>
            <div className="sidenavBtn">
                <AddCircleOutlineIcon />
                <span>Crea</span>
            </div>
        </div>
    </div>
  )
}

export default Sidenav
