import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const ThumbsDown = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [count, setCount] = useState(18);

    const handleClick = () => {
        if (isClicked) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
        setIsClicked(!isClicked);

        console.log('click');
    };

    return (
        <button>
            <FontAwesomeIcon
                className="icon fa-thumbs-down"
                style={{ color: isClicked ? '#045fd4' : '' }}
                onClick={handleClick}
                icon={faThumbsDown}
            ></FontAwesomeIcon>
            <span>{count}</span>
        </button>
    );
};

export default ThumbsDown;
