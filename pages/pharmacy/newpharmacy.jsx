import React,{ useEffect, useState } from "react";
import {Alert as MuiAlert,
  Slide,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  TextField,
} from "@mui/material";
import { Base64 } from "js-base64";
import Link from "next/link";
import FormsApi from "../../api/api";
import { Router } from "@mui/icons-material";
import { useRouter } from "next/router";
import Header from "../../Components/Header";
import Layout from "../../Components/layout/Layout";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NewPharmacy = () => {
  const router = useRouter();
  const [state, setState] = useState({
    AnchorEl: null,
    AnchorElRooms: null,
    open: false,
    dialog: false,
    pharmacies: [],
    _user: {},
    mui: {
      snackBarOpen: false,
      snackBarMessage: "",
      snackBarStatus: "info",
      snackBarPosition: { vertical: "top", horizontal: "left" },
    },
  });

  useEffect(() => {
    const user = sessionStorage.getItem("user_cookie")
      ? sessionStorage.getItem("user_cookie")
      : localStorage.getItem("user_cookie")
      ? JSON.parse(
          Base64.decode(
            sessionStorage.getItem("user_cookie")
              ? sessionStorage.getItem("user_cookie")
              : localStorage.getItem("user_cookie")
          )
        )
      : {};
      (async () => {
        const pham = await new FormsApi().get("/pharmacy/manager/" + user.id);
        if (pham !== "Error") {
          if (pham.status !== false) {
            setState({
              ...state,
              pharmacies: pham.result,
            });
          }
        }
      })();

    if (user) {
      router.push("/pharmacy/newpharmacy");
      setState({
        ...state,
        _user: user,
      });
    } 

    // return () => {
    //   setState({
    //     ...state,
    //    _user: user,
    //   });
    // };
  }, []);
const submitPharmacy = async (e) => {
    e.preventDefault();
    setState({
      ...state,
      open: true,
      messageState: "info",
      message: "Please Wait...",
    });
    const fd = new FormData(e.target);
    let _fcontent = {};
    fd.forEach((value, key) => {
      _fcontent[key] = value;
    });
    const api = new FormsApi();
    const res = await api.post("/new/pharmacy", _fcontent);
    if (res.data === "pharmacy exists") {
      setState({
        ...state,
        mui: {
          ...state.mui,
          snackBarMessage: res.data,
          snackBarStatus: "warning",
          snackBarOpen: true,
        },
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    else if(res.status === false) {
        setState({
          ...state,
          mui: {
            ...state.mui,
            snackBarMessage: "Some Other Error, Try again later",
            snackBarStatus: "warning",
            snackBarOpen: true,
          },
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }else {
   
      setState({
        ...state,
        mui: {
          ...state.mui,
          snackBarMessage: "Pharmacy Created Successfully",
          snackBarStatus: "success",
          snackBarOpen: true,
        },
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
const handleClose = () => {
    setState({ ...state, dialog: false });
  };
const handleOpenActions = (e) => {
    setState({ ...state, AnchorEl: e.currentTarget });
  };
const handleOpen = () => {
    setState({ ...state, dialog: true });
  };  

  const handleCloseMui = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({
      ...state,
      mui: { ...state.mui, snackBarMessage: "", snackBarOpen: false },
    });
  };
  return (
    <>
      <Snackbar
        open={state.mui.snackBarOpen}
        anchorOrigin={state.mui.snackBarPosition}
        autoHideDuration={8000}
        onClose={handleCloseMui}
        message={state.mui.snackBarMessage}
        TransitionComponent={(props) => <Slide {...props} direction="down" />}
      >
        <Alert
          onClose={handleCloseMui}
          severity={state.mui.snackBarStatus}
          sx={{ width: "100%" }}
        >
          {state.mui.snackBarMessage}
        </Alert>
      </Snackbar>
      <Layout>
    <div className="projects">
    <div className="card">
      <div className="card-header">
        <h3>Pharmacy Table</h3>
        <Button
          variant="contained"
          color="primary"
          aria-controls="tenant-actions"
          aria-haspopup="true"
          onClick={handleOpen}
        >
          New Pharmacy
          <span style={{ fontSize: "20px", marginLeft: "10px", padding:"16px" }}>
          </span>
        </Button>
      </div>
      <div className="card-body">
        <table width="100%">
          <thead>
            <tr>
              <td>Pharmacy Name</td>
              <td>Pharmacy Location</td>
              <td>Edit</td>
              <td>Delete</td>
              <td>View Pharmacy Dashboard</td>

            </tr>
          </thead>
          <tbody>
            {state.pharmacies.length === 0 ? (
              <tr>
                <td>No Pharmacies to display....</td>
              </tr>
            ) : (state.pharmacies.map((x, y) => {
                  return (
                    <tr key={y}>
                      <td>{x.ph_name}</td>
                      <td>{x.ph_location}</td>
                      <td>
                      <Link href={`/editpharmacy/${x.id}`}>
                        <Button>Edit</Button>
                      </Link>
                    </td>
                    <td>
                        <Button
                        onClick={()=>{}}>Delete</Button>
                    </td>
                    <td>
                      <Link href={{ pathname: `/dashboard/${x.id}`, query: { name: `${x.id}` } }}>
                        <Button
                        >Go to Dashboard</Button>
                      </Link>
                    </td>
                    </tr>
                  );
                })
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </Layout>
  <Dialog
        open={state.dialog}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Pharmacy</DialogTitle>
          <form autoComplete="off" onSubmit={submitPharmacy}>
      
            <DialogContent>
              <DialogContentText>
              <input
                type="text"
                name="m_id"
                value={state._user? state._user.id : ""}
                hidden
                onChange={() => {}}
                />
                <TextField
                  name="ph_name"
                  variant="standard"
                  label="Pharmacy Name"
                  required
                  style={{
                  width: "85%",
                  margin: "20px",
                  }}
                />
                  <TextField
                  name="ph_location"
                  variant="standard"
                  required
                  label="Pharmacy Location"
                  style={{
                  width: "85%",
                  margin: "20px",
                  }}
                />
                <TextField
                  name="ph_owner"
                  variant="standard"
                  required
                  label="Pharmacy Owner"
                  style={{
                  width: "85%",
                  margin: "20px",
                  }}
                />
                <TextField
                  name="owner_tel"
                  variant="standard"
                  required
                  label="Owner Contact"
                  style={{
                  width: "85%",
                  margin: "20px",
                  }}
                />
                 <TextField
                  name="owner_email"
                  required
                  variant="standard"
                  label="Owner Email"
                  style={{
                  width: "85%",
                  margin: "20px",
                  }}
                />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Save Pharmacy
              </Button>
            </DialogActions>
          </form>
        </Dialog>
  </>
  );
};
export default NewPharmacy;
