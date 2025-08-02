import { useState } from 'react';
import UserReportForm from './components/UserReportForm';
import AdminDashboard from './components/AdminDashboard';
import StatusViewer from './components/StatusViewer';
import MapView from './components/MapView';

function App() {
  const [view, setView] = useState('user');
  return (
    <div>
      <h1>CivicTrack</h1>
      <button onClick={() => setView('user')}>Report Issue</button>
      <button onClick={() => setView('status')}>Check Status</button>
      <button onClick={() => setView('admin')}>Admin</button>
      <button onClick={() => setView('map')}>Map</button>

      {view === 'user' && <UserReportForm />}
      {view === 'status' && <StatusViewer />}
      {view === 'admin' && <AdminDashboard />}
      {view === 'map' && <MapView />}
    </div>
  );
}
export default App;
import { useState } from 'react';
import UserReportForm from './components/UserReportForm';
import AdminDashboard from './components/AdminDashboard';
import StatusViewer from './components/StatusViewer';
import MapView from './components/MapView';

function App() {
  const [view, setView] = useState('user');
  return (
    <div>
      <h1>CivicTrack</h1>
      <button onClick={() => setView('user')}>Report Issue</button>
      <button onClick={() => setView('status')}>Check Status</button>
      <button onClick={() => setView('admin')}>Admin</button>
      <button onClick={() => setView('map')}>Map</button>

      {view === 'user' && <UserReportForm />}
      {view === 'status' && <StatusViewer />}
      {view === 'admin' && <AdminDashboard />}
      {view === 'map' && <MapView />}
    </div>
  );
}
export default App;