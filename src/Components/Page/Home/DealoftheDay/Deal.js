import React from 'react';
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Deal = ({img, review, name, price, mainprice}) => {
    return (
        <div className="text-center mt-md-3">
        <div className="product_img position-relative">
            <img className='img-fluid' src={`${img}`} alt="" />
            <div className="item_calculate gap-2 d-flex align-items-center justify-content-center">
                <button className='bg-transparent bg-white border border-2 fs-4 fw-bold rounded-circle text-center text-white' style={{ width: '50px', lineHeight: '25px', height: '50px' }}><AiOutlineMinus></AiOutlineMinus></button>
                <div className='rounded-circle fs-6 theme_color  fw-bold bg-white text-center' style={{ width: '50px', height: '50px', lineHeight: '50px' }}>1</div>
                <button className='bg-transparent bg-white border border-2 fs-4 fw-bold rounded-circle text-center text-white' style={{ width: '50px', lineHeight: '25px', height: '50px' }}><AiOutlinePlus></AiOutlinePlus></button>
            </div>
        </div>
        <div className="product_info">
            <div className="text-center justify-content-center d-flex mt-3 gap-1 text-warning">
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar> <span className='text-black'>({review})</span>
            </div>
            <h5 className="fw-bold">
                {name}
            </h5>
            <h6 className="fw-bold mt-3">
                ${price} <del className='text-muted ms-3 fw-normal'>${mainprice}</del>
            </h6>
            <button className="px-5 fw-bolder bg-transparent theme_color py-2 rounded-5 border border-1 mt-1 add-to-cart-button">
                Add to cart
            </button>
        </div>
    </div>
    );
};

export default Deal;