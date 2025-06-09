import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './searchItem.css';

const SearchItem = ({ hotel, region, rating }) => {
  const { t } = useTranslation('searchItem');

  return (
    <div data-aos="fade-up" className='searchItem'>
      <img
        className='siImg'
        src={hotel.img}
        alt={hotel.name}
      />
      <div className='siDesc'>
        <h1 className='siTitle'>
          {hotel.name.length > 30 ? `${hotel.name.slice(0, 30)}...` : hotel.name}
        </h1>

        <span className='siDistance'>{t('locatedIn', { region })}</span>
        <span className='siTaxiOp'>{t('freeTaxi')}</span>
        <span className='siSubtitle'>{hotel.stars || t('boutiqueHotel')}</span>
        <span className='siFeatures'>{t('features')}</span>
        <span className='siCancelOp'>{t('freeCancellation')}</span>
        <span className='siCancelOpSubtitle'>{t('cancelSubtitle')}</span>
      </div>
      <div className='siDetails'>
        <div className="siRating">
          {hotel.rating ? (
            <>
              <span>{t('ratingText')}</span>
              <button>{hotel.rating}</button>
            </>
          ) : null}
        </div>


        <div className='siDetailTexts'>
          <span className='siPrice'>{hotel.pricePerNight}</span>
          <span className="siTaxOp">{t('includesTaxes')}</span>
          <Link to={`/hotel/${region}/${encodeURIComponent(hotel.name)}`}>
            <button className="siCheckButton">{t('seeAvailability')}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
