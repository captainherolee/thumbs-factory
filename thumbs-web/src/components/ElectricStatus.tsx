import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Avatar, Divider } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ConvertStatusString, GetStatusColor } from '@utils/convert';
import { useEffect, useState } from 'react';
import PowerBarChart from '@componets/MaximumBar';
import MonthlyBarChart from '@componets/MonthlyBar';
import ElectricTableContents from '@componets/TableContents';
import { BasicBorderColor, ConnectionStatus } from '@utils/constant';
import { useGetElectricity } from '@hooks/electicity';
import { useRecoilState } from 'recoil';
import { defaultElectricity, electricityAtom } from '@stores/electricity';

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
  const [electricityValue, setElectricity] = useRecoilState(electricityAtom);
  const electricityQuery = useGetElectricity();
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`;

  useEffect(() => {
    if (!electricityQuery.isLoading) {
      setElectricity(electricityQuery.data);
    }
  }, [electricityQuery.isLoading]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 0.5, md: 3 }} columns={{ xs: 1, md: 8 }}>
        <Grid item sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #fff', width: '100%' }}>
          <Avatar sx={{ marginRight: 1, backgroundColor: statusColor, width: '1rem', height: '1rem' }}>
            <FiberManualRecordIcon sx={{ fontSize: 'small', color: statusColor }} />
          </Avatar>
          <Typography variant="h6">전력 ({ConvertStatusString(status)})</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: '1rem', textAlign: 'right' }}>알람 설정 % {electricityValue.mdAlarmSetValue}</Typography>
        </Grid>
        <Grid item xs={12}>
          <PowerBarChart />
        </Grid>
        <Grid item xs={6} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor, paddingRight: '10px' }}>
          <Typography variant="h6">유효전력</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            {electricityValue.activePower}
          </Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">최대수요</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            {electricityValue.maximumDemand}
          </Typography>
        </Grid>
        <Grid item xs={6} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor, paddingRight: '10px' }}>
          <Typography variant="h6">무효전력</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            {electricityValue.reactivePower}
          </Typography>
        </Grid>

        <Grid item xs={6} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">누설전류</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            {electricityValue.leakageCurrent}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ElectricTableContents />
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ my: 2, backgroundColor: BasicBorderColor, height: '1.5px' }} />
          <Typography sx={{ fontSize: '1rem', textAlign: 'right' }}>알람 설정 % {electricityValue.cpAlarmSetValue}</Typography>
        </Grid>
        <Grid item xs={12}>
          <MonthlyBarChart />
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">{formattedDate} 계약전력량</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            {electricityValue.monthlyContractPower} kw
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">{formattedDate} 무효전력량</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            {electricityValue.monthlyReactivePower} kw
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">{formattedDate} 유효전력량</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            {electricityValue.monthlyActivePower} kw
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">누적 무효전력량</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            {electricityValue.cumulativeReactivePower} kw
          </Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="space-between" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
          <Typography variant="h6">누적 유효전력량</Typography>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            {electricityValue.cumulativeActivePower} kw
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
