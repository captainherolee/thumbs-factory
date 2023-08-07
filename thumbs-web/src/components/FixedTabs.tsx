import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Typography } from '@mui/material';
import SimpleCharts from './BarChart';
import ElectricStatus from './ElectricStatus';
import GasStatus from './GasStatus';
import RealTimeMonitoringChart from './RealtimeGraph';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="전력 상태" value="1" sx={{ fontSize: '1.0rem' }} />
            <Tab label="가스 상태" value="2" sx={{ fontSize: '1.0rem' }} />
            <Tab label="실시간 모니터링" value="3" sx={{ fontSize: '1.0rem' }} />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ElectricStatus status={'normal'} />
        </TabPanel>
        <TabPanel value="2">
          <GasStatus status={'normal'} />
        </TabPanel>
        <TabPanel value="3">
          <Typography variant="h6" sx={{ borderBottom: 1, borderColor: 'divider' }}>
            실시간 모니터링(초)
          </Typography>
          <RealTimeMonitoringChart />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
