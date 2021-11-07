import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
    return (
    
      <div>
        <div>
          My posts
            <div>
             <textarea></textarea>
             <button>Add post</button>
            </div>
        </div> 
        <div className={s.posts}>
          <Post message="Hi, how are you" likesCount ="2"/>
          <Post message="It is my first post" likesCount ="23"/>
        </div>
      </div>
    )}

    export default MyPosts