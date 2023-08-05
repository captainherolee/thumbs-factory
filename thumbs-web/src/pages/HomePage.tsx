import CssBaseline from '@mui/material/CssBaseline';
import FixedTabs from '@componets/FixedTabs';
import { useRecoilValue } from 'recoil';
import { pageAtom } from '@stores/page';

function HomePage() {
  const selectedMenu = useRecoilValue(pageAtom);
  return (
    <>
      <FixedTabs />
      <CssBaseline />
    </>
  );
}

export default HomePage;
