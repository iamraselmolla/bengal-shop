import React from 'react';
import './sectiontitle.css'

const SectionTitle = ({children}) => {
    return (
        <h2 className="fw-bold position-relative section-title">
            {children}
        </h2>
    );
};

export default SectionTitle;