import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  tags: {
    type: [String], // Array of strings
  },
  liveLink: {
    type: String,
  },
  githubLink: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically aaj ki date daal dega
  },
});

const Project = mongoose.model('Project', ProjectSchema);
export default Project;