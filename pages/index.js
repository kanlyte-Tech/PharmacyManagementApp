import { Button, TextField } from "@mui/material";
import Header from "../Components/Header";
import { BiLogIn } from "react-icons/bi";
import Link from "next/link";


const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="login_ctr">
          <div>
            <img src="/pharm.svg" alt="Pharmacy" />
          </div>
          <div className="form_ctr __card">
            <form className="_login_form">
            <div className="--flex-center">
           <BiLogIn size={35} color="#999" />
        </div>
        <h2 style={{ textAlign: "center", color: "red" }}>Login</h2>
              <div className="_login_inputs_ctr">
                <TextField
                  variant="outlined"
                  label="Username"
                  type="email"
                  name="email"
                  fullWidth
                  style={{ margin: "20px 0px" }}
                />
                <TextField
                  variant="outlined"
                  label="Password"
                  type="password"
                  name="password"
                  fullWidth
                  style={{ margin: "20px 0px" }}
                />
              </div>
              <div className="login-btn-ctr">
              <Button
                color="primary"
                variant="contained"
                type="submit"
                style={{ width: "100%" }}
              >
                Submit
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
