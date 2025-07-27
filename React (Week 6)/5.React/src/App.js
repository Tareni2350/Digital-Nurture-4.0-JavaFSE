import React from 'react';
import CohortDetails from './CohortDetails';
import './App.css';

function App() {
  const cohorts = [
    {
      name: 'INTADMDF10 - .NET FSD',
      status: 'Scheduled',
      startDate: '22-Feb-2022',
      coach: 'Aathma',
      trainer: 'Jojo Jose',
      color: 'blue'
    },
    {
      name: 'ADM21JF014 - Java FSD',
      status: 'Ongoing',
      startDate: '10-Sep-2021',
      coach: 'Apoorv',
      trainer: 'Elisa Smith',
      color: 'green'
    },
    {
      name: 'CDBJF21025 - Java FSD',
      status: 'Ongoing',
      startDate: '24-Dec-2021',
      coach: 'Aathma',
      trainer: 'John Doe',
      color: 'green'
    },
    {
      name: 'NEWBATCH001 - Python FSD',
      status: 'Scheduled',
      startDate: '01-Aug-2025',
      coach: 'Reema',
      trainer: 'Arjun Nair',
      color: 'blue'
    }
  ];

  return (
    <div className="container">
      <h1>Cohorts Details</h1>
      <div className="grid">
        {cohorts.map((cohort, index) => (
          <CohortDetails key={index} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
