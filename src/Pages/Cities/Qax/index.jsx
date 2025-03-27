import React, { useEffect } from "react";
import img1 from '../../../Assets/Images/City/Qax/1.jpg'
import img2 from '../../../Assets/Images/City/Qax/2.jpg'
import img3 from '../../../Assets/Images/City/Qax/3.jpg'
import img4 from '../../../Assets/Images/City/Qax/4.jpg'
import img5 from '../../../Assets/Images/City/Qax/5.jpg'
import Footer from "../../../components/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Qax = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>

      <section className="qax">
        <div className="container">
          <h1>Qax</h1>
          <div data-aos="fade-up"
            className="first">
            <div><img src={img1} alt="" /></div>
            <div>
              <p>Qax rayonu, Azərbaycanın şimal-qərb hissəsində yerləşən
                və zəngin təbiətinə, qədim tarixə və mədəniyyətə sahib
                olan bir ərazidir. Bu rayon, həm yerli, həm də xarici turistlər
                üçün cəlbedici olan bir çox tarixi abidə, təbii gözəllik
                və unikal mədəniyyətə malikdir. Qax, həmçinin kənd təsərrüfatı
                və sənətkarlıq sahəsində də əhəmiyyətli bir yer tutur.
                <br />
                <br />
                <b>Coğrafi Mövqe və İqlim:</b>
                <br />
                Qax rayonu, Azərbaycanın şimal-qərb hissəsində,
                Qəbələ və Zaqatala rayonları ilə sərhəddə yerləşir.
                Rayonun ümumi ərazisi təxminən 2,600 kvadratkilometrdir
                və dağlıq ərazilərdən düzənliklərə qədər geniş coğrafi
                müxtəliflik təqdim edir. Bu xüsusiyyətlər, Qaxı
                təbii zənginlikləri ilə tanınan bir rayon halına gətirir.
              </p>
            </div>
          </div>
          <div data-aos="fade-up"
            data-aos-duration="3000"
            className="second">
            <div>
              <p>
                Qax rayonu, həmçinin Qafqaz dağlarının cənub-şərq ətəyində
                yerləşir və buna görə də bu ərazinin iqlimi mülayim dağlıq və subtropikdir.
                Yayda temperatur 25-30°C arasında dəyişir, qışda isə,
                xüsusən dağlıq ərazilərdə, soyuq hava şəraiti və qar yağışı baş verir.
                Bu, rayonun ərazisində müxtəlif bitki örtükləri və heyvanat
                aləminin müxtəlifliyini təmin edir. Rayonun iqlimi, həm də
                əkinçilik və heyvandarlıq üçün əlverişli şərait yaradır.
                <br />
                <b>Tarix və Mədəniyyət:</b>
                <br />
                Qax rayonu, çoxsaylı tarixi və mədəni abidələrlə zəngindir.
                Bu ərazidə müxtəlif dövrlərə aid çoxlu sayda tarixi abidələr mövcuddur.
                Qax həmçinin, Azərbaycan xalqının mədəniyyətini özündə
                əks etdirən müxtəlif memarlıq nümunələrinə malikdir.

                Qaxın tarixi çox qədim dövrlərə gedib çıxır və bu ərazidə
                müxtəlif sivilizasiyaların izləri aşkar edilib.
                Burada qədim dövrə aid çox sayda arxeoloji
                tapıntı və tarixə dair məlumatlar mövcuddur.
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
                Qax, təbiətinin gözəlliyi və zəngin tarixi irsi ilə turistlər
                üçün maraqlı bir məkandır. Rayon, həm də ekoturizm və kənd
                turizmi üçün əlverişli şərait yaradır. Qaxda müxtəlif
                təbii və tarixi yerləri ziyarət etmək mümkündür:
                <br />
                <b> Qaxın Qədim Abidələri:</b>
                <br />
                Qaxda bir çox tarixi abidə və memarlıq nümunələri mövcuddur.
                Burada ən məşhur abidələrdən biri olan Qax Qalası diqqət çəkir.
                Bu qala, şəhərin mərkəzində yerləşir və dövrün mühəndislik
                bacarığını göstərən bir memarlıq nümunəsidir.
                <br />
                <b>Qax Çayı:</b>
                <br />
                Qax çayı, rayonun ən önəmli təbii sərvətlərindən biridir.
                Çayın ətrafında piknik etmək, balıq tutmaq və təbiətlə
                iç-içə vaxt keçirmək mümkündür. Çayın ətrafı həm də çoxsaylı
                gəzinti yolları və gözəl mənzərələr təklif edir.
              </p>
            </div>
          </div>
          <div data-aos="fade-up"
            className="fourth">
            <p>

              <b>    Göy-Göl:</b>
              <br />
              Qax rayonunun ərazisində yerləşən Göy-Göl,
              təbiətsevərlər üçün ideal bir yerdir. Göl,
              dağların arasında yerləşir və burada müxtəlif su idmanları,
              çadır qurmaq və təbiət yürüşləri etmək mümkündür.
              <br />
              <b>Şəki-Balakən:</b>
              <br /> Zəngin mədəniyyətə malik bölgələrə yaxın olan Qax,
              həm də bu regionların mədəniyyətlərini və ənənələrini əks
              etdirən müxtəlif tədbirlərin keçirildiyi bir yerdir.
              Ənənəvi xalq sənətləri, xalçalar və misgərlik
              nümunələri burada maraqla qarşılanır.
              <br />
              <b>Qax Meşəsi və Təbii Resurslar:</b>
              <br />
              Qax rayonunun ərazisi meşələrlə örtülmüşdür və burada
              müxtəlif flora və fauna növləri mövcuddur. Bu meşələr,
              təbiətsevərlər və ekoturistlər üçün gözəl
              bir təbii zənginlik təşkil edir.
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
                <b>   İqtisadiyyat</b>
                <br />
                Qax rayonu, kənd təsərrüfatı, xüsusən meyvəçilik və
                tərəvəzçilik sahəsində inkişaf etmiş bir bölgədir.
                Rayonun ərazisində üzüm, alma, gavalı, ərik və digər
                meyvələr istehsal edilir. Qax həmçinin, heyvandarlıq sahəsində
                də əhəmiyyətli yer tutur və rayonun sakinləri
                çox vaxt bu sahədə məşğul olurlar.

                Bundan əlavə, Qaxda sənətkarlıq və ənənəvi sənətlər,
                xüsusilə xalçaçılıq və misgərlik, hələ də geniş yayılmışdır.
                Bu sahələrdən əldə olunan məhsullar, həm yerli bazarlarda,
                həm də xaricdə satılaraq iqtisadiyyatın inkişafına töhfə verir.

                Turizm sektoru da Qax rayonunda inkişaf edir.
                Rayonun təbii gözəllikləri, tarixi abidələri və ekoturizm
                potensialı bu sektoru gələcəkdə daha da irəlilədə bilər.
                <br />
                <b> Nəqliyyat və Əlaqələr</b>
                <br />
                Qax, Azərbaycanla Gürcüstan arasında olan vacib ticarət
                yolunun üstündə yerləşir. Bu səbəbdən, rayonun
                nəqliyyat əlaqələri inkişaf etmişdir.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </section>

    </>

  );
};

export default Qax;
