import axios from "axios";

const baseURL = "http://localhost:1337"; // api.myamazingwebsite.com

const base = axios.create({ baseURL });

const services = {
  login(body) {
    // email, password
    return base.post("/auth/login", body);
  },
  signup(body) {
    // email, password, confirmPassword
    return base.post("/auth/signup", body);
  },
  getFruitsList() {
    return base.get(`/fruits`).then((res) => res.data);
  },
  getFruitsCount() {
    return base.get("/Fruits/count").then((res) => res.data);
  },
  getFruitByName(name) {
    return base.get(`/fruits/name/${name}`).then((res) => res.data);
  },
  getFruitById(id) {
    return base.get(`/fruits/name/${id}`).then((res) => res.data);
  },
  deleteFruitById(id) {
    return base.delete(`/fruits/${id}`).then((res) => res.data);
  },
  createFruit(body) {
    return base.post("/fruits", body).then((res) => res.data);
  },
};

export default services;
