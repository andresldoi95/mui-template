"use client";
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Column {
  id: string;
  label: string;
}

interface AppDataTableProps {
  columns: Column[];
  data: any[];
  renderActions: (item: any) => JSX.Element;
}

export const AppDataTable: React.FC<AppDataTableProps> = ({ columns, data, renderActions }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter(item => 
    columns.some(column => 
      item[column.id].toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <>
      <Box my={2}>
        <TextField
          label="Buscar"
          variant="outlined"
          value={search}
          fullWidth
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(item => (
                <TableRow key={item.id}>
                  {columns.map(column => (
                    <TableCell key={column.id}>{item[column.id]}</TableCell>
                  ))}
                  <TableCell>{renderActions(item)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};