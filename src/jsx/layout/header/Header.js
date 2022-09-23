import React, { useState } from 'react';
import '../../../scss/layout/header/Header.css';
import { Link, useLocation } from 'react-router-dom';
function Header(props) {
    const isEnglish = useLocation().pathname === '/en';
    const navlist_object = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 2,
            name: isEnglish ? 'About us' : 'Über uns',
            link: '/about_us'
        },
        {
            id: 3,
            name: isEnglish ? 'Plant Purchase' : 'Pflanzenkauf',
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
    const pathName = window.location.pathname;

    const [isDropdown, setIsDropdown] = useState(false);

    const [isOpenDrop, setIsOpenDrop] = useState(false);

    const dropdownItemClick = () => {
        setIsDropdown(!isDropdown)
        setIsOpenDrop(false);
        // path adding
    }
    const [isFixed, setIsFixed] = useState(false)
    window.addEventListener('scroll', e => {
        //console.log(window.pageYOffset)
        let scroll = window.pageYOffset;
        if (scroll) {
            setIsFixed(true);
        } else {
            setIsFixed(false)
        }
    })
    return (
        <header id='Header'>
            <div className={`header_position ${isFixed ? ' header_scroll_fixed' : ''}`}>
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
                    <div className={`dropdown_leng ${isOpenDrop ? ' leng_active' : ''}`}>
                        <div onClick={() => setIsOpenDrop(!isOpenDrop)} className="dropdown_item dropdown_active">
                            <img src={isDropdown ? require('../../../img/flag/GBR.png') : require('../../../img/flag/DEU.png')} alt="" />

                            <svg style={{ transform: isOpenDrop ? 'scaleY(-1)' : 'scaleY(1)' }} width="12px" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 9.283 4.898"><path d="M4.641 4.898a.5.5 0 01-.343-.136L.158.864A.5.5 0 01.842.136L4.64 3.712 8.44.136a.5.5 0 01.686.729L4.984 4.762a.5.5 0 01-.343.136z" /></svg>
                        </div>

                        {
                            isOpenDrop ? <Link to={isDropdown ? '/' : '/en'} onClick={dropdownItemClick} className="dropdown_item dropdown_action">
                                <img src={isDropdown ? require('../../../img/flag/DEU.png') : require('../../../img/flag/GBR.png')} alt="" />
                            </Link> : ''
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;