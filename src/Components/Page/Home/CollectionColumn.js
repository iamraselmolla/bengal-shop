import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const CollectionColumn = ({color, title, link, img}) => {
    return (
        <div className="col-md-4">
            <div  style={{ background: color }} className="row py-4 rounded-3">
                <div className="col-md-6 d-flex flex-column justify-content-center ps-md-4">
                    <h3 className="fw-bolder">
                        {title}
                    </h3>
                    <div style={{ width: '50px', height: '50px', lineHeight: '50px' }} className="icon mt-5 text-center rounded-circle bg-white">
                        <Link to={`${link}`}>
                            <AiOutlineArrowRight style={{ color: '#FF5C00' }}></AiOutlineArrowRight>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CollectionColumn;