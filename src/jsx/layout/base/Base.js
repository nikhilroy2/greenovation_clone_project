import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Base(props) {
    return (
        <div id='Base'>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>
    );
}

export default Base;