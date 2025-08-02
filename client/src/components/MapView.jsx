import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MapView() {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/issues').then(res => setIssues(res.data));
  }, []);

  return (
    <MapContainer center={[28.6139, 77.2090]} zoom={12} style={{ height: '500px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {issues.map(issue => {
        const [lat, lon] = issue.location?.split(',').map(Number);
        if (!lat || !lon) return null;
        return (
          <Marker position={[lat, lon]} key={issue._id}>
            <Popup>
              <strong>{issue.category}</strong><br />
              {issue.description}<br />
              <em>Status: {issue.status}</em>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
export default MapView;