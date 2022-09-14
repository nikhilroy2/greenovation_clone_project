import React from 'react';
import '../../../scss/pages/homepage/Homepage.css'
function Homepage(props) {
    return (
        <div id='Homepage'>
            <Section1></Section1>
        </div>
    );
}

export default Homepage;


const Section1 = () => {
    return <section id="Section1">
        <div className="header_placeholder"></div>
        <video loop src={require('../../../media/file.mp4')} autoPlay={true} muted={true}></video>
        <div className="content_wrapper">
            <img className='logo_lg' src={require('../../../img/logo/logo_lg.webp')} alt="img" />
            <h1 className="font_0" style={{ lineHeight: '1.5em', textAlign: 'center', fontSize: '64px' }}><span style={{ textShadow: '#ffffff 0px 0px 6px' }}><span className="color_14"><span style={{ textShadow: 'rgba(0, 0, 0, 0.4) 0px 4px 5px' }}><span style={{ letterSpacing: '0.08em' }}>SMART CANNA INVEST</span></span></span></span></h1>
            <p className="font_7" style={{ lineHeight: '1.8em', textAlign: 'center', fontSize: '24px' }}><span className="color_14"><span style={{ letterSpacing: '0.05em' }}>100% SWISS MADE</span></span></p>
            <div className="content_footer">
                <div className="wrapper">
                    <img src={require('../../../img/icons/GreenovationIcon.webp')} alt="" />
                    <img src={require('../../../img/icons/GreenovationIconSm.webp')} alt="GreenovationIconSm.webp" />
                    <a href='#' className="btn_content_footer">
                        KAUFE JETZT DEINE ERSTE PFLANZE
                    </a>
                </div>
            </div>
        </div>
    </section>
}