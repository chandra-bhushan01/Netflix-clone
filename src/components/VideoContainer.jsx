import { useEffect } from "react"
import { YOUTUBE_API_KEY } from "../utils/constents";


const VideoContainer = () => {

    useEffect(()=>{
        getVideos();
    },[])

    const getVideos = async()=>{
        const data = await fetch(YOUTUBE_API_KEY);
        
    }


  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer