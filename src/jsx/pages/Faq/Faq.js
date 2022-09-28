import React, { useState, useRef, useEffect } from 'react';
import '../../../scss/pages/Faq/Faq.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Faq(props) {
    const [searchView, setSearchView] = useState(false);
    const [tabIndex, setTabIndex] = useState(1);

    const [isSearch, setIsSearch] = useState(false);
    //console.log(isSearch)
    const [searchVal, setSearchVal] = useState('');
    // 
    const [isSearchEmpty, setIsSearchEmpty] = useState(false);
    const accordion_object_1 = [
        {
            id: 1,
            title: `Wie oft wird pro Jahr geerntet?`,
            description: `Jeder Raum wird bis zu 6-mal pro Jahr geerntet. Durch unser Know-How und die optimierte Infrastruktur haben wir somit den meisten Mitbewerbern einen entscheidenden Vorteil. Nach erfolgter Ernte startet der Produktionsraum in ungefähr 3 Tagen wieder, nach erfolgter Reinigung und Desinfektion.`,
            social_list: <ul className="social_list d-flex align-items-center m-0 p-0 mt-4">
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Facebook</title><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Twitter</title><g><path d="M18.123 7.081a3.34 3.34 0 001.44-1.838 6.556 6.556 0 01-2.08.808 3.259 3.259 0 00-3.605-.818 3.331 3.331 0 00-2.08 3.094c0 .254.03.508.085.757A9.277 9.277 0 015.12 5.607a3.3 3.3 0 00-.448 1.672 3.153 3.153 0 001.205 2.77 9.994 9.994 0 01-1.738-.416v.042c.113 1.63 1.304 2.973 2.89 3.262a2.461 2.461 0 01-1.29.056 3.319 3.319 0 003.093 2.311A6.464 6.464 0 014 16.681a9.23 9.23 0 009.52.334c2.995-1.66 4.858-4.844 4.859-8.304 0-.144-.011-.288-.011-.433A6.679 6.679 0 0020 6.558c-.596.27-1.23.446-1.877.523z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Linkedin</title><g><path d="M17.635 17.634h-2.372V13.92c0-.885-.016-2.024-1.234-2.024-1.235 0-1.423.965-1.423 1.96v3.778h-2.372V9.998h2.276v1.044h.033c.316-.6 1.09-1.233 2.245-1.233 2.403 0 2.847 1.58 2.847 3.637v4.188zM7.558 8.955a1.376 1.376 0 11.001-2.751 1.376 1.376 0 01-.001 2.751zm-1.187 8.679h2.374V9.998H6.371v7.636zM18.817 4H5.18C4.53 4 4 4.517 4 5.154v13.692C4 19.483 4.53 20 5.18 20h13.637c.652 0 1.183-.517 1.183-1.154V5.154C20 4.517 19.47 4 18.817 4z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Copy Question Link</title><g><path id="prefix__b" d="M13.095 10.287l.137.142c1.505 1.63 1.678 4.01.282 5.406l-2.093 2.093-.137.13c-1.472 1.35-3.537 1.325-5.075-.213-1.59-1.59-1.593-3.774-.12-5.248l1.685-1.683.942.942-1.684 1.683-.106.112c-.845.944-.804 2.223.225 3.252 1.06 1.061 2.364 1.047 3.328.083l2.093-2.093.09-.097c.773-.895.595-2.463-.509-3.567l.942-.942zm-.38-4.31c1.473-1.348 3.538-1.324 5.076.214 1.59 1.59 1.593 3.774.12 5.248l-1.685 1.684-.942-.942 1.684-1.684.106-.112c.845-.944.804-2.223-.225-3.252-1.06-1.06-2.364-1.047-3.328-.083l-2.093 2.093-.09.097c-.773.895-.595 2.463.509 3.567l-.942.942-.137-.142c-1.505-1.63-1.678-4.01-.282-5.406l2.093-2.093z" /></g></svg>
                    </a>
                </li>
            </ul>
        },
        {
            id: 2,
            title: `Wie berechne ich den Ernteertragswert meiner Pflanze?`,
            description: <>
                <span>Bei der Berechnung der Ernten und dem späteren Verkauf gibt es 2 Faktoren: </span>
                <br />
                <ul style={{ listStyleType: 'disc' }} className="public-DraftStyleDefault-ul"><li id="viewer-c643c" className="_3Kjjs public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth0 public-DraftStyleDefault-list-ltr public-DraftStyleDefault-reset _1FoOD _3M0Fe NSjbv" style={{ lineHeight: '1.2' }}><p className="_1j-51 _1FoOD _3M0Fe" style={{ lineHeight: '1.2' }}>Ertrag pro Pflanze </p></li><li id="viewer-pqlb" className="_3Kjjs public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth0 public-DraftStyleDefault-list-ltr _1FoOD _3M0Fe NSjbv" style={{ lineHeight: '1.2' }}><p className="_1j-51 _1FoOD _3M0Fe" style={{ lineHeight: '1.2' }}>Verkaufspreis pro Gramm CBD </p></li></ul>

                <ul className="list-unstyled m-0 p-0">
                    <li>
                        Rechnung: Brutto Ernte-Ertrag - Nebenkosten = Netto Ernte-Ertrag
                    </li>
                    <li>
                        Netto Ernte-Ertrag : 2 = Dein ausgeschütteter Ernte-Ertrag
                    </li>
                    <li>
                        Jedoch sind 10% p.A. garantiert
                    </li>
                </ul>
            </>,
            social_list: <ul className="social_list d-flex align-items-center m-0 p-0 mt-4">
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Facebook</title><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Twitter</title><g><path d="M18.123 7.081a3.34 3.34 0 001.44-1.838 6.556 6.556 0 01-2.08.808 3.259 3.259 0 00-3.605-.818 3.331 3.331 0 00-2.08 3.094c0 .254.03.508.085.757A9.277 9.277 0 015.12 5.607a3.3 3.3 0 00-.448 1.672 3.153 3.153 0 001.205 2.77 9.994 9.994 0 01-1.738-.416v.042c.113 1.63 1.304 2.973 2.89 3.262a2.461 2.461 0 01-1.29.056 3.319 3.319 0 003.093 2.311A6.464 6.464 0 014 16.681a9.23 9.23 0 009.52.334c2.995-1.66 4.858-4.844 4.859-8.304 0-.144-.011-.288-.011-.433A6.679 6.679 0 0020 6.558c-.596.27-1.23.446-1.877.523z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Linkedin</title><g><path d="M17.635 17.634h-2.372V13.92c0-.885-.016-2.024-1.234-2.024-1.235 0-1.423.965-1.423 1.96v3.778h-2.372V9.998h2.276v1.044h.033c.316-.6 1.09-1.233 2.245-1.233 2.403 0 2.847 1.58 2.847 3.637v4.188zM7.558 8.955a1.376 1.376 0 11.001-2.751 1.376 1.376 0 01-.001 2.751zm-1.187 8.679h2.374V9.998H6.371v7.636zM18.817 4H5.18C4.53 4 4 4.517 4 5.154v13.692C4 19.483 4.53 20 5.18 20h13.637c.652 0 1.183-.517 1.183-1.154V5.154C20 4.517 19.47 4 18.817 4z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Copy Question Link</title><g><path id="prefix__b" d="M13.095 10.287l.137.142c1.505 1.63 1.678 4.01.282 5.406l-2.093 2.093-.137.13c-1.472 1.35-3.537 1.325-5.075-.213-1.59-1.59-1.593-3.774-.12-5.248l1.685-1.683.942.942-1.684 1.683-.106.112c-.845.944-.804 2.223.225 3.252 1.06 1.061 2.364 1.047 3.328.083l2.093-2.093.09-.097c.773-.895.595-2.463-.509-3.567l.942-.942zm-.38-4.31c1.473-1.348 3.538-1.324 5.076.214 1.59 1.59 1.593 3.774.12 5.248l-1.685 1.684-.942-.942 1.684-1.684.106-.112c.845-.944.804-2.223-.225-3.252-1.06-1.06-2.364-1.047-3.328-.083l-2.093 2.093-.09.097c-.773.895-.595 2.463.509 3.567l-.942.942-.137-.142c-1.505-1.63-1.678-4.01-.282-5.406l2.093-2.093z" /></g></svg>
                    </a>
                </li>
            </ul>
        },
        {
            id: 3,
            title: `Wie setzen sich die Nebenkosten zusammen?`,
            description: `Nach jeder erfolgreichen Ernte werden die Nebenkosten wie folgt abgezogen. Was übrig bleibt ist die Nettogewinnmarge einer Pflanze als bestimmte Grammanzahl pro Pflanze in CBD. Die Nebenkosten pro Pflanze sehen wie folgt aus: Strom: - Lampen: Unsere Stromkosten pro Pflanze für einen Wachstumszeitraum belaufen sich auf 4 Euro. - Lüftung: Unsere Stromkosten pro Pflanze für einen Wachstumszeitraum belaufen sich auf 4 Euro (Fixkosten pro Pflanze) + 2 Euro Wasser und Düngemittel.  Gehalt Angestellte: 9.50 Euro und 2 Euro (Fixkosten pro Pflanze) - Medium: 0,5 Euro (Fixkosten pro Pflanze) - Verbrauchsmaterialien: Zum Beispiel Scheren, Handschuhe, Masken, etc.: 2,50 Euro (Fixkosten pro Pflanze) - Mietkosten: 4,50 Euro 

            Gesamtkosten 29 Euro
            
            `,
            social_list: <ul className="social_list d-flex align-items-center m-0 p-0 mt-4">
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Facebook</title><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Twitter</title><g><path d="M18.123 7.081a3.34 3.34 0 001.44-1.838 6.556 6.556 0 01-2.08.808 3.259 3.259 0 00-3.605-.818 3.331 3.331 0 00-2.08 3.094c0 .254.03.508.085.757A9.277 9.277 0 015.12 5.607a3.3 3.3 0 00-.448 1.672 3.153 3.153 0 001.205 2.77 9.994 9.994 0 01-1.738-.416v.042c.113 1.63 1.304 2.973 2.89 3.262a2.461 2.461 0 01-1.29.056 3.319 3.319 0 003.093 2.311A6.464 6.464 0 014 16.681a9.23 9.23 0 009.52.334c2.995-1.66 4.858-4.844 4.859-8.304 0-.144-.011-.288-.011-.433A6.679 6.679 0 0020 6.558c-.596.27-1.23.446-1.877.523z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Linkedin</title><g><path d="M17.635 17.634h-2.372V13.92c0-.885-.016-2.024-1.234-2.024-1.235 0-1.423.965-1.423 1.96v3.778h-2.372V9.998h2.276v1.044h.033c.316-.6 1.09-1.233 2.245-1.233 2.403 0 2.847 1.58 2.847 3.637v4.188zM7.558 8.955a1.376 1.376 0 11.001-2.751 1.376 1.376 0 01-.001 2.751zm-1.187 8.679h2.374V9.998H6.371v7.636zM18.817 4H5.18C4.53 4 4 4.517 4 5.154v13.692C4 19.483 4.53 20 5.18 20h13.637c.652 0 1.183-.517 1.183-1.154V5.154C20 4.517 19.47 4 18.817 4z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Copy Question Link</title><g><path id="prefix__b" d="M13.095 10.287l.137.142c1.505 1.63 1.678 4.01.282 5.406l-2.093 2.093-.137.13c-1.472 1.35-3.537 1.325-5.075-.213-1.59-1.59-1.593-3.774-.12-5.248l1.685-1.683.942.942-1.684 1.683-.106.112c-.845.944-.804 2.223.225 3.252 1.06 1.061 2.364 1.047 3.328.083l2.093-2.093.09-.097c.773-.895.595-2.463-.509-3.567l.942-.942zm-.38-4.31c1.473-1.348 3.538-1.324 5.076.214 1.59 1.59 1.593 3.774.12 5.248l-1.685 1.684-.942-.942 1.684-1.684.106-.112c.845-.944.804-2.223-.225-3.252-1.06-1.06-2.364-1.047-3.328-.083l-2.093 2.093-.09.097c-.773.895-.595 2.463.509 3.567l-.942.942-.137-.142c-1.505-1.63-1.678-4.01-.282-5.406l2.093-2.093z" /></g></svg>
                    </a>
                </li>
            </ul>
        },
        {
            id: 4,
            title: `Wie stelle ich meine Pflanzen von "CBD" auf "THC" um?`,
            description: `Aktuell hat Greenovation noch keine Genehmigung THC haltige Pflanzen anzubauen, wir sind aber zuversichtlich, ab 2023 auf THC umstellen zu können. Sollte dies zustande kommen, werden wir dementsprechend Möglichkeiten für den Kunden anbieten seine Pflanze von CBD auf THC umzustellen. `,
            social_list: <ul className="social_list d-flex align-items-center m-0 p-0 mt-4">
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Facebook</title><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Twitter</title><g><path d="M18.123 7.081a3.34 3.34 0 001.44-1.838 6.556 6.556 0 01-2.08.808 3.259 3.259 0 00-3.605-.818 3.331 3.331 0 00-2.08 3.094c0 .254.03.508.085.757A9.277 9.277 0 015.12 5.607a3.3 3.3 0 00-.448 1.672 3.153 3.153 0 001.205 2.77 9.994 9.994 0 01-1.738-.416v.042c.113 1.63 1.304 2.973 2.89 3.262a2.461 2.461 0 01-1.29.056 3.319 3.319 0 003.093 2.311A6.464 6.464 0 014 16.681a9.23 9.23 0 009.52.334c2.995-1.66 4.858-4.844 4.859-8.304 0-.144-.011-.288-.011-.433A6.679 6.679 0 0020 6.558c-.596.27-1.23.446-1.877.523z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Linkedin</title><g><path d="M17.635 17.634h-2.372V13.92c0-.885-.016-2.024-1.234-2.024-1.235 0-1.423.965-1.423 1.96v3.778h-2.372V9.998h2.276v1.044h.033c.316-.6 1.09-1.233 2.245-1.233 2.403 0 2.847 1.58 2.847 3.637v4.188zM7.558 8.955a1.376 1.376 0 11.001-2.751 1.376 1.376 0 01-.001 2.751zm-1.187 8.679h2.374V9.998H6.371v7.636zM18.817 4H5.18C4.53 4 4 4.517 4 5.154v13.692C4 19.483 4.53 20 5.18 20h13.637c.652 0 1.183-.517 1.183-1.154V5.154C20 4.517 19.47 4 18.817 4z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Copy Question Link</title><g><path id="prefix__b" d="M13.095 10.287l.137.142c1.505 1.63 1.678 4.01.282 5.406l-2.093 2.093-.137.13c-1.472 1.35-3.537 1.325-5.075-.213-1.59-1.59-1.593-3.774-.12-5.248l1.685-1.683.942.942-1.684 1.683-.106.112c-.845.944-.804 2.223.225 3.252 1.06 1.061 2.364 1.047 3.328.083l2.093-2.093.09-.097c.773-.895.595-2.463-.509-3.567l.942-.942zm-.38-4.31c1.473-1.348 3.538-1.324 5.076.214 1.59 1.59 1.593 3.774.12 5.248l-1.685 1.684-.942-.942 1.684-1.684.106-.112c.845-.944.804-2.223-.225-3.252-1.06-1.06-2.364-1.047-3.328-.083l-2.093 2.093-.09.097c-.773.895-.595 2.463.509 3.567l-.942.942-.137-.142c-1.505-1.63-1.678-4.01-.282-5.406l2.093-2.093z" /></g></svg>
                    </a>
                </li>
            </ul>
        },
        {
            id: 5,
            title: `Wie oder wann kann ich meine Pflanze verkaufen?`,
            description: `Der Besitz deines Pflanzenplatzes ist durch das NFT sichergestellt. Du kannst das NFT weiterverkaufen, so geht der Besitz des Pflanzenplatzes auch an den Käufer über.`,
            social_list: <ul className="social_list d-flex align-items-center m-0 p-0 mt-4">
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Facebook</title><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Twitter</title><g><path d="M18.123 7.081a3.34 3.34 0 001.44-1.838 6.556 6.556 0 01-2.08.808 3.259 3.259 0 00-3.605-.818 3.331 3.331 0 00-2.08 3.094c0 .254.03.508.085.757A9.277 9.277 0 015.12 5.607a3.3 3.3 0 00-.448 1.672 3.153 3.153 0 001.205 2.77 9.994 9.994 0 01-1.738-.416v.042c.113 1.63 1.304 2.973 2.89 3.262a2.461 2.461 0 01-1.29.056 3.319 3.319 0 003.093 2.311A6.464 6.464 0 014 16.681a9.23 9.23 0 009.52.334c2.995-1.66 4.858-4.844 4.859-8.304 0-.144-.011-.288-.011-.433A6.679 6.679 0 0020 6.558c-.596.27-1.23.446-1.877.523z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Linkedin</title><g><path d="M17.635 17.634h-2.372V13.92c0-.885-.016-2.024-1.234-2.024-1.235 0-1.423.965-1.423 1.96v3.778h-2.372V9.998h2.276v1.044h.033c.316-.6 1.09-1.233 2.245-1.233 2.403 0 2.847 1.58 2.847 3.637v4.188zM7.558 8.955a1.376 1.376 0 11.001-2.751 1.376 1.376 0 01-.001 2.751zm-1.187 8.679h2.374V9.998H6.371v7.636zM18.817 4H5.18C4.53 4 4 4.517 4 5.154v13.692C4 19.483 4.53 20 5.18 20h13.637c.652 0 1.183-.517 1.183-1.154V5.154C20 4.517 19.47 4 18.817 4z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Copy Question Link</title><g><path id="prefix__b" d="M13.095 10.287l.137.142c1.505 1.63 1.678 4.01.282 5.406l-2.093 2.093-.137.13c-1.472 1.35-3.537 1.325-5.075-.213-1.59-1.59-1.593-3.774-.12-5.248l1.685-1.683.942.942-1.684 1.683-.106.112c-.845.944-.804 2.223.225 3.252 1.06 1.061 2.364 1.047 3.328.083l2.093-2.093.09-.097c.773-.895.595-2.463-.509-3.567l.942-.942zm-.38-4.31c1.473-1.348 3.538-1.324 5.076.214 1.59 1.59 1.593 3.774.12 5.248l-1.685 1.684-.942-.942 1.684-1.684.106-.112c.845-.944.804-2.223-.225-3.252-1.06-1.06-2.364-1.047-3.328-.083l-2.093 2.093-.09.097c-.773.895-.595 2.463.509 3.567l-.942.942-.137-.142c-1.505-1.63-1.678-4.01-.282-5.406l2.093-2.093z" /></g></svg>
                    </a>
                </li>
            </ul>
        },
        {
            id: 6,
            title: `Was passiert mit meiner Pflanze nach der Ernte?`,
            description: `Nach jeder Ernte wird eine neue Pflanze für dich Angebaut, üblicherweise erfolgt dies innerhalb von ca. 3-5 tagen nach der Ernte. In dieser Zeit wird der Raum gesäubert und die Stecklinge sind bereits am Wurzeln. Du bist somit dauerhaft im Besitz von einer aktiven Pflanze in einem unserer Grow-Räumen.`,
            social_list: <ul className="social_list d-flex align-items-center m-0 p-0 mt-4">
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Facebook</title><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Twitter</title><g><path d="M18.123 7.081a3.34 3.34 0 001.44-1.838 6.556 6.556 0 01-2.08.808 3.259 3.259 0 00-3.605-.818 3.331 3.331 0 00-2.08 3.094c0 .254.03.508.085.757A9.277 9.277 0 015.12 5.607a3.3 3.3 0 00-.448 1.672 3.153 3.153 0 001.205 2.77 9.994 9.994 0 01-1.738-.416v.042c.113 1.63 1.304 2.973 2.89 3.262a2.461 2.461 0 01-1.29.056 3.319 3.319 0 003.093 2.311A6.464 6.464 0 014 16.681a9.23 9.23 0 009.52.334c2.995-1.66 4.858-4.844 4.859-8.304 0-.144-.011-.288-.011-.433A6.679 6.679 0 0020 6.558c-.596.27-1.23.446-1.877.523z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Linkedin</title><g><path d="M17.635 17.634h-2.372V13.92c0-.885-.016-2.024-1.234-2.024-1.235 0-1.423.965-1.423 1.96v3.778h-2.372V9.998h2.276v1.044h.033c.316-.6 1.09-1.233 2.245-1.233 2.403 0 2.847 1.58 2.847 3.637v4.188zM7.558 8.955a1.376 1.376 0 11.001-2.751 1.376 1.376 0 01-.001 2.751zm-1.187 8.679h2.374V9.998H6.371v7.636zM18.817 4H5.18C4.53 4 4 4.517 4 5.154v13.692C4 19.483 4.53 20 5.18 20h13.637c.652 0 1.183-.517 1.183-1.154V5.154C20 4.517 19.47 4 18.817 4z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Copy Question Link</title><g><path id="prefix__b" d="M13.095 10.287l.137.142c1.505 1.63 1.678 4.01.282 5.406l-2.093 2.093-.137.13c-1.472 1.35-3.537 1.325-5.075-.213-1.59-1.59-1.593-3.774-.12-5.248l1.685-1.683.942.942-1.684 1.683-.106.112c-.845.944-.804 2.223.225 3.252 1.06 1.061 2.364 1.047 3.328.083l2.093-2.093.09-.097c.773-.895.595-2.463-.509-3.567l.942-.942zm-.38-4.31c1.473-1.348 3.538-1.324 5.076.214 1.59 1.59 1.593 3.774.12 5.248l-1.685 1.684-.942-.942 1.684-1.684.106-.112c.845-.944.804-2.223-.225-3.252-1.06-1.06-2.364-1.047-3.328-.083l-2.093 2.093-.09.097c-.773.895-.595 2.463.509 3.567l-.942.942-.137-.142c-1.505-1.63-1.678-4.01-.282-5.406l2.093-2.093z" /></g></svg>
                    </a>
                </li>
            </ul>
        },
        {
            id: 7,
            title: `Wie vereinbare ich eine Besichtigung oder Besuch vor Ort?`,
            description: `Es wird buchbare Vor-Ort Besichtigungen geben. Informationen dazu werden immer in Telegram veröffentlicht.`,
            social_list: <ul className="social_list d-flex align-items-center m-0 p-0 mt-4">
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Facebook</title><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Twitter</title><g><path d="M18.123 7.081a3.34 3.34 0 001.44-1.838 6.556 6.556 0 01-2.08.808 3.259 3.259 0 00-3.605-.818 3.331 3.331 0 00-2.08 3.094c0 .254.03.508.085.757A9.277 9.277 0 015.12 5.607a3.3 3.3 0 00-.448 1.672 3.153 3.153 0 001.205 2.77 9.994 9.994 0 01-1.738-.416v.042c.113 1.63 1.304 2.973 2.89 3.262a2.461 2.461 0 01-1.29.056 3.319 3.319 0 003.093 2.311A6.464 6.464 0 014 16.681a9.23 9.23 0 009.52.334c2.995-1.66 4.858-4.844 4.859-8.304 0-.144-.011-.288-.011-.433A6.679 6.679 0 0020 6.558c-.596.27-1.23.446-1.877.523z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Linkedin</title><g><path d="M17.635 17.634h-2.372V13.92c0-.885-.016-2.024-1.234-2.024-1.235 0-1.423.965-1.423 1.96v3.778h-2.372V9.998h2.276v1.044h.033c.316-.6 1.09-1.233 2.245-1.233 2.403 0 2.847 1.58 2.847 3.637v4.188zM7.558 8.955a1.376 1.376 0 11.001-2.751 1.376 1.376 0 01-.001 2.751zm-1.187 8.679h2.374V9.998H6.371v7.636zM18.817 4H5.18C4.53 4 4 4.517 4 5.154v13.692C4 19.483 4.53 20 5.18 20h13.637c.652 0 1.183-.517 1.183-1.154V5.154C20 4.517 19.47 4 18.817 4z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Copy Question Link</title><g><path id="prefix__b" d="M13.095 10.287l.137.142c1.505 1.63 1.678 4.01.282 5.406l-2.093 2.093-.137.13c-1.472 1.35-3.537 1.325-5.075-.213-1.59-1.59-1.593-3.774-.12-5.248l1.685-1.683.942.942-1.684 1.683-.106.112c-.845.944-.804 2.223.225 3.252 1.06 1.061 2.364 1.047 3.328.083l2.093-2.093.09-.097c.773-.895.595-2.463-.509-3.567l.942-.942zm-.38-4.31c1.473-1.348 3.538-1.324 5.076.214 1.59 1.59 1.593 3.774.12 5.248l-1.685 1.684-.942-.942 1.684-1.684.106-.112c.845-.944.804-2.223-.225-3.252-1.06-1.06-2.364-1.047-3.328-.083l-2.093 2.093-.09.097c-.773.895-.595 2.463.509 3.567l-.942.942-.137-.142c-1.505-1.63-1.678-4.01-.282-5.406l2.093-2.093z" /></g></svg>
                    </a>
                </li>
            </ul>
        },
        {
            id: 8,
            title: `Kann ich die Sorte/Strain meiner Pflanze selbst bestimmen`,
            description: `Das auswählen einer Sorte ist nicht möglich. Das hat mehrere Gründe. Jede Sorte benötigt andere Dünger und Lichteinstellungen um die Idealen Werte zu erzielen. Wir optimieren alle Sorten um das Maximum herauszubekommen. `,
            social_list: <ul className="social_list d-flex align-items-center m-0 p-0 mt-4">
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Facebook</title><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Twitter</title><g><path d="M18.123 7.081a3.34 3.34 0 001.44-1.838 6.556 6.556 0 01-2.08.808 3.259 3.259 0 00-3.605-.818 3.331 3.331 0 00-2.08 3.094c0 .254.03.508.085.757A9.277 9.277 0 015.12 5.607a3.3 3.3 0 00-.448 1.672 3.153 3.153 0 001.205 2.77 9.994 9.994 0 01-1.738-.416v.042c.113 1.63 1.304 2.973 2.89 3.262a2.461 2.461 0 01-1.29.056 3.319 3.319 0 003.093 2.311A6.464 6.464 0 014 16.681a9.23 9.23 0 009.52.334c2.995-1.66 4.858-4.844 4.859-8.304 0-.144-.011-.288-.011-.433A6.679 6.679 0 0020 6.558c-.596.27-1.23.446-1.877.523z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Linkedin</title><g><path d="M17.635 17.634h-2.372V13.92c0-.885-.016-2.024-1.234-2.024-1.235 0-1.423.965-1.423 1.96v3.778h-2.372V9.998h2.276v1.044h.033c.316-.6 1.09-1.233 2.245-1.233 2.403 0 2.847 1.58 2.847 3.637v4.188zM7.558 8.955a1.376 1.376 0 11.001-2.751 1.376 1.376 0 01-.001 2.751zm-1.187 8.679h2.374V9.998H6.371v7.636zM18.817 4H5.18C4.53 4 4 4.517 4 5.154v13.692C4 19.483 4.53 20 5.18 20h13.637c.652 0 1.183-.517 1.183-1.154V5.154C20 4.517 19.47 4 18.817 4z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Copy Question Link</title><g><path id="prefix__b" d="M13.095 10.287l.137.142c1.505 1.63 1.678 4.01.282 5.406l-2.093 2.093-.137.13c-1.472 1.35-3.537 1.325-5.075-.213-1.59-1.59-1.593-3.774-.12-5.248l1.685-1.683.942.942-1.684 1.683-.106.112c-.845.944-.804 2.223.225 3.252 1.06 1.061 2.364 1.047 3.328.083l2.093-2.093.09-.097c.773-.895.595-2.463-.509-3.567l.942-.942zm-.38-4.31c1.473-1.348 3.538-1.324 5.076.214 1.59 1.59 1.593 3.774.12 5.248l-1.685 1.684-.942-.942 1.684-1.684.106-.112c.845-.944.804-2.223-.225-3.252-1.06-1.06-2.364-1.047-3.328-.083l-2.093 2.093-.09.097c-.773.895-.595 2.463.509 3.567l-.942.942-.137-.142c-1.505-1.63-1.678-4.01-.282-5.406l2.093-2.093z" /></g></svg>
                    </a>
                </li>
            </ul>
        },
        {
            id: 9,
            title: `Wo finde ich meinen Kaufvertrag?`,
            description: `Den Kaufvertrag findest du in deinem Login Bereich unten in der Übersicht mit den Bestellungen.`,
            social_list: <ul className="social_list d-flex align-items-center m-0 p-0 mt-4">
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Facebook</title><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Twitter</title><g><path d="M18.123 7.081a3.34 3.34 0 001.44-1.838 6.556 6.556 0 01-2.08.808 3.259 3.259 0 00-3.605-.818 3.331 3.331 0 00-2.08 3.094c0 .254.03.508.085.757A9.277 9.277 0 015.12 5.607a3.3 3.3 0 00-.448 1.672 3.153 3.153 0 001.205 2.77 9.994 9.994 0 01-1.738-.416v.042c.113 1.63 1.304 2.973 2.89 3.262a2.461 2.461 0 01-1.29.056 3.319 3.319 0 003.093 2.311A6.464 6.464 0 014 16.681a9.23 9.23 0 009.52.334c2.995-1.66 4.858-4.844 4.859-8.304 0-.144-.011-.288-.011-.433A6.679 6.679 0 0020 6.558c-.596.27-1.23.446-1.877.523z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Linkedin</title><g><path d="M17.635 17.634h-2.372V13.92c0-.885-.016-2.024-1.234-2.024-1.235 0-1.423.965-1.423 1.96v3.778h-2.372V9.998h2.276v1.044h.033c.316-.6 1.09-1.233 2.245-1.233 2.403 0 2.847 1.58 2.847 3.637v4.188zM7.558 8.955a1.376 1.376 0 11.001-2.751 1.376 1.376 0 01-.001 2.751zm-1.187 8.679h2.374V9.998H6.371v7.636zM18.817 4H5.18C4.53 4 4 4.517 4 5.154v13.692C4 19.483 4.53 20 5.18 20h13.637c.652 0 1.183-.517 1.183-1.154V5.154C20 4.517 19.47 4 18.817 4z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Copy Question Link</title><g><path id="prefix__b" d="M13.095 10.287l.137.142c1.505 1.63 1.678 4.01.282 5.406l-2.093 2.093-.137.13c-1.472 1.35-3.537 1.325-5.075-.213-1.59-1.59-1.593-3.774-.12-5.248l1.685-1.683.942.942-1.684 1.683-.106.112c-.845.944-.804 2.223.225 3.252 1.06 1.061 2.364 1.047 3.328.083l2.093-2.093.09-.097c.773-.895.595-2.463-.509-3.567l.942-.942zm-.38-4.31c1.473-1.348 3.538-1.324 5.076.214 1.59 1.59 1.593 3.774.12 5.248l-1.685 1.684-.942-.942 1.684-1.684.106-.112c.845-.944.804-2.223-.225-3.252-1.06-1.06-2.364-1.047-3.328-.083l-2.093 2.093-.09.097c-.773.895-.595 2.463.509 3.567l-.942.942-.137-.142c-1.505-1.63-1.678-4.01-.282-5.406l2.093-2.093z" /></g></svg>
                    </a>
                </li>
            </ul>
        },
        {
            id: 10,
            title: `Kann ich meine Pflanze vererben?`,
            description: `Eine Pflanze ist immer im Besitz des Käufers, er kann diese daher wie einen normalen Gegenstand vererben. Sollte dies eintreffen werden die Pflanzen auf einen neuen Account verschoben. Alternativ kann der Account auf den neuen Besitzer überschrieben werden.`,
            social_list: <ul className="social_list d-flex align-items-center m-0 p-0 mt-4">
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Facebook</title><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Twitter</title><g><path d="M18.123 7.081a3.34 3.34 0 001.44-1.838 6.556 6.556 0 01-2.08.808 3.259 3.259 0 00-3.605-.818 3.331 3.331 0 00-2.08 3.094c0 .254.03.508.085.757A9.277 9.277 0 015.12 5.607a3.3 3.3 0 00-.448 1.672 3.153 3.153 0 001.205 2.77 9.994 9.994 0 01-1.738-.416v.042c.113 1.63 1.304 2.973 2.89 3.262a2.461 2.461 0 01-1.29.056 3.319 3.319 0 003.093 2.311A6.464 6.464 0 014 16.681a9.23 9.23 0 009.52.334c2.995-1.66 4.858-4.844 4.859-8.304 0-.144-.011-.288-.011-.433A6.679 6.679 0 0020 6.558c-.596.27-1.23.446-1.877.523z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Linkedin</title><g><path d="M17.635 17.634h-2.372V13.92c0-.885-.016-2.024-1.234-2.024-1.235 0-1.423.965-1.423 1.96v3.778h-2.372V9.998h2.276v1.044h.033c.316-.6 1.09-1.233 2.245-1.233 2.403 0 2.847 1.58 2.847 3.637v4.188zM7.558 8.955a1.376 1.376 0 11.001-2.751 1.376 1.376 0 01-.001 2.751zm-1.187 8.679h2.374V9.998H6.371v7.636zM18.817 4H5.18C4.53 4 4 4.517 4 5.154v13.692C4 19.483 4.53 20 5.18 20h13.637c.652 0 1.183-.517 1.183-1.154V5.154C20 4.517 19.47 4 18.817 4z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Copy Question Link</title><g><path id="prefix__b" d="M13.095 10.287l.137.142c1.505 1.63 1.678 4.01.282 5.406l-2.093 2.093-.137.13c-1.472 1.35-3.537 1.325-5.075-.213-1.59-1.59-1.593-3.774-.12-5.248l1.685-1.683.942.942-1.684 1.683-.106.112c-.845.944-.804 2.223.225 3.252 1.06 1.061 2.364 1.047 3.328.083l2.093-2.093.09-.097c.773-.895.595-2.463-.509-3.567l.942-.942zm-.38-4.31c1.473-1.348 3.538-1.324 5.076.214 1.59 1.59 1.593 3.774.12 5.248l-1.685 1.684-.942-.942 1.684-1.684.106-.112c.845-.944.804-2.223-.225-3.252-1.06-1.06-2.364-1.047-3.328-.083l-2.093 2.093-.09.097c-.773.895-.595 2.463.509 3.567l-.942.942-.137-.142c-1.505-1.63-1.678-4.01-.282-5.406l2.093-2.093z" /></g></svg>
                    </a>
                </li>
            </ul>
        },
        {
            id: 11,
            title: `Wann startet mein Raum?`,
            description: `Unsere Räume sind schon fertig gebaut. Es gibt keine Verzögerungen, sondern sobald die Pflanzenplätze von einem Raum verkauft sind, wird sofort gestartet.`,
            social_list: <ul className="social_list d-flex align-items-center m-0 p-0 mt-4">
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Facebook</title><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Twitter</title><g><path d="M18.123 7.081a3.34 3.34 0 001.44-1.838 6.556 6.556 0 01-2.08.808 3.259 3.259 0 00-3.605-.818 3.331 3.331 0 00-2.08 3.094c0 .254.03.508.085.757A9.277 9.277 0 015.12 5.607a3.3 3.3 0 00-.448 1.672 3.153 3.153 0 001.205 2.77 9.994 9.994 0 01-1.738-.416v.042c.113 1.63 1.304 2.973 2.89 3.262a2.461 2.461 0 01-1.29.056 3.319 3.319 0 003.093 2.311A6.464 6.464 0 014 16.681a9.23 9.23 0 009.52.334c2.995-1.66 4.858-4.844 4.859-8.304 0-.144-.011-.288-.011-.433A6.679 6.679 0 0020 6.558c-.596.27-1.23.446-1.877.523z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Linkedin</title><g><path d="M17.635 17.634h-2.372V13.92c0-.885-.016-2.024-1.234-2.024-1.235 0-1.423.965-1.423 1.96v3.778h-2.372V9.998h2.276v1.044h.033c.316-.6 1.09-1.233 2.245-1.233 2.403 0 2.847 1.58 2.847 3.637v4.188zM7.558 8.955a1.376 1.376 0 11.001-2.751 1.376 1.376 0 01-.001 2.751zm-1.187 8.679h2.374V9.998H6.371v7.636zM18.817 4H5.18C4.53 4 4 4.517 4 5.154v13.692C4 19.483 4.53 20 5.18 20h13.637c.652 0 1.183-.517 1.183-1.154V5.154C20 4.517 19.47 4 18.817 4z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Copy Question Link</title><g><path id="prefix__b" d="M13.095 10.287l.137.142c1.505 1.63 1.678 4.01.282 5.406l-2.093 2.093-.137.13c-1.472 1.35-3.537 1.325-5.075-.213-1.59-1.59-1.593-3.774-.12-5.248l1.685-1.683.942.942-1.684 1.683-.106.112c-.845.944-.804 2.223.225 3.252 1.06 1.061 2.364 1.047 3.328.083l2.093-2.093.09-.097c.773-.895.595-2.463-.509-3.567l.942-.942zm-.38-4.31c1.473-1.348 3.538-1.324 5.076.214 1.59 1.59 1.593 3.774.12 5.248l-1.685 1.684-.942-.942 1.684-1.684.106-.112c.845-.944.804-2.223-.225-3.252-1.06-1.06-2.364-1.047-3.328-.083l-2.093 2.093-.09.097c-.773.895-.595 2.463.509 3.567l-.942.942-.137-.142c-1.505-1.63-1.678-4.01-.282-5.406l2.093-2.093z" /></g></svg>
                    </a>
                </li>
            </ul>
        },
        {
            id: 12,
            title: `Wird man von CBD high?`,
            description: `Anders als das berühmtere THC hat CBD keine psychoaktive Wirkung, macht also nicht high und verändert auch nicht das Bewusstsein. Zudem verursacht CBD selbst hochdosiert im Allgemeinen keine relevanten Nebenwirkungen. Kurz gesagt, CBD sorgt für Entspannung ohne Rausch.`,
            social_list: <ul className="social_list d-flex align-items-center m-0 p-0 mt-4">
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Facebook</title><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Twitter</title><g><path d="M18.123 7.081a3.34 3.34 0 001.44-1.838 6.556 6.556 0 01-2.08.808 3.259 3.259 0 00-3.605-.818 3.331 3.331 0 00-2.08 3.094c0 .254.03.508.085.757A9.277 9.277 0 015.12 5.607a3.3 3.3 0 00-.448 1.672 3.153 3.153 0 001.205 2.77 9.994 9.994 0 01-1.738-.416v.042c.113 1.63 1.304 2.973 2.89 3.262a2.461 2.461 0 01-1.29.056 3.319 3.319 0 003.093 2.311A6.464 6.464 0 014 16.681a9.23 9.23 0 009.52.334c2.995-1.66 4.858-4.844 4.859-8.304 0-.144-.011-.288-.011-.433A6.679 6.679 0 0020 6.558c-.596.27-1.23.446-1.877.523z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Linkedin</title><g><path d="M17.635 17.634h-2.372V13.92c0-.885-.016-2.024-1.234-2.024-1.235 0-1.423.965-1.423 1.96v3.778h-2.372V9.998h2.276v1.044h.033c.316-.6 1.09-1.233 2.245-1.233 2.403 0 2.847 1.58 2.847 3.637v4.188zM7.558 8.955a1.376 1.376 0 11.001-2.751 1.376 1.376 0 01-.001 2.751zm-1.187 8.679h2.374V9.998H6.371v7.636zM18.817 4H5.18C4.53 4 4 4.517 4 5.154v13.692C4 19.483 4.53 20 5.18 20h13.637c.652 0 1.183-.517 1.183-1.154V5.154C20 4.517 19.47 4 18.817 4z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Copy Question Link</title><g><path id="prefix__b" d="M13.095 10.287l.137.142c1.505 1.63 1.678 4.01.282 5.406l-2.093 2.093-.137.13c-1.472 1.35-3.537 1.325-5.075-.213-1.59-1.59-1.593-3.774-.12-5.248l1.685-1.683.942.942-1.684 1.683-.106.112c-.845.944-.804 2.223.225 3.252 1.06 1.061 2.364 1.047 3.328.083l2.093-2.093.09-.097c.773-.895.595-2.463-.509-3.567l.942-.942zm-.38-4.31c1.473-1.348 3.538-1.324 5.076.214 1.59 1.59 1.593 3.774.12 5.248l-1.685 1.684-.942-.942 1.684-1.684.106-.112c.845-.944.804-2.223-.225-3.252-1.06-1.06-2.364-1.047-3.328-.083l-2.093 2.093-.09.097c-.773.895-.595 2.463.509 3.567l-.942.942-.137-.142c-1.505-1.63-1.678-4.01-.282-5.406l2.093-2.093z" /></g></svg>
                    </a>
                </li>
            </ul>
        },
    ]
    const accordion_object_2 = [
        {
            id: 1,
            title: 'Was ist CBD?',
            description: `CBD steht für Cannabidiol und zählt zur Gruppe der Cannabinoiden. Cannabinoide werden aus der weiblichen Hanfpflanze gewonnen. CBD ist nach dem bekannteren THC das zweithäufigste Cannabinoid. Anders als THC hat CBD keine psychoaktive Wirkung, macht also nicht high, bewirkt keine Rauschzustände oder Halluzinationen und verändert auch nicht das Bewusstsein. Zudem verursacht CBD selbst hochdosiert im Allgemeinen keine relevanten Nebenwirkungen. Kurz gesagt, CBD sorgt für Entspannung ohne Rausch.`,
            social_list: <ul className="social_list d-flex align-items-center m-0 p-0 mt-4">
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Facebook</title><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Twitter</title><g><path d="M18.123 7.081a3.34 3.34 0 001.44-1.838 6.556 6.556 0 01-2.08.808 3.259 3.259 0 00-3.605-.818 3.331 3.331 0 00-2.08 3.094c0 .254.03.508.085.757A9.277 9.277 0 015.12 5.607a3.3 3.3 0 00-.448 1.672 3.153 3.153 0 001.205 2.77 9.994 9.994 0 01-1.738-.416v.042c.113 1.63 1.304 2.973 2.89 3.262a2.461 2.461 0 01-1.29.056 3.319 3.319 0 003.093 2.311A6.464 6.464 0 014 16.681a9.23 9.23 0 009.52.334c2.995-1.66 4.858-4.844 4.859-8.304 0-.144-.011-.288-.011-.433A6.679 6.679 0 0020 6.558c-.596.27-1.23.446-1.877.523z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Linkedin</title><g><path d="M17.635 17.634h-2.372V13.92c0-.885-.016-2.024-1.234-2.024-1.235 0-1.423.965-1.423 1.96v3.778h-2.372V9.998h2.276v1.044h.033c.316-.6 1.09-1.233 2.245-1.233 2.403 0 2.847 1.58 2.847 3.637v4.188zM7.558 8.955a1.376 1.376 0 11.001-2.751 1.376 1.376 0 01-.001 2.751zm-1.187 8.679h2.374V9.998H6.371v7.636zM18.817 4H5.18C4.53 4 4 4.517 4 5.154v13.692C4 19.483 4.53 20 5.18 20h13.637c.652 0 1.183-.517 1.183-1.154V5.154C20 4.517 19.47 4 18.817 4z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Copy Question Link</title><g><path id="prefix__b" d="M13.095 10.287l.137.142c1.505 1.63 1.678 4.01.282 5.406l-2.093 2.093-.137.13c-1.472 1.35-3.537 1.325-5.075-.213-1.59-1.59-1.593-3.774-.12-5.248l1.685-1.683.942.942-1.684 1.683-.106.112c-.845.944-.804 2.223.225 3.252 1.06 1.061 2.364 1.047 3.328.083l2.093-2.093.09-.097c.773-.895.595-2.463-.509-3.567l.942-.942zm-.38-4.31c1.473-1.348 3.538-1.324 5.076.214 1.59 1.59 1.593 3.774.12 5.248l-1.685 1.684-.942-.942 1.684-1.684.106-.112c.845-.944.804-2.223-.225-3.252-1.06-1.06-2.364-1.047-3.328-.083l-2.093 2.093-.09.097c-.773.895-.595 2.463.509 3.567l-.942.942-.137-.142c-1.505-1.63-1.678-4.01-.282-5.406l2.093-2.093z" /></g></svg>
                    </a>
                </li>
            </ul>
        },
        {
            id: 2,
            title: 'Wie wirkt CBD?',
            description: `
            CBD wirkt über die sogenannten Cannabinoidrezeptoren. In ihrer Gesamtheit stellen diese Rezeptoren das sogenannte Endocannabinoid-System im menschlichen Körper dar. CBD hat eine ähnliche chemische Zusammensetzung wie unsere körpereigenen Endocannabinoiden und ist so in der Lage, über das Endocannabinoid-System mit Zellen in unserem Körper zu interagieren. CBD hat viele positive Wirkungen, so wirkt es unter anderem: entzündungshemmend schmerzstillend beruhigend antipsychotisch antiepileptisch angstlösend Wissenschaftliche und klinische Studien unterstreichen das große Potenzial von CBD als mögliche Therapieform für eine Vielzahl von Erkrankungen. Dank seiner antioxidativen Eigenschaften kann CBD Zellen und Erbgut vor negativen Einflüssen schützen und wirkt als Fänger freier Radikale. So hat es neuroprotektive und neurogene Effekte und seine Antikrebs-Eigenschaften werden derzeit in mehreren akademischen Forschungszentren weltweit untersucht.
            `,
            social_list: <ul className="social_list d-flex align-items-center m-0 p-0 mt-4">
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Facebook</title><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Twitter</title><g><path d="M18.123 7.081a3.34 3.34 0 001.44-1.838 6.556 6.556 0 01-2.08.808 3.259 3.259 0 00-3.605-.818 3.331 3.331 0 00-2.08 3.094c0 .254.03.508.085.757A9.277 9.277 0 015.12 5.607a3.3 3.3 0 00-.448 1.672 3.153 3.153 0 001.205 2.77 9.994 9.994 0 01-1.738-.416v.042c.113 1.63 1.304 2.973 2.89 3.262a2.461 2.461 0 01-1.29.056 3.319 3.319 0 003.093 2.311A6.464 6.464 0 014 16.681a9.23 9.23 0 009.52.334c2.995-1.66 4.858-4.844 4.859-8.304 0-.144-.011-.288-.011-.433A6.679 6.679 0 0020 6.558c-.596.27-1.23.446-1.877.523z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Linkedin</title><g><path d="M17.635 17.634h-2.372V13.92c0-.885-.016-2.024-1.234-2.024-1.235 0-1.423.965-1.423 1.96v3.778h-2.372V9.998h2.276v1.044h.033c.316-.6 1.09-1.233 2.245-1.233 2.403 0 2.847 1.58 2.847 3.637v4.188zM7.558 8.955a1.376 1.376 0 11.001-2.751 1.376 1.376 0 01-.001 2.751zm-1.187 8.679h2.374V9.998H6.371v7.636zM18.817 4H5.18C4.53 4 4 4.517 4 5.154v13.692C4 19.483 4.53 20 5.18 20h13.637c.652 0 1.183-.517 1.183-1.154V5.154C20 4.517 19.47 4 18.817 4z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Copy Question Link</title><g><path id="prefix__b" d="M13.095 10.287l.137.142c1.505 1.63 1.678 4.01.282 5.406l-2.093 2.093-.137.13c-1.472 1.35-3.537 1.325-5.075-.213-1.59-1.59-1.593-3.774-.12-5.248l1.685-1.683.942.942-1.684 1.683-.106.112c-.845.944-.804 2.223.225 3.252 1.06 1.061 2.364 1.047 3.328.083l2.093-2.093.09-.097c.773-.895.595-2.463-.509-3.567l.942-.942zm-.38-4.31c1.473-1.348 3.538-1.324 5.076.214 1.59 1.59 1.593 3.774.12 5.248l-1.685 1.684-.942-.942 1.684-1.684.106-.112c.845-.944.804-2.223-.225-3.252-1.06-1.06-2.364-1.047-3.328-.083l-2.093 2.093-.09.097c-.773.895-.595 2.463.509 3.567l-.942.942-.137-.142c-1.505-1.63-1.678-4.01-.282-5.406l2.093-2.093z" /></g></svg>
                    </a>
                </li>
            </ul>
        },
        {
            id: 3,
            title: 'Ist CBD legal?',
            description: `
            Im Gegensatz zum THC unterliegt Cannabidiol nicht dem Betäubungsmittelgesetz, da es keine psychoaktive Wirkung hat. Wichtig ist, dass der THC Gehalt bei CBD Produkten unter einem gewissen Grenzwert liegt, der von Land zu Land unterschiedlich ist. In der Schweiz liegt er bei <1% THC Gehalt, in Deutschland <0,2%. Ist dies der Fall, können solche Produkte legal verkauft / erworben werden. Die von uns verwendeten organischen, schweizer CBD-Kristalle (In Unseren Produkten) weisen laborchemisch getestet und zertifiziert eine Reinheit von 99,9% CBD bei gleichzeitiger nicht Nachweisbarkeit übriger Cannabinoide auf. Sie sind somit komplett THC frei und damit vollkommen legal.
            `,
            social_list: <ul className="social_list d-flex align-items-center m-0 p-0 mt-4">
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Facebook</title><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Twitter</title><g><path d="M18.123 7.081a3.34 3.34 0 001.44-1.838 6.556 6.556 0 01-2.08.808 3.259 3.259 0 00-3.605-.818 3.331 3.331 0 00-2.08 3.094c0 .254.03.508.085.757A9.277 9.277 0 015.12 5.607a3.3 3.3 0 00-.448 1.672 3.153 3.153 0 001.205 2.77 9.994 9.994 0 01-1.738-.416v.042c.113 1.63 1.304 2.973 2.89 3.262a2.461 2.461 0 01-1.29.056 3.319 3.319 0 003.093 2.311A6.464 6.464 0 014 16.681a9.23 9.23 0 009.52.334c2.995-1.66 4.858-4.844 4.859-8.304 0-.144-.011-.288-.011-.433A6.679 6.679 0 0020 6.558c-.596.27-1.23.446-1.877.523z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Linkedin</title><g><path d="M17.635 17.634h-2.372V13.92c0-.885-.016-2.024-1.234-2.024-1.235 0-1.423.965-1.423 1.96v3.778h-2.372V9.998h2.276v1.044h.033c.316-.6 1.09-1.233 2.245-1.233 2.403 0 2.847 1.58 2.847 3.637v4.188zM7.558 8.955a1.376 1.376 0 11.001-2.751 1.376 1.376 0 01-.001 2.751zm-1.187 8.679h2.374V9.998H6.371v7.636zM18.817 4H5.18C4.53 4 4 4.517 4 5.154v13.692C4 19.483 4.53 20 5.18 20h13.637c.652 0 1.183-.517 1.183-1.154V5.154C20 4.517 19.47 4 18.817 4z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Copy Question Link</title><g><path id="prefix__b" d="M13.095 10.287l.137.142c1.505 1.63 1.678 4.01.282 5.406l-2.093 2.093-.137.13c-1.472 1.35-3.537 1.325-5.075-.213-1.59-1.59-1.593-3.774-.12-5.248l1.685-1.683.942.942-1.684 1.683-.106.112c-.845.944-.804 2.223.225 3.252 1.06 1.061 2.364 1.047 3.328.083l2.093-2.093.09-.097c.773-.895.595-2.463-.509-3.567l.942-.942zm-.38-4.31c1.473-1.348 3.538-1.324 5.076.214 1.59 1.59 1.593 3.774.12 5.248l-1.685 1.684-.942-.942 1.684-1.684.106-.112c.845-.944.804-2.223-.225-3.252-1.06-1.06-2.364-1.047-3.328-.083l-2.093 2.093-.09.097c-.773.895-.595 2.463.509 3.567l-.942.942-.137-.142c-1.505-1.63-1.678-4.01-.282-5.406l2.093-2.093z" /></g></svg>
                    </a>
                </li>
            </ul>
        },
        {
            id: 4,
            title: 'Welche Nebenwirkungen hat CBD?',
            description: `
            Bisherigen Studienergebnissen zufolge wird CBD sehr gut vertragen. Nebenwirkungen treten in der Regel nicht auf. Zu diesem Schluss kam auch eine Tagung des National Expert Comitee on Drug Dependence der Weltgesundheitsorganisation WHO im November 2017. Lediglich während der Schwangerschaft sollte die Einnahme von CBD vermieden werden. CBD führt zu keiner psychischen oder physischen Abhängigkeit. Auch das bestätigte die Tagung des National Expert Comitee on Drug Dependence der Weltgesundheitsorganisation WHO im November 2017. Jeder Mensch hat einen individuellen „Toleranzbereich“ bei der Einnahme von CBD. Manchmal genügen einer Person schon wenige Milligramm CBD, um den gewünschten Effekt zu erreichen, andere wiederum brauchen von Haus aus einfach mehr, um genau an diese Punkt zu geraten.
            `,
            social_list: <ul className="social_list d-flex align-items-center m-0 p-0 mt-4">
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Facebook</title><g><path d="M20 12a8 8 0 10-9.25 7.903v-5.59H8.719V12h2.031v-1.762c0-2.005 1.194-3.113 3.022-3.113.875 0 1.79.156 1.79.156V9.25h-1.008c-.994 0-1.304.617-1.304 1.25V12h2.219l-.355 2.313H13.25v5.59A8.002 8.002 0 0020 12" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Twitter</title><g><path d="M18.123 7.081a3.34 3.34 0 001.44-1.838 6.556 6.556 0 01-2.08.808 3.259 3.259 0 00-3.605-.818 3.331 3.331 0 00-2.08 3.094c0 .254.03.508.085.757A9.277 9.277 0 015.12 5.607a3.3 3.3 0 00-.448 1.672 3.153 3.153 0 001.205 2.77 9.994 9.994 0 01-1.738-.416v.042c.113 1.63 1.304 2.973 2.89 3.262a2.461 2.461 0 01-1.29.056 3.319 3.319 0 003.093 2.311A6.464 6.464 0 014 16.681a9.23 9.23 0 009.52.334c2.995-1.66 4.858-4.844 4.859-8.304 0-.144-.011-.288-.011-.433A6.679 6.679 0 0020 6.558c-.596.27-1.23.446-1.877.523z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Linkedin</title><g><path d="M17.635 17.634h-2.372V13.92c0-.885-.016-2.024-1.234-2.024-1.235 0-1.423.965-1.423 1.96v3.778h-2.372V9.998h2.276v1.044h.033c.316-.6 1.09-1.233 2.245-1.233 2.403 0 2.847 1.58 2.847 3.637v4.188zM7.558 8.955a1.376 1.376 0 11.001-2.751 1.376 1.376 0 01-.001 2.751zm-1.187 8.679h2.374V9.998H6.371v7.636zM18.817 4H5.18C4.53 4 4 4.517 4 5.154v13.692C4 19.483 4.53 20 5.18 20h13.637c.652 0 1.183-.517 1.183-1.154V5.154C20 4.517 19.47 4 18.817 4z" fillRule="evenodd" /></g></svg>
                    </a>
                </li>
                <li>
                    <a className='me-2' href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" aria-labelledby="svg627cf6da-7b53-4817-b48e-5e2fc790417f"><title id="svg627cf6da-7b53-4817-b48e-5e2fc790417f">Copy Question Link</title><g><path id="prefix__b" d="M13.095 10.287l.137.142c1.505 1.63 1.678 4.01.282 5.406l-2.093 2.093-.137.13c-1.472 1.35-3.537 1.325-5.075-.213-1.59-1.59-1.593-3.774-.12-5.248l1.685-1.683.942.942-1.684 1.683-.106.112c-.845.944-.804 2.223.225 3.252 1.06 1.061 2.364 1.047 3.328.083l2.093-2.093.09-.097c.773-.895.595-2.463-.509-3.567l.942-.942zm-.38-4.31c1.473-1.348 3.538-1.324 5.076.214 1.59 1.59 1.593 3.774.12 5.248l-1.685 1.684-.942-.942 1.684-1.684.106-.112c.845-.944.804-2.223-.225-3.252-1.06-1.06-2.364-1.047-3.328-.083l-2.093 2.093-.09.097c-.773.895-.595 2.463.509 3.567l-.942.942-.137-.142c-1.505-1.63-1.678-4.01-.282-5.406l2.093-2.093z" /></g></svg>
                    </a>
                </li>
            </ul>
        },
    ]

    const [totalAccordion, setTotalAccordion] = useState(accordion_object_1.concat(accordion_object_2))

    function searchAction(bol, val) {
        setIsSearch(bol);
        setSearchVal(val);

        let new_accordion = accordion_object_1.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(val.toLowerCase())
        })
        typeof new_accordion !== 'undefined' && new_accordion.length === 0 ? setIsSearchEmpty(true) : setIsSearchEmpty(false);
        setTotalAccordion(new_accordion);
    }

    return (
        <div id='Faq' className='header_margin py-5'>
            <br /><br />
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <div className="search_wrapper mb-4">
                                    {
                                        !searchView && (
                                            <div className="d-flex search_action">
                                                <h2 className="LinesEllipsis flex-grow-1 text-center">FAQ<wbr /></h2>
                                                <button className="btn_search" onClick={() => setSearchView(true)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="prefix__search-image prefix__search-svg-icon" role="none"><path d="M10.961 5c3.292 0 5.961 2.669 5.961 5.961 0 1.37-.462 2.631-1.238 3.638l3.264 3.266c.063.062.075.156.038.23l-.038.052-.8.801c-.063.063-.157.075-.232.038l-.051-.038-3.266-3.264c-1.007.776-2.268 1.238-3.638 1.238C7.67 16.922 5 14.253 5 10.962 5 7.668 7.669 5 10.961 5zm-.005 1.079c-2.694 0-4.877 2.183-4.877 4.877s2.183 4.877 4.877 4.877 4.877-2.183 4.877-4.877-2.183-4.877-4.877-4.877z" transform="translate(-1109 -144) translate(1109 144)" /></svg>
                                                </button>
                                            </div>
                                        )
                                    }
                                    {
                                        searchView && (
                                            <div className="search_action_view d-flex align-items-center p-1">
                                                <button className="btn_search" onClick={() => setSearchView(false)} >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="prefix__search-image prefix__search-svg-icon" role="none"><path d="M10.961 5c3.292 0 5.961 2.669 5.961 5.961 0 1.37-.462 2.631-1.238 3.638l3.264 3.266c.063.062.075.156.038.23l-.038.052-.8.801c-.063.063-.157.075-.232.038l-.051-.038-3.266-3.264c-1.007.776-2.268 1.238-3.638 1.238C7.67 16.922 5 14.253 5 10.962 5 7.668 7.669 5 10.961 5zm-.005 1.079c-2.694 0-4.877 2.183-4.877 4.877s2.183 4.877 4.877 4.877 4.877-2.183 4.877-4.877-2.183-4.877-4.877-4.877z" transform="translate(-1109 -144) translate(1109 144)" /></svg>
                                                </button>
                                                <div className={`action_input  d-flex align-items-center flex-grow-1 p-1 ${searchView ? 'action_view' : ''}`}>
                                                    <input type="text" onKeyUp={(event) => event.target.value === '' ? searchAction(false, event.target.value) : searchAction(true, event.target.value)} placeholder='Suchst du etwas Bestimmtes?' maxLength="50" className="search_input flex-grow-1 ps-4" />
                                                    <button className="" onClick={() => { setSearchView(false); searchAction(false, '') }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="prefix__search-close" fillRule="evenodd" role="none"><path d="M15.385 8l.615.615L12.615 12 16 15.385l-.615.615L12 12.615 8.615 16 8 15.385 11.384 12 8 8.615 8.615 8 12 11.385 15.385 8z" transform="translate(-1109 -144) translate(1109 144)" /></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                {
                                    isSearch && (
                                        <div style={{ margin: '25px 0px', fontSize: '14px' }}>
                                            {
                                                isSearchEmpty ? <>
                                                    <span >Leider ergab deine Suche keine Ergebnisse. Bitte versuche es erneut mit anderen Suchbegriffen.
                                                    </span>
                                                </> : <><span>Suchergebnisse für:</span> <strong>{searchVal}</strong> </>
                                            }
                                        </div>
                                    )
                                }

                                {
                                    !isSearch && (
                                        <div className="faq_tab_wrapper">
                                            <button className={`tab_item me-4 p-0 ${tabIndex === 1 ? 'active_tab' : ''}`} onClick={() => setTabIndex(1)}>
                                                Allgemeine Fragen
                                            </button>
                                            <button className={`tab_item me-4 p-0 ${tabIndex === 2 ? 'active_tab' : ''}`} onClick={() => setTabIndex(2)}>
                                                Cannabis
                                            </button>
                                        </div>
                                    )
                                }
                                <div className="faq_accordion faq_animate">

                                    {
                                        !isSearch && (
                                            <div className="tab_view_accordion">
                                                {/* for tabIndex 1 */}
                                                {tabIndex === 1 && (
                                                    <FaqAccordion1 accordion_object_1={accordion_object_1}></FaqAccordion1>
                                                )}
                                                {/* for tabIndex 1 End */}


                                                {/* for tabIndex 1 */}
                                                {tabIndex === 2 && (
                                                    <FaqAccordion2 accordion_object_2={accordion_object_2}></FaqAccordion2>
                                                )}
                                                {/* for tabIndex 1 End */}
                                            </div>
                                        )
                                    }

                                    {
                                        isSearch && (
                                            <div className="search_view_accordion">
                                                <SearchViewAccordion totalAccordion={totalAccordion} />
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;



const FaqAccordion1 = ({ accordion_object_1 = [] }) => {

    return (
        <div>
            {
                accordion_object_1.map(v => {
                    return (
                        <Accordion className='' key={v.id} defaultExpanded={v.id === 1 ? true : false}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header" className='nl_mui'
                            >
                                <Typography>
                                    {v.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {v.description}
                                    {v.social_list}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </div>
    )
}

const FaqAccordion2 = ({ accordion_object_2 = [] }) => {

    return (
        <div>
            {
                accordion_object_2.map(v => {
                    return (
                        <Accordion className='' key={v.id} defaultExpanded={v.id === 1 ? true : false}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header" className='nl_mui'
                            >
                                <Typography>
                                    {v.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {v.description}
                                    {v.social_list}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </div>
    )
}

const SearchViewAccordion = ({ totalAccordion = [] }) => {
    return (
        <div>
            {
                totalAccordion.map((v, i) => {
                    return (
                        <Accordion className='' key={i} defaultExpanded={i === 0 ? true : false}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header" className='nl_mui'>
                                <Typography>
                                    {v.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {v.description}
                                    {v.social_list}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }

        </div>
    )
}