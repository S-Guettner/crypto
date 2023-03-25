import axios from 'axios'

let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/historical', {
      headers: {
        'X-CMC_PRO_API_KEY': '0beb6987-0c7f-4d29-8b2e-c13b2e2b316d',
      },
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    console.log(json);
    resolve(json);
  }
});