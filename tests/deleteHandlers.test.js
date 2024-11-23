// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"id": 5,
	"productsList": [
		{
		  "id": 5,
		  "quantity": 1
		}
	  ]
}
	
test('Status code should be 200', async () => {
	let actualStatusCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/5`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualStatusCode).toBe(200);
});

