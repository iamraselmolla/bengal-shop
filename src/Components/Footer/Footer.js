import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
import { FaFacebookF, FaInstagram, FaSkype, FaTwitter } from 'react-icons/fa'


const Footer = () => {

    return (
        <footer className='py-5' style={{ background: '#F5F5F5' }}>
           
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <Link className='text-decoration-none text-black' to="/">
                            <img src="img/logo.png" className='me-2' alt="" /> <span className='fs-4 fw-bold'>
                                Bengal shop
                            </span></Link>
                        <p className='mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam ornare nam est gravida. Netus viverra rhoncus sit magna sapien ac eget parturient id. Est luctus dapibus quam aliquam in nisl turpis. Elit et dictum lacus morbi nec accumsan a in.
                        </p>
                        <div className="d-flex gap-2">
                            <img src="img/Play store badge.png" alt="" />
                            <img src="img/Apple badge.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-3 offset-md-1">
                        <h5 style={{ color: '#4F4F4F' }}>About Us</h5>
                        <Link className='d-block text-decoration-none text-gray my-3'>About Us</Link>
                        <Link className='d-block text-decoration-none text-gray my-3'>Contact</Link>
                        <Link className='d-block text-decoration-none text-gray my-3'>Career</Link>
                        <Link className='d-block text-decoration-none text-gray my-3'>Terms and Condition</Link>
                        <Link className='d-block text-decoration-none text-gray my-3'>Category</Link>
                    </div>
                    <div className="col-md-3">
                        <h5 style={{ color: '#4F4F4F' }}>Info</h5>
                        <Link className='d-block text-decoration-none text-gray my-3'>Information</Link>
                        <Link className='d-block text-decoration-none text-gray my-3'>Shipping</Link>
                        <Link className='d-block text-decoration-none text-gray my-3'>Payment</Link>
                        <Link className='d-block text-decoration-none text-gray my-3'>Blog</Link>
                        <Link className='d-block text-decoration-none text-gray my-3'>Return</Link>
                    </div>
                </div>
                <div className="row mt-5 pt-4">
                    <div className="d-flex justify-content-between">
                        <div className='d-flex gap-3'>
                            <div className="social_icon">
                                <FaFacebookF></FaFacebookF>
                            </div>
                            <div className="social_icon">
                                <FaTwitter></FaTwitter>
                            </div>
                            <div className="social_icon">
                                <FaInstagram></FaInstagram>
                            </div>
                            <div className="social_icon">
                                <FaSkype></FaSkype>
                            </div>
                        </div>
                        <p>
                            @2022 Copyright All Right Reserved by Md Rasel Molla
                        </p>
                        <div>
                            <img src="img/visa.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;