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
import { BackGroundColor, BasicBorderColor, BasicLetterColor, PointColor } from '@utils/constant';
import { useEffect, useState } from 'react';

export default function CustomTabs() {
  const [value, setValue] = useState('1');
  const [electricityStatus, setElectricityStatus] = useState(2);
  const [gasStatus, setGasStatus] = useState(2);
  const electricStatusQuery = useGetElectricityStatus();
  const gasStatusQuery = useGetGasStatus();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (!electricStatusQuery.isLoading) {
      console.log(electricStatusQuery.data);
      setElectricityStatus(electricStatusQuery.data);
    }
  }, [electricStatusQuery.isLoading]);

  useEffect(() => {
    if (!gasStatusQuery.isLoading) {
      console.log(gasStatusQuery.data);
      setGasStatus(gasStatusQuery.data);
    }
  }, [gasStatusQuery.isLoading]);

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
