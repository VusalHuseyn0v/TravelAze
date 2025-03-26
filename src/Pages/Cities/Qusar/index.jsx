import React, { useEffect } from "react";
import img1 from '../../../Images/City/Qusar/1.jpg'
import img2 from '../../../Images/City/Qusar/2.jpg'
import img3 from '../../../Images/City/Qusar/3.jpg'
import img4 from '../../../Images/City/Qusar/4.jpg'
import img5 from '../../../Images/City/Qusar/5.jpg'
import Footer from "../../../components/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Qusar = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <>
      <section className="qusar">
        <div className="container">
          <h1>Qusar</h1>
          <div data-aos="fade-up"
            className="first">
            <div><img src={img1} alt="" /></div>
            <div>
              <p>Qusar rayonu, Azərbaycanın şimal bölgəsində,
                Qafqaz dağları ətəyində yerləşən, həm təbii gözəllikləri,
                həm də zəngin mədəni irsi ilə məşhur olan bir rayondur.
                Qusar rayonu, həmçinin, Azərbaycanın ən qədim və gözəl
                bölgələrindən biridir və bu bölgə həm turizm,
                həm də kənd təsərrüfatı baxımından çox böyük əhəmiyyətə malikdir.
                <br />
                <b> Coğrafi Mövqe və Təbii Şərait</b>
                <br />
                Qusar rayonu, Şimal bölgəsində yerləşir və
                Quba rayonu ilə sərhəddədir. Rayonun ərazisi əsasən dağlıq
                və meşəlikdir, buna görə də təbiət baxımından olduqca zəngindir.
                Qusar, Qafqaz dağlarının ətəyində yerləşir və bu da ona gözəl
                dağ mənzərələri və zəngin floraya malik olma imkanı verir.
                Rayonda həmçinin çox sayda dağ gölü, şəlalələr və çaylar mövcuddur.

                Qusarın iqlimi müxtəlifdir; dağlıq ərazilərdə daha sərin və rütubətli,
                düzənlik ərazilərdə isə daha mülayim bir iqlim hakimdir.
                Bu müxtəlif iqlim şəraiti Zaqatalanın kənd
                təsərrüfatı və turizmi üçün əlverişli şərait yaradır.
              </p>
            </div>
          </div>
          <div data-aos="fade-up"
            data-aos-duration="3000"
            className="second">
            <div>
              <p>
                <b>Təbiət və Ətraf Mühit</b>
                <br />
                Qusar rayonu, təbii zənginliklər baxımından çox qiymətlidir.
                Qusar meşəsi, Quba-Qusar çayı və Qafqaz dağları
                ilə əhatə olunmuş bu ərazidə həm flora, həm də fauna çox zəngindir.

                Rayonun meşəlik əraziləri, müxtəlif nadir bitki növləri
                və heyvanat aləmi ilə diqqət çəkir. Qusarın dağlıq ərazilərində
                çox sayda nadir bitki və ceyran, qırmızı ayı,
                dağ keçisi kimi heyvan növlərinə rast gəlinir.

                Rayon həmçinin ekoturizm baxımından da əhəmiyyətlidir.
                Zəngin təbiəti və dağ mənzərələri ilə təbiətsevərlərin və
                dağçılıqla maraqlananların cəlb etdiyi bir məkandır.
                <br />
                <b>Tarixi və Mədəniyyət</b>
                <br />
                Qusar rayonu çox zəngin tarixi və mədəni irsə malikdir.
                Ərazinin tarixi qədim dövrlərə gedib çıxır və burada bir
                çox arxeoloji tapıntılar, qədim abidələr və qala yeri mövcuddur.
                Qusar rayonu tarix boyunca Alban dövləti, Sasanilər və
                İslam dövrü kimi müxtəlif mədəniyyətlərin təsiri altında olub.
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
                Qusar şəhəri, XVIII əsrdə formalaşmış və
                zamanla inkişaf etmiş bir şəhərdir.
                Bu dövrdə Qusar ticarət və mədəniyyət baxımından vacib bir yerə çevrilib.
                Qusar rayonu həm də Çar Rusiyası dövründə strateji əhəmiyyətə
                malik olub və müxtəlif dövrlərdə bir neçə
                müxtəlif dövlətin təsiri altında olub.
                Bugünə qədər Qusarda bir çox qədim abidələr,
                məscidlər və ziyarətgahlar qalmaqdadır. Əhali arasında ənənəvi folklor,
                rəqs, musiqi və xalçaçılıq kimi mədəniyyət sahələri əhəmiyyətlidir.
                Burada həmçinin qədim Xudavəndi məscidi,
                Qusar qalası və digər tarixi abidələr mövcuddur.
                <br />
                <br />
                <b>Kənd Təsərrüfatı və İqtisadiyyat</b>
                <br />
                Qusar rayonu kənd təsərrüfatı baxımından Azərbaycanın ən
                inkişaf etmiş bölgələrindən biridir. Taxıl, tütün, üzüm,
                meyvə (almalar, şaftalılar, əriklər) və tərəvəz istehsalı
                bu bölgənin əsas iqtisadi fəaliyyət sahələrindəndir.
              </p>
            </div>
          </div>
          <div data-aos="fade-up"
            className="fourth">
            <p>
              <b> Turizm və Görməli Yerlər</b>
              <br />
              Qusar rayonu həmçinin təbii gözəllikləri və mədəni irsi
              ilə turizm baxımından mühüm əhəmiyyətə malikdir.
              Qafqaz dağlarının ətəyində yerləşən Qusar, dağçılıq, yürüşlər,
              təbiət gəzintiləri və digər açıq hava fəaliyyətləri üçün ideal bir yerdir.

              Qusarda həmçinin bir çox görməli yerlər mövcuddur:

              <b> Qusar qalası:</b>
              <br />
              Bu qədim qala şəhərin ən əhəmiyyətli tarixi abidələrindəndir.
              <b> Qusar meşəsi:</b>
              <br />
              Nadir bitki və heyvan növləri ilə zəngin olan bu meşə,
              ekoturizm sevənlər üçün ideal yerdir.
              <br />
              <b>    Şahdağ Milli Parkı:</b>
              <br /> Bu park həm dağçılıq, həm də qış idmanları ilə məşğul
              olmaq üçün əla şərait yaradır. Şahdağ, həmçinin,
              Azərbaycanın ən yüksək dağlarından biridir.
              Xudavəndi məscidi: Qusarın mərkəzində yerləşən bu məscid,
              bölgənin ən qədim dini abidələrindən biridir.


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
                <b> Quba-Qusar çayı:</b>
                <br />
                Bu çay, təbii gözəllikləri ilə tanınır və çayın ətrafında
                yerləşən kəndlər gözəl mənzərələr təqdim edir.
                <br />
                <b>Əhali və Sosial Həyat</b>
                <br />
                Qusar rayonu əhalisinin böyük əksəriyyəti azərbaycanlılardan ibarətdir,
                amma burada ləzgilər və ruslar kimi digər etnik qrupların da nümayəndələri yaşayır.
                Rayonun əhalisi əsasən kənd təsərrüfatı və təbiətlə sıx əlaqəli həyat sürür.
                Əhali arasında ənənəvi kənd təsərrüfatı üsulları və folklor ənənələri hələ də yaşayır.
                <br />
                <br />
                Qusar rayonu, təbiəti, tarixi, mədəniyyəti və zəngin təbii
                sərvətləri ilə Azərbaycanın əhəmiyyətli turizm və kənd
                təsərrüfatı bölgələrindən biridir. Dağ mənzərələri,
                qədim abidələr və zəngin folklor bu rayonu həm yerli əhali,
                həm də turistlər üçün cazibədar edir.

              </p>
            </div>
          </div>
        </div>
        <Footer />
      </section>

    </>

  );
};

export default Qusar;
