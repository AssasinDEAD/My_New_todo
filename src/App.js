import React, { useState } from "react";
import { useMemo } from "react";
import PostFilter from "./Components/PostFilter";
import PostForm from "./Components/PostForm";
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import "./css/style.css"


function App() {
   const [posts, setPosts] = useState([
      { id: 1, title: "Javascript" },
      { id: 2, title: "Экмаскрипт" },
      { id: 3, title: "жубаскрипт" }
   ])

   const [filter, setFilter] = useState({ sort: "", query: "" })
   const createPost = (newPost) => {
      setPosts([...posts, newPost])
   }


   const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
   }


   const sortedPosts = useMemo(() => {
      if (filter.sort) {
         return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      }
      return posts;
   }, [filter.sort, posts])

   const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
   }, [filter.query, sortedPosts])



   return (
      <div className="App">
         <PostFilter filter={filter} setFilter={setFilter} />
         <PostForm create={createPost} />
         <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1" />
      </div >
   );

}



export default App;
