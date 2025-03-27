import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi';
import img from '../../Assets/Images/City/Qax/1.jpg'
import img2 from '../../Assets/Images/City/Seki/2.jpg'
import img3 from '../../Assets/Images/City/Zaqatala/1.jpg'
import img4 from '../../Assets/Images/City/Qusar/1.jpg'
import img5 from '../../Assets/Images/City/Quba/4.jpg'
import img6 from '../../Assets/Images/City/Ismayilli/5.jpeg'
import img7 from '../../Assets/Images/City/Qebele/1.jpg'
import img8 from '../../Assets/Images/City/Lenkeran/1.jpg'
import img9 from '../../Assets/Images/City/Lerik/1.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Cards.css';

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Qax',
        location: 'Azerbaycan Qax',
        grade: 'CULTURAL RELAX',
        fees: '$170',
        description: 'Qax rayonu, Azərbaycanın şimal-qərb hissəsində yerləşən və zəngin təbiətinə, qədim tarixə və mədəniyyətə sahib olan bir ərazidir. Bu rayon, həm yerli, həm də xarici turistlər üçün cəlbedici olan...'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Seki',
        location: 'Azerbaycan Seki',
        grade: 'CULTURAL RELAX',
        fees: '$170',
        description: 'Şəki rayonu, Azərbaycanın şimal-qərb hissəsində yerləşən və tarixi, mədəniyyəti və təbiəti ilə seçilən bir bölgədir. Bu rayon, həm yerli, həm də xarici turistlər üçün maraqlı bir istiqamət olmaqla...'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Zaqatala',
        location: 'Azerbaycan Zaqatala',
        grade: 'CULTURAL RELAX',
        fees: '$170',
        description: 'Zaqatala rayonu, Azərbaycan Respublikasının şimal-qərb hissəsində yerləşən, təbiəti, tarixi və mədəniyyəti ilə məşhur olan bir rayondur. Zaqatala rayonu, həmçinin, Azərbaycanın qədim və gözəl...'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Qusar',
        location: 'Azerbaycan Qusar',
        grade: 'CULTURAL RELAX',
        fees: '$150',
        description: 'Qusar rayonu, Azərbaycanın şimal bölgəsində, Qafqaz dağları ətəyində yerləşən, həm təbii gözəllikləri, həm də zəngin mədəni irsi ilə məşhur olan bir rayondur. Qusar rayonu, həmçinin...'
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Quba',
        location: 'Azerbaycan Quba',
        grade: 'CULTURAL RELAX',
        fees: '$150',
        description: 'Quba rayonu, Azərbaycanın şimalında, Qafqaz dağlarının ətəyində yerləşən və Zaqatala-Gəncə yolu üzərindəki vacib bir coğrafi və mədəni bölgədir. Rayon həm təbiətinin gözəlliyi, həm də...'
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Ismayilli',
        location: 'Azerbaycan Ismayilli',
        grade: 'CULTURAL RELAX',
        fees: '$150',
        description: 'İsmayıllı rayonu, Azərbaycanın şimal-şərq hissəsində yerləşən, zəngin təbiəti və mədəniyyəti ilə tanınan bir bölgədir. Quba və Şəki rayonları ilə sərhəd olan İsmayıllı, həmçinin paytaxt...'
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Qəbələ',
        location: 'Azerbaycan Qebele',
        grade: 'CULTURAL RELAX',
        fees: '$150',
        description: 'Qəbələ rayonu, Azərbaycanın şimal-qərb hissəsində, Qafqaz dağlarının ətəyində yerləşən və təbii gözəllikləri, tarixi və mədəni irsi ilə məşhur olan bir rayondur. Qəbələ, həmçinin, Azərbaycanın...'
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Lenkeran',
        location: 'Azerbaycan Lenkeran',
        grade: 'CULTURAL RELAX',
        fees: '$120',
        description: 'Lənkəran rayonu, Azərbaycanın cənubunda yerləşən, təbii gözəllikləri, zəngin mədəni irsi və iqtisadi əhəmiyyəti ilə tanınan bir rayondur. Lənkəran rayonu, xüsusilə iqlimi, meyvəçilik...'
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Lerik',
        location: 'Azerbaycan Lerik',
        grade: 'CULTURAL RELAX',
        fees: '$120',
        description: 'Lerik rayonu, Azərbaycanın cənubunda, Lənkəran rayonu ilə sərhəddə yerləşən və təbii gözəllikləri, zəngin mədəniyyəti və nadir flora və faunası ilə tanınan bir bölgədir. Lerik, həmçinin, çoxsaylı...'
    },
]

const Cards = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className='cards container section'>
            <div className='cardsTitle'>
                <h3 data-aos="fade-right" className='title'>
                    Most visited destinations
                </h3>
            </div>
            <div className='cardsContent grid'>
                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} data-aos="fade-up" className='singleDestination'>
                                <div className='imageDiv'>
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className='cardInfo'>
                                    <h4 className='destTitle'>{destTitle}</h4>
                                    <span className='continent flex'>
                                        <HiOutlineLocationMarker className='iconLocation' />
                                        <span className='name'>{location}</span>
                                    </span>

                                    <div className='fees flex'>
                                        <div className='grade'>
                                            <span>{grade}<small> +1 </small></span>
                                        </div>
                                        <div className='price'>
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className='desc'>
                                        <p>{description}</p>
                                    </div>

                                    <button className='btn flex'>
                                        <Link to={`/destination/${id}`}>DETAILS</Link>
                                        <HiOutlineClipboardCheck className='iconDetails' />
                                    </button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Cards;
