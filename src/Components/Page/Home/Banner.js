import React from 'react';
import './home.css'

const Banner = () => {
    return (
        <section style={{background: '#EBFAEB', paddingBottom: '0'}}>
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h5 className="theme_color mb-4 fw-bold">
                        Save up 30% off
                    </h5>
                    <h1 className='banner-header mb-3'>
                        Bengal Vegetable
                        Farm  Organic 100%
                    </h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula faucibus massa est elit maecenas.
                    </p>
                    <button className='theme_bg px-5 py-2 mt-3 rounded-5 border-0'>Shop Now</button>
                </div>
                <div className="col-md-6 px-lg-5">
                    <img className='img-fluid' src="img/banner.png" alt="" />
                </div>
            </div>
        </div>
    </section>
    );
};

export default Banner;