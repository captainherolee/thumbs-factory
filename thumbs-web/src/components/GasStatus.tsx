import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import { Typography, Avatar } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ConvertStatusString, GetStatusColor } from '@utils/convert';
import { BasicBorderColor, ConnectionStatus } from '@utils/constant';
import { useRecoilState } from 'recoil';
import { defaultGas, gasAtom } from '@stores/gas';
import { useGetGas } from '@hooks/gas';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: BasicBorderColor,
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
  const [gasValue, setGas] = useRecoilState(gasAtom);
  const gasQuery = useGetGas();
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`;

  useEffect(() => {
    if (!gasQuery.isLoading) {
      setGas(gasQuery.data);
    }
  }, [gasQuery.isLoading]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 0.5, md: 3 }} columns={{ xs: 1, md: 8 }}>
        <Grid item sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #fff', width: '100%' }}>
          <Avatar sx={{ marginRight: 1, backgroundColor: statusColor, width: '1rem', height: '1rem' }}>
            <FiberManualRecordIcon sx={{ fontSize: 'small', color: statusColor }} />
          </Avatar>
          <Typography variant="h6">가스 ({ConvertStatusString(status)})</Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">실시간 사용량</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            {gasValue.realTimeUsage}
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">{formattedDate} 사용량 (보정 부피)</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            {gasValue.monthlyUsage}
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">누적 가스 사용량(보정 부피)</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            {gasValue.cumulativeUsage}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
