import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/login.css";
import { Toaster, toast, useToaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUser, updateUserId } from "../store/action";
import { Co2Sharp } from "@mui/icons-material";

function Login() {
  const baseUrl = "http://localhost:8000";
  const [loginMethod, setLoginMethod] = useState("usernamePassword");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIN] = useState(false);
  const [newUser, setNewUser] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (username == "" || password == "") {
        toast.error("Please fill the correct details!");
        return;
      }
      const res = await axios.post(
        `${baseUrl}/api/users/login?phone=${username}&password=${password}`
      );

      if (res.data) {
        toast.success("Successfully Logged in");

        setNewUser(res.data);

        dispatch(updateUser(res.data));
        dispatch(updateUserId(res.data._id));
        navigate("/");
        console.log("success", res.data);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  const handleSignup = async (e) => {
    if (username == "" || password == "" || email == "" || password == "") {
      toast.error("Please fill the correct details!");
      return;
    }
    e.preventDefault();
    try {
      const newUser = await axios.post(
        `${baseUrl}/api/users/create?phone=${username}&password=${password}&email=${email}&name=${name}`
      );

      toast.success("Successfully Signed in");
    } catch (err) {
      toast.error("Something went wrong... Try Again!");
      console.log(err);
    }
  };

  return (
    <>
      <Toaster />

      <div className="login-container">
        {/* <Toaster position="top-center" reverseOrder={false} /> */}
        <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
        <form>
          {!isSignUp && (
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}
          {isSignUp && (
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          )}
          {!isSignUp && loginMethod === "phoneNumberOTP" && (
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          )}
          {!isSignUp && (
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          )}
          {isSignUp ? (
            <button onClick={handleSignup}>Sign Up</button>
          ) : (
            <button onClick={handleLogin}>Log In</button>
          )}
        </form>
        <div className="signup-option">
          <p>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
          </p>
          <button onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Log In" : "Sign Up"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
