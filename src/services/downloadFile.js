import axios from "axios";
import fileDownload from "js-file-download";

const downloadFile = (url, filename) => {
  axios
    .get(url, {
      responseType: "blob",
    })
    .then((res) => {
      fileDownload(res.data, filename);
    });
};

export default downloadFile;
