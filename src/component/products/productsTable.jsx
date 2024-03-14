import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import deleteOptionTable from "../../deleteOptionTable.svg";
import editOptionTable from "../../editOptionTable.svg";
import disabledDelete from "../../disabledDelete.svg";
import {  useDispatch, useSelector } from "react-redux";
import { setDelete } from "../../redux/slice/productSlice";


function ProductsTable() {
  const rows = useSelector((data)=>data.productData);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
     dispatch(setDelete(id))
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ background:'#FFF8B7'}}>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Pack Size</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">MRP</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{background:'#F2F2F2'}}
          
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.packSize}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.mrp}</TableCell>
              <TableCell align="right">
                <img src={row.image} className="delete" alt="deleteOption" />
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: `${row.status === "active" ? "green" : "red"}`,
                }}
              >
                {row.status}
              </TableCell>
              <TableCell align="right">
                <img src={editOptionTable} className="edit" alt="editOption" />
              </TableCell>
              <TableCell align="right">
                {row.status === "active" ? (
                  <img
                    src={deleteOptionTable}
                    className="delete"
                    alt="deleteOption"
                    onClick={()=>handleDelete(row.id)}
                  />
                ) : (
                  <img
                    src={disabledDelete}
                    className="delete"
                    alt="deleteOption"
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductsTable;
