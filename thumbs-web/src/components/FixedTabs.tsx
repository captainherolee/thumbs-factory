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
            <Tab label="전력 상태" value="1" />
            <Tab label="가스 상태" value="2" />
            <Tab label="실시간 모니터링" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ElectricStatus />
        </TabPanel>
        <TabPanel value="2">
          <GasStatus />
        </TabPanel>
        <TabPanel value="3">Item Thtree</TabPanel>
      </TabContext>
    </Box>
  );
}
