import React, { useEffect, useState } from 'react';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from './components/loader/Loader';
import MainLayout from './layout/MainLayout';

function App() {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 1000);
    return ()=>clearTimeout(timer)
  }, [])
  
  if (loader) return <Loader/>
  
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
          <Route path='/' element={<Home/>}>
          </Route>
          </Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
