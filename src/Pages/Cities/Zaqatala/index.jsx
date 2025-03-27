import React, { useEffect } from "react";
import img1 from '../../../Assets/Images/City/Zaqatala/1.jpg'
import img2 from '../../../Assets/Images/City/Zaqatala/2.jpg'
import img3 from '../../../Assets/Images/City/Zaqatala/3.jpg'
import img4 from '../../../Assets/Images/City/Zaqatala/4.jpg'
import img5 from '../../../Assets/Images/City/Zaqatala/5.jpg'
import Footer from "../../../components/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Zaqatala = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <section className="zaqatala">
        <div className="container">
          <h1>Zaqatala</h1>
          <div data-aos="fade-up"
            className="first">
            <div><img src={img1} alt="" /></div>
            <div>
              <p>Zaqatala rayonu, Azərbaycan Respublikasının şimal-qərb
                hissəsində yerləşən, təbiəti, tarixi və mədəniyyəti ilə
                məşhur olan bir rayondur. Zaqatala rayonu, həmçinin, Azərbaycanın
                qədim və gözəl bölgələrindən biri olaraq, turizm və kənd təsərrüfatı
                baxımından böyük əhəmiyyətə malikdir. Bu rayonda həm təbii zənginliklər,
                həm də unikal mədəni irs mövcuddur.
                <br />

                <b>Coğrafi Mövqe və İqlim:</b>
                <br />
                Zaqatala rayonu, Şəki-Zaqatala iqtisadi rayonunun tərkibində
                yerləşir və Qafqaz dağları ilə əhatə olunub. Rayonun cənub-qərb
                hissəsi dağlıq, digər hissələri isə düzənlik ərazilərdən ibarətdir.
                Zaqatala həm də Böyük Qafqaz dağ silsiləsinin ətəyində
                yerləşir və bu da onun təbiətini daha da gözəl edir.

                Burada çox sayda nadir bitki və heyvan növü mövcuddur.
                Təbii sərvətlər baxımından Zaqatala zəngindir və bu,
                rayonun kənd təsərrüfatı və turizminin inkişafında böyük rol oynayır.
              </p>
            </div>
          </div>
          <div data-aos="fade-up"
            data-aos-duration="3000"
            className="second">
            <div>
              <p>
                <b>İqlim və Kənd Təsərrüfatı:</b>
                <br />
                Zaqatala rayonu subtropik iqlimə malikdir.
                Rayonun müxtəlif ərazilərində fərqli iqlim zonaları müşahidə olunur.
                Dağlıq ərazilərdə sərin və rütubətli, düzənlik ərazilərdə isə daha isti və quru iqlim hakimdir.
                Bu iqlim şəraiti Zaqatalanın kənd təsərrüfatı üçün çox əlverişlidir.

                Rayonun kənd təsərrüfatı əsasən taxıl, tütün, üzüm, meyvə (alma, gilas, ərik və s.)
                və tərəvəz istehsalı ilə məşğuldur.
                <br />
                <b> Zaqatala Rayonunun Tarixi</b>
                <br />
                Zaqatala rayonu çox zəngin tarixi və mədəni irsə malikdir.
                Bu ərazi, müxtəlif dövrlərdə bir sıra mədəniyyətlərin və
                dövlətlərin təsiri altında olub. Zaqatala adının mənşəyi ilə
                bağlı müxtəlif nəzəriyyələr mövcuddur, amma ümumiyyətlə,
                bu adın qədim alban dilindən gəldiyi düşünülür.

                Rayonun tarixində əhəmiyyətli yer tutan yerleşimlərdən biri
                Zaqatala şəhəri və onun ətrafındakı qədim kəndlərdir.
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
                <b>Mədəniyyət və Ənənələr</b>
                <br />
                Zaqatala rayonu, həmçinin özünəməxsus mədəniyyəti ilə də
                tanınır. Burada bir çox qədim adətlər və ənənələr bu günə qədər
                qorunub saxlanılır. Rayonun əhalisi əsasən ağır kənd təsərrüfatı və
                əzəmətli xalq musiqisi ilə məşhurdur. Zaqatalada həmçinin, balaca
                sənətkarlıq məhsulları, gizli xalçalar və gözəl əl işləri çox populyardır.

                Zaqatalada ağır məişət musiqisi, xalq oyunları və dini bayramlar
                əhəmiyyətli yer tutur. Burada müxtəlif folklor qrupları və gələneksel
                rəqslər xalq mədəniyyətinin bir hissəsini təşkil edir.
                <br />
                <b> Turizm</b>
                <br />
                Zaqatala rayonu, təbii gözəllikləri və tarixi abidələri ilə zəngindir.
                Zaqatala meşəsi, Qafqaz dağları, göllər, şəlalələr və təbii
                parklar bölgənin əsas turizm yerləridir. Bu yerlərdə turistlər
                həm ekoturizm, həm də dağçılıq kimi fəaliyyətlərlə məşğul ola bilərlər.

                Muzeylər, mədəniyyət mərkəzləri və bazarlarda
                təklif olunan yerli əl işləri də turistləri cəlb edir.
                <br />
              </p>
            </div>
          </div>
          <div data-aos="fade-up"
            className="fourth">
            <p>
              <b>Əhəmiyyətli və Görməli Yerlər</b>
              <br />
              <br />
              <b> Zaqatala şəhəri: </b>
              <br />
              Zaqatalanın mədəni və iqtisadi mərkəzi.
              <br />
              <b>Zaqatala meşəsi:</b>
              <br />
              Azərbaycanın ən böyük meşələrindən biri olan bu ərazidə unikal təbiət mənzərələri var.
              Qax- Zaqatala yolu boyunca yerləşən şəlalələr və dağ mənzərələri.
              <br />
              <b>Təbiət Qoruqları:</b>
              <br />
              Rayonda çox sayda təbiət qoruğu və park mövcuddur.
              <br />
              <br />
              <b>Nəqliyyat və İnfrastruktur</b>
              <br />
              Zaqatala rayonu Azərbaycanın əsas nəqliyyat yollarından birinin üzərində yerləşir.
              Zaqatala şəhəri Bakıya, Quba və Şəkidən rahatlıqla əlaqəlidir.
              Rayon həmçinin, qonşu Gürcüstanla sərhəddə yerləşdiyi üçün beynəlxalq
              nəqliyyat əlaqələri baxımından strateji mövqeyə malikdir.


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
                <b>Əhali və Sosial Həyat</b>
                <br />
                <br />
                Zaqatala əhalisi əsasən Azərbaycan türklərindən ibarətdir,
                amma burada gürcülər, ingilislər, ruslar və çeçenlər kimi digər
                etnik qrupların da nümayəndələri yaşayır.
                Əhalinin əksəriyyəti kənd təsərrüfatı ilə məşğuldur və təhsil,
                səhiyyə, mədəniyyət və sosial xidmətlər sahələrində inkişaf davam edir.
                <br />
                <br />
                Zaqatala rayonu, zəngin təbii sərvətləri, qədim tarixi və mədəniyyəti
                ilə Azərbaycan turizmi üçün əhəmiyyətli bir regiondur. Gözəl təbiət
                mənzərələri və inkişaf etmiş kənd təsərrüfatı ilə bu rayonda həyat,
                həm yerli əhali, həm də turistlər üçün böyük əhəmiyyət kəsb edir.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </section>

    </>

  );
};

export default Zaqatala;
