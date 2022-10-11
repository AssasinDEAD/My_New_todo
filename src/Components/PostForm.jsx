import React from "react";
import { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInpute from "../UI/inpute/MyInpute";


const PostForm = ({ create }) => {
   const [post, setPost] = useState({ title: "" })


   const addNewPost = (e) => {
      e.preventDefault()
      const newPost = {
         ...post, id: Date.now()
      }
      create(newPost)
      setPost({ title: "" })
   }
   return (
      <form>
         <MyInpute type="text" placeholder="Выполнить надо" value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} />
         <MyButton onClick={addNewPost}>Add</MyButton>
      </form >

   )
}

export default PostForm;