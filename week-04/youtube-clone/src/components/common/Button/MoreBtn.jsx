import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const MoreBtn = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleToggleClick = () => {
        setIsClicked(!isClicked);
    };

    const btnClassName = `moreBtn ${isClicked ? 'clicked' : ''}`;
    const titleClassName = `title ${isClicked ? 'clamp' : ''}`;

    return (
        <>
            <div className={titleClassName}>{/* <TitleClamp /> */}</div>
            <button className={btnClassName} onClick={handleToggleClick}>
                <FontAwesomeIcon icon={faCaretDown} />
            </button>
        </>
    );
};

export default MoreBtn;
