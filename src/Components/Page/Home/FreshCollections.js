import React from 'react';
import './home.css'

const FreshCollections = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 position-relative">
                        <img src="img/fresh-2.png" className='img-fluid' alt="" />
                        <div className="row d-flex align-content-center position-absolute fresh-collection-text top-0">
                            <div className="col-md-6 px-5">
                                <h5 className='orange_font'>
                                    Buy 1 Get 1
                                </h5>
                                <h2 className='mb-5' style={{ fontWeight: '900', lineHeight: '48px' }}>
                                    Fresh Fruits
                                    Collection
                                </h2>
                                <buttn className="bg-white orange_font rounded-5 px-4 py-2">
                                    Order Now
                                </buttn>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 position-relative">
                        <img src="img/fresh-1.png" className='img-fluid' alt="" />
                        <div className="row d-flex align-content-center position-absolute fresh-collection-text top-0">
                            <div className="col-md-6 px-5">
                                <h5 className='orange_font'>
                                    Buy 1 Get 1
                                </h5>
                                <h2 className='mb-5' style={{ fontWeight: '900', lineHeight: '48px' }}>
                                    Fresh Fruits
                                    Collection
                                </h2>
                                <buttn className="bg-white orange_font rounded-5 px-4 py-2">
                                    Order Now
                                </buttn>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FreshCollections;