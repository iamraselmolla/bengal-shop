import React from 'react';
import { Form } from 'react-router-dom';

const Header = () => {
    return (
        <header className='py-4'>
            <div className="container">
                <div className="menu-upper-part">
                    <img src="img/logo.png" className='me-2' alt="" /> <span className='fs-4 fw-bold'>
                    Bengal shop
                    </span>
                </div>
                <div className="menu-lower-part mt-4">
                    <div className="row">
                        <div className="col-md-3 col-sm-8">
                            <button className="outline-0 py-2 w-100 rounded border-0 theme_bg">
                                <select class="custom-select bg-transparent border-0 text-white" id="inputGroupSelect01">
                                    <option selected>All Categories</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;