import Loading from '@componets/CircularIndeterminate';
import { useIsMobile } from '@hooks/media';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from '@componets/NotFound';
import { mobileAtom } from '@stores/media';
import HomePage from '@pages/HomePage';

export default function App() {
  const setIsMobile = useSetRecoilState(mobileAtom);
  const isMobile = useIsMobile();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
