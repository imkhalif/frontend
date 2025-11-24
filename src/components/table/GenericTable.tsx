import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import type { TableProps } from "../../types/table/Generics";
import Typo from "../typography/typo";

function GenericTable<T>({ title, columns, rows }: TableProps<T>) {
  return (
    <Paper
      elevation={0}
      style={{
        padding: "20px 0px 0px",
        borderRadius: 16,
        border: "1px solid #eee",
      }}
    >
      {title && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingInline: "20px",
            paddingBottom: "18px",
          }}
        >
          <Typo var="h3">{title}</Typo>
          <Typo var="label">View All</Typo>
        </div>
      )}

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell
                  key={String(col.key)}
                  sx={{
                    background: "#f9fafb",
                    color: "#4b5563",
                    fontWeight: 600,
                    paddingInline: "20px",
                  }}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                sx={{
                  "&:last-child td, &:last-child th": {
                    borderBottom: "none",
                  },
                  "&:hover": {
                    background: "#f9fafb",
                  },
                }}
              >
                {columns.map((col) => (
                  <TableCell
                    key={String(col.key)}
                    sx={{ paddingInline: "20px" }}
                  >
                    {col.render
                      ? col.render(row[col.key], row)
                      : (row[col.key] as string)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default GenericTable;
