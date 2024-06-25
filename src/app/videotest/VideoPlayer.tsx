import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface VideoPlayerProps {
    videoUrl: string;
    subtitleUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, subtitleUrl }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [userInteracted, setUserInteracted] = useState(false); // 사용자 상호작용 상태

    useEffect(() => {
        const video = videoRef.current;
        let hls: Hls | null = null;

        if (video && userInteracted) { // 사용자 상호작용이 있었을 때만 실행
            if (Hls.isSupported()) {
                hls = new Hls();
                hls.loadSource(videoUrl);
                hls.attachMedia(video);
                hls.on(Hls.Events.MANIFEST_PARSED, function () {
                    video.play().catch(error => console.error('Error attempting to play', error));
                });
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = videoUrl;
                video.play().catch(error => console.error('Error attempting to play', error));
            }
        }

        return () => {
            if (hls) {
                hls.destroy();
                hls = null;
            }
        };
    }, [videoUrl, userInteracted]);

    return (
        <div>
            <video ref={videoRef} controls crossOrigin='anonymous' width="720">
                <track src={subtitleUrl} kind="subtitles" srcLang="en" label="English" default />
                Your browser does not support embedded videos.
            </video>
            <button onClick={() => setUserInteracted(true)}>Play Video</button> {/* 사용자 상호작용 버튼 */}
        </div>
    );
};

export default VideoPlayer;
