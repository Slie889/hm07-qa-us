// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"id": 2,
	"name": "For movies and series",
	"userId": 2,
	"productsList": [
		{
		  "id": 7,
		  "quantity": 1
		}
	  ]
}

test('Status code should be 200', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
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
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseBody.name).toBe("For movies and series");
});