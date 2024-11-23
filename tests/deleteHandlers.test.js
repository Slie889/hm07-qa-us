// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"id": 3,
	"name": "My Set"
	}
	
test('Status code should be 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2/products`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualStatusCode).toBe(200);
});

test('Response body should contain ......', async () => {
    let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2/products`, {
			method: 'DELETE',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody["name"]).toBe("For Picnic");
});