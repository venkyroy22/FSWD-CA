import React from 'react';
import './App.css'
import TeamShowcase from "./components/TeamShowcase";


const App=()=>{
  const employees=[
    {
      fullName: "Hari",
      jobtitle: "HR Manager",
      
    },
    {
      fullName: "Sai",
      jobtitle: "Frontend Dev",
      
    },
   
  ];
  return(
    <div className='employee-list'>
      {employees.map((employee,index)=>(
        <TeamShowcase key={index}{...employee} />
      ))}
    </div>
  );
};

export default App;
