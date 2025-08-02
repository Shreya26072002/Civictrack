import { useState } from 'react';
import axios from 'axios';

function UserReportForm() {
  const [form, setForm] = useState({ category: '', description: '', contactInfo: '', location: '' });
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach(key => formData.append(key, form[key]));
    if (image) formData.append('image', image);
    await axios.post('http://localhost:5000/api/issues', formData);
    alert('Issue Submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={e => setForm({ ...form, category: e.target.value })} required>
        <option>Select Category</option>
        <option value="road">Road</option>
        <option value="sanitation">Sanitation</option>
      </select>
      <input type="text" placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
      <input type="text" placeholder="Contact Info" onChange={e => setForm({ ...form, contactInfo: e.target.value })} />
      <input type="text" placeholder="Location (lat,lon)" onChange={e => setForm({ ...form, location: e.target.value })} />
      <input type="file" onChange={e => setImage(e.target.files[0])} />
      <button type="submit">Submit</button>
    </form>
  );
}
export default UserReportForm;