import React from 'react';
function BankVerbindung(props) {
    return (
        <div id='BankVerbindung' className='header_margin py-5'>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h2 className="font_3" style={{ fontSize: '38px', lineHeight: 'normal' }}>Bankverbindung</h2>
                    </div>
                    <div className="col-6">
                        <p className="font_7" style={{ fontSize: '18px', lineHeight: '1.8em' }}><span style={{ letterSpacing: 'normal' }}><span style={{ fontSize: '18px' }}>Raiffeisen<br />
                            Greenovation Labs GmbH<br />
                            Werkstrasse 3<br />
                            3428 Wiler bei Utzenstorf<br />
                            IBAN: CH49 8080 8003 2297 8348 7</span></span></p>
                    </div>
                </div>

                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    );
}

export default BankVerbindung;