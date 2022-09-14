import React from 'react';
import '../../../scss/pages/homepage/Homepage.css'
function Homepage(props) {
    return (
        <div id='Homepage'>
            <Section1></Section1>
            <Section2></Section2>
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
                    <img className='img_lg' src={require('../../../img/icons/GreenovationIcon.webp')} alt="" />
                    <img className='img_sm' src={require('../../../img/icons/GreenovationIconSm.webp')} alt="GreenovationIconSm.webp" />
                    <a href='#' className="btn_content_footer">
                        KAUFE JETZT DEINE ERSTE PFLANZE
                        <svg fill='white' style={{ height: '10px' }} className="ms-2" data-bbox="13.05 2.55 33.878 54.8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                            <g>
                                <path d="M46.5 28.9L20.6 3c-.6-.6-1.6-.6-2.2 0l-4.8 4.8c-.6.6-.6 1.6 0 2.2l19.8 20-19.9 19.9c-.6.6-.6 1.6 0 2.2l4.8 4.8c.6.6 1.6.6 2.2 0l21-21 4.8-4.8c.8-.6.8-1.6.2-2.2z" />
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
}

const Section2 = () => {
    return <section id="Section2">
        <h1 className="font_0" style={{ fontSize: '25px', textAlign: 'center', marginBottom: '55px' }}><span style={{ color: '#85C43F' }}><span style={{ fontSize: '25px' }}>Der am schnellsten wachsende Zukunftsmarkt</span></span></h1>

        <p className="text_content font_0">
            <span style={{ letterSpacing: '0.05em' }}>Profitiere von den ausserordentlichen Renditen des Cannabismarktes.&nbsp; Wir ermöglichen es Kunden von der ganzen Welt an diesem teilzuhaben - dies ohne die hohen Hürden von Finanzierung, Gesetzgebung und Know-How.</span>
        </p>

        <h1 className="font_0" style={{ fontSize: '25px', textAlign: 'center' }}><span className="color_23"><span style={{ fontSize: '25px' }}>LEBENSLANG GELD</span></span><span className="color_14"><span style={{ fontSize: '25px' }}>&nbsp;ERHALTEN IN 5 SCHRITTEN</span></span></h1>

        <div className="img_wrapper d-flex justify-content-between">
            <img src="https://static.wixstatic.com/media/d307ba_a9ab04576f1b48f5bbfc82278fa8f486~mv2.png/v1/fill/w_353,h_433,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/greenovation%20logo%20icon.png" alt="greenovation logo icon.png" style={{ width: '353px', height: '433px', objectFit: 'cover', objectPosition: '50% 50%' }} />
            <div className="d-flex justify-content-end flex-grow-1">
                <img className='' src="https://static.wixstatic.com/media/d307ba_766e1eb74e9944d2aa78ba2c83f6eeef~mv2.png/v1/fill/w_324,h_398,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/greenovation%20logo%20icon_edited.png" alt="greenovation logo icon_edited.png" style={{ width: '324px', height: '398px', objectFit: 'cover', objectPosition: '50% 50%' }} />
            </div>
            <div className="img_animated">
                <img src="https://static.wixstatic.com/media/670a64_d7a7f2c910f844fd8049fe77d8da4c02~mv2.jpg/v1/crop/x_646,y_2285,w_3670,h_2531/fill/w_749,h_516,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GREENOVATION%205%20STEPS.jpg" alt="GREENOVATION 5 STEPS.jpg" style={{ width: '749px', height: '516px', objectFit: 'cover', objectPosition: '50% 50%' }} />
            </div>
            <img src="" alt="" />
        </div>
    </section>
}