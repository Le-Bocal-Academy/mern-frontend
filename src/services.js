import axios from "axios";

const baseURL = "http://localhost:1337"; // api.myamazingwebsite.com

const base = axios.create({ baseURL });

const services = {
  getUsersList() {
    return base.get(`/users`).then((res) => res.data);
  },
  getUsersCount() {
    return base.get("/users/count").then((res) => res.data);
  },
  getUserByName(name) {
    return base.get(`/users/name/${name}`).then((res) => res.data);
  },
  getUserById(id) {
    return base.get(`/users/name/${id}`).then((res) => res.data);
  },
  deleteUserById(id) {
    return base.delete(`/users/${id}`).then((res) => res.data);
  },
  createUser(body) {
    return base.post("/users", body).then((res) => res.data);
  },
};

export default services;
