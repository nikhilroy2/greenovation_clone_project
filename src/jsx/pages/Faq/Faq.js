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
    return (
        <div id='Faq' className='header_margin py-5'>
            <br /><br />
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <div className="search_wrapper">
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
                                                    <input type="text" placeholder='Suchst du etwas Bestimmtes?' maxLength="50" className="search_input flex-grow-1 ps-4" />
                                                    <button className="" onClick={() => setSearchView(false)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="prefix__search-close" fillRule="evenodd" role="none"><path d="M15.385 8l.615.615L12.615 12 16 15.385l-.615.615L12 12.615 8.615 16 8 15.385 11.384 12 8 8.615 8.615 8 12 11.385 15.385 8z" transform="translate(-1109 -144) translate(1109 144)" /></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>

                                <div className="faq_tab_wrapper">
                                    <button className={`tab_item me-4 p-0 ${tabIndex === 1 ? 'active_tab' : ''}`} onClick={() => setTabIndex(1)}>
                                        Allgemeine Fragen
                                    </button>
                                    <button className={`tab_item me-4 p-0 ${tabIndex === 2 ? 'active_tab' : ''}`} onClick={() => setTabIndex(2)}>
                                        Cannabis
                                    </button>
                                </div>
                                <div className="faq_accordion">

                                    {/* for tabIndex 1 */}
                                    {tabIndex === 1 && (
                                        <div>
                                            <Accordion className='' defaultExpanded={true}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header" className='nl_mui'
                                                >
                                                    <Typography>Wie oft wird pro Jahr geerntet?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Jeder Raum wird bis zu 6-mal pro Jahr geerntet. Durch unser Know-How und die optimierte Infrastruktur haben wir somit den meisten Mitbewerbern einen entscheidenden Vorteil. Nach erfolgter Ernte startet der Produktionsraum in ungefähr 3 Tagen wieder, nach erfolgter Reinigung und Desinfektion.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header" className='nl_mui'
                                                >
                                                    <Typography>Wie berechne ich den Ernteertragswert meiner Pflanze?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header" className='nl_mui'
                                                >
                                                    <Typography>Wie berechne ich den Ernteertragswert meiner Pflanze?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header" className='nl_mui'
                                                >
                                                    <Typography>Wie berechne ich den Ernteertragswert meiner Pflanze?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header" className='nl_mui'
                                                >
                                                    <Typography>Wie berechne ich den Ernteertragswert meiner Pflanze?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header" className='nl_mui'
                                                >
                                                    <Typography>Wie berechne ich den Ernteertragswert meiner Pflanze?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                    )}
                                    {/* for tabIndex 1 End */}


                                    {/* for tabIndex 1 */}
                                    {tabIndex === 2 && (
                                        <div>
                                            <Accordion defaultExpanded={true}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header" className='nl_mui'
                                                >
                                                    <Typography>Wie berechne ich den Ernteertragswert meiner Pflanze?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header" className='nl_mui'
                                                >
                                                    <Typography>Wie berechne ich den Ernteertragswert meiner Pflanze?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header" className='nl_mui'
                                                >
                                                    <Typography>Wie berechne ich den Ernteertragswert meiner Pflanze?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header" className='nl_mui'
                                                >
                                                    <Typography>Wie berechne ich den Ernteertragswert meiner Pflanze?</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                    )}
                                    {/* for tabIndex 1 End */}

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

