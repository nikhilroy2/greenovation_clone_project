import React from 'react';
import '../../../scss/pages/PlantPurchase/PlantPurchase.css';
function PlantPurchase(props) {
    const card_object = [
        {
            id: 1,
            title: '998.-',
            subtitle: 'PRE SALE',
            img: require('../../../img/pages/PlantPurchase/tree.webp'),
            description: 'Startangebot für die Pflanzenplätze während der Pre-Sale Phase',
            link: '#',
            link_name: 'PFLANZE KAUFEN'
        },
        {
            id: 2,
            title: `1'480.-`,
            subtitle: 'STANDARD',
            img: require('../../../img/pages/PlantPurchase/tree.webp'),
            description: 'Regulärer Preis, solange wir CBD anbauen.',
            link: '#',
            link_name: 'PFLANZE KAUFEN'
        },
        {
            id: 3,
            title: `19'800.-`,
            subtitle: 'SEED PACKAGE',
            img: require('../../../img/pages/PlantPurchase/tree.webp'),
            description: <>25 Pflanzenplätze
                Empfehlungsbonus :
                15%  Level 1 / 10%  Level 2
                <br />
                <span style={{ fontWeight: 'bold' }}><span className="color_14"><span style={{ fontSize: '22px' }}>EXCLUSIV nur 15-mal</span></span></span>
            </>,
            link: '#',
            link_name: 'PFLANZE KAUFEN'
        },
    ]
    return (
        <div id='PlantPurchase'>
            <div className="design">
                <img className='img_cover' src={require('../../../img/pages/PlantPurchase/mv2.webp')} alt="" />
            </div>
            <div className="section_wrapper">
                <div className="section_header pt-5">
                    <h1 className="font_0 my-0 pt-1" style={{ lineHeight: '1.5em', textAlign: 'center', fontSize: '64px' }}><span className="color_15"><span style={{ letterSpacing: '0.08em' }}>PFLANZENKAUF</span></span></h1>

                    <p className="font_8" style={{ fontSize: '25px', textAlign: 'center' }}><span style={{ fontSize: '25px' }}><span className="color_23"><span style={{ fontWeight: 'bold' }}>Sichere dir jetzt im Pre-Sale deine Pflanze zum Vorzugspreis</span></span></span></p>

                    <div className="card_wrapper">
                        {
                            card_object.map(v => {
                                return (
                                    <div className="card_item" key={v.id}>
                                        <div className="card_header">
                                            <h1 className="font_0 my-0 content1" style={{ fontSize: '45px', textAlign: 'center' }}>
                                                <span style={{ fontSize: '45px' }}><span style={{ fontWeight: 'bold' }}>
                                                    <span className="color_23">{v.title}</span></span></span></h1>
                                            <img className='tree_img d-none'
                                                src={v.img} alt="img" />
                                            <h1 className="font_0 my-0 text-nowrap" style={{ fontSize: '25px', textAlign: 'center' }}><span style={{ fontWeight: 'bold' }}>
                                                <span style={{ fontSize: '25px' }}><span className="color_23">{v.subtitle}</span></span></span></h1>
                                        </div>
                                        <div className="card_body">
                                            <div className="card_description color_14">
                                                {v.description}
                                            </div>
                                        </div>
                                        <div className="card_footer">
                                            <a href={v.link} className="btn_outline_green px-4">
                                                {v.link_name}
                                            </a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="section_footer">
                <ul className="list-unstyled">
                    <li>
                        <p className="font_8" style={{ fontSize: '20px', textAlign: 'center' }}><span style={{ fontSize: '20px' }}><span style={{ fontWeight: 'bold' }}>Pre-Sale Angebot 998.- CHF</span>&nbsp; </span></p>
                    </li>
                    <li className='mt-4'>
                        <p className="font_8" style={{ fontSize: '20px', textAlign: 'center' }}><span style={{ fontSize: '20px' }}>Regulärer Preis 1480.- CHF<br />
                            <br />
                            Sobald die Pre-Sale Phase vorbei ist, hast du schon alleine durch den Mehrwert des Platzes <span style={{ fontWeight: 'bold' }}>482.- CHF Gewinn</span> gemacht pro Pflanze.</span></p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default PlantPurchase;