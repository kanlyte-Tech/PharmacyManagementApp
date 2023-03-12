import React, { useEffect, useState } from "react";
import { Button, CircularProgress, TextField } from "@mui/material";
import { BiLogIn } from "react-icons/bi";
import Link from "next/link";
import FormsApi from "../api/api";
import { useRouter } from "next/router";
import { Base64 } from "js-base64";
import Header from "../Components/Header";



const Home = () => {
  const router = useRouter();
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
      : null;
      if (!user) {
        router.push("/");
      }
  }, []);
  const [apiFeedBackError, setApiFeedBackError] = useState(false);
  const [submit, setSubmit] = useState(false);


  const form_submit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    const fd = new FormData(e.target);
    let _fcontent = {};
    fd.forEach((value, key) => {
      _fcontent[key] = value;
    });
    let api = new FormsApi();
    let res = await api.post("/login/manager", _fcontent);
    if (res === "Error") {
      setApiFeedBackError(true);
      setSubmit(false);
      return;
    }
    if (res.status === false) {
      setApiFeedBackError(true);
      setSubmit(false);
    } else {
        const data = Base64.encode(JSON.stringify({ ...res.result }));
        localStorage.setItem("user_cookie", data);
        setSubmit(false);
      }
      router.push("/pharmacy/newpharmacy");
    
  };

  return (
    <>
      <Header />
      <main>
        <div className="login_ctr">
          <div>
            <img src="/pharm.svg" alt="Pharmacy" />
          </div>
          <div className="form_ctr __card">
            <form className="_login_form" onSubmit={form_submit}>
            <div className="--flex-center">
           <BiLogIn size={35} color="#999" />
        </div>
        <h2 style={{ textAlign: "center", color: "red" }}>Login</h2>
              <div className="_login_inputs_ctr">
                <TextField
                  variant="outlined"
                  label="Email"
                  type="email"
                  name="m_email"
                  fullWidth
                  error={apiFeedBackError}
                  helperText={
                    apiFeedBackError
                      ? "Wrong Email or some network error"
                      : "Type in your Email"
                  }
                  style={{ margin: "20px 0px" }}
                />
                <TextField
                  variant="outlined"
                  label="Password"
                  type="password"
                  name="m_password"
                  fullWidth
                  error={apiFeedBackError}
                  helperText={
                    apiFeedBackError
                      ? "Wrong Password or some network error"
                      : "Type in your password"
                  }
                  style={{ margin: "20px 0px" }}
                />
              </div>
              <div className="login-btn-ctr">
              <Button
                color="primary"
                variant={submit ? "outlined" : "contained"}
                type="submit"
                style={{ width: "100%" }}
              >
                <CircularProgress
                    size={15}
                    thickness={10}
                    style={{
                      display: submit ? "inline-block" : "none",
                      marginRight: "20px",
                    }}
                  />
                  {submit ? "Please Wait..." : "Sign In"}
                </Button>
             </div>
             <div style={{ width: "100%", marginBlock: "10px", color:"blue", alignItems:"center"}}>
                Not Registered?
                <Link legacyBehavior href="/user/register">
                  <a>
                    <span
                      style={{
                        textDecoration: "underline",
                        color: "blue",
                        marginLeft: "5px",
                      }}
                    >
                      Register Here
                    </span>
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
