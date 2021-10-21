import axios from 'axios';

const PRODUCT_URL = 'http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json';

export const getProductList = async() => {
  try {
    const productUrl = `${PRODUCT_URL}`;
    const res = await axios.get(productUrl);
    if (!(res && res.data)) {
      throw new Error('No data available');
    }
    console.log('res', res);
    return res.data;
  } catch (e) {
    console.error('error', e);
    throw e;
  }
}