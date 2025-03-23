import React from 'react';

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div className="job-card" key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <button>Apply</button>
        </div>
      ))}
      
    </div>
  );
};

export default JobList;
