export function fetchData(path) {
	return fetch(path)
		.then((res) => {
			if(res.status >= 400) {
				console.log(res);
			}

			return res.json();
		})
		.then((data) => {
			return data;
		})
		.catch((err) => {
			console.log(err);
		});
}