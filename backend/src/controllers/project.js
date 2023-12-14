const authenticateUser = require("../middleware/auth.middleware");
const Project = require("../models/project");
const User = require("../models/user");

const createProject = async (req, res) => {
  const { name, desc } = req.body;

  try {
    // Projeyi oluşturan kullanıcının id bilgisini al
    const createdByUserId = req.user ? req.user.userId : null;

    if (!createdByUserId) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    // Yeni bir proje oluştur
    const project = new Project({
      name: name,
      desc: desc,
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

// Projeleri çekme
const getProjects = async (req, res) => {
  try {
    // Kullanıcının idsini alıyoruz

    const userId = req.user ? req.user.userId : null;

    if (!userId) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    // Kullanıcının projelerini bulmaya yarıyor
    const user = await User.findById(userId).populate("projects");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Kullanıcının projelerini döndürür
    const projects = user.projects;
    res.json({ projects });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Projeyi kaldırma işlemi
const deletedProject = async (req, res) => {
  const { projectId } = req.body;

  try {
    const userId = req.user ? req.user.userId : null;

    if (!userId) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const user = await User.findById(userId);

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Projeyi silen projenin admini mi diye kontrol ediliyor.
    if (project.admin.toString() !== userId) {
      return res
        .status(403)
        .json({ error: "Unauthorized: You are not the admin of this project" });
    }

    // Projeyi silmek için deleteOne fonksiyonu kullanıldı. Proje seçimi id göre belirleniyor.
    await Project.deleteOne({ _id: projectId });

    // Değişiklikler kaydedildi
    await user.save();

    res.json({ message: `Deleted project with ID ${projectId}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createProject, addUser, getProjects, deletedProject };
