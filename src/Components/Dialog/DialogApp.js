import "./styles.css";

import { useState } from "react";

import DialogTab from "./DialogTab";
import Button from "./Button";

export default function DialogApp() {
  const [openDialog, setOpenDialog] = useState(false);

  const title = "You want to confirm or abort Dialog Tab?";

  const handleOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleConsoleInfo = () => {
    console.log("Confirm Button clicked");
  };
  return (
    <div className="app">
      <div className="intro">
          <h1>Dialog Tab</h1>
          <button onClick={handleOpen} className="openBtn">
          Open
        </button>
        <h3>Click button to open Dialog Tab</h3>
      </div>
      <DialogTab isActive={openDialog} title={title}>
        <Button handleClick={handleClose} btnName="x" classInfo="xBtn" />
        <Button
          handleClick={handleClose}
          btnName="Abort"
          classInfo="closeBtn"
        />
        <Button
          handleClick={handleConsoleInfo}
          btnName="Confirm"
          classInfo="consoleBtn"
        />
      </DialogTab>
    </div>
  );
}