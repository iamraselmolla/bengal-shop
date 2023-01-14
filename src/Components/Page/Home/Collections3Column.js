import React from 'react';
import CollectionColumn from './CollectionColumn';

const Collections3Column = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <CollectionColumn img={'img/collection (1).png'} link={'/'} color={'#FFF0DC'} title={'Fresh Fruits Collection'}></CollectionColumn>
                    <CollectionColumn img={'img/collection (3).png'} link={'/'} color={'#DDF1D6'} title={'Vegetable Collection'}></CollectionColumn>
                    <CollectionColumn img={'img/collection (2).png'} link={'/'} color={'#FFEBB7'} title={'Grocery Item'}></CollectionColumn>
                </div>
            </div>
        </section>
    );
};

export default Collections3Column;