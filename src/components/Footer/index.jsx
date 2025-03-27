import React, { useEffect } from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './Footer.css';

const Footer = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video muted loop autoPlay src="https://videos.pexels.com/video-files/19216559/19216559-uhd_2560_1440_30fps.mp4"></video>
      </div>
      <div className='secContent container'>
        <div className="footerCard flex">
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <Link to="#" className='logo flex'>
                <MdOutlineTravelExplore className='icon' />TravelAZE
              </Link>
            </div>
            <div data-aos="fade-up" className='footerParagraph'>
              Səyahət etmənin insana faydaları çox geniş və müxtəlifdir.
              <br />
              İnsanlar səyahət edərək yalnız yeni yerlər kəşf etmək,
              yeni mədəniyyətlərə tanış olmaqla kifayətlənmirlər,
              həm də özlərini daha yaxşı anlamağa, psixoloji və
              fiziki sağlamlıqlarını artırmağa kömək edirlər.
            </div>
            <div data-aos="fade-up"
              className='footerSocials flex'>
              <Link to="https://www.facebook.com" target='_blank' rel="noopener noreferrer"><IoLogoFacebook className='icon' /></Link>
              <Link to="https://www.instagram.com" target='_blank' rel="noopener noreferrer"><AiOutlineInstagram className='icon' /></Link>
            </div>
          </div>

          <div className='footerLinks grid'>

            {/*Group One*/}
            <div data-aos="fade-up"
              data-aos-duration="3000"
              className='linkGroup'>
              <span className='groupTitle'>
                AUR AGENCY
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Insurance
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Agency
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Tourism
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Payment
              </li>

            </div>

            {/*Group Two*/}
            <div data-aos="fade-up"
              data-aos-duration="4000"
              className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Bookings
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Rentcars
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                HostelWorld
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Trivago
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>
            </div>

            {/*Group Three*/}
            <div data-aos="fade-up"
              data-aos-duration="5000"
              className='linkGroup'>
              <span className='groupTitle'>
                POPULAR PLACES
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                <Link to="/destination/1">Qax</Link>
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                <Link to="/destination/2">Seki</Link>
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                <Link to="/destination/3">Zaqatala</Link>
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                <Link to="/destination/5">Quba</Link>
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                <Link to="/destination/7">Qebele</Link>
              </li>
            </div>
          </div>

          <div className='footerDiv flex'>
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHTS RECERVED - H.VUSAL 2025</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
