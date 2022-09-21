import React from 'react';
import '../../../scss/layout/footer/Footer.css';
import { Link } from 'react-router-dom';
function Footer(props) {
    const icon_list = [
        {
            id: 1,
            icon: <svg fill='white' data-bbox="20 20 160 159.999" viewBox="0 0 200 200" height={35} xmlns="http://www.w3.org/2000/svg" data-type="shape">
                <g>
                    <path d="M174.754 137.015l-16.878-17.024c-7.055-7.116-18.563-7.186-25.705-.156l-.283.278-.803.794c-5.874 5.808-15.363 5.761-21.178-.105L78.719 89.344c-5.798-5.849-5.75-15.271.108-21.061l.001.001.283-.279c7.142-7.03 7.211-18.499.156-25.615L62.404 25.383c-7.061-7.122-18.581-7.185-25.72-.14l-.001-.001-11.238 11.11c-4.496 4.445-6.458 10.916-4.936 17.042 14.422 58.077 66.325 112.081 124.426 126.073 6.239 1.503 12.817-.21 17.377-4.711l12.003-11.848.284-.279c7.14-7.03 7.21-18.498.155-25.614z" />
                </g>
            </svg>,
            link: '#',
            
        },
        {
            id: 2,
            icon: <svg fill='white' data-bbox="20 44.5 160 110.999" viewBox="0 0 200 200" height={28} xmlns="http://www.w3.org/2000/svg" data-type="shape">
                <g>
                    <path d="M109.336 104.331a17.481 17.481 0 0 1-18.671 0L20.222 59.784H20v78.442c0 9.54 7.784 17.273 17.386 17.273h125.228c9.602 0 17.386-7.733 17.386-17.273V59.784h-.222l-70.442 44.547z" />
                    <path d="M22.578 44.5l.215.125 68.173 43.111a16.917 16.917 0 0 0 18.069 0l68.173-43.111.215-.125H22.578z" />
                </g>
            </svg>,
            link: '#'
        },
        {
            id: 3,
            icon: <svg fill='white' data-bbox="37.5 20 125 160" viewBox="0 0 200 200" height={43} width={43} xmlns="http://www.w3.org/2000/svg" data-type="shape">
                <g>
                    <path d="M133.406 122.514c-1.964 3.418-.718 7.826 2.777 9.632 7.917 4.09 12.427 9.062 12.427 13.059 0 8.311-19.389 20.877-48.611 20.877-29.223 0-48.611-12.566-48.611-20.877 0-4.009 4.533-8.996 12.491-13.094 3.507-1.806 4.754-6.229 2.777-9.651a6.95 6.95 0 0 0-9.213-2.693C45.188 126.114 37.5 135.15 37.5 145.206 37.5 164.42 65.481 180 100 180s62.5-15.58 62.5-34.794c0-10.033-7.656-19.053-19.867-25.397a6.95 6.95 0 0 0-9.227 2.705z" />
                    <path d="M100 20c-24.296 0-43.992 19.737-43.992 44.083a43.895 43.895 0 0 0 4.823 20.022c.11.216.231.427.359.633l32.923 53.004c2.716 4.372 9.057 4.372 11.773 0l32.923-53.004c.128-.206.249-.417.359-.633a43.898 43.898 0 0 0 4.823-20.022C143.992 39.737 124.296 20 100 20zm9.127 57.962c-14.009 9.714-29.286-5.595-19.592-19.632a5.329 5.329 0 0 1 1.338-1.341c14.009-9.717 29.288 5.594 19.593 19.632a5.382 5.382 0 0 1-1.339 1.341z" />
                </g>
            </svg>,
            link: '#'
        },
        {
            id: 4,
            icon: <img alt="" style={{ width: '45px', height: '45px', objectFit: 'cover' }} src="https://static.wixstatic.com/media/11062b_cef3b719166a4815b446d4dcfcb6120d~mv2.png/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_cef3b719166a4815b446d4dcfcb6120d~mv2.png" />,
            link: '#'
        },
        {
            id: 5,
            icon: <img alt="" style={{ width: '45px', height: '45px', objectFit: 'cover' }} src="https://static.wixstatic.com/media/11062b_fe985b889c144b348eefc7bbc67018b4~mv2.png/v1/fill/w_45,h_45,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_fe985b889c144b348eefc7bbc67018b4~mv2.png" />,
            link: '#'
        },
    ]

    const action_list = [
        {
            id: 1,
            name: 'Bankverbindung',
            link: '#',
        },
        {
            id: 2,
            name: `FAQ's`,
            link: '#'
        },
        {
            id: 3,
            name: `Job's`,
            link: '#'
        },
        {
            id: 4,
            name: `Geschäftspräsentation`,
            link: '#'
        },
        {
            id: 5,
            name: `AGB's`,
            link: '#'
        },
        {
            id: 6,
            name: `Datenschutz`,
            link: '#'
        },
        {
            id: 7,
            name: `Impressum`,
            link: '#'
        },
    ]
    return (
        <footer id='Footer'>
            <div className="img_logo text-center d-flex justify-content-center">
                <img src={require('../../../img/logo/greenovation_logo_white.webp')} alt="" />

            </div>

            <ul className="d-flex flex-wrap justify-content-center align-items-center " id='icon_list'>
                {
                    icon_list.map(v => {
                        return (
                            <li key={v.id} className="m-3 mx-4 mb-0">
                                <Link to={v.link}>
                                    {v.icon}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

            <ul className="d-flex flex-wrap justify-content-center align-items-center">
                {
                    action_list.map(v => {
                        return (
                            <li key={v.id} className="m-3 mx-4 mb-1 pb-4">
                                {v.id === 3 || v.id === 4 ?

                                    <Link to={v.link} className="text-white" style={{textDecoration: 'underline'}}>
                                        {v.name}
                                    </Link>

                                    :
                                    <Link to={v.link} className="text-white">
                                        {v.name}
                                    </Link>
                                }

                            </li>
                        )
                    })
                }
            </ul>

            <div className="footer_light_text bg-white p-3 pb-2 text-center">
                <p className='my-0'>
                    GREENOVATION WERKSTRASSE 3 3428 WILER
                </p>
                <p className="font_8 mb-0" style={{ fontSize: '12px', lineHeight: '1.8em', textAlign: 'center' }}>
                    <span style={{ fontSize: '12px' }}><span className="color_13"><span style={{ letterSpacing: '0.1em' }}>
                        © 2022 Greenovation GmbH. Website by <a href="http://www.brand-brain.ch"
                            target="_blank" rel="noreferrer noopener"><span style={{ fontWeight: 'bold' }}>BRAND</span>BRAIN</a></span></span></span></p>
            </div>
        </footer>
    );
}

export default Footer;