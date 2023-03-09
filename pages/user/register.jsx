import React, { useEffect, useState } from "react";
import { Base64 } from "js-base64";
import { Alert as MuiAlert,
  Slide,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Snackbar,
  TextField,
} from "@mui/material";
import Link from "next/link";
import Header from "../../Components/Header";
import { useRouter } from "next/router";
import FormsApi from "../../api/api";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function Register() {
  const router = useRouter();
  const [apiFeedBackError, setApiFeedBackError] = useState(false);
  const [samePassword, setSamePassword] = useState(true);
  const [apiPhoneUsed, setApiPhoneUsed] = useState(false);
  const [apiEmailUsed, setApiEmailUsed] = useState(false);
  const [termsCheckBox, setTermsCheckBox] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [state, setState] = useState({
    mui: {
      snackBarOpen: false,
      snackBarMessage: "",
      snackBarStatus: "info",
      snackBarPosition: { vertical: "bottom", horizontal: "left" },
    },

  })

  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
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
      : null;
    if (user) {
      router.push("/");
    }
  }, []);

  const form_submit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    const fd = new FormData(e.target);
    let _fc = {};
    fd.forEach((value, key) => {
      _fc[key] = value;
    });
    if (_fc.retype_password !== _fc.m_password) {
      setSamePassword(false);
      setApiFeedBackError(true);
      setSubmit(false);
      return;
    }
    let api = new FormsApi();
    let res = await api.post("/new/manager", _fc);
    if (res === "Error") {
      setApiFeedBackError(true);
      setSubmit(false);
      return;
    }
    if (res.status === false) {
      if (res.data === "Manager already exists") {
        setApiPhoneUsed(true);
        setApiEmailUsed(true);
        setSubmit(false);
        setState({
          ...state,
          mui: {
            ...state.mui,
            snackBarMessage: "Manager Already exists....",
            snackBarStatus: "warning",
            snackBarOpen: true,
          },
        });
        return;
      } else {
        setApiFeedBackError(true);
        setSubmit(false);
        return;
      }
    } else {
      const data = Base64.encode(JSON.stringify({ ...res.result }));
      localStorage.setItem("user_cookie", data);
      setSubmit(false);
      setState({
        ...state,
        mui: {
          ...state.mui,
          snackBarMessage: "Manager Created successfully....",
          snackBarStatus: "success",
          snackBarOpen: true,
        },
      });
      router.push("/");
    }
  };

    //mui
    const handleClose = (event, reason) => {
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
        autoHideDuration={6000}
        onClose={handleClose}
        message={state.mui.snackBarMessage}
        TransitionComponent={(props) => <Slide {...props} direction="down" />}
      >
        <Alert
          onClose={handleClose}
          severity={state.mui.snackBarStatus}
          sx={{ width: "100%" }}
        >
          {state.mui.snackBarMessage}
        </Alert>
      </Snackbar>
    <Header />
    <div className="reg_ctr">
     <div>
       <span>Create your Pharmacy Businness Account And Proceed to Create A Pharmacy</span>
     </div>
      <div>
        <form onSubmit={form_submit} className="inputs_form">
          <div>Our Dear Customer you are</div>
          <div>
            <hr />
            <span>Welcome</span>
            <hr />
          </div>
          <div>
            <TextField
              label="Your Full Name"
              name="m_name"
              variant="outlined"
              color="primary"
              style={{ width: "100%", margin: "10px 0px" }}
            />
          </div>
          <div className="register-inputs-ctr-divided">
            <TextField
              label="Phone Number"
              name="m_number"
              variant="outlined"
              color="primary"
              style={{ width: "48%" }}
              helperText={
                apiPhoneUsed ? "Phone Number already in use" : ""
              }
            />
            <TextField
              label="Email Address"
              name="m_email"
              variant="outlined"
              color="primary"
              style={{ width: "48%" }}
              helperText={
                apiEmailUsed ? "Email already in use" : ""
              }
            />
          </div>
          <div className="register-inputs-ctr-half-width">
            <TextField
              label="Location"
              type="text"
              name="m_location"
              variant="outlined"
              color="primary"
              style={{ width: "100%", margin: "10px 0px" }}
            />
          </div>
          <div className="register-inputs-ctr-divided">
            <TextField
              label="Set a Password"
              name="m_password"
              type="password"
              variant="outlined"
              color="primary"
              style={{ width: "48%" }}
              helperText={samePassword ? "" : "Passwords Don't Match"}
              error={!samePassword}
            />
            <TextField
              label="Retype Password"
              name="retype_password"
              type="password"
              variant="outlined"
              color="primary"
              style={{ width: "48%" }}
              helperText={
                samePassword
                  ? "Making sure,password is correct"
                  : "Type correct Password"
              }
              error={!samePassword}
            />
          </div>
          <div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="terms_and_conditions"
                      checked={termsCheckBox}
                      onChange={() => {
                        setTermsCheckBox(!termsCheckBox);
                      }}
                  />
                }
                label="I agree to the Terms and Conditions of using this app"
              />
            </FormGroup>
          </div>
          <div>
            <Button
              variant="outlined"
              type="submit"
              color={apiFeedBackError ? "secondary" : "primary"}
              style={{ width: "100%", margin: "15px 0px" }}
              disabled={!termsCheckBox}
            >
              <CircularProgress
                size={15}
                thickness={10}
                style={{
                display: submit ? "inline-block" : "none",
                marginRight: "20px",
                }}
              />
               {submit
                ? "Please Wait..."
                : apiFeedBackError
                ? "Something Went Wrong, Try again"
                : "Submit"}
            </Button>
          </div>
          <div style={{ width: "100%", marginBlock: "10px" }}>
            Already having an account?
            <Link legacyBehavior href="/">
              <a>
                <span
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    marginLeft: "5px",
                  }}
                >
                  Sign in here
                </span>
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
