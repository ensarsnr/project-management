import api from "../api";

const getProjects = async () => {
  try {
    const response = await api.get("/project/get-projects");

    return response;
  } catch (error) {
    console.log("Get Project: ", error);
  }
};

export default getProjects;
