import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Typography } from '@mui/material';
import ElectricStatus from './ElectricStatus';
import GasStatus from './GasStatus';
import RealTimeMonitoringChart from './RealtimeGraph';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body', backgroundColor: '#20658B' }}>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            aria-label="Main Tabs"
            TabIndicatorProps={{ style: { background: '#6DE2AE' } }}
            sx={{
              backgroundColor: '#24365B',
              '.Mui-selected': {
                color: '#6DE2AE',
              },
              '.MuiTab-root.Mui-selected': {
                color: '#6DE2AE',
              },
            }}
          >
            <Tab label="전력 상태" value="1" sx={{ fontWeight: 700, fontSize: '1.0rem', color: 'white' }} />
            <Tab label="가스 상태" value="2" sx={{ fontWeight: 700, fontSize: '1.0rem', color: 'white' }} />
            <Tab label="실시간 모니터링" value="3" sx={{ fontWeight: 700, fontSize: '1.0rem', color: 'white' }} />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ backgroundColor: '#24365B', color: 'white' }}>
          <ElectricStatus status={'normal'} />
        </TabPanel>
        <TabPanel value="2" sx={{ backgroundColor: '#24365B', color: 'white' }}>
          <GasStatus status={'normal'} />
        </TabPanel>
        <TabPanel value="3" sx={{ backgroundColor: '#24365B', color: 'white' }}>
          <Typography variant="h6" sx={{ borderBottom: 1, borderColor: 'divider' }}>
            실시간 모니터링(초)
          </Typography>
          <RealTimeMonitoringChart />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
