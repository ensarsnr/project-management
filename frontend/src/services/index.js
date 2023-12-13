import login from "./auth/login";
import register from "./auth/register";
import createProject from "./project/createProject";
import getProjects from "./project/getProjects";

const services = { login, register, createProject, getProjects };

export default services;
