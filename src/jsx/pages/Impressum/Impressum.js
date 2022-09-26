import React from 'react';

function Impressum(props) {
    return (
        <div id='Impressum' className='header_margin py-5'>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h2 className="font_3" style={{ fontSize: '38px', lineHeight: 'normal' }}>IMPRESSUM</h2>
                    </div>
                    <div className="col-6">
                        <p className="font_7" style={{ fontSize: '18px', lineHeight: '1.8em' }}><span style={{ letterSpacing: 'normal' }}><span style={{ fontSize: '18px' }}>Greenovation Labs GmbH<br />
                            Werkstrasse 3<br />
                            3428 Wiler bei Utzenstorf<br />
                            Schweiz / Switzerland</span></span></p>


                        <p className="font_7" style={{ fontSize: '18px', lineHeight: '1.8em' }}><span style={{ letterSpacing: 'normal' }}><span style={{ fontSize: '18px' }}><span className="wixGuard">​</span></span></span></p>

                        <p className="font_7" style={{ fontSize: '18px', lineHeight: '1.8em' }}>Geschäftsführer Peter Baka</p>

                        <p className="font_7" style={{ fontSize: '18px', lineHeight: '1.8em' }}><br />
                            <span style={{ letterSpacing: 'normal' }}><span style={{ fontSize: '18px' }}><span style={{ textDecoration: 'underline' }}><a href="mailto:mail@greenovation.ch" target="_self">mail@greenovation.ch</a></span><br />
                                <span style={{ textDecoration: 'underline' }}><a href="http://www.greenovation.ch/" target="_blank" rel="noreferrer noopener">www.greenovation.ch</a></span></span></span></p>

                    </div>
                </div>

                <br /><br /><br /><br /><br />
            </div>
        </div>
    );
}

export default Impressum;