import axiosClient from "./axiosClient";

const projectAPI = {
  getProject: () => {
    return axiosClient.get("/project");
  },
};

export default projectAPI;
