"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type PropsType = {
    vidId: string;
    title: string;
};

const YoutubeIframe: React.FC<PropsType> = ({ vidId, title }) => {
    return (
        <LiteYouTubeEmbed
            id={vidId}
            title={title}
            adNetwork={false}
            noCookie={true}
            cookie={false}
            poster="sddefault"
            params="rel=0"
        />
    );
};

export default YoutubeIframe;
