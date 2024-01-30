import { useRef } from 'react';
import Video from '../../assets/video/video.mp4';
import Section from '../Section';

const Player = () => {
    const videoRef = useRef();
    const setPlayBackRate = () => {
        videoRef.current.playbackRate = 1;
    };
    return (
        <>
            <Section className="player">
                {/* <iframe
                    height="315"
                    src="https://www.youtube.com/embed/XXseiON9CV0?si=nkSSjhMXH6R3S0Vl"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe> */}
                <video ref={videoRef} controls={true} onCanPlay={() => setPlayBackRate()}>
                    <source src={Video} type="video/mp4" />
                </video>
            </Section>
        </>
    );
};

export default Player;
