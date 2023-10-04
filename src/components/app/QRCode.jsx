import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeComponent = ({ value, size }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h3>扫码加入派对</h3>
            <QRCode value={value} size={size} />
        </div>
    );
};

export default QRCodeComponent;
