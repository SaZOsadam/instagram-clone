import React, { useState } from 'react';
import "./Timeline.css";
import Sugesstions from '../sugesstions/Sugesstions';
import Post from './posts/Post';
import { PostAdd } from '@mui/icons-material';

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "oladiran.sarah.1_",
      postImage:"https://permies.com/t/134939/a/148257/crystal-ball.jpg",
      likes: 12,
      timespamp:"3d",
    },
    {
      user: "itsadrex_",
      postImage:"https://itsadrex.com/images/PFP2.jpg",
      likes: 112,
      timespamp:"2d",
    },
    {
      user: "bosslady.1",
      postImage:"https://th.bing.com/th/id/OIP.CR1TR9x208oRmFdnVIuWXAHaHa?rs=1&pid=ImgDetMain",
      likes: 322,
      timespamp:"22h",
    },
    {
      user: "adetutu_26",
      postImage:"https://th.bing.com/th/id/OIP.zJn6wgJIUVaw1FPTRqngGQAAAA?w=347&h=470&rs=1&pid=ImgDetMain",
      likes: 419,
      timespamp:"2d",
    },
    {
      user: "oladiran.sarah.1_",
      postImage:"https://th.bing.com/th/id/R.845f3fded0e146b66fc66fa3d6467083?rik=%2bcd4RskYHZAigw&riu=http%3a%2f%2fdpnow.com%2fimages%2fPhotoFixChallenge%2fDSC00092.JPG&ehk=c06%2bl0ErTk%2byGB4xDJ1kyBrGChLXUj3yIgKZ4csQYt0%3d&risl=1&pid=ImgRaw&r=0",
      likes: 231,
      timespamp:"30mins",
    },
   ]);
  return (
    <div className="timeline">
        <div className="timeline__left">
          <div className="timeline__posts">
          {posts.map(post => (
            <Post 
              user={post.user} 
              postImage={post.postImage}
              likes={post.likes}
              timespamp={post.timespamp}
              />
          ))}
          </div>
        </div>
        <div className="timeline__right">
            <Sugesstions />
        </div>
    </div>
  );
}

export default Timeline;
