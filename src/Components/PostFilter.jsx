import React from "react";
import MyInpute from "../UI/inpute/MyInpute";
import MySelect from "../UI/select/MySelect";


const PostFilter = ({ filter, setFilter }, props) => {

   function test() {
   }
   return (
      <div>

         <MySelect
            onChange={e => {
               if (true) {
                  console.log(e.target.value)
               }
            }}
            options={[
               { value: "title", name: "все" },
               { value: "status", name: "Корабль" },
               { value: "status", name: "Персонаж" },
               { value: "status", name: "Планета" },
            ]}
         />

         <MyInpute
            placeholder="Search"
            onChange={e => setFilter({ ...filter, query: e.target.value })}
            value={filter.query}
         />
      </div>
   )
}

export default PostFilter;