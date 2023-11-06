import React from 'react'
import bannerImage from '../BannerComponent/fashion-img.jpg';
import './banner.css'
const Banner = () => {
    return (
        <>
            <div className='banner-img'>
                <img src={bannerImage} alt='' />

            </div>

            <div className='content'>
                <div>
                    <h2 >Beauty begins the moment </h2>
                </div>
            </div>



        </>
    )
}

export default Banner
