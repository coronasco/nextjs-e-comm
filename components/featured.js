import {items} from '../data/items'
import Item from './item'
function Featured(props) {
    return (
        <div>
            <div>
                <button>Featured</button>
                <button>On Sale</button>
                <button>Top Rated</button>
            </div>
            {items.map(x => {
                return <Item key={x.key} title={x.name} price={x.price} image={x.img} />
            })}
        </div>
    )
}

export default Featured