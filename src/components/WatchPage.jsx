import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {
    const [searchParam] = useSearchParams();
    console.log(searchParam.get("v"))


    const dispatch = useDispatch()
    useEffect(()=>{
        //if we had use toogleMenu() then it would have toggle the side bar everytime on reload instead of closing it.
        dispatch(closeMenu())
    })
  return (
    <div className='mx-10 my-4 p-2'>
      <iframe className='rounded-2xl'
        width="1000"
        height="600"
        src={"https://www.youtube.com/embed/"+ searchParam.get("v")+"?si=3b5HfAW9-Q6Q5tCt"}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default WatchPage