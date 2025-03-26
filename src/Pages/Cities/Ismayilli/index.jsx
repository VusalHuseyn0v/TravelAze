import React, { useEffect } from "react";
import img1 from '../../../Images/City/Ismayilli/1.jpg'
import img2 from '../../../Images/City/Ismayilli/2.jpg'
import img3 from '../../../Images/City/Ismayilli/3.jpg'
import img4 from '../../../Images/City/Ismayilli/4.jpg'
import img5 from '../../../Images/City/Ismayilli/5.jpeg'
import Footer from "../../../components/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Ismayilli = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <section className="ismayilli">
        <div className="container">
          <h1>Ismayilli</h1>
          <div data-aos="fade-up"
            className="first">
            <div><img src={img1} alt="" /></div>
            <div>
              <p>İsmayıllı rayonu, Azərbaycanın şimal-şərq hissəsində yerləşən,
                zəngin təbiəti və mədəniyyəti ilə tanınan bir bölgədir.
                Quba və Şəki rayonları ilə sərhəd olan İsmayıllı,
                həmçinin paytaxt Bakıdan təxminən 170 km məsafədədir.
                Rayonda həm dağlıq, həm də düzənlik ərazilər mövcuddur,
                bu da onu turizm üçün cəlbedici edir.
                <br />
                <br />
                <b>Coğrafi Mövqe və İqlim:</b>
                <br />

                İsmayıllı rayonu, Böyük Qafqaz dağlarının ətəyində yerləşir.
                Rayonun ərazisi təxminən 2,100 kvadratkilometrdir və çox
                zəngin təbii sərvətlərə sahibdir. İqlimi mülayimdir,
                yayda isti, qışda isə soyuq və qar yağışlıdır.
                Ərazidə çoxlu sayda meşəliklər və çaylar vardır ki,
                bunlar da rayonun təbii gözəlliyini artırır.


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
                İsmayıllı, tarixən çoxsaylı mədəniyyətlərin kəsişdiyi bir yer olub.
                Rayonun ərazisində bir çox tarixi abidələr və arxeoloji tapıntılar mövcuddur.
                İsmayıllı həmçinin Azərbaycanın qədim ticarət yolları üzərində
                yerləşir və tarixən mühüm mədəniyyət mərkəzlərindən biri olmuşdur.

                Rayonun ən əhəmiyyətli mədəniyyət abidələrindən biri,
                XVI əsrə aid olan "İsmayıllı Xan Sarayı"dır. Burada,
                həmçinin tarixi kəndlər və məscidlər mövcuddur ki,
                bunlar da turistlər üçün maraqlı ziyarət yerləridir.

                Turizm və Görməli Yerlər:
                İsmayıllı rayonu təbii gözəllikləri ilə məşhurdur.
                Rayonun dağlıq əraziləri, təbiətsevərlər və dağcılar üçün çox əlverişlidir.
                <br />
                <br />
                <b> Turizm və Görməli Yerlər:</b>
                <br />
                İsmayıllı rayonu təbii gözəllikləri ilə məşhurdur.
                Rayonun dağlıq əraziləri, təbiətsevərlər və dağcılar üçün çox əlverişlidir.
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
                <b> Qaranohur Gölü :</b>
                <br />
                İsmayıllının ən məşhur turistik yerlərindən biridir.
                Bu göl, dağların arasında yerləşir və möhtəşəm mənzərələrə sahibdir.
                <br />
                <br />
                <b>  Lahıc Qəsəbəsi</b>
                <br />
                Azərbaycanın qədim bürünc və mis emalı mərkəzlərindən
                biri olan Lahıc, İsmayıllı rayonu daxilində yerləşir.
                Lahıc həm də sənətkarlıq mərkəzi kimi tanınır və
                burada əla mis qablar və əl işləri istehsal olunur.
                <br />
                <br />
                <b>    İsmayıllı Meşəsi</b>
                <br />
                Böyük Qafqaz dağlarının ətrafında yerləşən meşəlik sahələr,
                ziyarətçilərə təbiət yürüşləri, ekoturizm və daha
                bir çox fəaliyyət üçün ideal şərait yaradır.


              </p>
            </div>
          </div>
          <div data-aos="fade-up"
            className="fourth">
            <p>
              <b>İqtisadiyyat:  </b>
              <br />
              İsmayıllı, kənd təsərrüfatı ilə məşhurdur.
              Rayonun iqtisadiyyatının əsas sahələri arasında meyvəçilik,
              xüsusilə alma istehsalı, tərəvəzçilik və heyvandarlıq yer alır.
              İsmayıllıda həmçinin turizm, sənətkarlıq və
              əkinçilik sahələri də inkişaf edir.
              <br />
              <br />
              <b>Xüsusi Yerlər:</b>
              <br />
              <br />
              <b> Lahıc Xalçaçılıq Sənəti:</b>
              <br />Lahıcın xalçaçılıq sənəti çox məşhurdur.
              Burada həmçinin qədim xalça nümunələri və
              sənətkarlıqla bağlı muzeylər mövcuddur.
              <br />
              <b>   İsmayıllı Xan Sarayı:</b>
              <br /> XVI əsrdən qalan bu tarixi abidə,
              rayonun mədəni irsini əks etdirir.
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

                <b>Səyahət və Nəqliyyat:
                </b>
                <br />
                İsmayıllıya rahatlıqla Bakıdan və digər bölgələrdən səyahət etmək mümkündür.
                Rayonun mərkəzində əsas nəqliyyat xətləri yerləşir və
                turistlər rahatlıqla İsmayıllıya səyahət edə bilərlər.
                <br />
                <br />
                <b>Ən Yaxşı Ziyarət Zamanı:</b>
                <br />
                İsmayıllı, həm yayda, həm də qışda turistlər üçün maraqlı bir yerdir.
                Yayda dağ yürüşləri və göldə üzmə imkanları, qışda isə dağ xizək idmanları
                və qar mənzərələri turistlər üçün cəlbedicidir.
                Yaz və payız aylarında təbiət daha da gözəl olur.
                <br />
                <br />
                İsmayıllı rayonu, Azərbaycanın ən təbii və mədəni
                zəngin bölgələrindən biri olub,
                həm təbiətsevərlər, həm də tarix və mədəniyyətə
                maraq göstərən turistlər üçün ideal bir yerdir.
                <br />
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </section>

    </>

  );
};

export default Ismayilli;
