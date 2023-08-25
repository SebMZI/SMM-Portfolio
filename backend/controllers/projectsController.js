const Project = require("../model/Project");

const getAllProjects = async (req, res) => {
  try {
    const result = await Project.find();
    if (!result) return res.status(404).json({ message: "No projects found!" });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

const createNewProject = async (req, res) => {
  if (
    !req?.body?.title ||
    !req?.body?.desc ||
    !req?.body?.image ||
    !req?.body?.website ||
    !req?.body?.github ||
    !req?.body?.content ||
    !req?.body?.techused
  ) {
    return res.status(400).json({
      message: "Title, desc, image, links, content and techused are required!",
    });
  }

  try {
    const result = await Project.create({
      title: req.body.title,
      shortdesc: req.body.desc,
      image: req.body.image,
      linkwebsite: req.body.website,
      linkgithub: req.body.github,
      techused: req.body.techused,
      content: req.body.content,
    });
    res.status(201).json({ message: "Project has been created successfully!" });
  } catch (err) {
    console.log(err);
  }
};

const getProject = async (req, res) => {
  if (!req.params.id)
    return res.status(400).json({ message: "ID parameter is required !" });
  try {
    const result = await Project.findOne({ _id: req.params.id }).exec();

    if (!result)
      return res.status(404).json({
        message: `No project with id: ${req.params.id} has been found!`,
      });

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
};

const deleteProject = async (req, res) => {
  if (!req.params.id)
    return res.status(400).json({ message: "ID parameter is required!" });

  try {
    const result = await Project.deleteOne({ _id: req.params.id });
    res.status(204).json({
      message: `Project with ID: ${req.params.id} has been successfully deleted!`,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateProject = async (req, res) => {
  if (!req.params.id)
    return res.status(400).json({ message: "ID parameter is required!" });

  const projectFound = await Project.findOne({ _id: req.params.id }).exec();
  if (!projectFound)
    return res
      .status(204)
      .json({ message: `No project found with ID : ${req.params.id} !` });

  if (req.body?.title) projectFound.title = req.body.title;
  if (req.body?.shortdesc) projectFound.shortdesc = req.body.desc;
  if (req.body?.image) projectFound.image = req.body.image;
  if (req.body?.linkwebsite) projectFound.linkwebsite = req.body.website;
  if (req.body?.linkgithub) projectFound.linkgithub = req.body.github;
  if (req.body?.techused) projectFound.techused = req.body.techused;
  if (req.body?.content) projectFound.content = req.body.content;
  const result = await projectFound.save();
  res.status(200).json(result);
};

module.exports = {
  getAllProjects,
  getProject,
  deleteProject,
  createNewProject,
  updateProject,
};
