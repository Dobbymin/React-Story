import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ThumbsUp = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [count, setCount] = useState(43210);

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
                className="icon fa-thumbs-up"
                style={{ color: isClicked ? '#045fd4' : '' }}
                onClick={handleClick}
                icon={faThumbsUp}
            />
            <span>{count}</span>
        </button>
    );
};

export default ThumbsUp;
