import React, { useState }from 'react'
import './jobAplication.css';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs'
import EditJobAplication from './EditJobAplication';
import { RiDeleteBinLine } from 'react-icons/ri';


const JobAplication = ({ job, index, jobList, setJobList }) => {
    const [show, toogleShow] = useState(false);

const space = <>&nbsp;&nbsp;</>;

const handleDelete = intemID => {
    let removeIndex = jobList.indexOf(job);
    jobList.splice(removeIndex, 1);
    setJobList((currentJobs => currentJobs.filter(job => job.id !== intemID)) );
}

  return (
    
    <div className="inline-flex justify-between gap-1.5 rounded-md bg-white pl-6 py- text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-3/4 max-w-md column__aplication">
        <div>
        <div className='w-full flex flex-row justify-between '>
        <p className='company__name'>{job.companyName}{space}</p> 
        <p className='job__name'> {job.jobName} </p>
        </div>

        {show &&
        <div className="py-1 ">
         
         <p><p><strong>Date:</strong></p><p className='aplication__info'> {job.date}</p></p>
         <p><p><strong>Description:</strong></p><p className='aplication__info'>{job.description}</p></p>
         <p><p><strong>Cover Letter:</strong></p><p className='aplication__info'>{job.coverLetter}</p></p>
         <p><p><strong>Source: </strong></p><p className='aplication__info'>{job.source}</p></p>
         <p><p><strong>Resume uploaded: </strong></p><p className='aplication__info'>{job.resumeName}</p></p>
   
        </div>
        }
    </div>
        <div className='flex flex-row gap-2'>
        {!show &&
        <button className='block' onClick={() => toogleShow(!show)}>
        <BsChevronCompactDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </button>
        }
        {show &&
        <button className='block' onClick={() => toogleShow(!show)}>
        <BsChevronCompactUp className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </button>
        }
        <EditJobAplication job={job} index={index} jobList={jobList} setJobList={setJobList}/>
        
        <button onClick={handleDelete}>
        <RiDeleteBinLine className='delete__button'/>
        </button>
       
        </div>
    </div>
         
        
    
  )
}

export default JobAplication