import AddJob from './components/addJob/AddJob';
import './App.css';
import React, { useState } from 'react';
import JobAplication from './components/jobAplication/JobAplication';
import Footer from './components/footer/Footer';

function App() {
  const [jobList, setJobList] = useState([])

  return (
    <div className="App">
      <div className='flex flex-row justify-between'>
      <h1 className='text-2xl font-bold py-4 pl-6 section__title'><p>Job Application Tracker</p> <br/> <Footer /> </h1>
      
      </div>
      <div className='flex flex-row justify-between w-3/4 max-w-md column__title'>
        <h3> Aplication </h3>
          <AddJob jobList={jobList} setJobList={setJobList} className='add__new'/>   
      </div>
     
      <div className='z-1'>
      {jobList.map((job, index) => {

          return(
          <JobAplication key={index} job={job} index={index} jobList={jobList} setJobList={setJobList} />
          )
    })} 
    </div> 
    
      
    </div>
    
  );

  
}

export default App;
