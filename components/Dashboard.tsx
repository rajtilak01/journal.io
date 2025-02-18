'use client'
import React from 'react'
import Navbar from './Navbar'
import { useAuth } from '@/app/context/AuthContext';

function Dashboard() {

    const { user } = useAuth();
  return (
    <div>
        {/* <Navbar /> */}
        <h1>Hi {user?.email}</h1>
    </div>
  )
}

export default Dashboard