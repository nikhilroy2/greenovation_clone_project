import React from 'react';
import '../../../scss/pages/Affiliate/Affiliate.css';
function Affiliate(props) {
    return (
        <div id='Affiliate'>
            <Section1></Section1>
            <Section2></Section2>
        </div>
    );
}

export default Affiliate;

const Section1 = () => {
    return (
        <section id="Section1">
            <div className="section_header">
                <h1 className="font_0 my-0 py-0" style={{ lineHeight: '1.5em', textAlign: 'center', fontSize: '64px' }}><span className="color_15"><span style={{ letterSpacing: '0.08em' }}>Affiliate</span></span></h1>
                <h1 className="font_0 mb-0 py-0" style={{ marginTop: '-15px', fontSize: '20px', lineHeight: '1.5em', textAlign: 'center' }}><span style={{ letterSpacing: '0.15em' }}><span className="color_13"><span style={{ fontSize: '20px' }}><span style={{ fontWeight: 'bold' }}>Smart Canna Invest</span></span></span></span></h1>
            </div>
            <div className="section_body">
                <div className="mask_box">
                    <img className='img_cover' src={require('../../../img/pages/Affiliate/Empfehlungsbonus1.webp')} alt="img" />
                </div>
                <div className="content_box">
                    <div className="content_header">
                        <h1 className="font_0" style={{ fontSize: '25px', lineHeight: '1.5em' }}><span style={{ fontWeight: 'bold' }}><span style={{ fontSize: '25px' }}><span className="color_15"><span style={{ letterSpacing: '0.08em' }}>Empfehlungsbonus</span></span></span></span></h1>
                    </div>
                    <div className="content_body">
                        <p className="font_8 font_size_16">Profitiere von total 20% Empfehlungsbonus für Pflanzenverkäufe innerhalb von fünf Ebenen deines Teams. Mit dem attraktiven Bonus-Plan bieten wir dir bei jedem Pflanzenverkauf, der in den ersten fünf Ebenen deines Teams stattfindet, total 20 Prozent Empfehlungsbonus.</p>
                        <p className="font_8 font_size_16"><span className="wixGuard">​</span></p>
                        <p className="font_8 font_size_16"><span className="wixGuard">​</span></p>
                        <p className="font_8 font_size_16">DIES FUNKTIONIERT WIE FOLGT: &nbsp;<br />
                            In Ihrer ersten Ebene profitierst du von attraktiven zehn Prozent. &nbsp;<br />
                            Auch die weiteren fünf Ebenen lohnen sich für dich – denn diese bringen dir &nbsp;insgesamt zusätzlich weitere 10 Prozent ein.&nbsp; &nbsp;Aber es wird noch besser! Hole dir noch weitere 20% als passives Einkommen mit &nbsp;einer Beteiligung an den Erträgen aus deinem Team – mit dem ErtragsBonus - und das immer wieder.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Section2 = () => {
    return (
        <section id="Section2">
            <div className="section_body">

                <div className="content_box">
                    <div className="content_header">
                        <h1 className="font_0" style={{ fontSize: '25px', lineHeight: '1.5em', textAlign: 'right' }}><span style={{ fontWeight: 'bold' }}><span style={{ fontSize: '25px' }}><span className="color_15"><span style={{ letterSpacing: '0.08em' }}>Ertragsbonus</span></span></span></span></h1>
                    </div>
                    <div className="content_body">
                        <p className="font_8" style={{ fontSize: '18px', textAlign: 'right' }}><span style={{ fontSize: '18px' }}>Bilde dir ein passives Einkommen mit unserem Bonus auf wiederkehrende Erträge, denn<br />
                            dieser beteiligt dich prozentual an jedem Ernteertrag der Pflanzen, die innerhalb deines</span></p>

                        <p className="font_8" style={{ fontSize: '18px', lineHeight: '1.4em', textAlign: 'right' }}><span style={{ fontSize: '18px' }}>Teams verkauft wurden – und beträgt insgesamt attraktive 20 Prozent! Den<br />
                            Empfehlungsbonus erhalst Du nicht nur einmalig, sondern nach jeder erfolgten Ernte.</span></p>

                        <p className="font_8" style={{ fontSize: '18px', lineHeight: '1.4em', textAlign: 'right' }}><span style={{ fontSize: '18px' }}>-</span></p>

                        <p className="font_8" style={{ fontSize: '18px', lineHeight: '1.4em', textAlign: 'right' }}><span style={{ fontWeight: 'bold' }}><span style={{ color: '#BADA55' }}><span style={{ fontSize: '18px' }}>Um uns Interessierten vorzustellen, findest du unsere Geschäftspräsentation in der Fusszeile.</span></span></span></p>


                    </div>
                </div>

                <div className="mask_box">
                    <img className='img_cover' src={require('../../../img/pages/Affiliate/ertragsbonus1.webp')} alt="img" />
                </div>
            </div>
        </section>
    )
}