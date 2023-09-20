import axios from "axios";

const api = axios.create({
  baseURL: "https://jasons-backend-api.onrender.com",
});

export const getAbout = () => {
  return api.get("/about").then((result) => {
    return result.data.about;
  });
};

export const getProjects = () => {
  return api.get("/projects").then((result) => {
    return result.data.projects;
  });
};

export const getProjectByProjectId = (id) => {
  return api.get(`/projects/${id}`).then((result) => {
    return result.data.project;
  });
};

export const getTechStack = () => {
  return api.get("/techStack").then((result) => {
    return result.data.techStack;
  });
};

export const postMessage = (contactInfo) => {
  return api.post("/contact", contactInfo).then((result) => {
    console.log(result.data);
    return result.data;
  });
};
