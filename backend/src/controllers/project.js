const authenticateUser = require("../middleware/auth.middleware");
const Project = require("../models/project");
const User = require("../models/user");

const createProject = async (req, res) => {
  const { name } = req.body;

  try {
    // Projeyi oluşturan kullanıcının id bilgisini al
    const createdByUserId = req.user ? req.user.userId : null;

    if (!createdByUserId) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    // Yeni bir proje oluştur
    const project = new Project({
      name,
      admin: createdByUserId,
    });

    // Projeyi kaydet
    await project.save();

    // Kullanıcının projelerini güncelle
    const user = await User.findById(createdByUserId);

    // addProject user model sayfasında ki fonskiyondan geliyor.
    user.addProject(project._id);
    await user.save();

    res.json({ message: `Created ${name} project` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Projeye adam ekleme
const addUser = async (req, res) => {
  const { username, projectId } = req.body;

  try {
    // Projeyi db'de bulma
    const project = await Project.findById(projectId);

    // Proje yoksa burası döndürülüyor
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Kullanıcıyı db'de bulma
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Projeye kullanıcıyı ekle
    project.users.push(user._id);
    await project.save();

    res.json({ message: `Added ${username} to the project` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createProject, addUser };
