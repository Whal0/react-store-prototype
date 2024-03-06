import Commerce from '@chec/commerce.js';

const commerceConfig = {
    axiosConfig: {
      headers: {
        'X-Chec-Agent': 'commerce.js/v2',
        'Chec-Version': '2021-09-29',
      },
    },
  };


export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, commerceConfig);
