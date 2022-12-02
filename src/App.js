import React, { useState } from "react";
import { useMemo } from "react";
import PostFilter from "./Components/PostFilter";
import PostList from "./Components/PostList";
import "./css/style.css"
import rebelSymbol from "./images/rebelSymbol.jpg"
import facebookIco from "./images/facebook.png"
import vk from "./images/Vk.png"
import instagram from "./images/instagram.png"
import yt from "./images/youtube.png"
import luke from "./images/Luke.jpg"
import dart from "./images/dart.jpg"
import obi from "./images/Obi.jpg"
import ald from "./images/Alderaan.jpg"
import man from "./images/Mandaloreplanet.jpg"
import dat from "./images/Dathomir.jpg"
import sok from "./images/Melfal.jpg"
import death from "./images/death.jpg"
import post from "./Components/PostItem.jsx"
import MySelect from "./UI/select/MySelect";




function App() {
   const [posts, setPosts] = useState([
      { id: 1, title: "Имя: Дартвейдер", gen: 'Пол: male', status: 'Character', img: dart },
      { id: 2, title: "Имя: Люк скайволкер", gen: 'Пол: male', status: 'Character', img: luke },
      { id: 3, title: "Имя: Обиван Кеноби", gen: 'Пол: male', status: 'Character', img: obi },
      { id: 1, title: " Имя: Альдераан", status: "planet", img: ald },
      { id: 2, title: " Имя: Датомир", status: "planet", img: dat },
      { id: 3, title: " Имя: Мандалор(планета)", status: "planet", img: man },
      { id: 3, title: " Имя: Сокол тысячелетия", status: "ship", img: sok },
      { id: 3, title: " Имя: Звезда смерти", status: "ship", img: death },
   ])
   const [filter, setFilter] = useState({ sort: "", query: "" })




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
         {/* <select value="Все" onChange={e => {
            if (e.target.value != posts.status) {
               post = "nonActive"
            }
         }} id="select">
            <option value="character">Персонаж</option>
            <option value="planet">Планета</option>
            <option value="ship">Корабль</option>
         </select> */}
         {/* <MySelect
            value={filter.sort}
            onChange={e => {
               if (e.target.value != posts.status) {
                  post = "nonActive"
               }
            }
            }
            defaultValue="Сортировка по"
            options={[
               { value: "title", name: "все" },
               { value: "status", name: "Корабль" },
               { value: "status", name: "Персонаж" },
               { value: "status", name: "Планета" },
            ]}
         /> */}
         <header className='header'>
            <div className='container'>
               <div className="header_main">
                  <div className="header_top">
                     <ul className='nav_list'>
                        <li>
                           <a href="#"><img src={instagram} alt='Ico' className="ico" /></a>
                        </li>
                        <li>
                           <a href="#"><img src={facebookIco} alt='Ico' className="ico" /></a>
                        </li>
                        <li>
                           <a href="#"><img src={vk} alt='Ico' className="ico" /></a>
                        </li>
                        <li>
                           <a href="#"><img src={yt} alt='Ico' className="ico" /></a>
                        </li>
                     </ul>
                     <input className="search" type="text" placeholder="search starwars" />
                  </div>
                  <div className="header_bottom">
                     <img src={rebelSymbol} alt='logo' className="logo" />
                  </div>
               </div>
            </div>
         </header>
         <PostFilter filter={filter} setFilter={setFilter} />
         <PostList posts={sortedAndSearchedPosts} title="Список постов 1" />
      </div >
   );

}


export default App;
