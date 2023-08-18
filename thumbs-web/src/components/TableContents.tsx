import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { electricityAtom } from '@stores/electricity';

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
  const electricityValue = useRecoilValue(electricityAtom);

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ fontSize: '1rem', textAlign: 'center', fontWeight: 600, color: 'white' }}>R</TableCell>
            <TableCell sx={{ fontSize: '1rem', textAlign: 'center', fontWeight: 600, color: 'white' }}>{electricityValue.electricityDetail.rA} A</TableCell>
            <TableCell sx={{ fontSize: '1rem', textAlign: 'center', fontWeight: 600, color: 'white' }}>{electricityValue.electricityDetail.rV} V</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontSize: '1rem', textAlign: 'center', fontWeight: 600, color: 'white' }}>S</TableCell>
            <TableCell sx={{ fontSize: '1rem', textAlign: 'center', fontWeight: 600, color: 'white' }}>{electricityValue.electricityDetail.sA} A</TableCell>
            <TableCell sx={{ fontSize: '1rem', textAlign: 'center', fontWeight: 600, color: 'white' }}>{electricityValue.electricityDetail.sV} V</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontSize: '1rem', textAlign: 'center', fontWeight: 600, color: 'white' }}>T</TableCell>
            <TableCell sx={{ fontSize: '1rem', textAlign: 'center', fontWeight: 600, color: 'white' }}>{electricityValue.electricityDetail.tA} A</TableCell>
            <TableCell sx={{ fontSize: '1rem', textAlign: 'center', fontWeight: 600, color: 'white' }}>{electricityValue.electricityDetail.tV} V</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ fontSize: '1rem', textAlign: 'center', fontWeight: 600, color: 'white' }}>N</TableCell>
            <TableCell sx={{ fontSize: '1rem', textAlign: 'center', fontWeight: 600, color: 'white' }}>{electricityValue.electricityDetail.nA} A</TableCell>
            <TableCell sx={{ fontSize: '1rem', textAlign: 'center', fontWeight: 600, color: 'white' }}>{electricityValue.electricityDetail.nV} V</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
