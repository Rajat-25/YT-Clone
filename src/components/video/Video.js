import React from 'react';
import VideoCard from './VideoCard';
const Video = ({ videosArr, setCurrentVideo }) => {
  const videos = videosArr.map((video) => {
    return (
      <VideoCard
        key={video.id.videoId}
        video={video}
        setCurrentVideo={setCurrentVideo}
      />
    );
  });
  return <>{videos}</>;
};

export default Video;
