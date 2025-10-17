"use client";
import { useEffect, useRef, useState } from "react";
import { FaMusic, FaPause } from "react-icons/fa";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Attempt autoplay right away (some browsers allow it)
    const tryPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setHasTriggered(true);
      } catch {
        // Ignore errors — will be triggered by user movement
      }
    };
    tryPlay();

    // Play on any user interaction (scroll, move, touch, key)
    const enablePlayback = () => {
      if (!hasTriggered) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasTriggered(true);
          })
          .catch(() => {});
      }
    };

    // Add multiple event listeners for natural autoplay trigger
    const events = ["scroll", "mousemove", "touchstart", "keydown"];
    events.forEach((evt) => window.addEventListener(evt, enablePlayback, { once: true }));

    return () => {
      events.forEach((evt) => window.removeEventListener(evt, enablePlayback));
    };
  }, [hasTriggered]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Background Music */}
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />

      {/* Floating Toggle Button */}
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 bg-[#03271E] text-white p-4 rounded-full shadow-lg hover:bg-[#065f46] transition duration-300"
      >
        {isPlaying ? <FaPause size={18} /> : <FaMusic size={18} />}
      </button>
    </>
  );
}
