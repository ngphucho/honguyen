import axiosClient from "./axiosClient";

const menuAPI = {
  getMenu: () => {
    return axiosClient.get("/menu");
  },
};

export default menuAPI;
