import React from 'react';
import "./Sugesstions.css";
import { Avatar } from '@mui/material';

function Sugesstions() {
  return <div className="sugesstions">
    <div className="sugesstions__title"> Sugesstions for you</div>
    <div className="sugesstionsUsernames">

      <div className="sugesstion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>I</Avatar>
          </span>
          <div className="username__info">
          <span className="userName">iam.bosslady_</span>
          <span className="relation">New to Instagram</span>
          </div>
        </div>
        <button className="follow__Btn">Follow</button>

      </div>
     
      <div className="sugesstion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>T</Avatar>
          </span>
          <div className="username__info">
          <span className="userName">this.joruthe_</span>
          <span className="relation">New to Instagram</span>
          </div>
        </div>
        <button className="follow__Btn">Follow</button>

      </div>

      <div className="sugesstion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>O</Avatar>
          </span>
          <div className="username__info">
          <span className="userName">oladiran.adetutu_</span>
          <span className="relation">New to Instagram</span>
          </div>
        </div>
        <button className="follow__Btn">Follow</button>

      </div>

      <div className="sugesstion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>E</Avatar>
          </span>
          <div className="username__info">
          <span className="userName">elizabeth.oladiran_</span>
          <span className="relation">New to Instagram</span>
          </div>
        </div>
        <button className="follow__Btn">Follow</button>

      </div>


    </div>
  </div>
}
export default  Sugesstions;