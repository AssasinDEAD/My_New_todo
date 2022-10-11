import React from "react";
import MyButton from "../UI/button/MyButton";

const PostItem = (props) => {
   return (
      <div className="post">
         <div className="post_content">
            <p>{props.number} {props.post.title}</p>
         </div>
         <div className="post_btn">
            <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
            {/* <MyButton onClick={() => props.remove(props.post)}>Done</MyButton> */}
         </div>
      </div>
   )
}

export default PostItem;