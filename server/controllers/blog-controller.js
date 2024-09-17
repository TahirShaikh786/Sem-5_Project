const Blog = require("../models/blog-model");

const blogForm = async (req, res) => {
  try {
    const response = await req.body;
    await Blog.create(response);
    return res
      .status(200)
      .json({ message: "Blog Has been Created Succesfully" });
  } catch (error) {
    return res.status(500).json({ message: "Blog Creation Failed" });
  }
};

const blogFormData = async (req, res) => {
  try {
    const response = await Blog.find();
    if (!response) {
      res.status(404).json({ message: "No service Found" });
      return;
    }
    return res.status(200).json({ message: response });
  } catch (error) {
    return res.status(500).json({ message: "Error in fetching Data" });
  }
};

module.exports = { blogForm, blogFormData };
