import React from 'react';
import SectionTitle from '../../shared/Sectiontitle/SectionTitle';
import SingleCategoryItem from '../../shared/Sectiontitle/SingleCategoryItem/SingleCategoryItem';

import Slider from 'react-slick';

const Categories = () => {
    var settings = {
        dots: false,
        autoPlay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        accessibility: true

    };
    return (
        <section>

            <div className="container">
                <div className="row position-relative">
                    <div className="col">
                        <SectionTitle>Search by Category</SectionTitle>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <Slider {...settings}>

                        <div>
                            <SingleCategoryItem img={1}></SingleCategoryItem>
                        </div>
                        <div>
                            <SingleCategoryItem img={2}></SingleCategoryItem>
                        </div>
                        <div>
                            <SingleCategoryItem img={2}></SingleCategoryItem>
                        </div>
                        <div>
                            <SingleCategoryItem img={3}></SingleCategoryItem>
                        </div>
                        <div>
                            <SingleCategoryItem img={4}></SingleCategoryItem>
                        </div>
                        <div>
                            <SingleCategoryItem img={5}></SingleCategoryItem>
                        </div>
                        <div>
                            <SingleCategoryItem img={6}></SingleCategoryItem>
                        </div>
                        <div>
                            <SingleCategoryItem img={2}></SingleCategoryItem>
                        </div>
                
            </Slider>

        </div >
            </div >
        </section >
    );
};

export default Categories;