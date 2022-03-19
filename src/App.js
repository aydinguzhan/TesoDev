import React from 'react';
import ShowMore from './Pages/ShowMore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import { UserContext } from './Contexts/UserContext';
import deger from "../src/Api/Api.json";






function App() {
  return (
    <UserContext.Provider value={deger}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}>
          </Route>
          <Route path="/ShowMore" element={<ShowMore />} />
        </Routes>
      </Router>
    </UserContext.Provider>



  )
}

export default App;
