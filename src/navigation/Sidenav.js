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
import MoreVertIcon from '@mui/icons-material/MoreVert';


function Sidenav() {
  return (
    <div>
        <img 
            className="sidenav__logo" src="https://www.pngkey.com/png/full/1-13459_instagram-font-logo-white-png-instagram-white-text.png" 
            alt="" 
        />
        <div className="sidenav__buttons">
            <button className="sidenav__Btn">
                <HomeIcon />
                <span>Home</span>
            </button>
            <button className="sidenav__Btn">
                <SearchIcon />
                <span>Search</span>
            </button>
            <button className="sidenav__Btn">
                <ExploreIcon />
                <span>Explore</span>
            </button>
            <button className="sidenav__Btn">
                <SlideshowIcon />
                <span>Reels</span>
            </button>
            <button className="sidenav__Btn">
                <ChatIcon />
                <span>Messages</span>
            </button>
            <button className="sidenav__Btn">
                <FavoriteBorderIcon />
                <span>Notifications</span>
            </button>
            <button className="sidenav__Btn">
                <AddCircleOutlineIcon />
                <span>Create</span>
            </button>
        </div>
        <div className="sidenav__more"> 
            <button className="sidenav__Btn">
                <MoreVertIcon />
                <span>More</span>
            </button>
        </div>
    </div>
  )
}

export default Sidenav
