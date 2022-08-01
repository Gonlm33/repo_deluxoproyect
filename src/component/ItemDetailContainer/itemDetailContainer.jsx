import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/itemDetail';

const cds = { id: 1, image: "../src/img/emilia-tu-crees-en-mi.png", title: "Emilia- Tu crees en mi" };

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData =new Promise(resolve => {
            setTimeout(() => {
                resolve(cds);
            }, 3000);
        });

        getData.then(res => setData(res));
}, [])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;