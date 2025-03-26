import React, { useEffect } from "react";
import img1 from '../../../Images/City/Seki/1.jpg'
import img2 from '../../../Images/City/Seki/2.jpg'
import img3 from '../../../Images/City/Seki/3.webp'
import img4 from '../../../Images/City/Seki/4.jpeg'
import img5 from '../../../Images/City/Seki/5.jpg'
import Footer from "../../../components/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Seki = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <section className="seki">
        <div className="container">
          <h1>Seki</h1>
          <div data-aos="fade-up"
            className="first">
            <div><img src={img1} alt="" /></div>
            <div>
              <p>
                Şəki rayonu, Azərbaycanın şimal-qərb hissəsində yerləşən və tarixi,
                mədəniyyəti və təbiəti ilə seçilən bir bölgədir. Bu rayon, həm yerli,
                həm də xarici turistlər üçün maraqlı bir istiqamət olmaqla yanaşı,
                öz zəngin tarixi, gözəl mənzərələri, unikal mədəni irsi və yüksək
                inkişaf etmiş kənd təsərrüfatı ilə də diqqət çəkir. Şəki, həmçinin Azərbaycanın
                qədim şəhərlərindən biri olmaqla, ölkənin ən qədim sivilizasiyalarına ev sahibliyi etmişdir.
                <br />
                <br />
                <b>Coğrafi Mövqe və İqlim:</b>
                <br />
                Şəki rayonu, Azərbaycanın şimal-qərb hissəsində, Quba və Zaqatala rayonları
                ilə qonşu olan bir ərazidir. Rayon, dağlıq və düzənlik ərazilərin
                qarışığı olan coğrafi mühitə malikdir və ümumi sahəsi 3,000 kvadrat
                kilometrdən çoxdur. Bu müxtəlif coğrafi xüsusiyyətlər, Şəkiyə həm təbii sərvətlər,
                həm də zəngin ekosistem gətirmişdir.
              </p>
            </div>
          </div>
          <div data-aos="fade-up"
            data-aos-duration="3000"
            className="second">
            <div>
              <p>
                <b>Tarix və Mədəniyyət:</b>
                <br />
                Şəki, Azərbaycanın ən qədim şəhərlərindən biri olaraq zəngin tarixə malikdir.
                Şəki şəhərinin tarixi hələ e.ə. II minilliyə qədər gedib çıxır.
                Şəki ərazisi, müxtəlif dövrlərdə çoxsaylı sivilizasiyaların mərkəzi olmuşdur.
                Bu ərazi, həmçinin Şəki xanlığının paytaxtı olub və bu
                şəhər çoxsaylı mədəniyyətlərin, infrastrukturun və ticarətin mövcud olduğu bir məkan olmuşdur.
                <br />
                <br />
                Şəki, uzun illər boyunca Azərbaycanın incəsənət,
                mədəniyyət və təhsil mərkəzlərindən biri olub. Burada yaşayan insanlar,
                çox zəngin mədəni ənənələrə sahibdirlər və bu mədəniyyət bu gün də qorunur.
                Şəki, həmçinin musiqi, rəssamlıq, xalçaçılıq və
                misgərlik kimi sahələrdə öz ənənələrini saxlayan bir rayondur.
              </p>
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
          </div>
          <div data-aos="fade-up"
            className="third">
            <div><img src={img3} alt="" /></div>
            <div>
              <p>
                <b>  Turizm və Görməli Yerlər:</b>
                <br />
                Şəki rayonu həm tarixi, həm də təbii gözəllikləri ilə tanınır.
                Bu ərazidə bir çox maraqlı turistik yerlər və abidələr mövcuddur.
                <br />
                <br />
                <b> Şəki Xan Sarayı:</b>
                <br />
                Şəki şəhərinin mərkəzində yerləşən bu saray,
                XVIII əsrdə Şəki xanları tərəfindən inşa edilmişdir və
                Azərbaycanın ən gözəl memarlıq nümunələrindən biri sayılır.
                Sarayın möhtəşəm memarlığı, incə işçilik və mozaikaları ilə diqqət çəkir.
                Sarayın divarlarında təsvir edilmiş naxışlar,
                qədim dövrlərə aid sənət nümunələrini əks etdirir.
                <br />
                <br />
                <b>  Çuxurçöl (Şəki kəndləri):</b> <br />
                Şəki rayonunun müxtəlif kəndlərində qədim yaşayış
                məntəqələri və zəngin folklor mövcuddur. Çuxurçöl,
                çoxsaylı qədim abidələrə ev sahibliyi edir. Burada köhnə yaşayış evləri,
                məscidlər və karvansaraylar hələ də mövcuddur.
              </p>
            </div>
          </div>
          <div data-aos="fade-up"
            className="fourth">
            <p>
              <b>Sheki Caravanserai:</b>
              <br />
              Tarixi Şəki karvansarayı, əsasən ticarət yolları üzərində yerləşirdi
              və zamanında ticarətçilər və səyyahlar üçün sığınacaq olmuşdu.
              Bugün bu abidə turistik məkan kimi fəaliyyət göstərir və
              turistlərə Şəkinin tarixi atmosferini hiss etməyə imkan verir.
              <br />
              <b>Gelersen-Görersen:</b>
              <br /> Bu məşhur təbii abidə, Şəki şəhərinin yaxınlığında yerləşir.
              Burada hər iki tərəfdən sıx meşələrlə örtülmüş bir keçid var və bu
              keçid yuxarı qalxdıqca möhtəşəm mənzərələr açılır.
              Bu, xüsusilə təbiətsevərlər üçün ideal bir gəzinti yeridir.
              <br />
              <b>Kiş kəndi:</b>
              <br />
              Şəki rayonu daxilində yerləşən Kiş kəndi, həmçinin məşhur
              bir tarixi məkan sayılır. Burada yerləşən Kiş Alban kilsəsi
              (IV əsr) çox böyük əhəmiyyətə malikdir. Bu kilsə, qədim
              alban mədəniyyətinin və dini inanc sisteminin izlərini
              daşıyan bir abidə olaraq bölgənin tarixi dəyərini artırır.
            </p>
            <div>

              <div><img src={img4} alt="" /></div>
            </div>
          </div>
          <div data-aos="fade-up"
            className="fifth">
            <div><img src={img5} alt="" /></div>
            <div>
              <p>
                <b> Təbiət və Ekoturizm:</b>
                <br />
                Şəki rayonu, öz təbii gözəllikləri ilə də tanınır.
                Burada çoxsaylı meşələr, dağlar və şəlalələr mövcuddur.
                Bu yerlər, ekoturizm və dağçılıq üçün ideal şərait yaradır.
                Şəkiyə gələn turistlər, həm təbiət yürüşləri edə, həm də
                Şəki çayı üzərindəki şəlalələrdə sərinləyə bilərlər.
                <br />
                <b>İqtisadiyyat</b>
                <br />
                Şəki rayonu kənd təsərrüfatı və sənətkarlıq sahəsində
                inkişaf etmiş bir bölgədir. Şəki, xüsusilə meyvəçilik, üzümçülük,
                taxılçılıq və heyvandarlıq sahələrində mühüm yer tutur. Şəkidə meyvə bağları,
                xüsusilə alma, gavalı, ərik və digər meyvə növləri ilə məşhurdur.

                Rayon, həmçinin əl işləri sahəsində tanınır.
                Şəkidə istehsal olunan xalçalar, misgərlik məhsulları və
                digər sənətkarlıq nümunələri, rayonun iqtisadiyyatına
                böyük təsir göstərir. Burada istehsal olunan xalçalar və
                mis qablar, həm yerli bazarda, həm də xaricdə geniş tələbat görür.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </section>

    </>

  );
};

export default Seki;
