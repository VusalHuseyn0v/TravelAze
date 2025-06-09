import "./hotel.css";
import Footer from '../../components/Footer/index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";


const hotelsInfo = {
  Qax: {
    "El Resort Hotel": {
      photos: [
        { src: "https://www.terratravel.az/home/getfile/19310" },
        { src: "https://www.terratravel.az/home/getfile/19323" },
        { src: "https://content.r9cdn.net/rimg/himg/ab/e5/39/expediav2-34493180-9192020e_z-725405.jpg?width=1200&height=630&crop=true" },
      ],
      address: "Qax City Center",
      description: {
        az: "Hotel müasir şəraitdə rahat otaqlar və gözəl xidmət təklif edir.",
        en: "Hotel offers comfortable rooms with modern amenities and excellent service.",
        ru: "Отель предлагает комфортабельные номера с современными удобствами и отличным обслуживанием."
      },
      distance: {
        value: "300m",
        textKey: "distance"
      },
      pricePerNight: 140,
      nights: 5,
      stars: "5★",
    },
    "UMID Hotel": {
      photos: [
        { src: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/149064284.jpg?k=5006214e670195e1814c81cb1b361d468384b7055344581ce7633a5b6b3d16ef&o=" },
        { src: "https://cf.bstatic.com/xdata/images/hotel/max500/521620793.jpg?k=e061ca6ccebc9e4da0f607ebd761e50c2610b14b24747e6c8804ba5a32b4227c&o=&hp=1" },
        { src: "https://silkrow.az/media/2020/09/18/yurd_hotel3.jpg" },
      ],
      address: "Qax Downtown",
      description: {
        az: "UMID Hotel ev rahatlığı ilə səmimi və sakit mühit təqdim edir.",
        en: "UMID Hotel offers a cozy and quiet environment with a home-like atmosphere.",
        ru: "UMID Hotel предлагает уютную и спокойную обстановку с домашним комфортом."
      },
      distance: {
        value: "500m",
        textKey: "distance"
      },
      pricePerNight: 65,
      nights: 4,
      stars: "3★",
    }
  },

  Şəki: {
    "Marxal Resort & Spa": {
      photos: [
        { src: "https://th.bing.com/th/id/R.10167c8faa011c9ebdac109675f3a988?rik=RwzQwwzJMaoVaQ&pid=ImgRaw&r=0" },
        { src: "https://www.marxalresort.az/en/assets/images/img-2697-edit-2000x1297.jpg" },
        { src: "https://www.marxalresort.az/en/assets/images/esas2-1264x840.jpg" },
      ],
      address: "Sheki Center",
      description: {
        az: "Hotel qədim tarixi ilə birgə lüks və komfortlu yaşayış təqdim edir.",
        en: "Hotel combines historic charm with luxury and comfort.",
        ru: "Отель сочетает историческое очарование с роскошью и комфортом."
      },
      distance: {
        value: "200m",
        textKey: "distance"
      },
      pricePerNight: 205,
      nights: 7,
      stars: "5★",
    },
    "Sheki Palace Hotel": {
      photos: [
        { src: "https://joinup.ua/media/2019/06/1Sheki-Palace-Hotel-4.jpg" },
        { src: "https://th.bing.com/th/id/R.1112207e362ac602f504f79ea1a41e6a?rik=DsKv6pgrwaFvwQ&pid=ImgRaw&r=0" },
        { src: "https://resanthotels.az/uploads/posts/2023-01/1674643560_2.jpg" },
      ],
      address: "Sheki Old Town",
      description: {
        az: "Şəki Palace Hotel qədim tarixi ilə birgə lüks və komfortlu yaşayış təqdim edir.",
        en: "Sheki Palace Hotel combines historic charm with luxury and comfort.",
        ru: "Отель Sheki Palace сочетает историческое очарование с роскошью и комфортом."
      },
      distance: {
        value: "350m",
        textKey: "distance"
      },
      pricePerNight: 110,
      nights: 5,
      stars: "4★",
    },
    "Yaffle Inn Boutique Hotel": {
      photos: [
        { src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/113484624.jpg?k=fd20c78b3fe8735130f6f1c170097b6c781c55c7815bc5ba59a8fde61554bcfe&o=&hp=1" },
        { src: "https://i.travelapi.com/lodging/21000000/20830000/20823300/20823288/12a317ea_z.jpg" },
        { src: "https://media-cdn.tripadvisor.com/media/photo-s/10/e6/43/f4/balkonlu-queen.jpg" },
      ],
      address: "Sheki Downtown",
      description: {
        az: "Yaffle Inn Boutique Hotel münasib qiymətlərlə şık konaklama təklif edir.",
        en: "Yaffle Inn Boutique Hotel offers stylish accommodation at affordable prices.",
        ru: "Yaffle Inn Boutique Hotel предлагает стильное размещение по доступным ценам."
      },
      distance: {
        value: "400m",
        textKey: "distance"
      },
      pricePerNight: 75,
      nights: 4,
      stars: "3★",
    }
  },

  Zaqatala: {
    "Evim Hotel": {
      photos: [
        { src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/136216941.jpg?k=af80ff08018df9922854ed080f3fc7d1ad860f4783c708cf9342b81fd9aacaed&o=&hp=1" },
        { src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/480030954.jpg?k=703347755ddaf251149fcf81685914aaf65d907cdc063abe8155c3ec618a342e&o=&hp=1" },
        { src: "https://dimg04.c-ctrip.com/images/02Y6012000aft4uvaF7B0_R_1080_808_Q90.jpg" },
      ],
      address: "Zaqatala Center",
      description: {
        az: "Evim Hotel Zaqatalada münasib qiymətə rahat qalma imkanı təqdim edir.",
        en: "Evim Hotel is a budget-friendly hotel offering comfortable stays in Zaqatala.",
        ru: "Evim Hotel - бюджетный отель с комфортным проживанием в Закадале."
      },
      distance: {
        value: "450m",
        textKey: "distance"
      },
      pricePerNight: 60,
      nights: 3,
      stars: "3★",
    },
    "Sangar Qala Hotel": {
      photos: [
        { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/a0/77/cd/sangar-qala.jpg?w=1200&h=-1&s=1" },
        { src: "https://media-cdn.tripadvisor.com/media/photo-s/0d/c2/f3/1a/caption.jpg" },
        { src: "https://media-cdn.tripadvisor.com/media/photo-p/14/0e/47/4b/photo0jpg.jpg" },
      ],
      address: "Zaqatala Old Town",
      description: {
        az: "Sangar Qala Hotel rahat qalma və yaxşı xidmət təklif edir.",
        en: "Sangar Qala Hotel offers comfortable accommodation with good service.",
        ru: "Отель Sangar Qala предлагает комфортное проживание с хорошим сервисом."
      },
      distance: {
        value: "350m",
        textKey: "distance"
      },
      pricePerNight: 85,
      nights: 4,
      stars: "3★",
    }
  },

  Qəbələ: {
    "Chenot Palace Health Wellness Hotel": {
      photos: [
        { src: "https://www.nargismagazine.az/site/assets/files/3175/2__chenot_palace_health_wellness_hotel__nohur_lake_view.jpg" },
        { src: "https://www.insignia.com/wp-content/uploads/2017/03/DSC1800-1242x855.jpg" },
        { src: "https://www.azernews.az/media/2016/10/10/chenot_palace_6.jpg" },
      ],
      address: "Qebele City Center",
      description: {
        az: "Chenot Palace lüks spa və sağlamlıq mərkəzi ilə məşhurdur.",
        en: "Chenot Palace is famous for its luxury spa and wellness center.",
        ru: "Chenot Palace известен своим роскошным спа и оздоровительным центром."
      },
      distance: {
        value: "1km",
        textKey: "distance"
      },
      pricePerNight: 500,
      nights: 7,
      stars: "5★",
    },
    "Qafqaz Riverside Resort Hotel": {
      photos: [
        { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/bf/95/bb/qafqaz-riverside-hotel.jpg?w=1200&h=-1&s=1" },
        { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/44/e0/82/qafqaz-riverside-resort.jpg?w=1400&h=-1&s=1" },
        { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/bf/96/a0/qafqaz-riverside-hotel.jpg?w=1200&h=-1&s=1" },
      ],
      address: "Qebele Mountains",
      description: {
        az: "Qafqaz Tufandag dağ oteli möhtəşəm mənzərə və idman imkanları təklif edir.",
        en: "Qafqaz Tufandag mountain hotel offers stunning views and sports facilities.",
        ru: "Горный отель Qafqaz Tufandag предлагает потрясающие виды и спортивные удобства."
      },
      distance: {
        value: "3km",
        textKey: "distance"
      },
      pricePerNight: 300,
      nights: 5,
      stars: "4★",
    },
    "Qafqaz Karvansaray Hotel": {
      photos: [
        { src: "https://www.advantour.com/img/azarbaijan/hotels/gabala/qafqaz-karvansaray-hotel.jpg" },
        { src: "https://www.advantour.com/img/azarbaijan/hotels/gabala/qafqaz-karvansaray/restaurant2.jpg" },
        { src: "https://cdn.worldota.net/t/640x400/content/1e/ba/1eba81eafae9038a5c7cccb7f9e0cc4d7506594b.jpeg" },
      ],
      address: "Qebele Old Town",
      description: {
        az: "Qafqaz Karvansaray Hotel ənənəvi memarlıq ilə müasir komfortu birləşdirir.",
        en: "Qafqaz Karvansaray Hotel combines traditional architecture with modern comforts.",
        ru: "Отель Qafqaz Karvansaray сочетает традиционную архитектуру с современным комфортом."
      },
      distance: { value: "550m", textKey: "distance" },
      pricePerNight: 160,
      nights: 4,
      stars: "4★",
    }
  },

  Qusar: {
    "Shahdag Mountain Resort / Pik Palace Hotel": {
      photos: [
        { src: "https://www.shahdaghotels.com/resourcefiles/homeimages/park-chalet-shahdag-azerbaijan-top.jpeg?version=7142022090511" },
        { src: "https://images.trvl-media.com/lodging/10000000/9690000/9680100/9680083/c87344d7.jpg?impolicy=resizecrop&rw=598&ra=fit" },
        { src: "https://images.squarespace-cdn.com/content/v1/5d8ca8b3d46259208da62e42/1605210244632-WP2AW3F7HRRNBB2D0OAD/Pik+Palace+03.jpg" },
      ],
      address: "Qusar City Center",
      description: {
        az: "Pik Palace Hotel idman və istirahət üçün ideal yerdir.",
        en: "Pik Palace Hotel is an ideal place for sports and relaxation.",
        ru: "Отель Pik Palace — идеальное место для спорта и отдыха."
      },
      distance: {
        value: "700m",
        textKey: "distance"
      },
      pricePerNight: 170,
      nights: 6,
      stars: "4★",
    },
    "Zirve Hotel Shahdag": {
      photos: [
        { src: "https://images.trvl-media.com/lodging/35000000/34860000/34851500/34851402/9d68f73a.jpg?impolicy=resizecrop&rw=1200&ra=fit" },
        { src: "https://images.trvl-media.com/lodging/35000000/34860000/34851500/34851402/6396e2bb.jpg?impolicy=resizecrop&rw=1200&ra=fit" },
        { src: "https://images.trvl-media.com/lodging/35000000/34860000/34851500/34851402/1069ca50.jpg?impolicy=resizecrop&rw=1200&ra=fit" },
      ],
      address: "Qusar City Center",
      description: {
        az: "Pik Palace Hotel idman və istirahət üçün ideal yerdir.",
        en: "Pik Palace Hotel is an ideal place for sports and relaxation.",
        ru: "Отель Pik Palace — идеальное место для спорта и отдыха."
      },
      distance: {
        value: "700m",
        textKey: "distance"
      },
      pricePerNight: 170,
      nights: 6,
      stars: "4★",
    }
  },

  Quba: {
    "Quba Palace Hotel": {
      photos: [
        { src: "https://qafqazinfo.az/uploads/1670492652/Quba_Palace_Hotel_Qar.jpg" },
        { src: "https://silkrow.az/media/2018/11/14/quba_palace.jpg" },
        { src: "https://silkrow.az/media/2018/11/14/quba_palace_4.jpg" },
      ],
      address: "Quba City Center",
      description: {
        az: "Quba Palace Hotel şəhərin mərkəzində yerləşir və rahat xidmət təklif edir.",
        en: "Quba Palace Hotel is located in the city center and offers comfortable services.",
        ru: "Отель Quba Palace расположен в центре города и предлагает комфортное обслуживание."
      },
      distance: {
        value: "600m",
        textKey: "distance"
      },
      pricePerNight: 150,
      nights: 5,
      stars: "4★",
    },
    "Macera Lake Park Quba": {
      photos: [
        { src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/362395731.jpg?k=0e9eff63e0695d2afb6205b377a4e17a5c9eafc08b0ec76f4f72796e3ee50573&o=&hp=1" },
        { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/a5/13/af/caption.jpg?w=700&h=-1&s=1" },
        { src: "https://i.ytimg.com/vi/FsVMpQmduQo/maxresdefault.jpg" },
      ],
      address: "Quba City Center",
      description: {
        az: "Hotel şəhərin mərkəzində yerləşir və rahat xidmət təklif edir.",
        en: " otel is located in the city center and offers comfortable services.",
        ru: "Отель расположен в центре города и предлагает комфортное обслуживание."
      },
      distance: {
        value: "600m",
        textKey: "distance"
      },
      pricePerNight: 150,
      nights: 5,
      stars: "4★",
    }
  },

  Lənkəran: {
    "Xan Lankaran Hotel": {
      photos: [
        { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/a2/ab/99/khan-lankaran-hotel.jpg?w=1200&h=-1&s=1" },
        { src: "https://ulduztourism.az/wp-content/uploads/2018/11/khan-lenkeran-hotel-1-1.jpg" },
        { src: "https://ulduztourism.az/wp-content/uploads/2018/11/khan-lenkeran-hotel-2-1.jpg" },
      ],
      address: "Lankaran City Center",
      description: {
        az: "Xan Lankaran Hotel dəniz mənzərəli otaqlar və yüksək səviyyəli xidmət təklif edir.",
        en: "Xan Lankaran Hotel offers sea-view rooms and high-quality services.",
        ru: "Отель Xan Lankaran предлагает номера с видом на море и высококлассное обслуживание."
      },
      distance: {
        value: "1km",
        textKey: "distance"
      },
      pricePerNight: 110,
      nights: 4,
      stars: "4★",
    },
    "Lankaran Springs Wellness Resort": {
      photos: [
        { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/a2/ab/99/khan-lankaran-hotel.jpg?w=1200&h=-1&s=1" },
        { src: "https://ulduztourism.az/wp-content/uploads/2018/11/khan-lenkeran-hotel-1-1.jpg" },
        { src: "https://ulduztourism.az/wp-content/uploads/2018/11/khan-lenkeran-hotel-2-1.jpg" },
      ],
      address: "Lankaran City Center",
      description: {
        az: "Hotel ənənəvi memarlıq ilə müasir komfortu birləşdirir.",
        en: "Hotel combines traditional architecture with modern comforts.",
        ru: "Отель сочетает традиционную архитектуру с современным комфортом."
      },
      distance: {
        value: "600m",
        textKey: "distance"
      },
      pricePerNight: 130,
      nights: 5,
      stars: "5★",
    }
  },

  İsmayıllı: {
    "Green House Hotel Ismayilli": {
      photos: [
        { src: "https://th.bing.com/th/id/R.96829180cc435e27d801b94b69dc6b5a?rik=lRJKTSZre44pog&riu=http%3a%2f%2fwww.bakupages.com%2fclub%2ftravel%2fimages%2fgreen-house-1119183.jpg&ehk=CFeZGD0V%2b9FQutVk5rL%2bqzuT3F5Xd0rQLMIzvRdnZHk%3d&risl=&pid=ImgRaw&r=0" },
        { src: "https://i.ytimg.com/vi/iIl14P3NEq4/maxresdefault.jpg" },
        { src: "https://cf.bstatic.com/xdata/images/hotel/max500/219417717.jpg?k=e3e8bedba0921ba070df29ff554b9435930365a5b2c47d93873ff96929840e5b&o=&hp=1" },
      ],
      address: "Ismayilli City Center",
      description: {
        az: "Green House Hotel Ismayilli təbiət qoynunda rahat və sakit konaklama təmin edir.",
        en: "Green House Hotel Ismayilli offers comfortable and quiet accommodation surrounded by nature.",
        ru: "Отель Green House Ismayilli предлагает комфортное и спокойное проживание среди природы."
      },
      distance: {
        value: "800m",
        textKey: "distance"
      },
      pricePerNight: 90,
      nights: 3,
      stars: "3★",
    },
    "Talistan Forest Park": {
      photos: [
        { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/9e/86/7f/talistan-forest-park.jpg?w=700&h=-1&s=1" },
        { src: "https://media-cdn.tripadvisor.com/media/photo-s/12/9e/86/9e/talistan-forest-park.jpg" },
        { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/9e/86/bb/talistan-forest-park.jpg?w=1200&h=-1&s=1" },
      ],
      address: "Ismayilli Forest Area",
      description: {
        en: "Talistan Forest Park offers a peaceful retreat in nature.",
        az: "Talistan Forest Park təbiət qoynunda sakit və rahat istirahət imkanı təqdim edir.",
        ru: "Talistan Forest Park предлагает спокойный отдых на лоне природы."
      },
      distance: {
        value: "2 km",
        textKey: "distance"
      },
      pricePerNight: 115,
      nights: 6,
    }
  },
  Lerik: {
    "Relax Lerik Hotel & Resort": {
      photos: [
        { src: "https://media-cdn.tripadvisor.com/media/photo-s/06/0b/91/f4/overall-view-1.jpg" },
        { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/0b/91/f2/view-from-the-pool.jpg?w=900&h=-1&s=1" },
        { src: "https://th.bing.com/th/id/OIP.bAKBTp4DZTmMXeeaLIE78gHaE4?o=7&cb=iwp2rm=3&rs=1&pid=ImgDetMain" },
      ],
      address: "Lerik Village",
      description: {
        az: "Hotel idman və istirahət üçün ideal yerdir.",
        en: "Hotel is an ideal place for sports and relaxation.",
        ru: "Отель идеальное место для спорта и отдыха."
      },
      distance: {
        value: "700m",
        textKey: "distance"
      },
      pricePerNight: 105,
      nights: 4,
    },
    "Lerik Guest House-lar": {
      photos: [
        { src: "https://media-cdn.tripadvisor.com/media/photo-s/02/e0/3d/bc/relax-hotel-and-resort.jpg" },
        { src: "https://media-cdn.tripadvisor.com/media/photo-s/17/88/47/32/what-994505481122.jpg" },
        { src: "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/17/88/47/79/what-994505481122.jpg" },
      ],
      address: "Lerik Village Center",
      description: {
        az: "Hotel şəhərin mərkəzində yerləşir və rahat xidmət təklif edir.",
        en: "Hotel is located in the city center and offers comfortable services.",
        ru: "Отель расположен в центре города и предлагает комфортное обслуживание."
      },
      distance: {
        value: "200m",
        textKey: "distance"
      },
      pricePerNight: 50,
      nights: 3,
    }
  }
};


const Hotel = () => {
  const { region, hotelName } = useParams();
  const { t, i18n } = useTranslation("hotel");

  const decodedHotelName = decodeURIComponent(hotelName);
  const hotelData =
    hotelsInfo[region] && hotelsInfo[region][decodedHotelName]
      ? hotelsInfo[region][decodedHotelName]
      : null;

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  if (!hotelData) {
    return (
      <div className="hotelContainer" style={{ padding: 20 }}>
        <h2>{t("hotelNotFound")}</h2>
      </div>
    );
  }

  const photos = hotelData.photos;

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          {/* Otel adı məlumat bazasındakı açar ilə göstər */}
          <h1 className="hotelTitle">{decodedHotelName}</h1>

          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{t("Address")}: {hotelData.address}</span>
          </div>

          {/* Distance-in tərcihən interpolasiya ilə göstərilməsi */}
          <span className="hotelDistance">
            {t(hotelData.distance.textKey, { value: hotelData.distance.value })}
          </span>

          <span className="hotelPriceHighlight">
            {t("bookFreeTaxi", { price: hotelData.pricePerNight })}
          </span>

          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{t("stayInCity")}</h1>

              {/* burada description-un çoxdilli hissəsini göstər */}
              <p className="hotelDesc">{hotelData.description[i18n.language] || hotelData.description.en}</p>
            </div>

            <div className="hotelDetailsPrice">
              <h1>{t("perfectStay", { nights: hotelData.nights })}</h1>
              <span>{t("excellentLocation", { region })}</span>
              <h2>
                <b>${hotelData.pricePerNight * hotelData.nights}</b> {t("nightsTotal", { count: hotelData.nights })}
              </h2>

              <button>{t("reserve")}</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
