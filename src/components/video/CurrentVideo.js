import React from 'react';

const CurrentVideo = ({ video }) => {
  if (!video) return null;

  return (
    <>
      <div className='current-video-iframe-container'>
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          frameBorder='0'
          className='currentVideoIframe'
          title={video.snippet.title}
        />
      </div>
      <div className='currentVideoDetail'>
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </>
  );
};

export default CurrentVideo;
