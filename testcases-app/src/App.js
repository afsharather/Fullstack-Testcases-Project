import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [testcases, setTestcases] = useState([]);
  const [newTestcase, setNewTestcase] = useState({
    name: '',
    estimate_time: '',
    module: '',
    priority: '',
    status: 'Select'
  });

  useEffect(() => {
    axios.get('http://localhost:5000/testcases')
      .then(response => setTestcases(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const updateStatus = (id, status) => {
    axios.put(`http://localhost:5000/testcases/${id}`, { status })
      .then(() => {
        setTestcases(prevState => prevState.map(tc => 
          tc.id === id ? { ...tc, status } : tc
        ));
      })
      .catch(error => console.error('Error updating status:', error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTestcase(prevState => ({ ...prevState, [name]: value }));
  };

  const addTestcase = () => {
    axios.put('http://localhost:5000/testcases', newTestcase)
      .then(response => {
        //setTestcases(prevState => [...prevState, response.data]);
        setNewTestcase({
          name: '',
          estimate_time: '',
          module: '',
          priority: '',
          status: 'Select'
        });
      })
      .catch(error => console.error('Error adding testcase:', error));
  };

  return (
    <div className="App">
      <div className="search-bar">
        <input type="text" placeholder="Search issue.." />
        <button>
          <svg height="32" width="32" viewBox="0 0 24 24">
            <path d="M10 2a8 8 0 0 1 8 8 8 8 0 0 1-1.67 4.88l4.72 4.72-1.42 1.42-4.72-4.72A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" />
          </svg>
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Test Case Name</th>
            <th>Estimate Time (In Minutes)</th>
            <th>Module</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {testcases.map(tc => (
            <tr key={tc[0]}>
              <td>{tc[1]}</td>
              <td>{tc[2]}</td>
              <td>{tc[3]}</td>
              <td>{tc[4]}</td>
              <td>
                <select value={tc[4]} onChange={e => updateStatus(tc[0], e.target.value)}>
                  <option value="Select">Select</option>
                  <option value="PASS">PASS</option>
                  <option value="FAIL">FAIL</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Add New Test Case</h2>
        <input
          type="text"
          name="name"
          value={newTestcase.name}
          onChange={handleChange}
          placeholder="Test Case Name"
        /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <input
          type="number"
          name="estimate_time"
          value={newTestcase.estimate_time}
          onChange={handleChange}
          placeholder="Estimate Time"
        /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        <input
          type="text"
          name="module"
          value={newTestcase.module}
          onChange={handleChange}
          placeholder="Module"
        /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        <input
          type="text"
          name="priority"
          value={newTestcase.priority}
          onChange={handleChange}
          placeholder="Priority"
        /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <select
          name="status"
          value={newTestcase.status}
          onChange={handleChange}
        >
          <option value="Select">Select Status</option>
          <option value="PASS">PASS</option>
          <option value="FAIL">FAIL</option>
        </select><br></br><br></br>
        <button onClick={addTestcase}>Add Test Case</button>
      </div>
    </div>
  );
}

export default App;
