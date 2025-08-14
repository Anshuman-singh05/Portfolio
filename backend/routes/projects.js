import express from 'express';
import Project from '../models/Project.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// --- PUBLIC ROUTE ---
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// --- PROTECTED ROUTES ---

// @route   POST /api/projects
// @desc    Create a new project
router.post('/', authMiddleware, async (req, res) => {
  try {
    const newProject = new Project({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags,
      liveLink: req.body.liveLink,
      githubLink: req.body.githubLink,
      documentationLink: req.body.documentationLink, // <-- Nayi field yahan add ki
    });

    const project = await newProject.save();
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE /api/projects/:id
// @desc    Delete a project
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }

    await Project.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Project removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
