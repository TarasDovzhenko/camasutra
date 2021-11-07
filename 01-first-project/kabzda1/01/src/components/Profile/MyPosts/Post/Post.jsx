import React from "react";
import s from "./Post.module.css";

function Post(props) {

    return (
    
      
        
          <div className={s.item}>
            <img src="https://s4.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg" alt="" />
            {props.message}
            <div>
            <span>like </span>{props.likesCount}
            </div>
            
            </div>

         
       
      
    )}

    export default Post