import Download from './Download';
import Report from './Report';
import Share from './Share';
import ThumbsDown from './ThumbsDown';
import ThumbsUp from './ThumbsUp';

const ActionButtons = () => {
    return (
        <>
            <li>
                <ThumbsUp />
            </li>
            <li>
                <ThumbsDown />
            </li>
            <li>
                <Share />
            </li>
            <li>
                <Download />
            </li>
            <li>
                <Report />
            </li>
        </>
    );
};

export default ActionButtons;
