import React from 'react';
import SectionTitle from '../../shared/Sectiontitle/SectionTitle';

const PopularBrand = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <SectionTitle>Popular Brands</SectionTitle>
                </div>
                <div className="row text-center mt-4 d-flex">
                    <div className="col-md-2">
                        <img className='img-fluid' src="img/brand (1).png" alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className='img-fluid' src="img/brand (2).png" alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className='img-fluid' src="img/brand (3).png" alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className='img-fluid' src="img/brand (4).png" alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className='img-fluid' src="img/brand (5).png" alt="" />
                    </div>
                    <div className="col-md-2">
                        <img className='img-fluid' src="img/brand (6).png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularBrand;