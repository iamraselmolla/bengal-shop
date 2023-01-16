import React from 'react';
import SingleContact from './SingleContact';

const Contact = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <SingleContact info={'Contact us 24 hours'} title={'24 Customer Support'} img ="img/c1.png"></SingleContact>
                    <SingleContact info={'Contact us 24 hours'} title={'Authentic Products'} img ="img/c2.png"></SingleContact>
                    <SingleContact info={'Contact us 24 hours'} title={'Secure Payment'} img ="img/c3.png"></SingleContact>
                    <SingleContact info={'Contact us 24 hours'} title={'Best Prices & Offers'} img ="img/c4.png"></SingleContact>
                </div>
            </div>
        </section>
    );
};

export default Contact;