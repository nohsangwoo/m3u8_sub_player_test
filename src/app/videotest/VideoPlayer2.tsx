

interface VideoPlayer2Props {
    videoUrl: string;
    subtitleUrl: string;

}
const VideoPlayer2 = ({ videoUrl, subtitleUrl }: VideoPlayer2Props) => {
    return (
        <video
            id="my-player"
            className="video-js"
            controls
            preload="auto"
            poster="//vjs.zencdn.net/v/oceans.png"
            crossOrigin="anonymous"
            data-setup='{}'>
            <source src={videoUrl} type="video/mp4"></source>
            {/* <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
            <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
            <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source> */}
            <track src={subtitleUrl} kind="subtitles" srcLang="en" label="English" default />
            Your browser does not support embedded videos.
            <p className="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a
                web browser that
                <a href="https://videojs.com/html5-video-support/" target="_blank">
                    supports HTML5 video
                </a>
            </p>
        </video>
    )
}

export default VideoPlayer2;