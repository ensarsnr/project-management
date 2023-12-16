import api from "../api";

const deleteProject = async (projectId) => {
  try {
    const response = await api.post("/project/delete-project", {
      projectId: projectId,
    });
    return response;
  } catch (error) {
    console.log("Project delete error: ", error);
  }
};

export default deleteProject;
