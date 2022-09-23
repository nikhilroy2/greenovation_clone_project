import React from 'react';
import '../../../scss/components/AboutCard/AboutCard.css';
function AboutCard(props) {
    const card_object = [
        {
            id: 1,
            role: 'Chief Executive Officer',
            name: 'PETER BAKA',
            description: `Langjährige Erfahrungen im Kader vom KMU und internationalen Konzernen. Starker Background in Betriebswirtschaft und Marketing.`,
            img: require('../../../img/components/AboutCard/FotoPeter.webp'),
        },
        {
            id: 2,
            role: 'Chief Marketing Officer',
            name: 'JENNIFER PREMORI',
            description: `Hohe Fachkompetenz in Marketing und Promotion, gesammelt bei namhaften international tätigen Unternehmen, in teils sehr kompetitiven Feldern.`,
            img: require('../../../img/components/AboutCard/FotoJenny.webp'),
        },
        {
            id: 3,
            role: 'Chief Operating Officer',
            name: 'JULIUS ZABLOCKI',
            description: `Unser "Head Grower"
                Mit über 20 Jahren Erfahrung in der Cannabis-Branche leitet er unsere Produktion auf einem Top-Level.`,
            img: require('../../../img/components/AboutCard/julius.webp'),
        },
        {
            id: 4,
            role: 'Chief Scientific Officer',
            name: 'JENS BRETTSCHNEIDER',
            description: `International anerkannter Tissue-Culture-Experte. Er verfügt über langjährige Erfahrungen in der kommerziellen Pflanzenzucht mit Medizinalcannabis.`,
            img: require('../../../img/components/AboutCard/JensBrettschneider.webp'),
        }
    ]
    return (
        <div id='AboutCard'>
            <div className="card_wrapper">
                {card_object.map(v => {
                    return (
                        <div className="card_item" key={v.id}>
                            <div className="card_head">
                                <img className='img_cover' src={v.img} alt="img" />
                            </div>
                            <div className="card_body">
                                <p className="color_23">
                                    <b>{v.role}</b>
                                </p>
                                <p>
                                    <strong>
                                        {v.name}
                                    </strong>
                                </p>
                                <p className="color_15" style={{ fontFamily: 'helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif' }}>
                                    {v.description}
                                </p>
                            </div>
                        </div>

                    )
                })}

            </div>

            <div className="map_content">
                <div className="content_head mb-5">
                    <h2 className="font_6 my-0" style={{ lineHeight: 'normal', fontSize: '30px' }}><span style={{ fontSize: '30px' }}><span className="color_23"><span style={{ fontWeight: 'bold' }}><span style={{ letterSpacing: '0.16em' }}>STANDORT DER ANLAGE</span></span></span></span></h2>
                </div>
                <ul className="list-unstyled p-0 m-0">
                    <li>
                        <a className='color_14 d-block py-2' href="https://goo.gl/maps/7nWiuxzFw67kv3ie7">GREENOVATION</a>
                    </li>
                    <li>
                        <a className='color_14 d-block py-2' href="https://goo.gl/maps/7nWiuxzFw67kv3ie7">WERKSTRASSE 3</a>
                    </li>
                    <li>
                        <a className='color_14 d-block py-2' href="https://goo.gl/maps/7nWiuxzFw67kv3ie7">3428 WILER</a>
                    </li>
                </ul>
            </div>
            <div className="map_iframe">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.3504645623475!2d7.557480499999999!3d47.1509901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e28fad4e27de7%3A0x9bad505f4bb6a116!2sGreenovation!5e0!3m2!1sde!2sbd!4v1663923471183!5m2!1sde!2sbd" width="100%" height={600} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

            </div>
        </div>
    );
}

export default AboutCard;