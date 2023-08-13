import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { Typography, Avatar } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { GetStatusColor } from '@utils/convert';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface GasStatusProps {
  status: number;
}

export default function GasStatus({ status }: GasStatusProps) {
  const statusColor = GetStatusColor(status);
  const [commValue, setCommValue] = useState('통신정상');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 0.5, md: 3 }} columns={{ xs: 1, md: 8 }}>
        <Grid item sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #fff', width: '100%' }}>
          <Avatar sx={{ marginRight: 1, backgroundColor: statusColor, width: '1rem', height: '1rem' }}>
            <FiberManualRecordIcon sx={{ fontSize: 'small', color: '#75FB4C' }} />
          </Avatar>
          <Typography variant="h6">가스 ({commValue})</Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="h6">실시간 사용량</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            0
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="h6">2023년 6월 사용량 (보정 부피)</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            0
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="h6">누적 가스 사용량(보정 부피)</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            0
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
