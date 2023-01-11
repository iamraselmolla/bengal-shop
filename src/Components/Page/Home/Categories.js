import React from 'react';
import SectionTitle from '../../shared/Sectiontitle/SectionTitle';
import SingleCategoryItem from '../../shared/Sectiontitle/SingleCategoryItem/SingleCategoryItem';

const Categories = () => {
const img = [1,2,3,4,5,6]
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col">
                       <SectionTitle>Search by Category</SectionTitle>
                    </div>
                </div>
                <div className="d-flex gap-4 mt-4 flex-wrap text-center">
                   {img?.map( singleImg => <SingleCategoryItem img={singleImg}></SingleCategoryItem>)}
                </div>
            </div>
        </section>
    );
};

export default Categories;