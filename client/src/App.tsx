import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnatomyLayout } from './components/anatomy/AnatomyLayout';
import { AnatomyView } from './components/anatomy/AnatomyView';
import { SephirotView } from './components/anatomy/SephirotView';
import { QliphothView } from './components/anatomy/QliphothView';
import { TarotView } from './components/anatomy/TarotView';
import { HebrewView } from './components/anatomy/HebrewView';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <Routes>
          <Route path="/" element={<AnatomyLayout />}>
            <Route index element={<AnatomyView />} />
            <Route path="sephirot" element={<SephirotView />} />
            <Route path="qliphoth" element={<QliphothView />} />
            <Route path="tarot" element={<TarotView />} />
            <Route path="hebrew" element={<HebrewView />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;