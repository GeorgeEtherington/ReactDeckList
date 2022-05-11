import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import { Tooltip } from "@mui/material";

function JsonDataDisplay({ file }) {
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
    <div data-testid={"MainDiv"}>
      <TableContainer component={Paper}>
        <Table data-testid={"Table"} aria-label="simple table">
          <TableHead data-testid={"TableHead"}>
            <TableRow data-testid={"TableRow"}>
              <TableCell data-testid={"TableCellCardID"} align="left">
                Card ID
              </TableCell>
              <TableCell align="left" data-testid={"TableCellCardName"}>
                Card Name
              </TableCell>
              <TableCell align="left" data-testid={"TableCellCardType"}>
                Card Type
              </TableCell>
              <TableCell align="left" data-testid={"TableCellCardQuantity"}>
                Card Quantity
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody data-testid={"TableBody"}>
            {data.map((row) => (
              <Tooltip
                name={row.name}
                key={row.name}
                title={
                  <div style={{ padding: 0, margin: "-8px -8px" }}>
                    <img
                      style={{ maxWidth: 200 }}
                      src={row.img}
                      alt="placeholder"
                    />
                    <p style={{ maxWidth: 180 }}>{row.text1}</p>
                    <p style={{ maxWidth: 180 }}>{row.text2}</p>
                    <p style={{ maxWidth: 180 }}>{row.text3}</p>
                  </div>
                }
              >
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  data-testid={"TableRow"}
                >
                  <TableCell align="left" data-testid={"TableCellID"}>
                    {row.id}
                  </TableCell>
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
