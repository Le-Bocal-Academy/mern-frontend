import axios from "axios";

const baseURL = "http://localhost:1337"; // api.myamazingwebsite.com

const base = axios.create({ baseURL });

const services = {
  login(body) {
    // email, password
    return base.post("/auth/login", body).then((res) => res.data);
  },
  signup(body) {
    // email, password, confirmPassword
    return base.post("/auth/signup", body);
  },
  getFruitsList() {
    const token = localStorage.getItem("jwt");
    return base
      .get(`/fruits`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => res.data);
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
    const token = localStorage.getItem("jwt");
    return base
      .delete(`/fruits/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
  },
  createFruit(body) {
    const token = localStorage.getItem("jwt");
    return base
      .post("/fruits", body, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data);
  },
};

export default services;
