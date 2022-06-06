import axios from 'axios';

export default async (coinId) => {
  const API_BASE_URL = 'https://api.coingecko.com/api/v3/coins/';
  const OPTIONS = {
    params: {
      tickers: false,
      localization: false,
    },
  };

  try {
    const { data } = await axios.get(API_BASE_URL + coinId, OPTIONS);

    return {
      name: data.name,
      symbol: data.symbol,
      image: data.image.small,
      description: data.description.en,
      price: data.market_data.current_price.usd,
      priceChangePercentage24h:
        data.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1),
      marketCapRank: data.market_cap_rank,
      marketCap: data.market_data.market_cap.usd,
      circulatingSupply: data.market_data.circulating_supply,
      high24h: data.market_data.high_24h.usd,
      low24h: data.market_data.low_24h.usd,
      totalVolume: data.market_data.total_volume.usd,
    };
  } catch (error) {
    console.error(error.message);
  }
};
