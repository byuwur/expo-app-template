import axios from "axios";

const URL = "https://byuwur.net";

export const api = axios.create({
	baseURL: URL
});
