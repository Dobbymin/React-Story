const Video = ({ children, ...props }) => {
    return (
        <>
            <video {...props}>{children}</video>
        </>
    );
};

export default Video;
