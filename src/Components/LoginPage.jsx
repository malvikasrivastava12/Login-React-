import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [UserError, setUserError] = useState("");
  const [PassError, setPassError] = useState("");
const navigate=useNavigate();
  const validate = () => {
    if (Username === "malvika" && Password === "1234") {
      console.log("Login Succussfully");
      return true;
    } else if (Username === "" && Password === "") {
      setUserError("Username cannot be empty");
      setPassError("Please enter password");
      return false;
    } else if (Username != "malvika" && Password != "1234") {
      setUserError("Please enter correct username");
      setPassError("Please enter correct password");
      return false;
    } else if (Username === "") {
      setUserError("Please Enter Username");
      setPassError("");
      return false;
    } else if (Password === "") {
      setUserError("");
      setPassError("Please enter password");
      return false;
    } else if (Username != "malvika") {
      setUserError("Please enter correct username");
      setPassError("");
      return false;
    } else if (Password != "1234") {
      setUserError("");
      setUserError("Please enter correct password");
      return false;
    }
  };
  const HandleOnClick = (event) => {
    event.preventDefault();
    if (validate()) {
      navigate("/home");
    }
  };
  return (
  
<div className="master-container">
<div class="main-container">
      <h2 id="login">Login Here </h2>
      <form name="myform" class="formLogin" onSubmit={HandleOnClick}>
        <div class="form-group">
          <FaUserAlt className="usericon" />

          <input
            type="text"
            id="fname"
            placeholder="Enter User Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <span class="error-msg" id="name-error">
            {UserError}
          </span>
          <br />
          <br />
        </div>
        <div class="form-group">
          <FaLock className="lockicon" />
          <input
            type="password"
            id="pass"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <span class="error-msg" id="pass-error">
            {PassError}
          </span>
          <br />
          <br />
        </div>
        <div class="class-login">
          <button type="submit" class="btnLogin" id="btn">
            Login
          </button>
        </div>
      </form>
    </div>
</div>
    
  );
};
export default LoginPage;
