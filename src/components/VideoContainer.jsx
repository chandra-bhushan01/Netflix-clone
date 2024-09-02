import { useEffect, useState } from "react"
import { YOUTUBE_API_KEY } from "../utils/constents";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";


const VideoContainer = () => {

    const [videos,setVideos]=useState([]);

    useEffect(()=>{
        getVideos();
    },[])

    const getVideos = async()=>{
        const data = await fetch(YOUTUBE_API_KEY);
        const json = await data.json()
        setVideos(json.items)
      }
     


  return (
    <div className="m-2 p-2 flex flex-row flex-wrap absolute">
      {videos.map((video, id) => (
        <Link to={"/watch?v=" + video.id}><VideoCard key={id} info={video} /></Link>
      ))}
    </div>
  );
}

 

export default VideoContainer;