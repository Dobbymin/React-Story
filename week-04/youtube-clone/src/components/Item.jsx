import MoreBtn from './common/Button/MoreBtn';

const Item = ({ image, title, views }) => {
    return (
        <li className="item">
            <div className="img">
                <img src={image} alt="" />
            </div>
            <div className="itemInfo">
                <span className="title">{title}</span>
                <span className="name">코딩애플</span>
                <span className="views">{views}</span>
            </div>
            <MoreBtn />
        </li>
    );
};

export default Item;
