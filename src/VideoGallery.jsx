import React from "react";
import "./VideoGallery.css";

const VideoGallery = () => {
  const videos = [
    {
      title: "Room Cleaning Service",
      url: "https://www.youtube-nocookie.com/embed/TTn2uUxZr1o?si=pSws0AVxTjlgtE1A&amp",
    },
    {
      title: "Hotel Sanitization",
      url: "https://www.youtube.com/embed/jNQXAC9IVRw",
    },
    {
      title: "Bathroom Deep Cleaning",
      url: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    },
  ];

  return (
    <section className="video-gallery">
      <div className="section-header">
        <span>OUR GALLERY</span>
        <h2>Cleaning Service Videos</h2>
        <p>
          Watch our professional hotel cleaning and sanitization services in
          action.
        </p>
      </div>

      <div className="video-container">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <iframe
              src={video.url}
              title={video.title}
              allowFullScreen
            ></iframe>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;