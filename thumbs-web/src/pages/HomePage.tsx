import CssBaseline from '@mui/material/CssBaseline';
import { useRecoilValue } from 'recoil';
import { pageAtom } from '@stores/page';
import FullWidthTabs from '@componets/FixedTabs';

function HomePage() {
  const selectedMenu = useRecoilValue(pageAtom);
  return (
    <>
      <FullWidthTabs />
      <CssBaseline />
    </>
  );
}

export default HomePage;
