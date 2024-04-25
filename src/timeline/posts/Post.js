import React from 'react'
import {Avatar} from "@mui/material"; //fix copy import from muiIcons
import "./Post.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Post({user, postImage, likes, timespamp }) {
  return (
    <div className="post">
        <div className="post__header">
          <div className="post__headerAuthor">
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar> {user} • <span>{timespamp}</span>
          </div>
           <MoreHorizIcon />
        </div>
        <div className="post__img">
          <img src={postImage} alt=''/>
        </div>
        <div className="post__footer">
          <div className="post__footerIcons">
            <div className="post__iconsMain">
                  <FavoriteBorderIcon  className="postIcon"/>
                  <ChatBubbleOutlineIcon  className="postIcon"/>
                  <TelegramIcon  className="postIcon"/>
              </div>
              <div className="post__iconSave">
                <BookmarkBorderIcon  className="postIcon"/> 
              </div>
          </div>
          Liked by {likes} people.
        </div>
    </div>
  );
}

export default Post
