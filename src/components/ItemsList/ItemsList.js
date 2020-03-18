import React from 'react';
import Item from "../../presentation/Item/Item";

const ItemsList = () => {
    return (
        <>
            <Item
                itemName={'Item1'}
                description={'The first item'}
                image={'https://www.chemistryviews.org/common/images/thumbnails/source/13ca53f0d73.jpg'}
            />
            <Item
                itemName={'Item2'}
                description={'This is the second item item item'}
                image={'https://m1.selver.ee/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/4/7/4740125000108.jpg'}
            />
        </>
    );
}

export default ItemsList;
