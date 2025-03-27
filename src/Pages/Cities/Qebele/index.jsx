import React, { useEffect } from "react";
import img1 from '../../../Assets/Images/City/Qebele/1.jpg'
import img2 from '../../../Assets/Images/City/Qebele/2.jpg'
import img3 from '../../../Assets/Images/City/Qebele/3.jpg'
import img4 from '../../../Assets/Images/City/Qebele/4.jpg'
import img5 from '../../../Assets/Images/City/Qebele/5.jpg'
import Footer from "../../../components/Footer";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Qebele = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <section className="qebele">
        <div className="container">
          <h1>Qebele</h1>
          <div data-aos="fade-up"
            className="first">
            <div><img src={img1} alt="" /></div>
            <div>
              <p>Qəbələ rayonu, Azərbaycanın şimal-qərb hissəsində,
                Qafqaz dağlarının ətəyində yerləşən və təbii gözəllikləri,
                tarixi və mədəni irsi ilə məşhur olan bir rayondur. Qəbələ,
                həmçinin, Azərbaycanın ən qədim və turistik bölgələrindən
                biridir və həm yerli, həm də xarici turistlər üçün böyük maraq doğurur.
                <br />
                <br />
                <b>Coğrafi Mövqe və Təbii Şərait</b>
                <br />
                Qəbələ rayonu Şəki-Zaqatala iqtisadi rayonunun tərkibində yerləşir.
                Rayonun ərazisi əsasən dağlıq, meşəlik və düzənlik sahələrdən ibarətdir.
                Qafqaz dağları bu ərazini cənubdan və şərqdən əhatə edir.
                Qəbələ həm də Qudyalçay, Turyançay və Gəncəçay çaylarının keçdiyi ərazidir.
                Bu çaylar rayonun təbii mənzərələrinə çox gözəllik qatır.
              </p>
            </div>
          </div>
          <div data-aos="fade-up"
            data-aos-duration="3000"
            className="second">
            <div>
              <p>

                Qəbələnin iqlimi dağlıq ərazilərdən düzənliklərə qədər dəyişir.
                yüksək dağlarda sərt və sərin, düzənliklərdə isə mülayim,
                subtropik iqlim hakimdir. Bu müxtəlif iqlim şəraiti,
                rayonun kənd təsərrüfatı və əkinçilik üçün
                çox əlverişli olmasına səbəb olur.
                <br />
                <b>Təbiət və Flora ilə Fauna</b>
                <br />
                Qəbələ rayonu, Azərbaycan üçün ən zəngin təbii
                sərvətlərdən birinə malikdir. Qəbələ meşələri
                və dağlıq əraziləri zəngin flora və fauna ilə tanınır.
                Burada bir çox nadir bitki və heyvan növü mövcuddur.
                Qəbələnin dağlıq hissələrində qırmızı ayı, dağ keçisi,
                çöl pişiyi və digər heyvan növləri yaşayır.

                Qəbələ həmçinin ekoturizm üçün ideal bir yerdir.
                Şahdağ Milli Parkı, Tufandağ, Qəbələ meşəsi,
                Gədəbəy dağları və s. bu ərazilərdə yerləşən
                təbiət qoruqları və parklar turizm üçün böyük maraq kəsb edir.
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
                <b> Tarixi və Mədəniyyət</b>
                <br />
                Qəbələ rayonu çox zəngin tarixi və mədəni irsə sahibdir.
                Bu ərazinin tarixi, miladdan əvvəlki dövrlərə qədər uzanır.
                Qəbələ şəhəri Azərbaycanın ən qədim şəhərlərindən biri sayılır.
                Bu ərazidəki Qəbələ (Qubatepe) antik şəhəri və digər
                arxeoloji tapıntılar, qədim dövrlərin mədəniyyətinə işıq salır.

                Qəbələ, tarixən Alban dövləti, Sasanilər, Ərəb Xilafəti və Səlcuqlar
                kimi müxtəlif dövlətlərin təsiri altında olub.
                Ərazidə Alban dövrünə aid abidələr, qədim məscidlər
                və ziyarətgahlar bu rayonun tarixi zənginliyini göstərir.
                <br />
                Qəbələ şəhərində yerləşən Qəbələ qalası və qədim qəbələ
                şəhəri bu ərazinin tarixinin bir hissəsini təşkil edir.
                Qəbələnin mədəni həyatı həmçinin, folklor və
                xalçaçılıq kimi ənənələri ilə də tanınır.
              </p>
            </div>
          </div>
          <div data-aos="fade-up"
            className="fourth">
            <p>
              <b>Kənd Təsərrüfatı və İqtisadiyyat</b>
              <br />
              Qəbələ rayonu kənd təsərrüfatı baxımından çox zəngindir.
              Rayonun əsas iqtisadi fəaliyyət sahələri taxılçılıq,
              üzümçülük, meşəçilik, heyvandarlıq, arıçılıq və tütünçülük
              kimi sahələri əhatə edir. Qəbələdə üzümçülük çox inkişaf etmişdir,
              xüsusən Qəbələ üzümü ilə məşhurdur. Bu rayonda həmçinin,
              müxtəlif meyvə və tərəvəzlər yetişdirilir.
              <br />
              Qəbələnin dağlıq ərazilərində, otlaq sahələrində heyvandarlıq
              və çobanlıq ənənəsi uzun illər boyu davam edir. Bununla yanaşı,
              arıçılıq da bu rayonda inkişaf edib və Qəbələ
              balı yüksək keyfiyyəti ilə məşhurdur.
              <br />
              Qəbələ rayonu həmçinin, Azərbaycan iqtisadiyyatı üçün vacib bir mərkəzdir,
              çünki burada həm kənd təsərrüfatı,
              həm də turizm sahəsində inkişaf gözə çarpır.
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
                <b> Turizm və Görməli Yerlər</b>
                <br />
                Qəbələ, Azərbaycanın ən populyar turistik bölgələrindən biridir.
                Burada həm yay, həm də qış turizmi üçün əlverişli şərait mövcuddur.
                Şahdağ Milli Parkı, Tufandağ Dağı və Qəbələ şəhəri ilə ətrafındakı
                təbii zənginliklər turizmin inkişafına böyük töhfə verir.
                <br />

                <b> Qəbələ qalası:</b>
                <br />
                Qəbələnin mərkəzində yerləşən bu qədim qala,
                tarixdən çox dəyərli bir abidədir.
                <br />
                <b>    Şahdağ Milli Parkı:</b>
                <br />
                Bu park, dağçılıq və ekoturizm sevənlər üçün ideal yerdir.
                Burada turistlər dağlarda yürüşlər edə və
                Qəbələ təbiətinin gözəlliklərini kəşf edə bilərlər.
                <br />
                <b>   Tufandağ: </b>
                <br />Bu dağ, qış idmanları ilə məşğul
                olmaq istəyənlər üçün çox uyğun bir yerdir.
                Tufandağda qarla örtülü dağlar, qışın sevənləri cəlb edir.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </section>

    </>

  );
};

export default Qebele;
