import { Button, TextField } from "@mui/material";
import Header from "../Components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="login_ctr">
          <div>
            <img src="/pharm.svg" alt="Pharmacy" />
          </div>
          <div className="form_ctr card">
            <form className="_login_form">
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
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
