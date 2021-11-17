import { useState } from 'react';
import Snackbar from './Snackbar'
import OpenBtn from './OpenBtn'
import "./styles.css";


function SnackApp() {
  const [snackbar, setSnackbar ] = useState(false);

  const handleOn = () => {
    setSnackbar(true)
  }

  const handleOff = (duration) => {
    setTimeout(() => {setSnackbar(false)
    }, duration);
  }

  return (
    <div className="snackApp">
        <h1>Snackbar</h1>
      <OpenBtn OpenSnk={handleOn}/>
      <Snackbar isActive={snackbar} duration='4000'
        handleOff={handleOff}
        positionName={"bottom-left"}
        colorName={"success"}
      />
    </div>
  );
}

export default SnackApp;

