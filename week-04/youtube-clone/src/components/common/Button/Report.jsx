import { faFontAwesomeFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Report = () => {
    return (
        <button>
            <FontAwesomeIcon className="icon fa-font-awesome-flag" icon={faFontAwesomeFlag}></FontAwesomeIcon>
            <span>신고</span>
        </button>
    );
};

export default Report;
