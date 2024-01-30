import Avatar from '../assets/image/avatar.jpeg';
import Info from './common/Text/Info';

const Metadata = () => {
    return (
        <div className="metadata">
            <img src={Avatar} alt="" />
            <Info />
        </div>
    );
};

export default Metadata;
