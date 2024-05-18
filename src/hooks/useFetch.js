import { useEffect, useState } from "react";

export const useFetch = (callback, get = [], post = []) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [refetch, setRefetch] = useState(false);

	useEffect(() => {
		if (refetch) {
			setRefetch(false);
			console.log("Refetched.");
			return;
		}
		setError(null);
		setLoading(true);
		console.log("Fetching.");
		(async () => {
			try {
				const response = await callback(get, post);
				setData((prev) => {
					[...prev, ...response];
				});
			} catch (e) {
				setError(e);
			} finally {
				setLoading(false);
			}
			return;
		})();
	}, [refetch]);

	return { data, loading, error, setRefetch };
};
