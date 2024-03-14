import { Box, Button, MenuItem, TextField } from "@mui/material";
import leftArrow from "../../leftArrow.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const category = [
  {
    value: "milk",
    label: "Milk",
  },
  {
    value: "fruits",
    label: "Fruits",
  },
];
const status = [
  {
    value: "active",
    label: "Active",
  },
  {
    value: "inActive",
    label: "In-Active",
  },
];
const AddNewProduct = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  return (
    <Box sx={{background:"#FFFFFF", boxShadow: "0px 1px 4px 0px #000000",padding:"20px",margin:"10px",height:"85vh"}}>

      <Box display={'flex'} gap={"20px"} >
        <img src={leftArrow} alt="Arrow" onClick={() => navigate(-1)}/>
        <text>Add Product</text>
      </Box>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
          display:"flex",
          justifyContent:"space-evenly",
          marginTop:"30px"
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-select-currency"
          select
          label="Category"
          //   defaultValue="EUR"
          //   helperText="Please select your currency"
        >
          {category.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-controlled"
          label="Product Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Pack Size"
        />
      </Box>
      <Box
         component="form"
         sx={{
           "& > :not(style)": { m: 1, width: "50ch" },
           display:"flex",
           justifyContent:"space-evenly",
           marginTop:"30px"
         }}
         noValidate
         autoComplete="off"
      >
        <TextField id="outlined-uncontrolled" label="MRP" />
        <TextField id="outlined-uncontrolled" label="Product Image" />
        <TextField id="outlined-select-currency" select label="Status">
          {status.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Box
        component="form"
        position={"absolute"} right={"20px"} bottom={"20px"}
        display={"flex"} justifyContent={"center"} gap={"60px"}
        marginBottom={"10px"}
        marginRight={"10px"}
      >
        <Button sx={{fontSize:"14px",borderRadius:"20px",width:"100px"}} variant="contained" onClick={()=>navigate(-1)}>Cancel</Button>
        <Button sx={{fontSize:"14px",borderRadius:"20px",width:"100px"}} variant="outlined">Save</Button>
      </Box>
    </Box>
  );
};
export default AddNewProduct;
