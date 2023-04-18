import React, { useState, useEffect } from 'react';

function SubcontractorManagementTable(props) {
  const [subcontractors, setSubcontractors] = useState([]);

  useEffect(() => {
    fetch('/api/subcontractors')
      .then(response => response.json())
      .then(data => setSubcontractors(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Subcontractor</th>
          <th>Trade Class</th>
          <th>Contact Information</th>
          <th>Contract Status</th>
        </tr>
      </thead>
      <tbody>
        {subcontractors.map(subcontractor => (
          <tr key={subcontractor.id}>
            <td>{subcontractor.name}</td>
            <td>{subcontractor.tradeClass}</td>
            <td>{subcontractor.contactInfo}</td>
            <td>{subcontractor.contractStatus}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SubcontractorManagementTable;
