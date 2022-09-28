import React from 'react';
import '../../../scss/pages/Jobs/Jobs.css';
function Jobs(props) {
    return (
        <div id="Jobs">
            <div className="content_box">
                <img src={require('../../../img/global/icon_edited.webp')} alt="img" />
                <p className="font_3" style={{ lineHeight: '1.8em', textAlign: 'center', fontSize: '24px' }}><span style={{ letterSpacing: '0.05em' }}>STELLENANGEBOTE WERDEN BALD AUFGESCHALTET</span></p>
            </div>
        </div>
    );
}

export default Jobs;