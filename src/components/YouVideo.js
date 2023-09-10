// import { useEffect, useState } from "react";
// import VideoSearch from "./VideoSearch";
// import VideoList from "./VideoList";

// // const YouVideo = () => {
// //   const [videos, setVideos] = useState([]);

// //   const search = (query) => {
// //     const requestOptions = {
// //       method: "GET",
// //       redirect: "follow",
// //     };

// //     fetch(
// //       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&type=video&key=AIzaSyCwODsE6Fx5KekbYmiQEcLTmWNjtJCjzVk`,
// //       requestOptions
// //     )
// //       .then((response) => response.json())
// //       .then((result) => setVideos(result.items))
// //       .catch((error) => console.log("error", error));
// //   };

// //   useEffect(() => {
// //     const requestOptions = {
// //       method: "GET",
// //       redirect: "follow",
// //     };

// //     fetch(
// //       "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=webstoryboy&type=video&key=AIzaSyCwODsE6Fx5KekbYmiQEcLTmWNjtJCjzVk",
// //       requestOptions
// //     )
// //       .then((response) => response.json())
// //       .then((result) => setVideos(result.items))
// //       .catch((error) => console.log("error", error));
// //     console.log(setVideos);
// //   }, []);

// //   return (
// //     <>
// //       <VideoSearch onSearch={search} />
// //       <VideoList videos={videos} />
// //     </>
// //   );
// // };

// export default YouVideo;
