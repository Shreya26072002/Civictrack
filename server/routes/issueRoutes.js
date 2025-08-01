import express from 'express';
import multer from 'multer';
import Issue from '../models/Issue.js';
import cloudinary from '../config/cloudinary.js';
import fs from 'fs';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('image'), async (req, res) => {
  const { category, description, contactInfo, location } = req.body;
  let imageUrl = '';

  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path);
    imageUrl = result.secure_url;
    fs.unlinkSync(req.file.path); // Clean up uploaded file
  }

  const issue = new Issue({ category, description, contactInfo, location, image: imageUrl });
  await issue.save();
  res.status(201).json(issue);
});

router.get('/', async (req, res) => {
  const issues = await Issue.find().sort({ createdAt: -1 });
  res.json(issues);
});

router.get('/:id', async (req, res) => {
  const issue = await Issue.findById(req.params.id);
  res.json(issue);
});

router.patch('/:id/status', async (req, res) => {
  const issue = await Issue.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(issue);
});

export default router;