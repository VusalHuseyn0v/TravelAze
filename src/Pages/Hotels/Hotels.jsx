import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './hotels.css';
import SearchItem from '../../components/searchItem/SearchItem';
import { useTranslation } from 'react-i18next';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hotels = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const hotelsData = {
    "Qax": [
      {
        name: "El Resort Hotel",
        stars: "5★",
        pricePerNight: "140 - 200 AZN",
        img: "https://www.terratravel.az/home/getfile/19310",
        rating: 4.9,
      },
      {
        name: "UMID Hotel",
        stars: "3★",
        pricePerNight: "50 - 80 AZN",
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/149064284.jpg?k=5006214e670195e1814c81cb1b361d468384b7055344581ce7633a5b6b3d16ef&o=",
        rating: 4.2,
      }
    ],
    "Şəki": [
      {
        name: "Marxal Resort & Spa",
        stars: "5★",
        pricePerNight: "160 - 250 AZN",
        img: "https://th.bing.com/th/id/R.10167c8faa011c9ebdac109675f3a988?rik=RwzQwwzJMaoVaQ&pid=ImgRaw&r=0",
        rating: 4.8,
      },
      {
        name: "Sheki Palace Hotel",
        stars: "4★",
        pricePerNight: "90 - 130 AZN",
        img: "https://joinup.ua/media/2019/06/1Sheki-Palace-Hotel-4.jpg",
        rating: 4.1,
      },
      {
        name: "Yaffle Inn Boutique Hotel",
        pricePerNight: "60 - 90 AZN",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/113484624.jpg?k=fd20c78b3fe8735130f6f1c170097b6c781c55c7815bc5ba59a8fde61554bcfe&o=&hp=1",
        rating: 4.6,
      }
    ],
    "Zaqatala": [
      {
        name: "Evim Hotel",
        pricePerNight: "50 - 70 AZN",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/136216941.jpg?k=af80ff08018df9922854ed080f3fc7d1ad860f4783c708cf9342b81fd9aacaed&o=&hp=1",
        rating: 4.3,
      },
      {
        name: "Sangar Qala Hotel",
        pricePerNight: "70 - 100 AZN",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/a0/77/cd/sangar-qala.jpg?w=1200&h=-1&s=1",
        rating: 4.8,
      }
    ],
    "Qəbələ": [
      {
        name: "Chenot Palace Health Wellness Hotel",
        stars: "5★",
        pricePerNight: "300 - 500 AZN",
        img: "https://www.nargismagazine.az/site/assets/files/3175/2__chenot_palace_health_wellness_hotel__nohur_lake_view.jpg",
        rating: 4.9,
      },
      {
        name: "Qafqaz Riverside Resort Hotel",
        stars: "5★",
        pricePerNight: "180 - 250 AZN",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/bf/95/bb/qafqaz-riverside-hotel.jpg?w=1200&h=-1&s=1",
        rating: 4.6,
      },
      {
        name: "Qafqaz Karvansaray Hotel",
        stars: "4★",
        pricePerNight: "100 - 150 AZN",
        img: "https://www.advantour.com/img/azarbaijan/hotels/gabala/qafqaz-karvansaray-hotel.jpg",
        rating: 4.9,
      }
    ],
    "Qusar": [
      {
        name: "Shahdag Mountain Resort / Pik Palace Hotel",
        stars: "5★",
        pricePerNight: "250 - 400 AZN",
        img: "https://www.shahdaghotels.com/resourcefiles/homeimages/park-chalet-shahdag-azerbaijan-top.jpeg?version=7142022090511",
        rating: 4.9,
      },
      {
        name: "Zirve Hotel Shahdag",
        stars: "4★",
        pricePerNight: "100 - 180 AZN",
        img: "https://images.trvl-media.com/lodging/35000000/34860000/34851500/34851402/9d68f73a.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        rating: 4.5,
      }
    ],
    "Quba": [
      {
        name: "Quba Palace Hotel",
        stars: "5★",
        pricePerNight: "180 - 300 AZN",
        img: "https://qafqazinfo.az/uploads/1670492652/Quba_Palace_Hotel_Qar.jpg",
        rating: 4.8,
      },
      {
        name: "Macera Lake Park Quba",
        pricePerNight: "130 - 180 AZN",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/362395731.jpg?k=0e9eff63e0695d2afb6205b377a4e17a5c9eafc08b0ec76f4f72796e3ee50573&o=&hp=1",
        rating: 4.6,
      }
    ],
    "Lənkəran": [
      {
        name: "Xan Lankaran Hotel",
        pricePerNight: "50 - 90 AZN",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/a2/ab/99/khan-lankaran-hotel.jpg?w=1200&h=-1&s=1",
        rating: 4.3,
      },
      {
        name: "Lankaran Springs Wellness Resort",
        stars: "5★",
        pricePerNight: "120 - 180 AZN",
        img: "https://maneco.group/wp-content/uploads/2019/05/Facade-Daylight.jpg",
        rating: 4.9,
      }
    ],
    "İsmayıllı": [
      {
        name: "Green House Hotel Ismayilli",
        pricePerNight: "60 - 90 AZN",
        img: "https://th.bing.com/th/id/R.96829180cc435e27d801b94b69dc6b5a?rik=lRJKTSZre44pog&riu=http%3a%2f%2fwww.bakupages.com%2fclub%2ftravel%2fimages%2fgreen-house-1119183.jpg&ehk=CFeZGD0V%2b9FQutVk5rL%2bqzuT3F5Xd0rQLMIzvRdnZHk%3d&risl=&pid=ImgRaw&r=0",
        rating: 4.4,
      },
      {
        name: "Talistan Forest Park",
        pricePerNight: "90 - 140 AZN",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/9e/86/7f/talistan-forest-park.jpg?w=700&h=-1&s=1",
        rating: 4.7,
      }
    ],
    "Lerik": [
      {
        name: "Relax Lerik Hotel & Resort",
        pricePerNight: "80 - 130 AZN",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/06/0b/91/f4/overall-view-1.jpg",
        rating: 4.5,
      },
      {
        name: "Lerik Guest House-lar",
        pricePerNight: "40 - 60 AZN",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/02/e0/3d/bc/relax-hotel-and-resort.jpg",
        rating: 4.3,
      }
    ]
  };


  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const location = useLocation();

  const { t } = useTranslation('hotels');

  useEffect(() => {
    // URL query parameter varsa istifadə etmək üçün, yoxsa state-dən
    const params = new URLSearchParams(location.search);
    const regionFromURL = params.get('region');

    if (regionFromURL) {
      setSelectedRegion(regionFromURL);
      setSearchTerm(regionFromURL);
    } else if (location.state && location.state.destination) {
      setSelectedRegion(location.state.destination);
      setSearchTerm(location.state.destination);
    }
  }, [location]);

  const filteredHotels = Object.entries(hotelsData)
    .flatMap(([region, hotels]) =>
      hotels
        .filter(hotel => {
          const search = searchTerm.toLowerCase();
          const nameMatch = hotel.name.toLowerCase().includes(search);
          const regionMatch = region.toLowerCase().includes(search);
          const matchesSearch = !searchTerm || nameMatch || regionMatch;
          const regionFilter = !selectedRegion || region === selectedRegion;

          const prices = hotel.pricePerNight.match(/\d+/g);
          const minHotelPrice = prices ? parseInt(prices[0]) : 0;
          const maxHotelPrice = prices && prices[1] ? parseInt(prices[1]) : minHotelPrice;

          const minOk = minPrice === '' || maxHotelPrice >= parseInt(minPrice);
          const maxOk = maxPrice === '' || minHotelPrice <= parseInt(maxPrice);

          return matchesSearch && regionFilter && minOk && maxOk;
        })
        .map((hotel, index) => (
          <SearchItem key={`${region}-${index}`} hotel={hotel} region={region} />
        ))
    );


  return (

    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">{t('search.title')}</h1>
          <div className="lsItem">
            <label>{t('search.hotelNameLabel')}</label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="lsItem">
            <label>{t('search.minPriceLabel')}</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div className="lsItem">
            <label>{t('search.maxPriceLabel')}</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="listResult">
          {filteredHotels.length > 0 ? (
            filteredHotels
          ) : (
            <p style={{ padding: "20px" }}>{t('search.noResults')}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
