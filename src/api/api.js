import { api } from "./_config.api";

export const API = {
	// Name: params = GET, data = POST
	Generic: async function (url = "/", params = { _GET: true }, data = { _POST: true }) {
		const response = await api.request({
			url,
			method: "POST",
			params,
			data
		});
		return response;
	}
};
