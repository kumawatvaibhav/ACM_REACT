import { useState, useEffect, useRef } from 'react';
import Poster_Video from '../assets/poster/CodeWars.mp4';

const EventPoster = () => {
  const [isPosterVisible, setIsPosterVisible] = useState(true);

  const closePoster = () => {
    setIsPosterVisible(false);
  };

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  }, []);

  return (
    <>
      {isPosterVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative rounded-lg shadow-2xl max-w-sm w-full overflow-hidden">
            {/* Close button */}
            <button
              className="absolute top-2 right-0 z-10 bg-amber-600 text-white rounded-full hover:bg-red-500 transition-transform transform hover:scale-110 
              text-sm sm:text-lg md:text-xl lg:text-2xl w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center"
              onClick={closePoster}
              aria-label="Close Poster"
            >
              &times;
            </button>

            {/* Video poster */}
            <video
              ref={videoRef}
              src={Poster_Video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full sm:h-[200px] md:h-[500px] lg:h-[600px] object-contain"
            ></video>
          </div>
        </div>
      )}
    </>
  );
};

export default EventPoster;
