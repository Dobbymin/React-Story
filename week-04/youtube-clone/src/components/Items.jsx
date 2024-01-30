import Item from './Item';
import { nextVideos } from '../../data';

const Items = () => {
    return (
        <>
            {nextVideos.map((videoItem) => (
                <Item key={videoItem.image} {...videoItem} />
            ))}
        </>
    );
};

export default Items;
