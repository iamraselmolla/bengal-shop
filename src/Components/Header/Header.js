import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Form, Link, NavLink } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai'
import { MdOutlineAccountCircle } from 'react-icons/md'

const Header = () => {
    return (
        <header className='py-4'>
            <div className="container">
                <div className="menu-upper-part d-flex justify-content-between">
                    <Link className='text-decoration-none text-black' to="/">
                        <img src="img/logo.png" className='me-2' alt="" /> <span className='fs-4 fw-bold'>
                            Bengal shop
                        </span></Link>

                    <form class="d-flex border border-1 rounded-5 w-50">

                        <input style={{ borderRadius: '30px 0 0 30px' }} type="text" className='' class="form-control border-0 ps-4 search_input" id="inputsearch" placeholder="Search" />

                        <button className='px-5 my-1 me-1 py-2 rounded-5' type="submit" style={{ background: '#4F4F4F', border: 'none', color: '#fff' }}>Search</button>
                    </form>
                    <div className='d-flex align-items-center'>
                        <div className='fs-5 cursor-pointer ms-3'><AiOutlineHeart></AiOutlineHeart></div>
                        <div className='fs-5 cursor-pointer ms-3'><AiOutlineShopping></AiOutlineShopping></div>
                        <div className='fs-5 cursor-pointer d-flex ms-4 bg-muted align-items-center rounded-circle text-center'>
                            <div style={{width: '40px', height: '40px'}} className="d-flex me-2 rounded-circle align-items-center justify-content-center bg-muted text-center">
                                <MdOutlineAccountCircle></MdOutlineAccountCircle>
                                </div>
                            <span>
                                Account
                            </span>
                        </div>
                    </div>

                </div>
                <div className="menu-lower-part mt-4">
                    <div className="row">
                        <div className="col-md-3 col-sm-8">
                            <button className="outline-0 py-2 w-100 rounded-5 border-0 theme_bg">
                                <select class="custom-select bg-transparent border-0 text-white" id="inputGroupSelect01">
                                    <option selected>All Categories</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </button>
                        </div>
                        <div className="col-md-9 col-sm-4">
                            <Navbar bg="transparent" expand="lg">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <NavLink className="text-decoration-none text-black px-3">Home</NavLink>
                                        <NavLink className="text-decoration-none text-black px-3">Shop</NavLink>
                                        <NavLink className="text-decoration-none text-black px-3">Blog</NavLink>
                                        <NavLink className="text-decoration-none text-black px-3">Contact</NavLink>
                                        <NavLink className="text-decoration-none text-black px-3">Track Order</NavLink>
                                    </Nav>
                                    <div style={{ color: '#FF5C00' }}>
                                        % Special Offer
                                    </div>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;