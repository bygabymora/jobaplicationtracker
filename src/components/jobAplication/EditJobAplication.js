import React, { useState, useEffect } from 'react'
import { BiEdit } from 'react-icons/bi'
import { BsX, BsClipboardPlus } from 'react-icons/bs'
import FileUploader from '../fileUploader/FileUploader'
import Select from 'react-select'
import './jobAplication.css'

const EditJobAplication = ({ job, index, jobList, setJobList}) => {

  const [editModal, setEditModal] = useState(false)
  const [companyName, setCompanyName] = useState('');
  const [jobName, setJobName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [source, setSource] = useState('');
  const [resume, setResume] = useState(null);
  const [resumeName, setResumeName] = useState('');
  const [errorMessages, setErrorMessages] = useState('');
 
  useEffect(() => {
    setCompanyName(job.companyName);
    setJobName(job.jobName);
    setDate(job.date);
    setDescription(job.description);
    setCoverLetter(job.coverLetter);
    setSource(job.source);
    setResumeName(job.resumeName);
  }, [job])

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'companyName') setCompanyName(value);
    if (name === 'jobName') setJobName(value);
    if (name === 'date') setDate(value);
    if (name === 'description') setDescription(value);
    if (name === 'coverLetter') setCoverLetter(value);
    if (name === 'source') setSource(value);
        
  }
  

  const handleResume = (file) => {
    setResume(file);
    setResumeName(file.name);
  };
    
  const handleUpdate = e => {
    e.preventDefault();
    let index = jobList.indexOf(job);
    jobList.splice(index, 1);
    if (!jobName){
        setErrorMessages('Job Name is required');
      } else if (!companyName){
        setErrorMessages('Company name is required');  
      } else if (!date){
        setErrorMessages('Date is required');
      } else if (!source){
        setErrorMessages('Source required');     
        } else if (!description){
        setErrorMessages('Description is required');
      } else {
    setJobList(
      [...jobList, 
        {jobName, companyName, date, description, coverLetter, resumeName, source
      
        }]);   
    setEditModal(false);
    setJobName('');
    setCompanyName('');
    setDate('');
    setDescription('');
    setCoverLetter('');
    setResume();
    setResumeName('');
    setSource('');
    setErrorMessages('');
  }}

  const options = [
    {label: 'LinkedIn', value: 'LinkedIn'},
    {label: 'Indeed', value: 'Indeed'},
    {label: 'Glassdoor', value: 'Glassdoor'},
    {label: 'Company Website', value: 'Company Website'},
    {label: 'Referral', value: 'Referral'},
    {label: 'Other', value: 'Other'},
  ]
 const handleSelectChange = (e) => {
    setSource(e.value);
  }


  return (
    <>    
    <button onClick={()=> setEditModal(true)} >
            <BiEdit className='edit__button'/>
    </button>
    {editModal ? (
    <div className='z-1000' >
    <div className='flex items-center 
        justify-center overflow-x-hidden 
        overflow-y-auto fixed inset-0 z-1000'>
        <div className='w-9/12 max-w-md border rounded-lg shadow-md relative flex flex-col add__new__application'>
          <div className='flex flex-row justify-between p-5 border'>
            <h3 className='h3__title'>Edit Job Application  <BsClipboardPlus/> </h3>
            <button
            className='px-1 text-gray-400 float-right text-3xl leading-none 
            font-semibold block' onClick={() => setEditModal(false)}
            > 
            <BsX/>
            </button>
          </div>
           <form className='p-6'>
                  <div>
                  <label className='tracking-wide block input__label' htmlFor='company-name'>Company</label>
                  <input 
                  className=' w-full py-3 border form__input'
                  id='company-name'
                  name='companyName'
                  value={companyName}
                  onChange={handleInput}
                  type='text'
                  placeholder='Company Name'
                  required
                  >
                  </input>
                  </div>
                  <div>
                  <label className='tracking-wide block input__label' htmlFor='job-name'>Role</label>
                  <input 
                  className=' w-full py-3 border form__input'
                  id='job-name'
                  type='text'
                  name='jobName'
                  value={jobName}
                  onChange={handleInput}
                  placeholder='Role Name'
                  required
                  >
                  </input>
                  </div>
                  <div>
                  <label className='tracking-wide block input__label' htmlFor='date'>Date</label>
                  <input 
                  className=' w-full py-3 border form__input'
                  id='date'
                  type='date'
                  name='date'
                  value={date}
                  onChange={handleInput}
                  placeholder='Date'
                  required
                  >
                  </input>
                  </div>
                  <div>
                  <label className='tracking-wide block input__label' htmlFor='source'>Source</label>
                  <Select
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderColor: state.isFocused ? 'grey' : 'pink',
                      backgroundColor: '#faced5',
                      color: 'lightgray',
                    }),
                  }}
                  className=' w-full border form__input '
                  placeholder='Source'
                  required
                  options={options}
                  onChange={handleSelectChange}
                  />
                  </div>
                  <div>
                    <label className='tracking-wide block input__label form__text__area' htmlFor='description'>Description</label>
                    <textarea
                    className=' w-full py-3 border form__input'
                    id='description'
                    type='text'
                    name='description'
                    value={description}
                    onChange={handleInput}
                    placeholder='Description'
                    required
                    >
                    </textarea>

                  </div>
                  <div>
                    <label className='tracking-wide block input__label form__text__area' htmlFor='cover-letter'>Cover Letter</label>
                    <textarea
                    className=' w-full py-3 border form__input'
                    id='cover-letter'
                    type='text'
                    name='coverLetter'
                    value={coverLetter}
                    onChange={handleInput}
                    placeholder='Cover Letter'
                    required
                    >
                    </textarea>

                  </div>
                  <div>
                  <label className='tracking-wide block input__label' htmlFor='date'>Resume</label>
                  <FileUploader
                  className=' w-full py-3 border form__input' 
                  id='resume'
                  name='resume'
                  value={resume}
                  accept=".pdf,.doc,.docx"
                  onFileSelect={handleResume}
                  onChange={handleInput}/>
                  </div>
                  <p>{errorMessages}</p>
                </form>
             <div className='flex flex-row justify-between p-5 border'>
              <button className='uppercase text-sm font-semibold 
              py-1 mx-1.5 pl-2 pr-2.5 rounded hover:opacity-70 add__button' 
              type='submit' onClick={handleUpdate}>
                Update
              </button>

            </div>
          </div>
        </div>
    </div>) : null}
    </>

  )
}

export default EditJobAplication