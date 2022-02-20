//import qrcode from 'qrcode';
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

const App = ({ text  }) => {
  const[src, setSrc] = useState('');

  useEffect(() => {
    QRCode.toDataURL(text).then(setSrc);
  },  []);

  return <div> tacklhealth
    <img src={src} />
  </div>;
};



export default App;
 
