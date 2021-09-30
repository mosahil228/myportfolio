import React from "react";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";



export default function TransitionAlerts() {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="alertMes">
      <Collapse in={open}>
        <Alert
          className="alertM"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              className="iconMui"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon className="cI" fontSize="inherit" />
            </IconButton>
          }
        >
          Dear Visiter, This website is an under production..
        </Alert>
      </Collapse>
    </div>
  );
}
