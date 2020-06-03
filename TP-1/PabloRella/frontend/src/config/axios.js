import axios from "axios";

const clienteAxios = axios.create({
  baseURL:
    "https://jobs.github.com/positions.json?description=python&full_time=true&location=sf",
});

export default clienteAxios;
