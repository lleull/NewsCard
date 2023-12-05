import React, { useState } from "react";
import "./input.css";
import { useNavigate } from "react-router-dom";

const Inputcomp = (props) => {
  const navigate = useNavigate();

  const [email, setemail] = useState([]);
  const [error, seterror] = useState(true);

  // const inputalidty = (email) => {
  //   return email.trim() === "" && email.includes("@");
  // };

  const checkemail = (e) => {
    e.preventDefault();
    setemail(e.target.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    seterror(false);
    if (email.trim() !== "" && email.includes("@")) {
      seterror(false);
    }

    if (error === true){
      navigate('/success')
    }

   
  };
  return (
    <form onSubmit={handlesubmit}>
      <div className="labels">
        {" "}
        <label>Email Address</label>
        {!error ? <p style={{ color: "red" }}>Input Error</p> : ""}
      </div>
      <input
        value={email}
        className={!error ? "inputerror" : "input"}
        onChange={checkemail}
        placeholder="Email"
        required
      
      />

      <button type="submit">Subscribe to monthli newsletter</button>
    </form>
  );
};

export default Inputcomp;
