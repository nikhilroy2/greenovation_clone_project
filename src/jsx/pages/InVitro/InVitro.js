import React from 'react';
import '../../../scss/pages/InVitro/InVitro.css';
function InVitro(props) {
    return (
        <div id='InVitro' className='header_margin'>
            <Section1></Section1>
        </div>
    );
}

export default InVitro;

const Section1 = () => {
    return (
        <section id="Section1">
            <div className="drawing">
                <img className='img_cover' src={require('../../../img/pages/InVitro/mv2.webp')} alt="" />
            </div>
            <div className="section_wrapper">
                <div className="section_header">
                    <h1 className="font_0" style={{ lineHeight: '1.5em', textAlign: 'center', fontSize: '64px' }}><span className="color_15"><span style={{ letterSpacing: '0.08em' }}>In Vitro</span></span></h1>
                </div>
                <div className="section_body">
                    <div className="mask_box">
                        <div className="mask_box_lg">
                            <img src={require('../../../img/pages/InVitro/IMG_0809.webp')} alt="img" />
                        </div>
                        <div className="mask_box_sm">
                            <img src={require('../../../img/pages/InVitro/IMG_0807.webp')} alt="img" />
                        </div>
                    </div>
                    <div className="content_box">
                        <p className="font_8" style={{ fontSize: '16px' }}>Seit über 4 Jahren haben wir geforscht und unsere Prozesse verfeinert. Wir sind in der Schweiz die Einzigen im Bereich Cannabis, welche die Pflanzen per «in vitro» in der Lage sind zu vermehren.</p>

                        <p className="font_8" style={{ fontSize: '16px' }}>Was bedeutet "in vitro"?&nbsp;</p>
                        <p className="font_8" style={{ fontSize: '16px' }}>Die Pflanzen werden im Labor unter sterilen Bedingungen geklont. Dadurch sind sie genetisch verjüngt und stabiler, verfügen über das maximale genetische Potential der Sorte und sind garantiert frei von jeglichen Krankheiten, Schädlingen und Viren. Mit dieser zukunftsweisenden Technik haben wir gegenüber den Mitbewerbern einen entscheidenden Wissens- und Erfahrungsvorsprung in der Produktion und Qualität, wovon du direkt profitierst.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}