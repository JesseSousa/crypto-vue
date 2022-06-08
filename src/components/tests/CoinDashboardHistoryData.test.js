import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import CoinDashboardHistoryDataVue from '../coin-dashboard/CoinDashboardHistoryData.vue';

describe('CoinDashboardHistoryData', () => {
  test('it renders fallback text when it has no data', () => {
    const wrapper = mount(CoinDashboardHistoryDataVue, {
      props: {
        marketCap: '',
        price: '',
        date: '11-11-2020',
      },
    });

    const historyFallbackText = wrapper.find(
      '[data-test="historyFallbackText"]'
    );

    expect(historyFallbackText.exists()).toBe(true);
  });

  test('it renders fallback text when it has not enough data', () => {
    const wrapper = mount(CoinDashboardHistoryDataVue, {
      props: {
        marketCap: '2000',
        price: '',
        date: '11-11-2020',
      },
    });

    const historyFallbackText = wrapper.find(
      '[data-test="historyFallbackText"]'
    );

    expect(historyFallbackText.exists()).toBe(true);
  });

  test('it renders data when it has all props', () => {
    const wrapper = mount(CoinDashboardHistoryDataVue, {
      props: {
        marketCap: '2000',
        price: '200',
        date: '11-11-2020',
      },
    });

    const historyData = wrapper.find('[data-test="historyData"]');

    expect(historyData.exists()).toBe(true);
  });
});
