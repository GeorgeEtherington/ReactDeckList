import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Tooltip, tooltipClasses } from "@mui/material";

function JsonDataDisplay({ file }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOnMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
    event.stopPropagation();
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    event.stopPropagation();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [data, setData] = useState([]);
  const getData = useCallback(async () => {
    const response = await fetch(file, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    setData(data);
  }, [file]);
  useEffect(() => {
    getData().catch((e) => {
      console.debug(e);
    });
  }, [getData]);

  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Card ID</TableCell>
              <TableCell align="left">Card Name</TableCell>
              <TableCell align="left">Card Type</TableCell>
              <TableCell align="left">Card Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <Tooltip
                key={row.name}
                title={
                  <div style={{ padding: 0, margin: "-8px -8px" }}>
                    <img
                      style={{ maxWidth: 200 }}
                      src={row.img}
                      alt="placeholder"
                    />
                  </div>
                }
              >
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.type}</TableCell>
                  <TableCell align="left">{row.quantity}</TableCell>
                </TableRow>
              </Tooltip>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default JsonDataDisplay;
