'use client'
import VideoPlayer from './VideoPlayer';
import VideoPlayer2 from './VideoPlayer2';
// import localVideo from "../../../public/"

export default function VideoTestPage() {

    const videoUrl = 'https://subtitlesvod.ytn.co.kr/subtitlesvod/_definst_/2024/202406240938554333_1.mp4/playlist.m3u8'
    const videoAWSUrl = 'https://audiodefense-storage.s3.ap-northeast-2.amazonaws.com/RAWAUDIO/testvideo.mp4'
    const subtitleUrl = 'https://subtitlesdwvod.ytn.co.kr/2024/202406240938554333.vtt'
    const subtitleUrl2 = 'https://audiodefense-storage.s3.ap-northeast-2.amazonaws.com/RAWAUDIO/202406240938554333.vtt'
    const videoLocalUrl = '/playlist.m3u8'
    const subtitleLocalUrl = "/202406240938554333.vtt";  // public 폴더에 저장된 자막 파일


    return (
        <div>
            <h1>Video Test</h1>
            <h1>Video Player Test</h1>
            <video>

            </video>


            <div>
                <VideoPlayer videoUrl={videoUrl} subtitleUrl={subtitleUrl} />
            </div>

            <div>
                <VideoPlayer2 videoUrl={videoAWSUrl} subtitleUrl={subtitleUrl} />
            </div>
        </div >
    );
}