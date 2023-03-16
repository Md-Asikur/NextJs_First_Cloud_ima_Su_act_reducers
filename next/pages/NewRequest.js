import axios from "axios";

const NewRequest = axios.create({
  baseURL: "http://localhost:3000/api",
 
});

export default NewRequest;
