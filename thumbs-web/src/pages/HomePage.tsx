import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CustomTabs from '@componets/FixedTabs';
import { BackGroundColor } from '@utils/constant';

function HomePage() {
  const theme = createTheme({
    palette: {
      background: {
        default: BackGroundColor,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomTabs />
    </ThemeProvider>
  );
}

export default HomePage;
