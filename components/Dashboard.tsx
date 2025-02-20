'use client'
import React, { useState } from 'react'
import Navbar from './Navbar'
import { useAuth } from '@/app/context/AuthContext';
import apiClient from '@/lib/apiClient';
import { dateConverter } from '@/lib/utils';

function Dashboard() {
  const [journals, setJournals] = useState([]);
   
  async function getJournals() {
    const journals = await apiClient.get('/get-journals');
    // console.log("Journals:", journals);
    setJournals(journals.data);
  }
  
  const { user } = useAuth();

  return (
    <div>
        {/* <Navbar /> */}
        <h1>Hi {user?.email}</h1>
        <button onClick={getJournals}>Get Journals</button>
        Printing journals 
        {journals.map((journal: any) => (
          <div key={journal.id}>
            <h2>{journal.title}</h2>
            <p>{journal.content}</p>
            <p>Date: {dateConverter(journal.createdAt).date} Time: {dateConverter(journal.createdAt).time}</p>
          </div>
        ))}
    </div>
  )
}

export default Dashboard