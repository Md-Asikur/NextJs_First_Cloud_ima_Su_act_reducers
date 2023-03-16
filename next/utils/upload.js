// import axios from 'axios';
// import React from 'react'

import axios from "axios";

// const upload = async(file) => {  //for single uplload
//     const formData = new FormData()
//        formData.append("file", file);
//     formData.append("upload_preset", "Chat__app2023_success");
//     const { data } = await axios.post("https://api.cloudinary.com/v1_1/asikur/image/upload", formData)
//     return {publicId:data?.public_id,url:data?.secure_url}
// }

// export default upload
export const uploadFile = async (images) => {
  let imgArr = [];
  for (const item of images) {  ///for multiple upload
    const formData = new FormData();
    formData.append("file", item);
    formData.append("upload_preset", "Chat__app2023_success");
    formData.append("cloud_name", "asikur");

    const {data} = await axios.post(
      "https://api.cloudinary.com/v1_1/asikur/image/upload",
      formData
    );

   
    imgArr.push({ public_id: data.public_id, url: data.secure_url });
  }
  return imgArr;
};