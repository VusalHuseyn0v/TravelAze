import React, { useEffect, useState } from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { AiOutlineInstagram } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPerson } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { enUS } from 'date-fns/locale';
import { format } from 'date-fns';

const regions = [
  "Qax", "Şəki", "Zaqatala", "Qəbələ", "Qusar",
  "Quba", "Lənkəran", "İsmayıllı", "Lerik"
];

const Main = () => {
  const { t } = useTranslation('main');
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({ adult: 1, children: 0, room: 1 });

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1
    }));
  };

  const handleSearch = () => {
    navigate("/hotels", {
      state: {
        destination,
        date,
        options
      }
    });
  };

  return (
    <section className="main">
      <div className="overlay"></div>
      <video muted autoPlay loop src="https://videos.pexels.com/video-files/5948574/5948574-uhd_2560_1440_30fps.mp4"></video>
      <div className="mainContent container">
        <div className="textDiv">
          <span className="smallText">{t('ourPackages')}</span>
          <h1 data-aos="fade-up" className="mainTitle">{t('searchHoliday')}</h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <div className="headerSearch">

              {/* Rayon seçimi */}
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <select
                  className="headerSearchInput"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                >
                  <option value="">{t('selectLocation')}</option>
                  {regions.map((region, idx) => (
                    <option key={idx} value={region}>
                      {t(`regions.${region}`)} {/* 👈 Tərcümə olunan rayon adı */}
                    </option>
                  ))}
                </select>


              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {`${format(date[0].startDate, "MM/dd/yyyy")}  ${format(date[0].endDate, "MM/dd/yyyy")}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    locale={enUS}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">
                  {`${t('options.adult')} . ${options.adult} ${t('options.children')} . ${options.children} ${t('options.room')} . ${options.room}`}
                </span>

                {openOptions && (
                  <div className="options">
                    {['adult', 'children', 'room'].map((key, index) => (
                      <div key={index} className="optionItem">
                        <span className="optionText">{t(`options.${key}`)}</span>
                        <div className="optionCounter">
                          <button
                            disabled={options[key] <= (key === 'adult' || key === 'room' ? 1 : 0)}
                            className="optionCounterButton"
                            onClick={() => handleOption(key, 'd')}>-</button>
                          <span className="optionCounterNumber">{options[key]}</span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption(key, 'i')}>+</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  {t('search')}
                </button>
              </div>

            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="mainFooterIcons flex">
          <div className="rightIcons">
            <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <IoLogoFacebook className="icon" />
            </Link>
          </div>
          <div className="leftIcons">
            <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;

