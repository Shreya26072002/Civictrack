import { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/issues').then(res => setIssues(res.data));
  }, []);

  const updateStatus = async (id, status) => {
    await axios.patch(http://localhost:5000/api/issues/${id}/status, { status });
    const updated = await axios.get('http://localhost:5000/api/issues');
    setIssues(updated.data);
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      {issues.map(issue => (
        <div key={issue._id}>
          <p>{issue.category} - {issue.status}</p>
          <button onClick={() => updateStatus(issue._id, 'in progress')}>In Progress</button>
          <button onClick={() => updateStatus(issue._id, 'resolved')}>Resolved</button>
        </div>
      ))}
    </div>
  );
}
export default AdminDashboard;