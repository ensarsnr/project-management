import login from "./auth/login";
import register from "./auth/register";
import createProject from "./project/createProject";
import getProjects from "./project/getProjects";
import deleteProject from "./project/deleteProject";

const services = { login, register, createProject, getProjects, deleteProject };

export default services;
