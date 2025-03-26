import React, { useEffect } from "react";
import img1 from '../../../Images/City/Quba/1.jpg'
import img2 from '../../../Images/City/Quba/2.jpg'
import img3 from '../../../Images/City/Quba/3.jpg'
import img4 from '../../../Images/City/Quba/4.jpg'
import img5 from '../../../Images/City/Quba/5.jpg'
import Footer from "../../../components/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Quba = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <section className="quba">
        <div className="container">
          <h1>Quba</h1>
          <div data-aos="fade-up"
            className="first">
            <div><img src={img1} alt="" /></div>
            <div>
              <p>Quba rayonu, Azərbaycanın şimalında, Qafqaz dağlarının ətəyində yerləşən və
                Zaqatala-Gəncə yolu üzərindəki vacib bir coğrafi və mədəni bölgədir.
                Rayon həm təbiətinin gözəlliyi,
                həm də zəngin tarixi və mədəni irsi ilə tanınır.
                Quba rayonu, təkcə yerli sakinlər üçün deyil,
                həm də turistlər üçün çox əhəmiyyətli bir yerdir.
                Aşağıda Quba rayonu haqqında daha ətraflı məlumatları təqdim edirəm.
                <br />
                <br />
                <b>Coğrafi Mövqe və İqlim:</b>
                <br />
                Quba, Azərbaycan Respublikasının şimal hissəsində yerləşir
                və Qafqaz dağlarının cənub ətəyindədir. Şimalda Rusiyanın
                Dağıstan regionu ilə sərhəd olan rayon, eyni zamanda Xəzər
                dənizinə yaxın bir məsafədədir. Rayonun sahəsi 4,300 kvadratkilometrdən
                çoxdur və ərazisində dağlıq, dağətəyi və düzənlik sahələr mövcuddur.
                Quba bölgəsi mülayim-isti iqlimə sahibdir.
                Quba və ətraf rayonlarda yaylar isti və rütubətli,
                qışlar isə nisbətən soyuq və qarlı olur.
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
                Quba rayonu Azərbaycanın ən qədim bölgələrindən biridir.
                Burada çoxsaylı arxeoloji tapıntılar və tarixi abidələr mövcuddur.
                Quba, həmçinin tarixi və mədəni əhəmiyyətə malik bir şəhərdir.

                Quba şəhəri, XIX əsrdə Rus İmperiyasının nəzarətinə keçdikdən sonra
                sürətlə inkişaf etməyə başladı və bu dövrdən sonra şəhərdə infrastruktur
                inkişafı, ticarət əlaqələri və mədəniyyət sahələrində böyük dəyişikliklər yaşandı.
                Sovet dövründə isə Quba həm də sənaye mərkəzlərindən biri oldu.

                Rayonun tarixində ən önəmli hadisələrdən biri,
                1918-ci ildə baş verən Quba soyqırımıdır.
                Həmin dövrdə Quba və ətraf bölgələrdə bir çox azərbaycanlı,
                erməni və digər etnik qrupların qarşılıqlı münaqişələri nəticəsində
                böyük soyqırımı baş vermişdi. Bu hadisənin xatirəsinə Quba Soyqırımı
                Memorial Kompleksi inşa edilmişdir və bu, ziyarətçilərin
                regionun faciəli tarixini anlamalarına kömək edir.
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
                Quba rayonu təbii gözəllikləri, tarixi yerləri və zəngin
                mədəniyyəti ilə turistlərin diqqətini çəkir. Ən məşhur
                turistik yerlərdən bəziləri aşağıdakılardır:
                <br />
                Quba rayonunun mərkəzi çox sayda tarixi
                və mədəni abidəyə sahibdir. Şəhərin mərkəzində yerləşən
                Quba Qırmızı bazarı həm turistlər, həm də yerli sakinlər
                üçün alış-veriş yeri olaraq məşhurdur. Bu bazarda müxtəlif
                yerli məhsullar, əl işləri və xalçalar satılır. Quba məscidi
                və Quba şəhərinin qədim küçələri də şəhərin tarixi ruhunu hiss etdirməkdədir.
                <br />
                <b> 2. Quba Soyqırımı Memorial Kompleksi:</b> <br />
                1918-ci il Quba soyqırımı zamanı baş verən hadisələri anmaq və
                xatirəsini yaşatmaq məqsədilə inşa edilmiş memorial kompleks,
                Quba rayonunun kənarında yerləşir. Kompleksdə soyqırımı zamanı
                öldürülənlərin kütləvi məzarlıqları da var. Bu kompleks, tarixə
                olan hörmətin bir əlaməti olaraq ziyarətçilərə unudulmaz bir təcrübə təqdim edir.
              </p>
            </div>
          </div>
          <div data-aos="fade-up"
            className="fourth">
            <p>
              <b>  3. Quba Xalça Muzeyi:</b>
              <br />
              Azərbaycanın xalçaçılıq sənətinin incəsənətini nümayiş etdirən bu muzey,
              Quba'nın ən məşhur mədəniyyət mərkəzlərindən biridir. Muzeydə Quba xalçaları
              və Azərbaycanın digər bölgələrindən gətirilən nadir xalçalar sərgilənir.
              Həmçinin, burada xalçaçılıq sənətinin inkişafı ilə bağlı məlumatlar və
              qədim xalça nümunələri nümayiş etdirilir.
              <br />
              <b>4. Xınalıq kəndi:</b>
              <br />
              Quba'nın dağlarında yerləşən Xınalıq kəndi,
              Azərbaycanın ən yüksək dağ kəndlərindən biridir.
              Xınalıq, çox xüsusi və unikal mədəniyyətə sahib bir
              kənddir və buradakı sakinlər özlərini qədim ənənələrinə
              sadiq saxlayırlar. Xınalıq, həmçinin dağ yəhudi icmasının
              məskənidir. Bu kəndə çatmaq üçün dağlıq yolları keçmək lazım olur,
              amma burada təbii gözəlliklər və unikal mənzərə
              turistlərə möhtəşəm bir təcrübə təqdim edir.
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
                <b>5. Quba Meşəsi və Dağlıq Ərazilər:</b>
                <br />
                Quba ərazisindəki meşəlik və dağlıq sahələr,
                təbiətsevərlər üçün əsl cənnətdir. Quba meşəsi,
                turistlərə təbiət yürüşləri və dağlarda sərbəst gəzinti imkanı verir.
                Həmçinin, bu ərazilərdəki mənzərələr, fotoqraflar və təbiət həvəskarları
                üçün mükəmməl bir mühit yaradır.
                <br />
                <b>6. Quba alması:</b>
                <br />
                Quba rayonu, meyvəçilik sahəsində də tanınır.
                Burada yetişən Quba alması çox məşhurdur və bu məhsul
                yerli bazarlarda yüksək tələbat görür. Quba alması, həm dadı,
                həm də görünüşü ilə digər almadan fərqlənir.
                <br />
                <b> İqtisadiyyat və Kənd Təsərrüfatı:</b>
                <br />
                Quba rayonu, Azərbaycanda kənd təsərrüfatının
                inkişaf etmiş bölgələrindən biridir. Burada meyvəçilik,
                xüsusən alma istehsalı, geniş yayılmışdır.
                Rayonun ərazisində həmçinin digər məhsullar,
                o cümlədən gavalı, ərik, tut və üzüm yetişdirilir.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </section>

    </>

  );
};

export default Quba;
