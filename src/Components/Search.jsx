// import React from "react";
// import { useState } from "react";
// import Content from "./Content";

// const Search = (props) => {
//   console.log(props);

//   let videos = props.data;
//   const [query, setQuery] = useState("");

//   const onInputHandler = (e) => {
//     setQuery(e.target.value);
//   };

//   if (query) {
//     videos = videos.filter((item) => {
//       if (item.title.toLowerCase().includes(query.toLowerCase())) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//   }

//   return (
//     <>
//       <div className="input__container">
//         <input
//           type="text"
//           placeholder="Enter a team or league"
//           onInput={onInputHandler}
//           value={query}
//           className="input__box"
//         ></input>
//       </div>

//       {videos &&
//         videos.map((video, idx) => {
//           return (
//             <div className="video__container" key={idx}>
//               <Content video={video} />
//             </div>
//           );
//         })}
//     </>
//   );
// };

// export default Search;
