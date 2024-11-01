// import React from 'react'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from '@/pages/Charity/Dashboard'
import Beneficiaries from '@/pages/Charity/Beneficiaries'
import Donations from '@/pages/donor/AddDonation'
import Settings from '@/pages/Charity/Settings'



export const Charitydashboard = () => {
  function handleLogout(): void {
    throw new Error('Function not implemented.')
  }

  return (
    <Router>
    <div className= "">
      <Sidebar onLogout={handleLogout}/>
      <div className="ml-60 flex-1 p-4 text-white  ">
        <Routes>
          <Route path="/charitydashboard" element={<Dashboard />} />
          <Route path="/charitydashboard/beneficiaries" element={<Beneficiaries />} />
          <Route path="/charitydashboard/donations" element={<Donations />} />
          <Route path="/charitydashboard/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  </Router>
  )
}





