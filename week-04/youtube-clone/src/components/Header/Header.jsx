import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEllipsis, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <>
            <div className="logo">
                <FontAwesomeIcon className="youtubeLogo" icon={faYoutube} />
                <span className="title">Premium</span>
            </div>
            <div className="icons">
                <FontAwesomeIcon className="fa-search" icon={faSearch} />
                <FontAwesomeIcon className="fa-ellipsis-v" icon={faEllipsis} />
            </div>
        </>
    );
};

export default Header;
