import axiosClient from "./axiosClient";

const contactAPI = {
  getContact: () => {
    return axiosClient.get("/contact");
  },
  updateContact: (data) => {
    return axiosClient.put("/contact", data);
  },
};

export default contactAPI;
