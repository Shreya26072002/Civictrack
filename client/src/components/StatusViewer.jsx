import { useState } from 'react';
import axios from 'axios';

function StatusViewer() {
  const [id, setId] = useState('');
  const [issue, setIssue] = useState(null);

  const fetchStatus = async () => {
    const res = await axios.get(http://localhost:5000/api/issues/${id});
    setIssue(res.data);
  };

  return (
    <div>
      <input type="text" onChange={e => setId(e.target.value)} placeholder="Enter Issue ID" />
      <button onClick={fetchStatus}>Check Status</button>
      {issue && <p>Status: {issue.status}</p>}
    </div>
  );
}
export default StatusViewer;