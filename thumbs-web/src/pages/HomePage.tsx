import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRecoilValue } from 'recoil';
import { pageAtom } from '@stores/page';
import FullWidthTabs from '@componets/FixedTabs';

function HomePage() {
  const selectedMenu = useRecoilValue(pageAtom);
  const theme = createTheme({
    palette: {
      background: {
        default: '#24365B',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FullWidthTabs />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default HomePage;
