import React from 'react';
import './singlecategoryitem.css'

const SingleCategoryItem = ({img}) => {
    return (
        <div className="single-category">
        <img src={`img/cat-${img}.png`} alt="" />
    </div>
    );
};

export default SingleCategoryItem;