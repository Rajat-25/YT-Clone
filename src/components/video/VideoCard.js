import React from 'react';

const VideoCard = ({ video, setCurrentVideo }) => {
  const CurrentVideo = () => {
    setCurrentVideo(video);
  };
  return (
    <div onClick={CurrentVideo} className='video'>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className='video-img'
      />
      <h5> {video.snippet.title}</h5>
    </div>
  );
};

export default VideoCard;
