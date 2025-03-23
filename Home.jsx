import React, { useState, useEffect } from 'react';
import JobList from './JobList';
import axios from 'axios';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');



  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get(`https://jobdataapi.com/api/jobs/?title=python/jobs?search=${search}`);

      setJobs(response.data);
    };

    fetchJobs();
  }, [search]);

  return (


    <div className='home'>
      <div className='home1'>
        <img src='https://plus.unsplash.com/premium_photo-1673796983667-df59f16df984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGpvYiUyMHNlYXJjaHxlbnwwfHwwfHx8MA%3D%3D' alt='img not found'/>
      </div>
      <div className='home2'>
        <h1>Job Search</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for jobs..."
        />
        <JobList jobs={jobs} />
      </div>

    </div>
  );
};

export default Home;
