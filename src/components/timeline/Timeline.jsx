import React, { useState } from 'react'
import './Timeline.css'
import Suggestions from './Suggestions'
import Posts from './posts/Posts'


const Timeline = () => {
  const[posts, setPosts]=useState([
    {
      user: "dhanu_sri",
      postImage: "https://w0.peakpx.com/wallpaper/51/778/HD-wallpaper-anime-shop-flower.jpg",
      likes:23,
      timestamp: "12h",
    },
    {
      user: "sqmvra",
      postImage: "https://wallpaperset.com/w/full/1/2/f/86734.jpg",
      likes:19,
      timestamp: "14h",
    },
    {
      user: "natsliars",
      postImage: "https://e0.pxfuel.com/wallpapers/950/937/desktop-wallpaper-aesthetic-anime-laptop.jpg",
      likes:34,
      timestamp: "14h",
    },
    {
      user: "spiderbels",
      postImage: "https://i.pinimg.com/originals/a5/30/e8/a530e854cb40930702fcb19af23de844.gif",
      likes:56,
      timestamp: "16h",
    },
    {
      user: "elqsiixan",
      postImage: "https://zillion.media/wp-content/uploads/2022/10/Arrietty-Anime-Wallpaper-Japanese-Inu-Etc.jpg",
      likes:14,
      timestamp: "2d",
    },

  ]);
  return (
    <div className='timeline'>
        <div className="timeline__left">
            <div className="timeline__posts">
             {posts.map((post) => (
              <Posts user={post.user} postImage={post.postImage} likes= {post.likes} timestamp={post.timestamp} />
             ))}
             
            </div>

        </div>
        <div className="timeline__right">
            <Suggestions />

        </div>
        </div>
  )
}

export default Timeline
