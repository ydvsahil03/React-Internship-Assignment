import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';

const LoginForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [showError, setShowError] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Check if all fields are filled
    if (name.trim() === "" || phoneNumber.trim() === "" || email.trim() === "") {
      setShowError(true);
    } else {
      // Save the user details in localStorage
      localStorage.setItem("name", name);
      localStorage.setItem("phoneNumber", phoneNumber);
      localStorage.setItem("email", email);
      // Navigate the user to the second page
      navigate("/second-page");
    }
  };

  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "5px" }}>
    <form onSubmit={handleFormSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleNameChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone Number"
        variant="outlined"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
        fullWidth
        margin="normal"
      />
      {showError && <div style={{ color: "red" }}>Please enter all the details before proceeding.</div>}
      <Button fullWidth type="submit" variant="contained" color="primary"  endIcon={<SendIcon />}>
        Login
      </Button>
    </form>
    </div>
  );
};

export default LoginForm;
