import React from 'react';
import AOS from 'aos';
import '../../../scss/pages/homepage/Homepage.css';

AOS.init();

function Homepage(props) {
    return (
        <div id='Homepage'>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
            <Section5></Section5>
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
                    <div className="img_lg">
                        <img className='' src={require('../../../img/icons/GreenovationIcon.webp')} alt="" />
                    </div>
                    <div className="img_sm">
                        <img className='' src={require('../../../img/icons/GreenovationIconSm.webp')} alt="GreenovationIconSm.webp" />
                    </div>
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

        <div className="section_wrapper">
            <div className="img_wrapper d-flex justify-content-between w-100">
                <img src="https://static.wixstatic.com/media/d307ba_a9ab04576f1b48f5bbfc82278fa8f486~mv2.png/v1/fill/w_353,h_433,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/greenovation%20logo%20icon.png" alt="greenovation logo icon.png" style={{ width: '353px', height: '433px', objectFit: 'cover', objectPosition: '50% 50%' }} />
                <div className="d-flex justify-content-end flex-grow-1">
                    <img className='' src="https://static.wixstatic.com/media/d307ba_766e1eb74e9944d2aa78ba2c83f6eeef~mv2.png/v1/fill/w_324,h_398,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/greenovation%20logo%20icon_edited.png" alt="greenovation logo icon_edited.png" style={{ width: '324px', height: '398px', objectFit: 'cover', objectPosition: '50% 50%' }} />
                </div>
                <div className="img_animated" data-aos="fade-right" data-aos-once="true" >
                    <img src="https://static.wixstatic.com/media/670a64_d7a7f2c910f844fd8049fe77d8da4c02~mv2.jpg/v1/crop/x_646,y_2285,w_3670,h_2531/fill/w_749,h_516,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GREENOVATION%205%20STEPS.jpg" alt="GREENOVATION 5 STEPS.jpg" style={{ width: '749px', height: '516px', objectFit: 'cover', objectPosition: '50% 50%' }} />
                </div>
            </div>
        </div>
        <br /><br /><br /><br />
        <br />
        <p className="font_7" style={{ lineHeight: '1.7em', textAlign: 'center', fontSize: '24px' }}><span style={{ color: '#85C43F' }}><span style={{ fontWeight: 'bold' }}><span style={{ fontSize: '20px', letterSpacing: '0.05em' }}>Partizipiere am Erfolg des i</span><span style={{ fontSize: '20px', letterSpacing: '0.0416667em' }}>nnovativsten</span><span style={{ fontSize: '20px', letterSpacing: '0.05em' }}>&nbsp;Marktteilnehmers im Crowdgrowing.</span></span></span></p>
        <div className="content_description">
            <img src="https://static.wixstatic.com/media/d307ba_b3ab9914ccc341bbb3eb47f35c0f627c~mv2.png/v1/fill/w_484,h_594,al_c,q_85,enc_auto/greenovation%20logo%20icon%20hex%20gry.png" alt="" className="drawing" />
            <p className="font_7" style={{ fontSize: '20px', lineHeight: '1.7em', textAlign: 'center' }}><span style={{ letterSpacing: '0.05em' }}><span style={{ fontSize: '20px' }}>Wie klingt das, wenn wir für dich arbeiten und du das Geld verdienst? Genau das<br />
                machen wir! Jeder auf unserer Plattform verkaufte Pflanzenplatz entspricht einem physisch vorhandenen Platz in unserer Produktionsanlage. Wir kümmern uns um deine Pflanze in vollem Umfang und verkaufen nach erfolgter Ernte das Produkt. Nach Abzug der laufenden Kosten, wird der Gewinn zwischen Greenovation und dir 50/50 aufgeteilt.<br />
                Als einziges Unternehmen in der Schweiz produzieren wir unsere Stecklinge mit dem <span className="color_23"><span style={{ fontWeight: 'bold' }}>In Vitro</span></span> Verfahren und bestätigen den Besitz der Pflanze mit einem <span className="color_23"><span style={{ fontWeight: 'bold' }}>NFT</span></span>. &nbsp;Wir garantieren<br />
                eine Rendite von <span style={{ fontWeight: 'bold' }}>mindestens 10%, dies sicher, stabil und langfristig</span>, was im aktuellen Finanzumfeld herausragend ist.<br />
                Unser State oft the Art Equipment und unsere langjährige Erfahrung optimieren<br />
                den Ertrag langfristig. Wir ernten seit Jahren im Durchschnitt 22.7 % mehr als<br />
                unsere Mitbewerber.</span></span></p>

            <br />
            <div className="text-center">
                <span style={{ letterSpacing: '0.05em' }}><span style={{ fontSize: '20px' }}>Willkommen bei Greenovation - willkommen in der Zukunft.</span></span>
            </div>
            <br /><br /><br />

            <div className="btn_wrapper text-center">
                <a href="#" className="btn_outline_green px-4">
                    PFLANZE KAUFEN
                </a>
            </div>

            <h1 className="font_0" style={{ fontSize: '15px', textAlign: 'center' }}><span style={{ fontSize: '15px' }}>*zum Vorzugspreis</span></h1>

            <p className="font_7" style={{ fontSize: '20px', lineHeight: '1.7em', textAlign: 'center' }}><span style={{ letterSpacing: '0.05em' }}><span style={{ fontSize: '25px' }}><span className="color_23">"Medizinal Cannabis ist der Milliarden-Zukunftsmarkt"</span></span><br />
                <span style={{ fontSize: '15px' }}>-Peter Thiel</span></span></p>
            <p className="font_7" style={{ fontSize: '15px', lineHeight: '1.7em', textAlign: 'center' }}><span style={{ fontSize: '15px' }}><span style={{ letterSpacing: '0.05em' }}>Gründer von Paypal &amp; erster Investor bei Facebook</span></span></p>




        </div>

        <div className="content_2">

        </div>

    </section>
}

const Section3 = () => {
    return (
        <section id="Section3">
            <div className="section_wrapper_sm">
                <div id="comp-l6dka9fm" className="_2Hij5 _3bcaz text-center" data-testid="richTextElement"><h1 className="font_0" style={{ fontSize: '29px' }}><span style={{ fontSize: '29px' }}>WAS UNS GEGENÜBER DEN MITBEWERBERN AUSZEICHNET</span></h1></div>

                <div className="d-flex justify-content-between">
                    <div className="img_mask_box flex-grow-1">
                        <div className="mask_wrapper">
                            <img src={require('../../../img/pages/homepage/mask_img1.webp')} alt="" />
                            <div className="box">
                                <svg id="svg_comp-l6dkg4bp" className="position-absolute _2Ea4I"><defs><filter id="ink-comp-l6dkg4bp" colorInterpolationFilters="sRGB">
                                    <feComponentTransfer result="srcRGB" />
                                    <feColorMatrix type="matrix" values="0.8179 0.23070000000000002 0.0567 0 0
     0.10470000000000002 0.9058 0.050400000000000014 0 0
     0.0816 0.1602 0.7393 0 0
     0 0 0 1 0" />
                                    <feComponentTransfer><feFuncR type="linear" slope="1.5" intercept="-0.25" />
                                        <feFuncG type="linear" slope="1.5" intercept="-0.25" />
                                        <feFuncB type="linear" slope="1.5" intercept="-0.25" /></feComponentTransfer>
                                    <feComponentTransfer><feFuncR type="linear" slope="1.1" /><feFuncG type="linear" slope="1.1" /><feFuncB type="linear" slope="1.1" /></feComponentTransfer>
                                    <feColorMatrix type="saturate" values={0} />
                                    <feComponentTransfer />
                                </filter></defs></svg>
                                <img src={require('../../../img/pages/homepage/mask_img2.webp')} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="content_wrapper px-3 px-md-4">
                        <ul className="font_7" style={{ fontSize: '18px', textAlign: 'left' }}>
                            <li>
                                <p className="font_7" style={{ fontSize: '18px' }}><span style={{ fontSize: '18px' }}><span style={{ letterSpacing: '0.1em' }}>Alle Pflanzenplätze die du kaufst befinden s</span></span><span style={{ fontSize: '18px' }}><span style={{ letterSpacing: '0.1em' }}>ich <span style={{ fontWeight: 'bold' }}>in unserer eigenen Anlage</span> in der Schweiz. Wir haben keine unsichere Kooperationen mit fremden Anlagen.</span></span></p>
                            </li>
                            <li>
                                <p className="font_7" style={{ fontSize: '18px' }}><span style={{ fontSize: '18px' }}><span style={{ letterSpacing: '0.1em' }}>Unsere Anlage ist <span style={{ fontWeight: 'bold' }}>zur sofortigen Nutzung bereit</span>! Bei einigen Mitbewerbern wird erst das Geld gesammelt und dann die Anlage gebaut. So vergeht über ein Jahr bis zur ersten Ernte und Rendite. </span></span><span style={{ fontWeight: 'bold' }}><span style={{ fontSize: '18px' }}><span style={{ letterSpacing: '0.1em' }}>WIR SIND READY TO GO!!</span></span></span></p>
                            </li>
                            <li>
                                <p className="font_7" style={{ fontSize: '18px' }}><span style={{ fontSize: '18px' }}><span style={{ letterSpacing: '0.1em' }}>Durch unsere Erfahrung und die Optimierung unserer Prozesse ernten wir bis zu <span style={{ fontWeight: 'bold' }}>6-mal im Jahr</span>, was deiner Rendite zugute kommt.</span></span></p>
                            </li>
                            <li>
                                <p className="font_7" style={{ fontSize: '18px' }}><span style={{ fontSize: '18px' }}><span style={{ letterSpacing: '0.1em' }}>Wir sind schon seit 4 Jahren erfolgreich am Markt - was dir <span style={{ fontWeight: 'bold' }}>entscheidende Sicherheit</span> gibt.</span></span></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )

}

const Section4 = () => {
    return <section id="Section4">
        <img className='drawing' src={require('../../../img/pages/homepage/bg_section.webp')} alt="bg" />
        <div className="section_wrapper_sm">
            <div className="section_header d-flex align-items-center">
                <h1 className="font_0" style={{ fontSize: '30px' }}><span style={{ fontSize: '30px' }}>WIR LEBEN TRANSPARENZ</span></h1>
                <img src={require('../../../img/icons/plus.webp')} alt="img" />
            </div>
            <div className="section_body">
                <div className="body_content">
                    <div className='wrapper'>
                        <ul className="font_7 list_disc my-0" style={{ fontSize: '18px', textAlign: 'left' }}>
                            <li>
                                <p className="font_7 my-0" style={{ fontSize: '18px' }}><span style={{ fontSize: '18px' }}><span style={{ letterSpacing: '0.1em' }}>Du kannst jederzeit per Livestream verfolgen wie deine Pflanzen wachsen.</span></span></p>
                            </li>
                        </ul>
                        <p className="font_7 my-0" style={{ fontSize: '18px' }}><span style={{ fontSize: '18px' }}><span style={{ letterSpacing: '0.1em' }}><span className="wixGuard">​</span></span></span></p>
                        <ul className="font_7 list_disc my-0" style={{ fontSize: '18px', textAlign: 'left' }}>
                            <li>
                                <p className="font_7 my-0" style={{ fontSize: '18px' }}><span style={{ fontSize: '18px' }}><span style={{ letterSpacing: '0.1em' }}>Wir bauen nur in der Schweiz an, was für dich bedeutet, dass du dir<br />
                                    unsere Anlage gerne auch persönlich anschauen kannst.</span></span></p>
                            </li>
                        </ul>
                        <p className="font_7 my-0" style={{ fontSize: '18px' }}><span style={{ fontSize: '18px' }}><span style={{ letterSpacing: '0.1em' }}><span className="wixGuard">​</span></span></span></p>
                        <ul className="font_7 list_disc my-0" style={{ fontSize: '18px', textAlign: 'left' }}>
                            <li>
                                <p className="font_7 my-0" style={{ fontSize: '18px' }}><span style={{ fontSize: '18px' }}>I<span style={{ letterSpacing: '0.1em' }}>n deinem Login siehst du jederzeit wie viel Gewinn du bereits erwirtschaftet hast. Du hast die Möglichkeit deinen Ertrag auszahlen zu lassen oder in weitere Pflanzen zu investieren. So kannst du dir ein rentables Business aufbauen.</span></span></p>
                            </li>
                        </ul>
                    </div>
                    <br /><br /><br /><br /><br />
                    <div className="action_box">
                        <a href="#" className="stable_green_btn">
                            PFLANZE KAUFEN
                        </a>
                    </div>
                    <div className="img_box_m">
                        <img src={require('../../../img/pages/homepage/transparent.webp')} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
}

const Section5 = () => {
    return <section id="Section5">
        <img src={require('../../../img/pages/homepage/mv2.webp')} alt="" className="drawing" />
        <div className="section_header">
            <h1 className="font_0 position-relative" style={{ fontSize: '30px', textAlign: 'right' }}>
                <span style={{ fontSize: '30px' }}>MEHR GEWINN DURCH
                    <span style={{ fontWeight: 'bold' }}><span style={{ fontWeight: 'bold' }} className="color_23"> IN VITRO</span></span></span>
                <img style={{ position: 'absolute', right: '-80px', top: '-20px' }} src={require('../../../img/icons/icon_side.webp')} alt="img" />
            </h1>
        </div>
        <div className="img_box_m">
            <div className="box">
                <svg id="svg_comp-l6c1djqu" className="_2Ea4I"><defs><filter id="lighten-comp-l6c1djqu" colorInterpolationFilters="sRGB">
                    <feComponentTransfer result="srcRGB" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1
0 0 0 0 1
0 0 0 0 1
0 0 0 1 0" in="srcRGB" result="color" />
                    <feComponentTransfer in="color" result="color_alpha"><feFuncA type="linear" slope="0.46" /></feComponentTransfer>
                    <feComposite operator="over" in="color_alpha" in2="srcRGB" />
                    <feComponentTransfer />
                </filter></defs></svg>

                <img className='canna_img' src={require('../../../img/pages/homepage/cannabis.webp')} alt="" />
            </div>
            <div className="box">
                <img className='grenno_circle' src={require('../../../img/pages/homepage/greenovation_animated.webp')} alt="" />
            </div>
            <div className="box">
                <img className='edit_lg' src={require('../../../img/pages/homepage/icon_edited_lg.webp')} alt="" />
            </div>
        </div>
        <div className="content_section">
            <div className="section_body">
                <p className="font_8" style={{ lineHeight: '1.7em', textAlign: 'right', fontSize: '16px' }}>
                    <span style={{ letterSpacing: '0.05em' }}>
                        Seit über 4 Jahren haben wir geforscht und unsere Prozesse verfeinert. Wir sind in der Schweiz die Einzigen im Bereich Cannabis, welche die Pflanzen per «in vitro» in der Lage sind zu vermehren. Was bedeutet in vitro? Die Pflanzen werden im Labor unter sterilen Bedingungen geklont. Dadurch sind sie genetisch verjüngt und stabiler, verfügen über das maximale genetische Potential der Sorte und sind garantiert frei von jeglichen Krankheiten, Schädlingen und Viren. Mit dieser zukunftsweisenden Technik haben wir gegenüber den Mitbewerbern einen entscheidenden Wissens- und Erfahrungsvorsprung in der Produktion und Qualität, wovon du direkt profitierst.</span></p>

                <div className="action_btn_wrapper d-flex justify-content-end mt-5">
                    <a href="#" className='stable_green_btn'>
                        MEHR INFOS
                    </a>
                </div>
            </div>
        </div>


    </section>
}