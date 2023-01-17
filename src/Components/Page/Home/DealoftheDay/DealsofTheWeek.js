import React from 'react';
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Slider from 'react-slick';
import SectionTitle from '../../../shared/Sectiontitle/SectionTitle';
import Deal from './Deal';


const DealsofTheWeek = () => {
    var settings = {
        dots: false,
        autoPlay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        accessibility: true
    };
    return (
        <section>
            <div className="container">
                <div className="row position-relative">
                    <SectionTitle>Deals of the Week</SectionTitle>
                </div>
                <div className="row mt-4 deals">
                    <Slider {...settings}>
                       <div><Deal name='Cow Meat' price={200} mainprice={300} review={100} img="img/deals- (1).png"></Deal></div>
                      <div> <Deal name='Fresh Dragon' price={100} mainprice={150} review={80} img="img/deals- (2).png"></Deal></div>
                       <div><Deal name='Fresh Orange' price={70} mainprice={100} review={130} img="img/deals- (3).png"></Deal></div>
                       <div> <Deal name='Fresh Bedana' price={120} mainprice={150} review={110} img="img/deals- (4).png"></Deal></div>
                       <div> <Deal name='Fresh Papya' price={70} mainprice={90} review={110} img="img/deals- (5).png"></Deal></div>
                       <div><Deal name='Fresh Orange' price={70} mainprice={100} review={130} img="img/deals- (3).png"></Deal></div>
                    </Slider>


                </div>
            </div>
        </section>
    );
};

export default DealsofTheWeek;