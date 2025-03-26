import React, { useEffect } from "react";
import img1 from '../../../Images/City/Lenkeran/1.jpg'
import img2 from '../../../Images/City/Lenkeran/2.jpg'
import img3 from '../../../Images/City/Lenkeran/3.JPG'
import img4 from '../../../Images/City/Lenkeran/4.jpg'
import img5 from '../../../Images/City/Lenkeran/5.JPG'
import Footer from "../../../components/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Lenkeran = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <section className="lenkeran">
        <div className="container">
          <h1>Lenkeran</h1>
          <div data-aos="fade-up"
            className="first">
            <div><img src={img1} alt="" /></div>
            <div>
              <p>Lənkəran rayonu, Azərbaycanın cənubunda yerləşən, təbii gözəllikləri,
                zəngin mədəni irsi və iqtisadi əhəmiyyəti ilə tanınan bir rayondur.
                Lənkəran rayonu, xüsusilə iqlimi, meyvəçilik və çayçılıqla məşhurdur,
                həmçinin bu ərazi Azərbaycanın cənub sərhədini təşkil edir və həm yerli,
                həm də xarici turistlər üçün böyük əhəmiyyət kəsb edir.
                <br />
                <br />
                <b>Coğrafi Mövqe və Təbii Şərait</b>
                <br />
                Lənkəran rayonu, Azərbaycanın cənubunda, Cənubi Qafqaz bölgəsinin
                ən önəmli hissələrindən biri olaraq yerləşir. Lənkəran,
                Xəzər dənizi sahilində yerləşir və Azərbaycanın cənub sərhədini təşkil edir.
                Şimalda Astara rayonu, qərbdə isə Masallı rayonu ilə sərhəddir.
                Rayonun ərazisi əsasən dağlıq və düzənlikdən ibarətdir.
              </p>
            </div>
          </div>
          <div data-aos="fade-up"
            data-aos-duration="3000"
            className="second">
            <div>
              <p>
                Lənkəranın iqlimi subtropikdir və bu, onun kənd təsərrüfatı üçün olduqca əlverişli şərait yaradır.
                Rayonun sahil hissəsində rütubətli subtropik iqlim hakimdir,
                bu da ona çay və meyvəçilik üçün ideal şərait təmin edir.
                Lənkəranın dağlıq ərazilərində isə mülayim iqlim hakimdir,
                bu da təbiətində zəngin bitki örtüyünün formalaşmasına imkan verir.
                <br />
                <b>   Təbiət və Flora ilə Fauna</b>
                <br />
                Lənkəran rayonu təbii zənginlikləri ilə də tanınır.
                Lənkəran meşələri, subtropik bitki örtüyü və müxtəlif fauna növləri ilə məşhurdur.
                Rayonun meşəlik ərazilərində çox sayda nadir bitki və heyvan növü mövcuddur.
                Bu ərazilər həmçinin ekologiya baxımından da çox zəngindir.

                Rayonun Lənkəran çayı və digər kiçik çayları ərazini suvarmaq üçün mühüm əhəmiyyət daşıyır.
                Lənkəran, çayçılıq və fındıqçılıq kimi kənd təsərrüfatı sahələri ilə də tanınır.

                Rayonun dağlıq hissələrində dağ keçisi, qırmızı ayı,
                çöl pişiyi kimi heyvan növləri, meşəlik ərazilərində isə quşlar,
                tülkü və dovşanlar yaşamaktadır.
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
                <b>Tarixi və Mədəniyyət</b>
                <br />
                Lənkəran rayonu çox zəngin tarixi və mədəni irsə sahibdir.
                Lənkəran şəhəri Azərbaycanın ən qədim yaşayış məskənlərindən biridir və
                tarixi çox qədim dövrlərə gedib çıxır. Şəhər, həmçinin, Albaniya dövləti,
                Sasanilər və İslam dövrü kimi müxtəlif mədəniyyətlərin təsiri altında olub.

                Lənkəranda tarixi abidələrdən ən çox bilinənlərdən biri Lənkəran qalasıdır.
                Bu qala, sərhəd bölgəsi olaraq strateji əhəmiyyətə malik olub və
                zamanında əraziyə gələn hücumlardan müdafiə məqsədilə inşa edilmişdir.

                Rayonun digər mühüm tarixi və mədəni abidələri arasında Lənkəran məscidi,
                Sultan Səfəvi məscidi, Qala dağı kimi yerlər mövcuddur.
                Bu abidələr rayonun zəngin mədəniyyətinin və tarixinin bir hissəsidir.
              </p>
            </div>
          </div>
          <div data-aos="fade-up"
            className="fourth">
            <p>
              <b>Kənd Təsərrüfatı və İqtisadiyyat</b>
              <br />

              Lənkəran rayonu, subtropik iqlimi və əlverişli təbii şəraiti
              sayəsində kənd təsərrüfatı sahəsində çox inkişaf etmişdir.
              Bu rayonda çayçılıq, meyvəçilik, fındıqçılıq, tütünçülük və
              düyüçülük kimi sahələr çox mühüm yer tutur.
              Lənkəran həmçinin Azərbaycanın çay istehsalı ilə məşhur olan bölgəsidir.

              Çay plantasiyaları, Lənkəran iqtisadiyyatında əsas yer tutur və
              rayonda çay məhsulları yüksək keyfiyyəti ilə tanınır.
              Lənkəranın çayı, xüsusilə xarici bazarda böyük tələbatla qarşılanır.

              Lənkəranda həmçinin fındıqçılıq çox inkişaf edib və
              bu məhsulun istehsalı da rayon iqtisadiyyatı üçün mühüm əhəmiyyət kəsb edir.
              Rayonun meyvəçilik sahəsi də çox genişdir, xüsusilə nar,
              ərik, narıncı, kiwi və mandarin istehsalı ilə məşhurdur.
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
                <b>Turizm və Görməli Yerlər</b>
                <br />
                Lənkəran rayonu həmçinin təbii gözəllikləri və
                zəngin tarixi irsi ilə turizm baxımından böyük əhəmiyyətə malikdir.
                Lənkəran çayı boyunca və Xəzər dənizi sahilində yerləşən gözəl plajlar,
                bu rayonu yay turizmi üçün cəlbedici edir. Lənkəranda həmçinin dağçılıq,
                eko-turizm və gəzinti turları kimi fəaliyyətlər çox məşhurdur.
                <br />
                <b>   Lənkəran qalası: </b>
                <br />
                Qədim qalaların qalığı olan bu yer, həm turistlər,
                həm də tarixsevərlər üçün əhəmiyyətli bir abidədir.
                <br />
                <b> Hilalı kəndi:</b>
                <br /> Gözəl dağ mənzərələri və təbii mühiti ilə bu
                kənd turizm üçün yaxşı bir yer təklif edir.
                <br />
                <b>   Lənkəran sahili: </b>
                <br />
                Xəzər dənizi sahilindəki bu ərazidə turizm infrastrukturu inkişaf edib.
                Burada çimərliklər və müxtəlif istirahət mərkəzləri yerləşir.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </section>

    </>

  );
};

export default Lenkeran;
