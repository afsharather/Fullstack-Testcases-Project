// src/AddTestCase.js
import React, { useState } from 'react';
import axios from 'axios';

function AddTestCase() {
  const [name, setName] = useState('');
  const [estimateTime, setEstimateTime] = useState('');
  const [module, setModule] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/testcases', {
      name,
      estimate_time: estimateTime,
      module,
      priority,
      status
    })
    .then(response => {
      alert('Test case added successfully!');
      setName('');
      setEstimateTime('');
      setModule('');
      setPriority('');
      setStatus('');
    })
    .catch(error => {
      console.error('There was an error adding the test case!', error);
    });
  };

  return (
    <div>
      <h1>Add Test Case</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Estimate Time:
          <input type="text" value={estimateTime} onChange={(e) => setEstimateTime(e.target.value)} />
        </label>
        <label>
          Module:
          <input type="text" value={module} onChange={(e) => setModule(e.target.value)} />
        </label>
        <label>
          Priority:
          <input type="text" value={priority} onChange={(e) => setPriority(e.target.value)} />
        </label>
        <label>
          Status:
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
        </label>
        <button type="submit">Add Test Case</button>
      </form>
    </div>
  );
}

export default AddTestCase;
