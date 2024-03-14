import catogeryPageIcon from "../catogeryPageIcon.svg";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button } from "@mui/material";
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/slice/categorySlice";
import { setProduct } from "../redux/slice/productSlice";
const SearchBar = (props) => {
    const {title} = props;
    const dispatch = useDispatch();
   const handleChange = (e) => {
       if(title==="Category"){
        console.log(e.target.value)
              dispatch(setCategory(e.target.value));
       }else{
                dispatch(setProduct(e.target.value));
       }
   }
    return(
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} my={1} mx={2}>
        <Box display={"flex"} alignItems={"center"}>
          <img
            src={catogeryPageIcon}
            className="catogeryPageIcon"
            alt="catogeryPageIcon"
          />
          <label>{title}</label>
        </Box>
        <Paper
          component="form"
          sx={{ display: "flex", alignItems: "center", height:'34px',width: 400 }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder=""
            onChange={(e)=>handleChange(e)}
          />
        </Paper>
        <Link to={title==="Category"?"addcategories":"addproducts"}>Add New</Link>
      </Box>
    )
   
}
export default SearchBar;