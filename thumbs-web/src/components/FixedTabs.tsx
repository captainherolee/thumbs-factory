import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Typography } from '@mui/material';
import ElectricStatus from '@componets/ElectricStatus';
import GasStatus from '@componets/GasStatus';
import RealTimeMonitoringChart from '@componets/RealtimeGraph';
import { useGetElectricityStatus } from '@hooks/electicity';
import { useGetGasStatus } from '@hooks/gas';
import { BackGroundColor, BasicBorderColor, BasicLetterColor, ConnectionStatus, PointColor } from '@utils/constant';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { gasAtom, gasStatusAtom } from '@stores/gas';
import { electricityStatusAtom } from '@stores/electricity';

export default function CustomTabs() {
  const [value, setValue] = useState('1');
  const [gasStatus, setGasStatus] = useRecoilState(gasStatusAtom);
  const [electricityStatus, setElectricityStatus] = useRecoilState(electricityStatusAtom);
  const electricStatusQuery = useGetElectricityStatus();

  const gasStatusQuery = useGetGasStatus();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (!electricStatusQuery.isLoading) {
      if (electricStatusQuery.isFetched && electricStatusQuery.data && electricStatusQuery.data.E_Connect !== undefined) {
        setElectricityStatus(electricStatusQuery.data.E_Connect);
      } else {
        // Handle error case or provide a default value
        setElectricityStatus(ConnectionStatus.Error); // For example, set to false if data is not available
      }
    }
  }, [electricStatusQuery.isLoading, electricStatusQuery.isFetched, electricStatusQuery.data]);
  useEffect(() => {
    if (!gasStatusQuery.isLoading) {
      if (gasStatusQuery.isFetched && gasStatusQuery.data?.G_Connect !== undefined) {
        setGasStatus(gasStatusQuery.data.G_Connect);
      } else {
        // Handle error case or provide a default value
        setGasStatus(ConnectionStatus.Error); // For example, set to false if data is not available
      }
    }
  }, [gasStatusQuery.isLoading, gasStatusQuery.isFetched, gasStatusQuery.data]);

  return (
    <Box sx={{ width: '100%', typography: 'body', backgroundColor: BackGroundColor }}>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            aria-label="Main Tabs"
            TabIndicatorProps={{ style: { background: PointColor } }}
            sx={{
              backgroundColor: BackGroundColor,
              '.Mui-selected': {
                color: PointColor,
              },
              '.MuiTab-root.Mui-selected': {
                color: PointColor,
              },
            }}
          >
            <Tab label="전력 상태" value="1" sx={{ fontWeight: 700, fontSize: '1.0rem', color: BasicLetterColor }} />
            <Tab label="가스 상태" value="2" sx={{ fontWeight: 700, fontSize: '1.0rem', color: BasicLetterColor }} />
            <Tab label="실시간 모니터링" value="3" sx={{ fontWeight: 700, fontSize: '1.0rem', color: BasicLetterColor }} />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ backgroundColor: BackGroundColor, color: BasicLetterColor }}>
          <ElectricStatus status={electricityStatus} />
        </TabPanel>
        <TabPanel value="2" sx={{ backgroundColor: BackGroundColor, color: BasicLetterColor }}>
          <GasStatus status={gasStatus} />
        </TabPanel>
        <TabPanel value="3" sx={{ backgroundColor: BackGroundColor, color: BasicLetterColor }}>
          <Typography variant="h6" sx={{ borderBottom: 1, borderColor: BasicBorderColor }}>
            실시간 모니터링(초)
          </Typography>
          <RealTimeMonitoringChart />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
