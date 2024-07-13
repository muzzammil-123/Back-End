import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Children, useState } from "react";
import apiRequest from "../../lib/apiRequest";
function Register() {
 
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const data = new FormData(e.target);
    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");
    console.log(username, email, password);
    try {
      const res = await axios.post("http://localhost:3000/user/register", {
        username,
        email,
        password,
      });
      console.log(res);
    } catch (error) {
      console.log("Error :>>>>>>", error);
    }
  };

  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}
export default Register;
