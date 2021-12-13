import React from 'react';
import KonwledgeBase from './components/1_KonwledgeBase';
import Action from './components/Action';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" caseSensitive={false} element={<KonwledgeBase />} />
          <Route path="/action" caseSensitive={false} element={<Action/>} />
      </Routes>
      </Router>
    </div>
  );
}
export default App;
