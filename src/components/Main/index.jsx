import React, { useEffect } from 'react'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from 'react-icons/hi';
import { IoLogoFacebook } from "react-icons/io5";
import { AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './Main.css'

const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])


    return (
        <section className='main'>
            <div className='overlay'></div>
            <video muted autoPlay loop src="https://videos.pexels.com/video-files/5948574/5948574-uhd_2560_1440_30fps.mp4"></video>
            <div className='mainContent container'>
                <div className='textDiv'>
                    <span className='smallText '>
                        Our Packages
                    </span>
                    <h1 data-aos="fade-up"
                        className='mainTitle'>
                        Search your Holiday
                    </h1>
                </div>

                <div data-aos="fade-up"
                    className='cardDiv grid'>
                    <div className='destinationInput'>
                        <label htmlFor="city">
                            Search Your destination:</label>
                        <div className='input flex'>
                            <input type="text"
                                placeholder='Enter name here....' />
                            <GrLocation className='icon' />
                        </div>
                    </div>
                    <div className='destinationInput'>
                        <label htmlFor="city">
                            Check-in date
                        </label>
                        <div className='input flex'>
                            <input type="date" />
                        </div>
                    </div>
                    <div className='destinationInput'>
                        <label htmlFor="city">
                            Check-out date</label>
                        <div className='input flex'>
                            <input type="date" />
                        </div>
                    </div>
                    <div className='searchOptions flex'>
                        <HiFilter className='icon' />
                        <span>MORE FILTERS</span>
                    </div>

                </div>
                <div data-aos="fade-up"
                    className='mainFooterIcons flex'>
                    <div className='rightIcons'>
                        <Link to="https://www.facebook.com" target='_blank' rel="noopener noreferrer"><IoLogoFacebook className='icon' /></Link>
                    </div>
                    <div className='leftIcons'>
                        <Link to="https://www.instagram.com" target='_blank' rel="noopener noreferrer"><AiOutlineInstagram className='icon' /></Link>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Main
