import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from '@componets/NotFound';
import HomePage from '@pages/HomePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
