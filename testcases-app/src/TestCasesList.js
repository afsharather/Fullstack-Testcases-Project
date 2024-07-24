// src/TestCasesList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TestCasesList() {
  const [testcases, setTestcases] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/testcases')
      .then(response => {
        setTestcases(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the test cases!', error);
      });
  }, []);

  return (
    <div>
      <h1>Test Cases</h1>
      <ul>
        {testcases.map(testcase => (
          <li key={testcase.id}>
            <strong>{testcase.name}</strong> - {testcase.estimate_time} - {testcase.module} - {testcase.priority} - {testcase.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestCasesList;
