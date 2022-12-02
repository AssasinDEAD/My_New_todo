import React from "react";
import { useState } from "react";


const PostItem = (props) => {

   let [change, setChange] = useState('nonActive')
   let [change2, setChange2] = useState('amIFan')
   function yesIFan(e) {
      e.preventDefault();
      setChange("active")
      setChange2("nonActive")
   }

   return (
      <div className='post'>
         <div className="post_content">
            <p >{props.number} {props.post.title} </p>
            <p> {props.post.gen}</p>
         </div>
         <div className="post_img">
            <button className={change2} onClick={yesIFan}>я фанат?</button>
            <p className={change}>Да я фанат! {props.post.title}</p>
            <img className="foto" src={props.post.img} />
         </div>
      </div>
   )
}

export default PostItem;