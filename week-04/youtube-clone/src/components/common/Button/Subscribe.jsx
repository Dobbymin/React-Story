import { useState } from 'react';

const Subscribe = () => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    return (
        <>
            <button className="subscribe" style={{ color: isClicked ? '#909090' : '' }} onClick={handleClick}>
                {isClicked ? '구독중' : '구독'}
            </button>
        </>
    );
};

export default Subscribe;
