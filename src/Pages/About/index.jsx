import React from 'react'
import imgAbout from '../../Assets/Images/img2.JPG'
import './About.css'

const About = () => {
    return (
        <section className='about'>
            <div className='container flex'>
                <div className='aboutImgDiv'>
                    <img src={imgAbout} alt="aboutImg" />
                </div>

                <div className='aboutWords'>
                    <h2>Haqqimda</h2>
                    <div>
                        <p>Salam! Mən <b><i>Vüsal Hüseynov</i></b>, bir frontend developer olaraq
                            veb saytları və tətbiqlərini müasir və istifadəçi dostu dizaynlarla yaratmağa çalışıram. <br />
                            İnteraktiv və estetik cəhətdən cəlbedici veb səhifələrin hazırlanması
                            sahəsində özümü inkişaf etdirməkdən böyük zövq alıram.</p>
                        <br />
                        <p>Özümə məxsus tərtibatla, istifadəçilərə mükəmməl təcrübə
                            təqdim etmək üçün HTML, CSS, JavaScript və React.js kimi
                            texnologiyaları effektiv şəkildə istifadə edirəm. <br />
                            Veb dizaynın sadə və funksional olmasına önəm verirəm və
                            müxtəlif ekran ölçüləri və cihazlara uyğun responsive
                            dizaynlar yaratmağa xüsusi diqqət yetirirəm.</p>
                    </div>
                    <div>
                        <br />
                        <h2>Texnologiyalar və Bacarıqlarım:</h2>

                        <p><b>HTML, CSS</b> – Veb saytların əsas strukturu və dizaynını qururam.</p>
                        <p><b>JavaScript, React.js</b> – Dinamik və interaktiv veb tətbiqləri yaratmaq üçün istifadə edirəm.</p>
                        <p><b>Sass, Bootstrap, Tailwind CSS</b> – Daha sürətli və effektiv dizayn prosesləri üçün.</p>
                        <p><b>Version Control (Git, GitHub)</b> – Komanda ilə işləmək və layihələrin idarə olunması üçün.</p>
                        <br />

                        <p>Hər bir layihə mənim üçün yeni bir təcrübə və inkişaf fürsəti olur.
                            Mənim məqsədim sadəcə gözəl veb saytlar yaratmaq deyil,
                            həm də istifadəçi təcrübəsini (UX) mükəmməl etməkdir.

                            Əgər yeni layihələrdə əməkdaşlıq etmək və ya sadəcə
                            danışmaq istəyirsinizsə, mənə müraciət etməkdən çəkinməyin!</p>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default About