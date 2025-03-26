import React, { useEffect } from "react";
import img1 from '../../../Images/City/Lerik/1.jpg'
import img2 from '../../../Images/City/Lerik/2.jpg'
import img3 from '../../../Images/City/Lerik/3.jpg'
import img4 from '../../../Images/City/Lerik/4.jpg'
import img5 from '../../../Images/City/Lerik/5.jpg'
import Footer from "../../../components/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Lerik = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <section className="lerik">
        <div className="container">
          <h1>Lerik</h1>
          <div data-aos="fade-up"
            className="first">
            <div><img src={img1} alt="" /></div>
            <div>
              <p>Lerik rayonu, Azərbaycanın cənubunda,
                Lənkəran rayonu ilə sərhəddə yerləşən və
                təbii gözəllikləri, zəngin mədəniyyəti və
                nadir flora və faunası ilə tanınan bir bölgədir.
                Lerik, həmçinin, çoxsaylı tarixi və folklor dəyərləri
                ilə zəngin bir rayondur və Azərbaycanın ən
                yüksək dağlıq ərazilərindən biridir.
                <br />
                <b>Coğrafi Mövqe və Təbii Şərait</b>
                <br />
                Lerik rayonu, Cənubi Qafqaz bölgəsinin ən yüksək
                dağlıq ərazilərində yerləşir və Qafqaz dağlarının cənub
                hissəsindəki dağlıq əraziləri əhatə edir. Rayon,
                Lənkəran şəhərindən təxminən 60 km məsafədə yerləşir
                və Azərbaycanın cənub sərhədində, İran ilə
                yaxınlıqda yerləşən ərazidədir.

                Lerik rayonu, çoxsaylı çaylar, dərələr və meşəlik
                ərazilərlə zəngindir. Rayonun dağlıq ərazilərində
                Qızılhacılı, Gədəbəy dağları və digər yüksək dağlar yerləşir.
                Rayonun ən hündür nöqtəsi Baba dağdır. Bu dağ 2,400 metrə
                qədər yüksəlir və Lerik rayonunun təbii
                mənzərəsini daha da zənginləşdirir.
              </p>
            </div>
          </div>
          <div data-aos="fade-up"
            data-aos-duration="3000"
            className="second">
            <div>
              <p>
                <b> Təbiət və Flora ilə Fauna</b>
                <br />
                Lerik rayonu təbii sərvətlər baxımından çox zəngindir.
                Rayonun dağlıq hissələrində həm yüksək dağların təbii gözəlliklərini,
                həm də çox sayda nadir bitki növünü görmək mümkündür.
                Lerik meşələri Azərbaycanda nadir flora ilə tanınır.
                Rayonun flora və faunasının zənginliyi, eyni zamanda,
                çoxsaylı endemik bitki və heyvan növlərinin mövcudluğunu təmin edir.

                Lerik rayonunda meşəlik ərazilər, əsasən, xurmuş, palıd,
                qızılağac, dağ çəmənlikləri ilə zəngindir. Bu ərazilərdə
                çoxsaylı nadir bitkilər və çiçəklər mövcuddur ki, bunlar
                da rayonun təbii zənginliyini daha da artırır.

                Lerik həmçinin, bir çox nadir heyvan növünə də ev sahibliyi edir.
                Bu ərazilərdə dağ keçisi, qırmızı ayı, dovşan, tülkü, çöl pişiyi,
                yabanı quşlar və digər heyvan növləri yaşayır.
                Rayonun təbiəti ekoturizm üçün əlverişli şərait təmin edir.
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
                <b>  Tarixi və Mədəniyyət</b>
                <br />

                Lerik rayonu, Azərbaycanın ən qədim yaşayış məskənlərindən biridir
                və bu ərazinin tarixi çox qədim dövrlərə gedib çıxır.
                Lerikdə bir çox tarixi abidələr mövcuddur və rayon, həmçinin,
                zəngin mədəniyyətə malikdir.

                Rayonun mədəni irsi arasında xüsusilə Lerik folkloru və
                Xalçaçılıq sənəti tanınır. Lerikdə Xalçaçılıq,
                mətbəx mədəniyyəti və folklor sənəti çox inkişaf edib.
                Yerli əhali, müxtəlif mahnılar, rəqslər, nağıllar və oyunlar
                ilə öz mədəniyyətini qoruyub saxlayır. Lerikdə həmçinin
                qədim dağ kəndləri və ziyarətgahlar mövcuddur.

                Lerikdəki qədim məscidlər, tarixi məzar daşları və
                arxeoloji abidələr rayonun zəngin tarixini və mədəniyyətini əks etdirir.
              </p>
            </div>
          </div>
          <div data-aos="fade-up"
            className="fourth">
            <p>
              <b>Kənd Təsərrüfatı və İqtisadiyyat</b>
              <br />

              Lerik rayonu, ərazisinin dağlıq olmasına baxmayaraq,
              kənd təsərrüfatı baxımından çox inkişaf etmişdir.
              Rayonun əsas iqtisadi sahələri arasında çayçılıq,
              meyvəçilik, tütünçülük, fındıqçılıq və heyvandarlıq yer alır.

              Lerikdə çayçılıq çox mühüm yer tutur.
              Çayın yüksək keyfiyyətli olması və bölgənin subtropik iqlimi,
              Lerik çayının xarici bazarda çox tələb görməsinə səbəb olur.
              Rayonun dağlıq ərazilərində isə fındıqçılıq və meyvəçilik inkişaf edib.
              Lerikdə xüsusilə nar, ərik, gavalı və üzüm istehsal edilir.

              Heyvandarlıq da Lerik rayonunda geniş yayılmışdır.
              Dağlarda otlaq sahələrinin bolluğu və mülayim iqlim şəraiti,
              bu ərazidə heyvandarlığın inkişafına şərait yaradır.
              Düyüçülük, tütünçülük və aralıq sahələrində
              bitkiçilik də rayon iqtisadiyyatına töhfə verir.
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
                <b>  Turizm və Görməli Yerlər</b>
                <br />

                Lerik rayonu, təbii gözəllikləri və dağlıq əraziləri ilə
                tanınan bir turizm bölgəsidir. Burada ekoturizm,
                dağçılıq, gəzinti turları və yaşıl turizm kimi fəaliyyətlər populyardır.
                <br />
                <b> Baba dağ:</b>
                <br />
                Lerik rayonunun ən hündür dağı olan Baba dağ,
                həm dağçılar, həm də təbiətsevərlər üçün ideal bir yerdir.
                Burada yüksək dağ zirvəsindən gözəl mənzərəni izləmək mümkündür.
                <br />
                <b>  Lerik meşələri:</b>
                <br />
                Lerikdəki meşəlik ərazilər, endemik bitki və heyvan növlərini
                görmək istəyənlər üçün çox maraqlı bir yerdir.
                <br />
                <b>  Lerik kəndləri:</b>
                <br />
                Lerikdəki dağ kəndləri, xüsusilə özünəməxsus memarlığı və təbii
                gözəllikləri ilə diqqət çəkir. Bu kəndlər,
                yerli mədəniyyətin və həyat tərzinin saxlanıldığı yerlərdir.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </section>

    </>

  );
};

export default Lerik;
