import mongoose from 'mongoose';

const issueSchema = new mongoose.Schema({
  category: String,
  description: String,
  contactInfo: String,
  location: String,
  image: String,
  status: { type: String, default: 'submitted' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Issue', issueSchema);
