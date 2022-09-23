import React from 'react';
import '../../../scss/pages/AboutUs/AboutUs.css';
function AboutUs(props) {
    return (
        <div id='AboutUs'>
            <Section1></Section1>
            <Section2></Section2>
        </div>
    );
}

export default AboutUs;

const Section1 = () => {
    return <section id="Section1">
        <div className="design">
            <img src={require('../../../img/pages/about_us/mask_img2.webp')} alt="img" />
        </div>

        <div className="section_wrapper">
            <div className="grid_row">
                <img src={require('../../../img/pages/about_us/Work.webp')} alt="img" />
            </div>

            <div className="grid_row">
                <img className='icon_size' src={require('../../../img/pages/about_us/icon_edited_lg.webp')} alt="" />
            </div>

            <div className="grid_row">
                <h1 className="font_0 my-0" style={{ fontSize: '40px' }}><span style={{ fontSize: '40px' }}>Über uns</span></h1>
            </div>

            <div className="grid_row">
                <p className="font_8 my-0 py-0" style={{ fontSize: '16px' }}>Wir sind schon seit 2018 erfolgreich in der CBD Branche tätig. Seit 2020 mit der aktuellen<br />
                    Firma «Greenovation». Unsere Kernkompetenzen umfassen die Produktion von qualitativ<br />
                    hochwertigem CBD, sowie Forschung und Zucht mit «in vitro»-Technologie. Wir verfügen<br />
                    über ein professionelles Labor und eine Produktionsanlage mit aktuell 15'000 Pflanzen;<br />
                    haben jedoch jederzeit die Möglichkeit diese zu erweitern. Unsere Produktion erfüllt hohe<br />
                    Standards, der Prozess zur GACP-Zertifizierung ist in Kürze abgeschlossen. Unsere Produkte<br />
                    sind von höchster Qualität und erfüllen alle Ansprüche. In unserem Team sind die Besten der Besten: Top- Biologen und hochqualifizierte Grower sind deine Erfolgsgarantie.<br />
                    <br />
                    Unser Ziel ist es, ab 2023 medizinisches Cannabis anzubauen. Dies wird deine Rendite enorm und nachhaltig steigern.&nbsp;</p>


                <p className="font_8 my-0 py-0" style={{ fontSize: '16px' }}><br />
                    Ein Besuch unserer Produktionsanlage ist für interessierte Partner selbstverständlich<br />
                    möglich.</p>

            </div>

            <div className="grid_row">
                <img src={require('../../../img/icons/greenovation_logo_lg.webp')} alt="img" />
            </div>
            <div className="grid_row">
                {/* <img className='img_cover' src={require('../../../img/pages/about_us/d307ba.webp')} alt="img" /> */}
                <video className='img_cover' muted autoPlay loop src={require('../../../media/storn.mp4')}></video>
            </div>
        </div>
    </section>
}

const Section2 = () => {
    return (
        <section id="Section2">
            <div className="section_header">
                <h2 className="font_0 my-0" style={{ fontSize: '56px', lineHeight: 'normal', textAlign: 'center' }}><span className="color_23"><span style={{ letterSpacing: 'normal' }}><span style={{ fontSize: '56px' }}>Meet the Team</span></span></span></h2>
            </div>
        </section>
    )
}