import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface RowData {
  id: number;
  col1: string;
  col2: string;
  col3: string;
}

const rows: RowData[] = [
  { id: 1, col1: 'R', col2: '0.0 A', col3: '0 V' },
  { id: 2, col1: 'S', col2: '0.0 A', col3: '0 V' },
  { id: 3, col1: 'T', col2: '0.0 A', col3: '0 V' },
  { id: 4, col1: 'N', col2: '0.0 A', col3: '0 V' },
];

export default function CustomTable() {
  return (
    <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
      <Table>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell sx={{ fontSize: '1rem', textAlign: 'center', fontWeight: 600, color: 'white' }}>{row.col1}</TableCell>
              <TableCell sx={{ fontSize: '1rem', textAlign: 'center', fontWeight: 600, color: 'white' }}>{row.col2}</TableCell>
              <TableCell sx={{ fontSize: '1rem', textAlign: 'center', fontWeight: 600, color: 'white' }}>{row.col3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
