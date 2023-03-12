import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

function Header_2() {
  const [AnchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpenActions = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseActions = () => {
    setAnchorEl(null);
  };

  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="header_2">
        <h2>
          <span className="health_unit_name">Pharmacy-Management</span>
        </h2>
        <div className="" style={{ display: "flex", alignItems: "center" }}>
          <div className="" style={{ fontSize: "42px", marginRight: 20 }}>
            <i className="las la-bell"></i>
          </div>
          <div
            className="user-wrapper"
            aria-controls="reception-actions"
            aria-haspopup="true"
            onClick={handleOpenActions}
            style={{ cursor: "pointer" }}
          >
            <img src="/place-holder.jpg" alt="" width="40px" height="40px" />
            <div className="" style={{ textAlign: "right" }}>
              <h4>Admin</h4>
              <small>Pharmacy. 1</small>
            </div>
          </div>
        </div>
      </div>

      <Menu
        id="reception-actions"
        anchorEl={AnchorEl}
        keepMounted
        disableScrollLock={true}
        open={Boolean(AnchorEl)}
        onClose={handleCloseActions}
      >
        <MenuItem onClick={handleCloseActions}>
          <span style={{ fontSize: 24, marginRight: 10 }}>
            <i className="las la-user-alt"></i>
          </span>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClickOpenDialog}>
          <span style={{ fontSize: 24, marginRight: 10 }}>
            <i className="las la-sign-out-alt"></i>
          </span>
          Log out
        </MenuItem>
      </Menu>

      <Dialog
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Log Out</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Want to Log Out. Click 'Stay' to close, Log Out to Continue
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Stay
          </Button>
          <Button
            variant="contained"
            color="primary"
            autoFocus
            onClick={() => {
              // Logout();
            }}
          >
            Log Out
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Header_2;
