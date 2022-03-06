import axiosClient from "./axiosClient";

const aboutAPI = {
  getAbout: () => {
    return axiosClient.get("/about");
  },
};

export default aboutAPI;