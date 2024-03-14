import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import dflogo from "../dflogo.svg";
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import "../App.css";

const LoginUi = () => {
  const [showPassword, setPassword] = useState(true);
  const navigate = useNavigate();
  const handleClickShowPassword = () => {
    setPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleLogin = () => {
    navigate("dgflake")
  }
  return (
       <div className="main">
        <Box display={'flex'} justifyContent={"center"}>
          <img src={dflogo} className="App-logo" alt="logo" />
        </Box>
        <Box textAlign={"center"} mb={3}>
          <h1>Welcome to Digitalflake Admin</h1>
        </Box>
        <div>
        </div>
        <Box mb={2}>
          <TextField fullWidth id="outlined-required" label="Email Id" />
        </Box>
        <Box mb={2}>
          <FormControl sx={{ width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        <Box textAlign={'end'} color={'#A08CB1'} pt={1}> 
          <p onClick={()=> navigate('forgot')}>Forgot Password?</p>
        </Box>
        </Box>
        <div>
          <Button variant="contained" onClick={()=>handleLogin()}>Login</Button>
        </div>
      </div>
 
  );
};
export default LoginUi;
