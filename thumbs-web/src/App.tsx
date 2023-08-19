import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from '@componets/NotFound';
import HomePage from '@pages/HomePage';
import CircularIndeterminate from '@componets/CircularIndeterminate';
import { connectionAtom } from '@stores/connection';
import { useRecoilState } from 'recoil';

import { useEffect } from 'react';
import { useGetPing } from '@hooks/ping';
import { ConnectionStatus } from '@utils/constant';

export default function App() {
  const serverConnectionQuery = useGetPing();
  const [connectionValue, setConnectionValue] = useRecoilState(connectionAtom);

  useEffect(() => {
    if (!serverConnectionQuery.isLoading) {
      setConnectionValue(ConnectionStatus.Loading);
      if (serverConnectionQuery.error) {
        setConnectionValue(ConnectionStatus.Error);
      } else {
        setConnectionValue(ConnectionStatus.Normal);
      }
    }
  }, [serverConnectionQuery.isLoading]);

  if (connectionValue === ConnectionStatus.Loading) {
    return <CircularIndeterminate />;
  }
  if (connectionValue === ConnectionStatus.Error) {
    return (
      <>
        <div>
          <p>Server Connection Error</p>
        </div>
      </>
    );
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
