import React from 'react';
import '../../../scss/pages/Nft/Nft.css';
function Nft(props) {
    return (
        <div id='Nft' className='header_margin'>
            <Section1></Section1>
            <Section2></Section2>
        </div>
    );
}

export default Nft;

const Section1 = () => {
    return (
        <section id="Section1">
            <div className="design">
                <img className='img_cover' src={require('../../../img/pages/Nft/mv2.webp')} alt="img" />
            </div>
            <div className="section_wrapper">
                <div className="section_header">
                    <h1 className="font_0 my-0"
                        style={{ lineHeight: '1.5em', textAlign: 'center', fontSize: '64px' }}><span className="color_15"><span style={{ letterSpacing: '0.08em' }}>NFT</span></span></h1>
                </div>
                <div className="section_body">
                    <div className="content_box">
                        <p className="font_8" style={{ fontSize: '16px' }}>Bei den Non-Fungible Token, von denen häufig nur unter der Abkürzung NFT die Rede ist, handelt es sich um eine Methode, um Dateien mit einer digitalen Signatur zu versehen. Übersetzt handelt es sich dabei um „nicht-austauschbare Wertmarken“, was besagt, dass NFT einander nicht gleichwertig sind. Ähnlich wie ein Gemälde von Picasso nicht einfach gegen eines von Monet ausgetauscht werden kann.</p>
                        <p className="font_8" style={{ fontSize: '16px' }}>Das NFT belegen dabei, dass das Werk einzigartig, authentifiziert und nicht gefälscht ist. Es dient somit als Echtheitszertifikat für digitale Dateien und kann legale Besitzrechte an diesen aufzeigen. Das Zertifikat über das Eigentum einer Datei ist dabei unveränderbar und kann nicht kopiert werden. Dadurch entsteht ein handelbares Gut, mit welchem sich auch spekulieren lässt.</p>
                    </div>
                    <div className="mask_box">
                        <img src={require('../../../img/pages/Nft/NFT-Abbildung.webp')} alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}

const Section2 = () => {
    return (
        <section id="Section2">
            <div className="design">
                <video className='img_cover' muted autoPlay loop src={require('../../../media/file_sm.mp4')}></video>
            </div>
            <div className="section_wrapper">
                <div className="mask_box">
                    <img src={require('../../../img/pages/Nft/icon_edited.webp')} alt="img" />
                </div>
                <div className="content_box">
                    <p className="font_8" style={{ fontSize: '16px' }}><span style={{ fontWeight: 'bold' }}>Dein Invest zusätzlich erhöhen mit der Wertsteigerung deines NFT's.</span><br />
                        Als Vorreiter unserer Branche sichern wir die Pflanzenplätze per Blockchain-Technologie und bieten unseren Kunden eine einzigartige Beteiligung an der Produktion. Der Besitz deines Pflanzenplatzes wird über dein NFT sichergestellt. Du kannst mit den NFT handeln und so deinen Pflanzenplatz gewinnbringend verkaufen, oder vom passiven Einkommen profitieren.&nbsp;<br />
                        Dein NFT bietet dir nicht nur das geistige Eigentum an einem digitalen Werk, sondern ist mit einem Real-Business verknüpft in dem es deine Investition sicherstellt.</p>

                    <p className="font_8" style={{ fontSize: '16px' }}>Durch die geplanten Werbemassnahmen mit internationalen Prominenten, ist mit einem deutlichen Wertanstieg deines NFT's zu rechnen. Lass dich überaschen!</p>

                </div>
            </div>
        </section>
    )
}