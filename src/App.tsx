import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { PredictNow } from './pages/PredictNow';
import { Report } from './pages/Report';
import { PastReports } from './pages/PastReports';
import { RiskMaps } from './pages/RiskMaps';
import { Team } from './pages/Team';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
import { Auth } from './pages/Auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/predict" element={<PredictNow />} />
                <Route path="/report/:reportId" element={<Report />} />
                <Route path="/reports" element={<PastReports />} />
                <Route path="/maps" element={<RiskMaps />} />
                <Route path="/team" element={<Team />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;