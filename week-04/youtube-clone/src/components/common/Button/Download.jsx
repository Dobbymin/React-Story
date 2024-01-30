import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Download = () => {
    return (
        <button>
            <FontAwesomeIcon className="icon fa-download" icon={faDownload}></FontAwesomeIcon>
            <span>저장</span>
        </button>
    );
};

export default Download;
