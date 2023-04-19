import AddJob from './components/addJob/AddJob';
import './App.css';
import React, { useState } from 'react';
import JobAplication from './components/jobAplication/JobAplication';
import Footer from './components/footer/Footer';

function App() {
  const [jobList, setJobList] = useState([])

  return (
    <div className="App">
      <h1 className='text-2xl font-bold py-4 pl-6 section__title'>Job Application Tracker </h1>
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
    <Footer style={{bottom:'0'}}/>
      
    </div>
    
  );

  
}

export default App;
