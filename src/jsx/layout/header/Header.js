import React from 'react';
import '../../../scss/layout/header/Header.css';
import { Link } from 'react-router-dom'
function Header(props) {
    const navlist_object = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 2,
            name: 'Über uns',
            link: '/uber-uns'
        },
        {
            id: 3,
            name: 'Pflanzenkauf',
            link: '/pflanzenkauf'
        },
        {
            id: 4,
            name: 'NFT',
            link: '/nft'
        },
        {
            id: 5,
            name: 'Affiliate',
            link: '/affiliate'
        },
        {
            id: 6,
            name: 'In Vitro',
            link: '/invitro'
        },
    ]
    const pathName = window.location.pathname
    return (
        <header id='Header'>
            <div className="header_position">
                <div className="header_wrapper">
                    <Link to="/">
                        <img src={require('../../../img/logo/logo.webp')} alt="logo" />
                    </Link>

                    <ul className="navbar_list my-0">
                        {
                            navlist_object.map(v => {
                                return (
                                    <li key={v.id}>
                                        <Link to={v.link} className={`${pathName === v.link ? 'active_nav' : ''}`}>
                                            {v.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <button className="login_btn">
                        LOGIN
                    </button>
                    <div className="dropdown_leng">
                        <div className="dropdown_item dropdown_active">
                            <img src={require('../../../img/flag/DEU.png')} alt="" />
                            <svg width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.283 4.898"><path d="M4.641 4.898a.5.5 0 01-.343-.136L.158.864A.5.5 0 01.842.136L4.64 3.712 8.44.136a.5.5 0 01.686.729L4.984 4.762a.5.5 0 01-.343.136z" /></svg>
                        </div>

                        <div className="dropdown_item dropdown_action">
                            <img src={require('../../../img/flag/GBR.png')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;