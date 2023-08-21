import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { electricityAtom } from '@stores/electricity';

export default function CustomTable() {
  const electricityValue = useRecoilValue(electricityAtom);

  return (
    <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell
              sx={{
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: 600,
                color: 'white',
                height: '40px',
                paddingTop: '0px',
                paddingBottom: '0px',
                borderBottom: 'none',
              }}
            >
              R
            </TableCell>
            <TableCell
              sx={{
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: 600,
                color: 'white',
                height: '40px',
                paddingTop: '0px',
                paddingBottom: '0px',
                borderBottom: 'none',
              }}
            >
              {electricityValue?.electricityDetail?.rA ?? 0} A
            </TableCell>
            <TableCell
              sx={{
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: 600,
                color: 'white',
                height: '40px',
                paddingTop: '0px',
                paddingBottom: '0px',
                borderBottom: 'none',
              }}
            >
              {electricityValue?.electricityDetail?.rV ?? 0} V
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: 600,
                color: 'white',
                height: '40px',
                paddingTop: '0px',
                paddingBottom: '0px',
                borderBottom: 'none',
              }}
            >
              S
            </TableCell>
            <TableCell
              sx={{
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: 600,
                color: 'white',
                height: '40px',
                paddingTop: '0px',
                paddingBottom: '0px',
                borderBottom: 'none',
              }}
            >
              {electricityValue?.electricityDetail?.sA ?? 0} A
            </TableCell>
            <TableCell
              sx={{
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: 600,
                color: 'white',
                height: '40px',
                paddingTop: '0px',
                paddingBottom: '0px',
                borderBottom: 'none',
              }}
            >
              {electricityValue?.electricityDetail?.sV ?? 0} V
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: 600,
                color: 'white',
                height: '40px',
                paddingTop: '0px',
                paddingBottom: '0px',
                borderBottom: 'none',
              }}
            >
              T
            </TableCell>
            <TableCell
              sx={{
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: 600,
                color: 'white',
                height: '40px',
                paddingTop: '0px',
                paddingBottom: '0px',
                borderBottom: 'none',
              }}
            >
              {electricityValue?.electricityDetail?.tA ?? 0} A
            </TableCell>
            <TableCell
              sx={{
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: 600,
                color: 'white',
                height: '40px',
                paddingTop: '0px',
                paddingBottom: '0px',
                borderBottom: 'none',
              }}
            >
              {electricityValue?.electricityDetail?.tV ?? 0} V
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: 600,
                color: 'white',
                height: '40px',
                paddingTop: '0px',
                paddingBottom: '0px',
                borderBottom: 'none',
              }}
            >
              N
            </TableCell>
            <TableCell
              sx={{
                fontSize: '1rem',
                textAlign: 'center',
                fontWeight: 600,
                color: 'white',
                height: '40px',
                paddingTop: '0px',
                paddingBottom: '0px',
                borderBottom: 'none',
              }}
            >
              {electricityValue?.electricityDetail?.nA ?? 0} A
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
