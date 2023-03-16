import { createProduct } from "@/actions/ProductAction";
import upload, { uploadFile } from "@/utils/upload";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Create = () => {
  const dispatch = useDispatch();
//  const [title, setTitle] = useState("");
//  const [desc, setDesc] = useState("");
   const initialState = {
     title: "",
     desc:""
   };
  const [product, setProduct] = useState(initialState);
   const [images, setImages] = useState([]);
  const { title, desc } = product;

   const handleChangeInput = (e) => {
     const { name, value } = e.target;
     setProduct({ ...product, [name]: value });
     dispatch({ type: "NOTIFY", payload: {} });
   };
 const handleUploadInput = (e) => {
   dispatch({ type: "NOTIFY", payload: {} });
   let newImages = [];
   let num = 0;
   let err = "";
   const files = [...e.target.files];

   if (files.length === 0)
     return dispatch({ type: "NOTIFY", payload: { error: "Files does not exist." } });

   files.forEach((file) => {
     if (file.size > 1024 * 1024) return (err = "The largest image size is 1mb");

     if (file.type !== "image/jpeg" && file.type !== "image/png")
       return (err = "Image format is incorrect.");

     num += 1;
     if (num <= 20) newImages.push(file); 
     return newImages;
   });

   if (err) dispatch({ type: "NOTIFY", payload: { error: err } });

   const imgCount = images.length;
   if (imgCount + newImages.length > 20)
     return dispatch({ type: "NOTIFY", payload: { error: "Select up to 20 images." } });
   setImages([...images, ...newImages]);
 };

  const submitData = async (e) => {
    e.preventDefault();
  let media = [];
  const imgNewURL = images.filter((img) => !img.url);
  const imgOldURL = images.filter((img) => img.url);

  if (imgNewURL.length > 0) media = await uploadFile(imgNewURL);
   dispatch(createProduct({...product,images: [...imgOldURL, ...media]}));
    };
 
  return (
    <>
      <form
        onSubmit={submitData}
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <label for="title" style={{ display: "block" }}>
          Title
        </label>
        <input
          type="text"
          // onChange={(e) => setTitle(e.target.value)}
          onChange={handleChangeInput}
          value={title}
          name="title"
          style={{ border: "2px solid #000", display: "block" }}
        />
        <label for="title" style={{ display: "block" }}>
          Desc
        </label>
        <input
          type="text"
          // onChange={(e) => setDesc(e.target.value)}
          onChange={handleChangeInput}
          value={desc}
          name="desc"
          style={{ border: "2px solid #000", display: "block" }}
        />
        <div className="custom-file border rounded">
          <input
            type="file"
            className="custom-file-input"
            onChange={handleUploadInput}
            multiple
            accept="image/*"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* <div>
        {links?.length > 0 &&
          links.map((e, i) => {
            return (
              <div key={i}>
                <p>{e.publicId}</p>
                <p>{e.url}</p>
                <img src={e.url} alt="Images" />
              </div>
            );
          })}
      </div> */}
    </>
  );
};

export default Create;
