import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginform from './components/Loginform'
export default function LoginPage() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route //</Routes>path="/" element={<Layout />}
        >
             
        </Route>
      </Routes>
    </BrowserRouter>
    <div className="page">
      <Loginform />
      </div>

    </div>
  )
}
