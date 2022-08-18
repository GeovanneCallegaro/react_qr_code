import './App.css';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import {useState} from 'react';

function App() {
  const [link, setLink] = useState('');
  const [qrCodeLink, setQrCodeLink] = useState();

  const handleGenerate = (link_url) => {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      setQrCodeLink(url);
    })
  }

  const handleQrCode = (e) => {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className="container">
      <QRCode 
        value={link}
      />

      <input 
        className="input"
        placeholder="Digite seu link..."
        onChange={(e) => handleQrCode(e)}
      />

    <a href={qrCodeLink} download={`qrcode.png`}>Baixar QrCode</a>
    </div>
  );
}

export default App;
