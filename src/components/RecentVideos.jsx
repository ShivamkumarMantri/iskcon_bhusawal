import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecentVideos = ({ channelId }) => {
  const [videos, setVideos] = useState([]);
  const API_KEY = 'AIzaSyAaBfT_IL7w1uJ5QGIMO_AZC7J_fhIhnTY';

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            channelId,
            part: 'snippet',
            order: 'date',
            maxResults: 3,
            type: 'video',
          },
        });
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [channelId]);

  return (
    <section className="bg-gradient-to-b from-white via-amber-50 to-amber-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-gray-900 mb-12">
          <span className="text-amber-600">Recent</span> Videos
        </h1>

        {videos.length === 0 ? (
          <p className="text-center text-gray-600">Loading videos...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {videos.map((video) => (
              <div
                key={video.id.videoId}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group"
              >
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <img
                    src={video.snippet.thumbnails.high.url}
                    alt={video.snippet.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-14 h-14 text-white drop-shadow-lg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z" />
                    </svg>
                  </div>
                </a>

                <div className="p-5">
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-amber-700 transition">
                    {video.snippet.title.length > 70
                      ? video.snippet.title.slice(0, 70) + '...'
                      : video.snippet.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                    {video.snippet.description}
                  </p>
                  <p className="mt-3 text-xs text-gray-400">
                    {new Date(video.snippet.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentVideos;
