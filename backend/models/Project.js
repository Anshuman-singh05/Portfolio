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
    type: [String],
  },
  liveLink: {
    type: String,
  },
  githubLink: {
    type: String,
  },
  // --- Nayi field yahan add ki ---
  documentationLink: {
    type: String, 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model('Project', ProjectSchema);
export default Project;
