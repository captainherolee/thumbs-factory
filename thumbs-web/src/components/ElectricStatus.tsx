import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Avatar, Divider } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { GetStatusColor } from '@utils/convert';
import { useState } from 'react';
import PowerBarChart from '@componets/BarChart';
import ElectricTableContents from '@componets/TableContents';
import { BasicBorderColor, ConnectionStatus } from '@utils/constant';

interface ElectricStatusProps {
  status: number;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: BasicBorderColor,
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ElectricStatus({ status }: ElectricStatusProps) {
  const statusColor = GetStatusColor(status);
  const [commValue, setCommValue] = useState(ConnectionStatus.Loading);
  const [alaramValue, setAlaramValue] = useState(60);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 0.5, md: 3 }} columns={{ xs: 1, md: 8 }}>
        <Grid item sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #fff', width: '100%' }}>
          <Avatar sx={{ marginRight: 1, backgroundColor: statusColor, width: '1rem', height: '1rem' }}>
            <FiberManualRecordIcon sx={{ fontSize: 'small', color: statusColor }} />
          </Avatar>
          <Typography variant="h6">전력 ({commValue})</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: '1rem', textAlign: 'right' }}>알람 설정 %{alaramValue}</Typography>
        </Grid>
        <Grid item xs={12}>
          <PowerBarChart />
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">유효전력</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            0
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">최대수요</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            100
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">무효전력</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            70
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ElectricTableContents />
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ my: 2, backgroundColor: BasicBorderColor, height: '1.5px' }} />
          <Typography sx={{ fontSize: '1rem', textAlign: 'right' }}>알람 설정 %{alaramValue}</Typography>
        </Grid>
        <Grid item xs={12}>
          <PowerBarChart />
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">2023년 6월 계약전력량</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            100 kw
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">2023년 6월 무효전력량</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            40 kw
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">2023년 6월 유효전력량</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            0 kw
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">누적 무효전력량</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            0 kw
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">누적 유효전력량</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            0 kw
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
