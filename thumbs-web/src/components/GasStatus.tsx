import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

import PowerBarChart from './BarChart';
import ElectricTableContents from './TableContents';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GasStatus() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 0.5, md: 3 }} columns={{ xs: 1, md: 8 }}>
        <Grid item xs={6} md={4}>
          <Typography variant="h5" sx={{ borderBottom: '1px solid #000', width: '100%' }}>
            가스 (통신정상)
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} container justifyContent="space-between">
          <Typography variant="h6">실시간 사용량</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            0
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} container justifyContent="space-between">
          <Typography variant="h6">2023년 6월 사용량 (보정 부피)</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            0
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} container justifyContent="space-between">
          <Typography variant="h6">누적 가스 사용량(보정 부피)</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            0
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
