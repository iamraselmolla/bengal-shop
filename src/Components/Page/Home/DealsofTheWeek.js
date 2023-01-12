import React from 'react';
import SectionTitle from '../../shared/Sectiontitle/SectionTitle';
import { AiFillStar } from 'react-icons/ai'

const DealsofTheWeek = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <SectionTitle>Deals of thr Week</SectionTitle>
                </div>
                <div className="row mt-4">
                    <div className="col-md-3 text-center">
                        <img className='img-fluid' src="img/deals- (1).png" alt="" />
                        <div className="product_info">
                            <div className="text-center justify-content-center d-flex mt-3 gap-1 text-warning">
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar> <span className='text-black'>(120)</span>
                            </div>
                            <h5 className="fw-bold">
                                Product name
                            </h5>
                            <h6 className="fw-bold mt-3">
                                $200 <del className='text-muted ms-3'>$300</del>
                            </h6>
                            <button className="px-5 fw-bolder bg-transparent theme_color py-2 rounded-5 border border-1">
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <img className='img-fluid' src="img/deals- (2).png" alt="" />
                        <div className="product_info">
                            <div className="text-center justify-content-center d-flex mt-3 gap-1 text-warning">
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar> <span className='text-black'>(120)</span>
                            </div>
                            <h5 className="fw-bold">
                                Product name
                            </h5>
                            <h6 className="fw-bold mt-3">
                                $200 <del className='text-muted ms-3'>$300</del>
                            </h6>
                            <button className="px-5 fw-bolder bg-transparent theme_color py-2 rounded-5 border border-1">
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <img className='img-fluid' src="img/deals- (3).png" alt="" />
                        <div className="product_info">
                            <div className="text-center justify-content-center d-flex mt-3 gap-1 text-warning">
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar> <span className='text-black'>(120)</span>
                            </div>
                            <h5 className="fw-bold">
                                Product name
                            </h5>
                            <h6 className="fw-bold mt-3">
                                $200 <del className='text-muted ms-3'>$300</del>
                            </h6>
                            <button className="px-5 fw-bolder bg-transparent theme_color py-2 rounded-5 border border-1">
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <img className='img-fluid' src="img/deals- (4).png" alt="" />
                        <div className="product_info">
                            <div className="text-center justify-content-center d-flex mt-3 gap-1 text-warning">
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar> <span className='text-black'>(120)</span>
                            </div>
                            <h5 className="fw-bold">
                                Product name
                            </h5>
                            <h6 className="fw-bold mt-3">
                                $200 <del className='text-muted ms-3'>$300</del>
                            </h6>
                            <button className="px-5 fw-bolder bg-transparent theme_color py-2 rounded-5 border border-1">
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3 text-center">
                        <img className='img-fluid' src="img/deals- (5).png" alt="" />
                        <div className="product_info">
                            <div className="text-center justify-content-center d-flex mt-3 gap-1 text-warning">
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar>
                                <AiFillStar></AiFillStar> <span className='text-black'>(120)</span>
                            </div>
                            <h5 className="fw-bold">
                                Product name
                            </h5>
                            <h6 className="fw-bold mt-3">
                                $200 <del className='text-muted ms-3'>$300</del>
                            </h6>
                            <button className="px-5 fw-bolder bg-transparent theme_color py-2 rounded-5 border border-1">
                                Add to cart
                            </button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    );
};

export default DealsofTheWeek;