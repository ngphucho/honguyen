import axiosClient from "./axiosClient";

const contactAPI = {
  getContact: () => {
    return axiosClient.get("/contact");
  },
};

export default contactAPI;