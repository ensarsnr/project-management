import api from "../api";

const createProject = async (projectName, desc) => {
  try {
    const response = await api.post("/project/create-project", {
      name: projectName,
      desc: desc,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

export default createProject;
