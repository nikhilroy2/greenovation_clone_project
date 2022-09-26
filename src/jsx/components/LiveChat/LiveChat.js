import React from 'react';
import '../../../scss/components/LiveChat/LiveChat.css';
function LiveChat(props) {
    return (
        <div id='LiveChat'>
            <button className="chat_btn">
                <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '0px', fill: 'rgb(255, 255, 255)', width: '32px', height: '32px', flexShrink: 0 }}><path d="M21.133 16.933a1.4 1.4 0 11.001-2.8 1.4 1.4 0 010 2.8m-4.667 0a1.4 1.4 0 110-2.8 1.4 1.4 0 010 2.8m-5.6 0a1.4 1.4 0 110-2.8 1.4 1.4 0 010 2.8m18.904-3.656c-1.013-5.655-5.753-10.22-11.528-11.105-4.343-.667-8.642.627-11.807 3.547-3.168 2.917-4.763 7.043-4.38 11.318.59 6.582 6.08 11.952 12.768 12.487 1.153.095 2.303.05 3.428-.13a14.12 14.12 0 002.428-.612.59.59 0 01.364-.006l3.714 1.167c.785.246 1.588-.331 1.588-1.144l-.002-3.517c0-.17.086-.301.157-.38a14.028 14.028 0 001.58-2.147c1.705-2.862 2.29-6.14 1.69-9.478" fill="currentColor" fillRule="nonzero" /></svg>
            </button>

            <div className="live_chat_view">
                
            </div>
        </div>
    );
}

export default LiveChat;
