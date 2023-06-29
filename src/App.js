import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
const App = () => {
  return (
    <>
      <Routes>
        <Route path ="/" element={<HomePage/>}></Route>
      </Routes>
    </>
  )
}

export default App