import React from 'react';

const SingleContact = ({img,title, info }) => {
    return (
        <div className='col-md-3 d-flex gap-3'>
        <div className='rounded justify-content-center' style={{width:'70px', height:'70px', background: '#EBFAEB', display:'flex', alignItems: 'center'}}>
        <img style={{width: '50px'}} src={img} alt="" />
        </div>
        <div className='d-flex flex-column'>
            <h6 className="fw-bold">
            {title}
            </h6>
            <p className="text-muted mb-0 mt-2">
            {info}
            </p>
        </div>
        </div>
    );
};

export default SingleContact;