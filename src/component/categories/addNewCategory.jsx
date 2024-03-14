import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import leftArrow from "../../leftArrow.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAdd } from "../../redux/slice/categorySlice";
const currencies = [
  {
    value: "active",
    label: "Active",
  },
  {
    value: "inActive",
    label: "In-Active",
  },
];
const AddNewCategory = () => {
 const dispatch = useDispatch();
  const [added,setAdded] = useState({
    categoryName:"",
    description:"",
    status:""
  });
 const handleNewAdd = () => {
  dispatch(setAdd(added));
  setAdded({
    categoryName:"",
    description:"",
    status:""
  })
 }
  const navigate = useNavigate();
  return (
    <Box sx={{background:"#FFFFFF", boxShadow: "0px 1px 4px 0px #000000",padding:"20px",margin:"10px",height:"85vh"}}>
      <Box display={'flex'} gap={"20px"} >
        <img src={leftArrow} alt="Arrow" onClick={()=>navigate(-1)}/>
        <text>Add Category</text>
      </Box>
      <Grid spacing={3}>
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
              id="outlined-controlled"
              label="Category Name"
              value={added.categoryName}
              onChange={(event) => {
                setAdded({...added,categoryName:event.target.value});
              }}
            />
            <TextField
              id="outlined-uncontrolled"
              label="Description"
              value={added.description}
              onChange={(event) => {
                setAdded({...added,description:event.target.value});
              }}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Status"
              value={added.status}
              onChange={(event) => {
                setAdded({...added,status:event.target.value});
              }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Grid>
        <Box
         component="form"
         position={"absolute"} right={"20px"} bottom={"20px"}
         display={"flex"} justifyContent={"center"} gap={"60px"}
         marginBottom={"10px"}
         marginRight={"10px"}
        >
          <Button sx={{fontSize:"14px",borderRadius:"20px",width:"100px"}}  variant="contained" onClick={()=>navigate(-1)}>Cancel</Button>
          <Button sx={{fontSize:"14px",borderRadius:"20px",width:"100px"}}  variant="outlined" onClick={()=>handleNewAdd()}>Save</Button>
        </Box>
    </Box>
  );
};
export default AddNewCategory;
