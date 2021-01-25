import { Button, Snackbar } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import Alert from "@material-ui/lab/Alert";
import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 300,
  height: 300,
  facingMode: "user",
};

const WebCamera = () => {
  const webcamRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    console.log(imageSrc);
    setOpen(true);
  }, [webcamRef]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div style={{ display: 'grid', placeContent: 'center'}}>
      <Webcam
        audio={false}
        // height={}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={100}
        style={{ height: "200px", width: "200px", borderRadius: "30px" }}
        videoConstraints={videoConstraints}
      />
      <div>
        <Button
          variant="contained"
          color="primary"
          style={{ textTransform: "capitalize", width: "100%" , marginBottom: '10px',marginTop: '10px'}}
          onClick={capture}
          endIcon={<Send />}
        >
          Click
        </Button>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{horizontal: 'right', vertical: 'top' }}>
        <Alert onClose={handleClose} severity="success">
          Photo Clicked Succesfully
        </Alert>
      </Snackbar>
    </div>
  );
};

export default WebCamera;
