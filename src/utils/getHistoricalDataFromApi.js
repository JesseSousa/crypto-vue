import axios from 'axios';

export default async (coinId, date) => {
  const API_URL = `https://api.coingecko.com/api/v3/coins/${coinId}/history`;

  const { data } = await axios.get(API_URL, {
    params: {
      date,
      localization: false,
    },
  });

  return {
    price: data.market_data.current_price.usd || '',
    date: date.split('-').join('/'),
    marketCap: data.market_data.market_cap.usd || '',
  };
};
