import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Avatar } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface GasStatusProps {
  status: 'normal' | 'warning' | 'error'; // Define possible status values
}

export default function GasStatus({ status }: GasStatusProps) {
  const statusColor = getStatusColor(status);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 0.5, md: 3 }} columns={{ xs: 1, md: 8 }}>
        <Grid item xs={6} md={4} sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ marginRight: 1, backgroundColor: statusColor, width: '1.5rem', height: '1.5rem' }}>
            <FiberManualRecordIcon sx={{ fontSize: 'small', color: 'green' }} />
          </Avatar>
          <Typography variant="h5" sx={{ borderBottom: '1px solid #000', width: '100%' }}>
            가스 (통신정상)
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="h6">실시간 사용량</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            0
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="h6">2023년 6월 사용량 (보정 부피)</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            0
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Typography variant="h6">누적 가스 사용량(보정 부피)</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            0
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case 'warning':
      return 'yellow'; // Define your warning color here
    case 'error':
      return 'red'; // Define your error color here
    default:
      return 'green'; // Define your normal color here
  }
}
