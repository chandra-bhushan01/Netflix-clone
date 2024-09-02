

const VideoCard = ({info}) => {
  const {snippet,statistics} = info;
  const { channelTitle, thumbnails, title } = snippet;

  const{viewCount} = statistics;


  console.log(info);
  
  return (
    <div className=" m-2 p-1 flex flex-col w-60 shadow-lg rounded-l">
      <img
        className=" rounded-lg "
        src={thumbnails.medium.url}
        alt="thumbnails"
      />
      <ul>
        <li className="truncate">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} Views</li>
      </ul>
    </div>
  );
}

export default VideoCard