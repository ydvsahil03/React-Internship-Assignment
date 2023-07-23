import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from "@mui/material/InputAdornment";
import { AccountCircle } from "@mui/icons-material";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

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
    
    if (name.trim() === "" || phoneNumber.trim() === "" || email.trim() === "") {
      setShowError(true);
    } else {
     
      localStorage.setItem("name", name);
      localStorage.setItem("phoneNumber", phoneNumber);
      localStorage.setItem("email", email);
      
      navigate("/second-page");
    }
  };

  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "5px" }}>
    <form onSubmit={handleFormSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        placeholder="name"
        value={name}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),}}
        onChange={handleNameChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone Number"
        variant="outlined"
        value={phoneNumber}
        type="number"
        placeholder="+91 "
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              < ContactPhoneIcon/>
            </InputAdornment>
          ),}}
        onChange={handlePhoneNumberChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        placeholder="name@xyz.com" 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AlternateEmailIcon />
            </InputAdornment>
          ),}}
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
