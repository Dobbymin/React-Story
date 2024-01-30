import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Share = () => {
    return (
        <button>
            <FontAwesomeIcon className="icon fa-share" icon={faShare}></FontAwesomeIcon>
            <span>공유</span>
        </button>
    );
};

export default Share;
