import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import deleteOptionTable from "../../deleteOptionTable.svg";
import editOptionTable from "../../editOptionTable.svg";
import disabledDelete from "../../disabledDelete.svg";
import { useDispatch, useSelector } from "react-redux";
import { setDelete, setSort } from "../../redux/slice/categorySlice";
import ascDesc from "../../ascDesc.svg";
import { Box } from "@mui/material";
import { useState } from "react";
function CategoryTable() {
  const rows = useSelector((data) => data.categoryData.truth);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(setDelete(id));
  };
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead sx={{ background: "#FFF8B7" }}>
          <TableRow>
            <TableCell>
              <TitleBox name={"Id"} />
            </TableCell>
            <TableCell align="right">
              <TitleBox name={"Name"} />
            </TableCell>
            <TableCell align="right">
              <TitleBox name={"Description"} />
            </TableCell>
            <TableCell align="right">
              <TitleBox name={"Status"} />
            </TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow key={row.name} sx={{ background: "#F2F2F2" }}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
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
                    onClick={() => handleDelete(row.id)}
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
          {rows.length === 0 && <TableRow>No Data Found</TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CategoryTable;

const TitleBox = (props) => {
  const { name } = props;
  const rows = useSelector((data) => data.categoryData.truth);
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);

  function sortData(byName) {
    const propertyName = byName.toLowerCase();
    const sortedData = [...rows].sort((a, b) => {
      if (!isNaN(Number(a[propertyName])) && !isNaN(Number(b[propertyName]))) {
        return flag
          ? a[propertyName] - b[propertyName]
          : b[propertyName] - a[propertyName];
      }
      return flag
        ? a[propertyName].localeCompare(b[propertyName])
        : b[propertyName].localeCompare(a[propertyName]);
    });
    dispatch(setSort(sortedData));
  }
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <span> {name} </span>
      <img
        src={ascDesc}
        width={"15px"}
        gap={"15px"}
        className="rightArrow_menu"
        alt="rightArrow_menu"
        onClick={() => {
          setFlag(!flag);
          sortData(name);
        }}
      />
    </Box>
  );
};
