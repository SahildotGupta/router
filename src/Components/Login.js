import React from "react";
import "../index.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: red,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} style={{ minHeight: "100%" }}>
        <Grid item xs sm={6}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
              width="120%"
            />
          </div>
        </Grid>
        <Grid item xs lg={6} align="center">
          <form className="form">
            <h1 className="wlcm">Welcome</h1>
            <div className="username">
              <input
                type="text"
                className="usr"
                name=""
                placeholder="Username or email"
                required=""
              />
            </div>
            <div class="password">
              <input
                type="Password"
                className="pwd"
                name=""
                placeholder="Password"
                required=""
              />
              <br />
            </div>
            <button class="button">Login</button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
